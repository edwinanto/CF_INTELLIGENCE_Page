import { NextRequest, NextResponse } from "next/server";
import { validateContact } from "@/lib/contact-validation";
export const runtime = "nodejs";
// Per-process protection; configure shared rate limiting at the ingress for multi-instance deployments.
const recent = new Map<string, number[]>();
export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  let allowedOrigin = false;
  try {
    const source = new URL(origin || "");
    allowedOrigin = process.env.SITE_URL
      ? source.origin === new URL(process.env.SITE_URL).origin
      : ["http:", "https:"].includes(source.protocol) &&
        source.host === request.headers.get("host");
  } catch {
    /* Missing or malformed origins are rejected. */
  }
  if (!allowedOrigin)
    return NextResponse.json(
      { message: "Origen de solicitud no permitido." },
      { status: 403 },
    );
  if (!request.headers.get("content-type")?.includes("application/json"))
    return NextResponse.json(
      { message: "Formato de solicitud no válido." },
      { status: 415 },
    );
  const reader = request.body?.getReader();
  if (!reader)
    return NextResponse.json(
      { message: "La consulta está vacía." },
      { status: 400 },
    );
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > 16000) {
      await reader.cancel();
      return NextResponse.json(
        { message: "La consulta es demasiado extensa." },
        { status: 413 },
      );
    }
    chunks.push(value);
  }
  let input: unknown;
  try {
    input = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    return NextResponse.json(
      { message: "No pudimos leer la consulta." },
      { status: 400 },
    );
  }
  const result = validateContact(input);
  if (!result.data)
    return NextResponse.json(
      { message: "Revisa los campos indicados.", errors: result.errors },
      { status: 422 },
    );
  if (result.data.website)
    return NextResponse.json(
      { message: "No se pudo procesar la solicitud." },
      { status: 400 },
    );
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook || process.env.CONTACT_PRIVACY_READY !== "true")
    return NextResponse.json(
      {
        message:
          "Nuestro canal de consultas aún no está habilitado. Inténtalo más adelante.",
      },
      { status: 503 },
    );
  let destination: URL;
  try {
    destination = new URL(webhook);
    if (destination.protocol !== "https:") throw new Error("Invalid webhook");
  } catch {
    return NextResponse.json(
      { message: "El canal de consultas no está disponible." },
      { status: 503 },
    );
  }
  const now = Date.now();
  for (const [key, entries] of recent)
    if (entries.every((t) => now - t >= 600000)) recent.delete(key);
  const key = result.data.email.toLowerCase();
  const attempts = (recent.get(key) || []).filter((t) => now - t < 600000);
  if (attempts.length >= 3 || recent.size > 2000)
    return NextResponse.json(
      { message: "Espera unos minutos antes de enviar otra consulta." },
      { status: 429, headers: { "Retry-After": "600" } },
    );
  recent.set(key, [...attempts, now]);
  try {
    const { name, company, role, email, phone, service, message, consent } =
      result.data;
    const data = {
      name,
      company,
      role,
      email,
      phone,
      service,
      message,
      consent,
    };
    const response = await fetch(destination, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.CONTACT_WEBHOOK_TOKEN
          ? { Authorization: `Bearer ${process.env.CONTACT_WEBHOOK_TOKEN}` }
          : {}),
      },
      body: JSON.stringify({
        ...data,
        source: "cf-intelligence-web",
        submittedAt: new Date().toISOString(),
      }),
      signal: AbortSignal.timeout(10000),
      redirect: "error",
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Delivery failed");
    return NextResponse.json({ message: "Consulta recibida." });
  } catch {
    return NextResponse.json(
      {
        message:
          "No pudimos confirmar la recepción. Inténtalo nuevamente en unos minutos.",
      },
      { status: 502 },
    );
  }
}
