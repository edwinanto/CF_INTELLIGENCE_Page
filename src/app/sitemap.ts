import type { MetadataRoute } from "next";
import { services } from "@/lib/content";
import { articles } from "@/lib/articles";
import { siteUrl } from "@/lib/seo";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl) return [];
  const routes = [
    "",
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
  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
