import type { Metadata } from "next";
import { resolveSeoConfig, excludedFromSearch, seoPages } from "./seo-config";
export const siteName = "CF Intelligence";
export const { siteUrl, indexable } = resolveSeoConfig(process.env);
export function metadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const configured = seoPages[path];
  title = configured?.title || title;
  description = configured?.description || description;
  const index = indexable && !excludedFromSearch.has(path);
  return {
    title,
    description,
    robots: {
      index,
      follow: true,
      googleBot: {
        index,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: siteUrl ? { canonical: `${siteUrl}${path}` } : undefined,
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      type: "website",
      locale: "es_PE",
      siteName,
      ...(siteUrl
        ? {
            url: `${siteUrl}${path}`,
            images: [
              { url: `${siteUrl}/opengraph-image`, width: 1200, height: 630 },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(siteUrl ? { images: [`${siteUrl}/opengraph-image`] } : {}),
    },
  };
}
