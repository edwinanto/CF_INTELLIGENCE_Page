import assert from "node:assert/strict";

const origin = process.env.CHECK_URL || "http://localhost:3000";
const paths = [
  "/",
  "/nosotros",
  "/servicios",
  "/desarrollo-de-software",
  "/inteligencia-artificial",
  "/automatizacion",
  "/consultoria",
  "/iot",
  "/capacitacion",
  "/productos",
  "/productos/closetflow",
  "/industrias",
  "/proyectos",
  "/blog",
  "/contacto",
  "/privacidad",
  "/blog/agentes-ia-en-la-empresa",
  "/blog/automatizar-procesos-empresariales",
  "/blog/de-excel-a-software-empresarial",
];
const allLinks = new Set();
for (const path of paths) {
  const response = await fetch(`${origin}${path}`);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  assert.equal(
    (html.match(/<h1(?:\s|>)/g) || []).length,
    1,
    `${path}: exactly one h1`,
  );
  assert.match(html, /<html[^>]*lang="es-PE"/, `${path}: document language`);
  assert.match(
    html,
    /<meta name="description" content="[^"]+"/,
    `${path}: description`,
  );
  assert.match(html, /<title>[^<]+<\/title>/, `${path}: title`);
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.ok(!html.includes("Lorem ipsum"), `${path}: no filler`);
  for (const match of html.matchAll(/href="(\/[^"#?]*)[^\"]*"/g)) {
    if (!match[1].startsWith("/_next")) allLinks.add(match[1]);
  }
}
for (const path of allLinks) {
  const response = await fetch(`${origin}${path}`);
  assert.equal(response.status, 200, `Linked route ${path}`);
}
for (const path of [
  "/robots.txt",
  "/sitemap.xml",
  "/icon.svg",
  "/opengraph-image",
]) {
  const response = await fetch(`${origin}${path}`);
  assert.equal(response.status, 200, path);
  if (path === "/opengraph-image")
    assert.match(response.headers.get("content-type"), /image\/png/);
}
assert.equal((await fetch(`${origin}/pagina-inexistente`)).status, 404);
const headers = { "Content-Type": "application/json", Origin: origin };
const valid = {
  name: "Persona de prueba",
  company: "Empresa de prueba",
  email: "prueba@example.com",
  service: "Consultoría",
  message: "Necesitamos integrar procesos de inventario.",
  consent: true,
};
assert.equal(
  (
    await fetch(`${origin}/api/contacto`, {
      method: "POST",
      headers: { ...headers, Origin: "https://invalid.example" },
      body: "{}",
    })
  ).status,
  403,
);
assert.equal(
  (
    await fetch(`${origin}/api/contacto`, {
      method: "POST",
      headers,
      body: "{}",
    })
  ).status,
  422,
);
assert.equal(
  (
    await fetch(`${origin}/api/contacto`, {
      method: "POST",
      headers,
      body: "{",
    })
  ).status,
  400,
);
assert.equal(
  (
    await fetch(`${origin}/api/contacto`, {
      method: "POST",
      headers,
      body: JSON.stringify({ ...valid, website: "spam" }),
    })
  ).status,
  400,
);
assert.equal(
  (
    await fetch(`${origin}/api/contacto`, {
      method: "POST",
      headers,
      body: "a".repeat(17000),
    })
  ).status,
  413,
);
// The unavailable-state check is safe only for an unconfigured local preview.
if (process.env.CHECK_CONTACT_UNCONFIGURED === "true") {
  assert.equal(
    (
      await fetch(`${origin}/api/contacto`, {
        method: "POST",
        headers,
        body: JSON.stringify(valid),
      })
    ).status,
    503,
  );
}
console.log(
  `Verified ${paths.length} content pages, ${allLinks.size} linked resources, SEO endpoints, 404 and API rejection cases.`,
);
