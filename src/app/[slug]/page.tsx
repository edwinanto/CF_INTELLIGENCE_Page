import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/lib/content";
import { metadata, siteUrl } from "@/lib/seo";
import {
  PageHero,
  SectionTitle,
  ButtonLink,
  Icon,
  JsonLd,
} from "@/components/ui";
import {
  ServiceGrid,
  CTASection,
  Methodology,
  TechnologyGrid,
  ProductShowcase,
  FAQ,
} from "@/components/sections";
import {
  AgentExplorer,
  IndustryExplorer,
  BlogExplorer,
} from "@/components/explorers";
const pages: Record<
  string,
  { title: string; eyebrow: string; heading: string; description: string }
> = {
  servicios: {
    title: "Servicios tecnológicos para empresas",
    eyebrow: "Nuestras capacidades",
    heading: "Un reto de negocio. Todas las piezas para resolverlo.",
    description:
      "Consultoría, software, inteligencia artificial y automatización conectados por un mismo objetivo: mejorar la forma en que funciona tu empresa.",
  },
  nosotros: {
    title: "Nosotros",
    eyebrow: "Somos CF Intelligence",
    heading: "Entendemos negocios. Construimos tecnología.",
    description:
      "CF Intelligence nace de una convicción: la tecnología tiene sentido cuando resuelve una necesidad real. Unimos análisis, diseño y desarrollo para llevar esa idea a la operación de las empresas.",
  },
  productos: {
    title: "Productos CF",
    eyebrow: "Nuestro ecosistema de productos",
    heading: "Ideas propias. Soluciones para el día a día.",
    description:
      "Además de desarrollar soluciones para empresas, creamos productos digitales propios. Plataformas pensadas para acompañar la operación y evolucionar con quienes las utilizan.",
  },
  industrias: {
    title: "Industrias",
    eyebrow: "Tecnología aplicada",
    heading: "Cada industria tiene sus reglas. Empezamos por entenderlas.",
    description:
      "Exploramos cómo la tecnología puede resolver necesidades concretas en cada sector, desde conectar una venta hasta monitorear una operación en campo.",
  },
  proyectos: {
    title: "Proyectos",
    eyebrow: "De la necesidad a la solución",
    heading: "El trabajo se entiende mejor en contexto.",
    description:
      "Un proyecto empieza con un problema de negocio. Aquí compartiremos cómo lo analizamos, qué construimos y qué aprendemos durante su implementación.",
  },
  blog: {
    title: "Ideas y recursos",
    eyebrow: "Perspectivas CF",
    heading: "Ideas para tomar mejores decisiones tecnológicas.",
    description:
      "Software, inteligencia artificial y procesos explicados desde lo que significan para tu negocio.",
  },
  privacidad: {
    title: "Privacidad",
    eyebrow: "Tus datos",
    heading: "Claridad sobre la información que compartes.",
    description:
      "Esta página describe el funcionamiento del formulario de consulta de este sitio. La información legal definitiva debe completarse antes de su publicación comercial.",
  },
};
export const dynamicParams = false;
export function generateStaticParams() {
  return [...Object.keys(pages), ...services.map((s) => s.slug)].map(
    (slug) => ({ slug }),
  );
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  const p = pages[slug];
  if (!s && !p) return {};
  return metadata(
    s?.title || p.title,
    s?.description || p.description,
    `/${slug}`,
  );
}
export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (service)
    return (
      <>
        <PageHero
          eyebrow={service.eyebrow}
          title={service.headline}
          description={service.description}
        >
          <ButtonLink
            href={`/contacto?servicio=${encodeURIComponent(service.title === "Consultoría tecnológica" ? "Consultoría" : service.title === "Internet de las cosas" ? "IoT" : service.title)}`}
          >
            {slug === "consultoria"
              ? "Solicitar diagnóstico tecnológico"
              : "Conversemos sobre tu proyecto"}
          </ButtonLink>
        </PageHero>
        <section className="container section service-detail-layout">
          <div>
            <SectionTitle
              eyebrow="Dónde podemos ayudarte"
              title={service.question}
            />
            <p className="body-copy">
              Trabajamos desde el contexto de tu operación. Definimos una
              solución con alcance claro y validamos cada etapa con las personas
              que la utilizarán.
            </p>
          </div>
          <div className="application-list">
            {service.applications.map((a, i) => (
              <div key={a}>
                <span>0{i + 1}</span>
                <h3>{a}</h3>
                <Icon name={service.icon} size={20} />
              </div>
            ))}
          </div>
        </section>
        <section className="container section deliverables">
          <SectionTitle
            eyebrow="Entregables con propósito"
            title="Un camino claro. Un resultado concreto."
          />
          <div className="four-grid">
            {service.deliverables.map((d, i) => (
              <div key={d}>
                <span className="eyebrow">0{i + 1}</span>
                <h3>{d}</h3>
              </div>
            ))}
          </div>
        </section>
        {slug === "inteligencia-artificial" && <AgentExplorer />}
        {slug === "iot" && (
          <section className="container innovation-panel">
            <Icon name="leaf" size={32} />
            <div>
              <span className="eyebrow">Innovación en exploración</span>
              <h2>Un nuevo campo de posibilidades.</h2>
              <p>
                Preparamos el camino para soluciones de monitoreo agrícola,
                sensores ambientales, riego y trazabilidad. Cada implementación
                partirá de una validación técnica en campo.
              </p>
            </div>
          </section>
        )}
        {slug === "capacitacion" && (
          <section className="container feature-grid">
            {[
              "Presencial",
              "Virtual",
              "Workshops",
              "Programas corporativos",
            ].map((t) => (
              <div key={t}>
                <Icon name="book" />
                <span>{t}</span>
              </div>
            ))}
          </section>
        )}
        <FAQ />
        <CTASection />
        {siteUrl && (
          <JsonLd
            data={{
              "@context": "https://schema.org",
              "@type": "Service",
              name: service.title,
              description: service.description,
              url: `${siteUrl}/${slug}`,
              provider: { "@id": `${siteUrl}/#organization` },
              areaServed: "Perú",
            }}
          />
        )}
        <Breadcrumb name={service.title} slug={slug} />
      </>
    );
  const page = pages[slug];
  if (!page) notFound();
  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.heading}
        description={page.description}
      />
      {slug === "servicios" && (
        <>
          <section className="container page-grid">
            <ServiceGrid />
          </section>
          <Methodology />
          <TechnologyGrid />
        </>
      )}
      {slug === "nosotros" && (
        <>
          <section className="container about-statement">
            <span className="eyebrow">Nuestra forma de pensar</span>
            <h2>
              La tecnología debe adaptarse al negocio.
              <br />
              <span className="muted">
                Y abrir posibilidades para lo que viene.
              </span>
            </h2>
            <div>
              <p>
                Analizamos procesos, diseñamos soluciones y construimos
                software. Integramos sistemas y aplicamos inteligencia
                artificial donde aporta valor. Acompañamos la implementación
                para que lo desarrollado pueda utilizarse, medirse y mejorar.
              </p>
              <p>
                También creamos y operamos productos propios bajo modelos SaaS.
                Esa visión de producto orienta nuestra manera de trabajar:
                comprender al usuario, cuidar la operación y planificar la
                evolución desde el inicio.
              </p>
            </div>
          </section>
          <section className="container section">
            <SectionTitle
              eyebrow="Principios de trabajo"
              title="Lo que guía cada decisión."
            />
            <div className="four-grid">
              {[
                [
                  "Contexto primero",
                  "Comprendemos los procesos y las personas antes de proponer herramientas.",
                ],
                [
                  "Claridad compartida",
                  "Definimos alcance, responsabilidades y criterios de aceptación desde el inicio.",
                ],
                [
                  "Control desde el diseño",
                  "Consideramos seguridad, permisos, trazabilidad y continuidad en la arquitectura.",
                ],
                [
                  "Evolución continua",
                  "Diseñamos soluciones que puedan mantenerse y crecer con el negocio.",
                ],
              ].map(([title, text]) => (
                <div key={title}>
                  <Icon name="compass" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </section>
          <Methodology />
        </>
      )}
      {slug === "productos" && (
        <>
          <ProductShowcase />
          <section className="container section">
            <SectionTitle
              eyebrow="Un ecosistema en evolución"
              title="El próximo producto empieza con una necesidad."
              description="La arquitectura de Productos CF está preparada para incorporar nuevas plataformas. Compartiremos cada propuesta cuando esté lista para presentarse."
            />
            <Link
              className="text-link"
              href="/contacto?servicio=Producto%20SaaS"
            >
              Conversemos sobre productos <Icon name="arrow" size={18} />
            </Link>
          </section>
        </>
      )}
      {slug === "industrias" && <IndustryExplorer full />}
      {slug === "blog" && <BlogExplorer />}
      {slug === "proyectos" && (
        <>
          <section className="container project-preview">
            <div className="project-visual">
              <Icon name="layers" size={64} />
              <span>PRODUCTO PROPIO / CF</span>
            </div>
            <div>
              <span className="eyebrow">Dentro del ecosistema</span>
              <h2>ClosetFlow</h2>
              <p>
                Una plataforma SaaS orientada a la gestión comercial de tiendas
                y negocios de moda. Conoce la propuesta del producto y sus áreas
                funcionales.
              </p>
              <ButtonLink href="/productos/closetflow" secondary>
                Explorar producto
              </ButtonLink>
            </div>
          </section>
          <section className="container section">
            <SectionTitle
              eyebrow="Casos documentados"
              title="Cada resultado necesita evidencia."
              description="Estamos preparando la sección de casos. Publicaremos proyectos cuando contemos con información validada y autorización para compartirla."
            />
            <div className="case-outline">
              {[
                "El problema",
                "El análisis",
                "La solución",
                "La tecnología",
                "Los resultados",
              ].map((t, i) => (
                <div key={t}>
                  <span>0{i + 1}</span>
                  <h3>{t}</h3>
                </div>
              ))}
            </div>
            <p className="small-note">
              Cada caso podrá incluir industria, capturas, indicadores y
              testimonios autorizados.
            </p>
          </section>
        </>
      )}
      {slug === "privacidad" && (
        <section className="container prose privacy-prose">
          <h2>Información solicitada</h2>
          <p>
            El formulario solicita nombre, empresa, cargo, correo, teléfono
            opcional, servicio de interés y una descripción de la necesidad.
            Evita incluir información sensible, credenciales o datos de
            terceros.
          </p>
          <h2>Finalidad</h2>
          <p>
            La información se utiliza para evaluar y responder tu consulta sobre
            los servicios o productos de CF Intelligence. El formulario requiere
            tu autorización para este fin.
          </p>
          <h2>Envío y almacenamiento</h2>
          <p>
            Cuando el canal de recepción esté habilitado, el servidor
            transmitirá los datos al sistema de gestión de consultas
            configurado. El sitio no guarda consultas en el navegador. Si el
            envío falla, el formulario lo indica y conserva los campos durante
            esa visita para que puedas reintentarlo.
          </p>
          <h2>Cookies y analítica</h2>
          <p>
            Esta versión no incorpora herramientas de publicidad ni analítica de
            terceros. Si se incorporan servicios adicionales, deberá
            actualizarse esta información y habilitar los controles que
            correspondan.
          </p>
          <h2>Información pendiente antes del lanzamiento</h2>
          <p>
            Se debe identificar la razón social responsable, domicilio, canal
            para ejercer derechos, proveedor de recepción, transferencias
            aplicables y plazo de conservación. El formulario permanecerá
            deshabilitado hasta configurar la recepción y confirmar estos datos
            legales.
          </p>
        </section>
      )}
      {slug !== "privacidad" && <CTASection />}
      <Breadcrumb name={page.title} slug={slug} />
    </>
  );
}
function Breadcrumb({ name, slug }: { name: string; slug: string }) {
  return siteUrl ? (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name,
            item: `${siteUrl}/${slug}`,
          },
        ],
      }}
    />
  ) : null;
}
