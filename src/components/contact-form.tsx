"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  contactServices,
  validateContact,
  type ContactErrors,
} from "@/lib/contact-validation";
import { Icon } from "./ui";
export function ContactForm({
  initialService,
  available,
}: {
  initialService: string;
  available: boolean;
}) {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [notice, setNotice] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending" || !available) return;
    const form = new FormData(event.currentTarget);
    const input = {
      ...Object.fromEntries(form),
      consent: form.get("consent") === "on",
    };
    const result = validateContact(input);
    setErrors(result.errors);
    if (!result.data) {
      setStatus("error");
      setNotice("Revisa los campos indicados.");
      const name = Object.keys(result.errors)[0];
      formRef.current?.querySelector<HTMLElement>(`[name="${name}"]`)?.focus();
      return;
    }
    setStatus("sending");
    setNotice("Enviando tu consulta…");
    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
        signal: AbortSignal.timeout(15000),
      });
      const payload = await response.json();
      if (!response.ok) {
        setErrors(payload.errors || {});
        throw new Error(
          payload.message || "No se pudo enviar. Inténtalo nuevamente.",
        );
      }
      setStatus("success");
      setNotice(
        "Tu consulta fue recibida. Te responderemos al correo que indicaste.",
      );
      formRef.current?.reset();
    } catch (error) {
      setStatus("error");
      setNotice(
        error instanceof Error && error.name !== "TimeoutError"
          ? error.message
          : "No pudimos confirmar la recepción. Inténtalo nuevamente en unos minutos.",
      );
    }
  }
  const field = (
    name: "name" | "company" | "role" | "email" | "phone",
    label: string,
    placeholder: string,
    required = true,
    type = "text",
    autoComplete = "",
  ) => (
    <label className="form-field" htmlFor={name}>
      <span>
        {label}
        {!required && <small> Opcional</small>}
      </span>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        type={type}
        autoComplete={autoComplete}
        maxLength={name === "email" ? 254 : name === "phone" ? 30 : 160}
        aria-invalid={!!errors[name]}
        aria-describedby={errors[name] ? `${name}-error` : undefined}
      />
      {errors[name] && (
        <span className="field-error" id={`${name}-error`}>
          {errors[name]}
        </span>
      )}
    </label>
  );
  return (
    <form ref={formRef} onSubmit={submit} noValidate className="contact-form">
      <h2>Cuéntanos qué tienes en mente.</h2>
      <p>No necesitas tener todas las respuestas. Empecemos por el problema.</p>
      <div className="form-grid">
        {field("name", "Nombre completo", "Tu nombre", true, "text", "name")}
        {field(
          "company",
          "Empresa",
          "Nombre de tu empresa",
          true,
          "text",
          "organization",
        )}
        {field(
          "role",
          "Cargo",
          "Tu rol en la empresa",
          false,
          "text",
          "organization-title",
        )}
        {field(
          "email",
          "Correo electrónico",
          "nombre@empresa.com",
          true,
          "email",
          "email",
        )}
        {field("phone", "Teléfono", "+51", false, "tel", "tel")}
        <label className="form-field" htmlFor="service">
          <span>Servicio de interés</span>
          <select
            id="service"
            name="service"
            defaultValue={
              contactServices.includes(initialService) ? initialService : ""
            }
            required
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="" disabled>
              Selecciona una opción
            </option>
            {contactServices.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          {errors.service && (
            <span id="service-error" className="field-error">
              {errors.service}
            </span>
          )}
        </label>
      </div>
      <label className="form-field" htmlFor="message">
        <span>¿Qué necesitas resolver?</span>
        <textarea
          name="message"
          id="message"
          rows={5}
          minLength={20}
          maxLength={3000}
          placeholder="Cuéntanos sobre tu proceso, idea o proyecto…"
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <span id="message-error" className="field-error">
            {errors.message}
          </span>
        )}
      </label>
      <div className="honeypot" aria-hidden="true">
        <label>
          Sitio web
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <label className="consent">
        <input
          type="checkbox"
          name="consent"
          aria-invalid={!!errors.consent}
          aria-describedby={errors.consent ? "consent-error" : undefined}
        />
        <span>
          Autorizo el uso de mis datos para responder esta consulta. He leído la{" "}
          <Link href="/privacidad">información de privacidad</Link>.
        </span>
      </label>
      {errors.consent && (
        <span id="consent-error" className="field-error">
          {errors.consent}
        </span>
      )}
      {!available && (
        <div className="form-notice">
          <Icon name="chat" size={20} />
          <p>
            Estamos preparando nuestro canal de consultas. El envío estará
            disponible próximamente.
          </p>
        </div>
      )}
      <button
        type="submit"
        className="button button-primary"
        disabled={!available || status === "sending"}
      >
        {status === "sending" ? "Enviando…" : "Enviar consulta"}
        <Icon name="arrow" size={18} />
      </button>
      <div className={`form-status ${status}`} role="status" aria-live="polite">
        {notice}
      </div>
    </form>
  );
}
