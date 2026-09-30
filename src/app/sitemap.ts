import type { MetadataRoute } from "next";
import { services } from "@/lib/content";
import { articles } from "@/lib/articles";
import { siteUrl, indexable } from "@/lib/seo";
import { excludedFromSearch } from "@/lib/seo-config";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!indexable) return [];
  const routes = [
    "/",
    "/nosotros",
    "/servicios",
    ...services.map((s) => `/${s.slug}`),
    "/productos",
    "/productos/closetflow",
    "/industrias",
    "/proyectos",
    "/blog",
    ...articles.map((a) => `/blog/${a.slug}`),
    "/contacto",
    "/privacidad",
  ];
  return routes
    .filter((path) => !excludedFromSearch.has(path))
    .map((path) => ({
      url: `${siteUrl}${path}`,
    }));
}
