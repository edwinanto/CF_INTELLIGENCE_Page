import { siteUrl } from "@/lib/seo";
import { JsonLd } from "./ui";

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [{ name: "Inicio", path: "/" }, ...items].map(
          (item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${siteUrl}${item.path}`,
          }),
        ),
      }}
    />
  );
}
