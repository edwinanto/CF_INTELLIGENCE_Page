import type { Metadata } from "next";
export const siteName = "CF Intelligence";
export const siteUrl = process.env.SITE_URL?.replace(/\/$/, "");
export function metadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
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
