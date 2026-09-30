import { PageHero, Icon } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { metadata } from "@/lib/seo";
import { BreadcrumbSchema } from "@/components/breadcrumb-schema";
export const generateMetadata = () =>
  metadata(
    "Conversemos sobre tu proyecto",
    "Cuéntanos qué proceso necesitas mejorar. Evaluemos juntos una solución de software, inteligencia artificial, automatización o consultoría.",
    "/contacto",
  );
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ servicio?: string }>;
}) {
  const query = await searchParams;
  const available = Boolean(
    process.env.CONTACT_WEBHOOK_URL &&
    process.env.CONTACT_PRIVACY_READY === "true",
  );
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Contacto", path: "/contacto" }]} />
      <PageHero
        eyebrow="Una conversación puede ser el comienzo"
        title="El siguiente paso de tu negocio empieza aquí."
        description="¿Una idea por construir? ¿Un proceso por mejorar? Cuéntanos dónde estás y hacia dónde quieres ir."
      />
      <section className="container contact-layout">
        <aside>
          <span className="eyebrow">¿Qué sigue?</span>
          <h2>
            Primero escuchamos.
            <br />
            <span className="muted">Después proponemos.</span>
          </h2>
          {[
            [
              "01",
              "Entendemos tu necesidad",
              "Revisamos el contexto de tu empresa y el problema que quieres resolver.",
            ],
            [
              "02",
              "Exploramos las posibilidades",
              "Identificamos qué información necesitamos y cómo podemos ayudarte.",
            ],
            [
              "03",
              "Definimos el siguiente paso",
              "Acordamos una conversación para precisar el alcance y la ruta de trabajo.",
            ],
          ].map(([n, t, p]) => (
            <div className="contact-step" key={n}>
              <span>{n}</span>
              <div>
                <h3>{t}</h3>
                <p>{p}</p>
              </div>
            </div>
          ))}
          <div className="contact-note">
            <Icon name="globe" size={20} />
            <p>
              Desde Perú.
              <br />
              Colaboración presencial o remota, según el proyecto.
            </p>
          </div>
        </aside>
        <ContactForm
          available={available}
          initialService={query.servicio || ""}
        />
      </section>
    </>
  );
}
