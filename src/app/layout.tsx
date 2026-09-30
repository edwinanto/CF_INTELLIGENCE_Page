import type { Metadata } from "next";
import { Header } from "@/components/header";
import { NavigationScroll } from "@/components/navigation-scroll";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/ui";
import { siteUrl } from "@/lib/seo";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl || "http://localhost:3000"),
  title: {
    default: "CF Intelligence — Tecnología con propósito de negocio",
    template: "%s | CF Intelligence",
  },
  description:
    "Consultoría, software a medida, inteligencia artificial y automatización en Perú. Transformamos procesos de negocio en soluciones digitales inteligentes.",
  robots: { index: Boolean(siteUrl), follow: Boolean(siteUrl) },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-PE">
      <body>
        <NavigationScroll />
        <a className="skip-link" href="#contenido">
          Ir al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        {siteUrl && (
          <JsonLd
            data={{
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${siteUrl}/#organization`,
                  name: "CF Intelligence",
                  url: siteUrl,
                  description:
                    "Tecnología, consultoría, software, inteligencia artificial y automatización.",
                  areaServed: { "@type": "Country", name: "Perú" },
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteUrl}/#website`,
                  url: siteUrl,
                  name: "CF Intelligence",
                  inLanguage: "es-PE",
                  publisher: { "@id": `${siteUrl}/#organization` },
                },
              ],
            }}
          />
        )}
      </body>
    </html>
  );
}
