import { ButtonLink, Icon } from "@/components/ui";
import { IntelligenceDiagram } from "@/components/diagram";
import { AgentExplorer, IndustryExplorer } from "@/components/explorers";
import {
  ServicesSection,
  ProductShowcase,
  Methodology,
  TechnologyGrid,
  InsightsSection,
  FAQ,
  CTASection,
} from "@/components/sections";
import { metadata } from "@/lib/seo";
export const generateMetadata = () =>
  metadata(
    "Software, inteligencia artificial y automatización en Perú",
    "Transformamos procesos y oportunidades de negocio en soluciones digitales inteligentes. Consultoría, software, IA, automatización y productos SaaS.",
    "/",
  );
export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <span className="eyebrow">
            <span />
            TECNOLOGÍA CON PROPÓSITO DE NEGOCIO
          </span>
          <h1>
            Tu siguiente etapa.
            <br />
            Más conectada.
            <br />
            <span>Más inteligente.</span>
          </h1>
          <p>
            Transformamos procesos y oportunidades en software, inteligencia
            artificial y automatización. De entender tu negocio a construir lo
            que sigue.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/contacto">Cuéntanos tu proyecto</ButtonLink>
            <a href="#soluciones" className="hero-secondary">
              Explorar soluciones <Icon name="arrow" size={17} />
            </a>
          </div>
          <div className="hero-footnote">
            <span className="tiny-cross">+</span> ESTRATEGIA, DESARROLLO Y
            EVOLUCIÓN. EN UN MISMO EQUIPO.
          </div>
        </div>
        <IntelligenceDiagram />
      </section>
      <div className="capabilities-strip">
        <div className="container">
          <span>DEL RETO AL RESULTADO</span>
          {[
            "Estrategia",
            "Software",
            "Inteligencia artificial",
            "Automatización",
          ].map((t) => (
            <span key={t}>
              <span className="strip-star" aria-hidden="true">
                ✳
              </span>
              {t}
            </span>
          ))}
        </div>
      </div>
      <ServicesSection />
      <AgentExplorer />
      <ProductShowcase />
      <Methodology />
      <TechnologyGrid />
      <IndustryExplorer />
      <InsightsSection />
      <FAQ />
      <CTASection />
    </>
  );
}
