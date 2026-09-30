import { PageHero, ButtonLink, SectionTitle, JsonLd } from "@/components/ui";
import {
  ProductMockup,
  ProductFeatures,
  CTASection,
} from "@/components/sections";
import { metadata, siteUrl } from "@/lib/seo";
export const generateMetadata = () =>
  metadata(
    "ClosetFlow — Gestión comercial para tu tienda",
    "Plataforma SaaS de CF Intelligence para conectar punto de venta, inventarios, productos, clientes y control de caja en comercios y negocios de moda.",
    "/productos/closetflow",
  );
export default function ClosetFlow() {
  return (
    <>
      <PageHero
        eyebrow="Productos CF / ClosetFlow"
        title="Tu comercio tiene muchas piezas. Dales un mismo lugar."
        description="ClosetFlow es la plataforma SaaS de CF Intelligence orientada a tiendas, negocios de moda y comercios. Una propuesta para conectar la venta con todo lo que la hace posible."
      >
        <ButtonLink href="/contacto?servicio=Producto%20SaaS">
          Solicitar una demostración
        </ButtonLink>
      </PageHero>
      <section className="container product-detail">
        <ProductMockup />
      </section>
      <section className="section container">
        <SectionTitle
          eyebrow="Una operación conectada"
          title="Del producto en inventario a la decisión de negocio."
          description="Explora las áreas funcionales de ClosetFlow. Durante la demostración revisaremos el alcance disponible y cómo se ajusta a tu operación."
        />
        <ProductFeatures />
      </section>
      <CTASection />
      {siteUrl && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "ClosetFlow",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description:
              "Plataforma SaaS orientada a gestión comercial, punto de venta e inventarios.",
            url: `${siteUrl}/productos/closetflow`,
            creator: { "@id": `${siteUrl}/#organization` },
          }}
        />
      )}
    </>
  );
}
