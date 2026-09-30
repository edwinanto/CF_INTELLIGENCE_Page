import assert from "node:assert/strict";

const origin = process.env.CHECK_URL || "http://localhost:3000";
const canonicalOrigin = process.env.SITE_URL || "https://cf.app";
const sitemapResponse = await fetch(`${origin}/sitemap.xml`);
assert.equal(sitemapResponse.status, 200);
const xml = await sitemapResponse.text();
const locations = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  (match) => match[1],
);
assert.equal(locations.length, 17, "Expected 17 completed, indexable pages");
assert.equal(new Set(locations).size, locations.length);
const robots = await (await fetch(`${origin}/robots.txt`)).text();
assert.match(robots, /Allow: \/\s/);
assert.ok(robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`));
const titles = new Set();
for (const location of locations) {
  const url = new URL(location);
  assert.equal(url.origin, canonicalOrigin);
  const response = await fetch(`${origin}${url.pathname}`);
  assert.equal(response.status, 200);
  const html = await response.text();
  const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
  assert.ok(canonical, `Canonical present: ${location}`);
  assert.equal(
    new URL(canonical).href,
    new URL(location).href,
    `Canonical ${location}`,
  );
  assert.match(html, /name="robots" content="index, follow"/);
  assert.match(
    html,
    /name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"/,
  );
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  assert.ok(title && !titles.has(title), `Unique title: ${location}`);
  titles.add(title);
  const scripts = [
    ...html.matchAll(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
    ),
  ];
  const schemas = scripts.flatMap((match) => {
    const schema = JSON.parse(match[1]);
    return schema["@graph"] || [schema];
  });
  assert.ok(schemas.some((schema) => schema["@type"] === "Organization"));
  if (url.pathname !== "/")
    assert.ok(
      schemas.some((schema) => schema["@type"] === "BreadcrumbList"),
      `Breadcrumbs: ${location}`,
    );
}
for (const path of ["/privacidad", "/proyectos"]) {
  assert.ok(!locations.includes(`${canonicalOrigin}${path}`));
  const html = await (await fetch(`${origin}${path}`)).text();
  assert.match(html, /name="robots" content="noindex, follow"/);
}
const contact = await (await fetch(`${origin}/contacto?servicio=IoT`)).text();
assert.ok(
  contact.includes(`rel="canonical" href="${canonicalOrigin}/contacto"`),
);
console.log(
  `SEO verified: ${locations.length} indexable pages, canonical URLs, unique titles, JSON-LD, breadcrumbs, robots and draft exclusions.`,
);
