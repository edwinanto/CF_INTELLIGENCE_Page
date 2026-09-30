import type { MetadataRoute } from "next";
import { siteUrl, indexable } from "@/lib/seo";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(indexable ? { allow: "/", disallow: "/api/" } : { disallow: "/" }),
    },
    ...(indexable ? { sitemap: `${siteUrl}/sitemap.xml` } : {}),
  };
}
