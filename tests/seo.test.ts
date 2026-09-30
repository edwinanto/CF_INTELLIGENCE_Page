import { test } from "node:test";
import assert from "node:assert/strict";
import {
  resolveSeoConfig,
  excludedFromSearch,
  seoPages,
} from "../src/lib/seo-config.ts";

test("production uses the approved domain and enables indexing", () => {
  assert.deepEqual(resolveSeoConfig({ NODE_ENV: "production" }), {
    siteUrl: "https://cf.app",
    indexable: true,
  });
});
test("development and explicit preview overrides cannot enable indexing", () => {
  assert.equal(
    resolveSeoConfig({ NODE_ENV: "development", SITE_INDEXABLE: "true" })
      .indexable,
    false,
  );
  assert.equal(
    resolveSeoConfig({ NODE_ENV: "production", SITE_INDEXABLE: "false" })
      .indexable,
    false,
  );
});
test("canonical configuration rejects malformed domains and URL suffixes", () => {
  for (const SITE_URL of [
    "http://cf.app",
    "https://cf.app/path",
    "https://cf.app?x=1",
    "https://cf.app#fragment",
    "https://user:pass@cf.app",
    "cf.app",
  ]) {
    assert.throws(() => resolveSeoConfig({ SITE_URL }));
  }
  assert.equal(
    resolveSeoConfig({ SITE_URL: " https://cf.app/ " }).siteUrl,
    "https://cf.app",
  );
});
test("pending pages stay excluded and commercial pages have distinct search snippets", () => {
  assert.ok(excludedFromSearch.has("/privacidad"));
  assert.ok(excludedFromSearch.has("/proyectos"));
  const titles = Object.values(seoPages).map((page) => page.title);
  assert.equal(new Set(titles).size, titles.length);
  for (const page of Object.values(seoPages))
    assert.ok(page.description.length >= 100 && page.description.length <= 180);
});
