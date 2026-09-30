import Link from "next/link";
import { services, steps, technologies, faqs, products } from "@/lib/content";
import type { Service } from "@/lib/content";
import { articles, type Article } from "@/lib/articles";
import { ButtonLink, Icon, SectionTitle } from "./ui";

export function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  return (
    <Link className="service-card" href={`/${service.slug}`}>
      <div className="card-top">
        <span className="service-icon">
          <Icon name={service.icon} />
        </span>
        <span className="card-number">0{index + 1}</span>
      </div>
      <h3>{service.title}</h3>
      <p>{service.short}</p>
      <span className="card-link">
        Explorar solución <Icon name="northeast" size={18} />
      </span>
    </Link>
  );
}
export function ServiceGrid() {
  return (
    <div className="services-grid">
      {services.map((s, i) => (
        <ServiceCard key={s.slug} service={s} index={i} />
      ))}
    </div>
  );
}
export function ServicesSection() {
  return (
    <section className="section container" id="soluciones">
      <div className="section-header-row">
        <SectionTitle
          eyebrow="Lo que hacemos"
          title={
            <>
              Complejidad en tu negocio.
              <br />
              <span className="muted">Claridad en la solución.</span>
            </>
          }
          description="Entendemos el reto, conectamos las piezas y construimos la tecnología que necesitas para avanzar."
        />
        <Link className="text-link" href="/servicios">
          Todas las capacidades <Icon name="arrow" size={18} />
        </Link>
      </div>
      <ServiceGrid />
    </section>
  );
}

export function ProductMockup() {
  return (
    <div
      className="product-mockup"
      aria-label="Vista conceptual ilustrativa de ClosetFlow"
    >
      <div className="mock-window">
        <span />
        <span />
        <span />
        <small>closetflow / tu espacio de trabajo</small>
      </div>
      <div className="mock-body">
        <div className="mock-sidebar">
          <b>
            c<span>f</span>
          </b>
          {["layers", "bag", "box", "people", "chart"].map((icon, i) => (
            <span key={icon} className={i === 0 ? "selected" : ""}>
              <Icon name={icon} size={17} />
            </span>
          ))}
        </div>
        <div className="mock-content">
          <div className="mock-heading">
            <div>
              <small>TU NEGOCIO, CONECTADO</small>
              <strong>Todo en su lugar.</strong>
            </div>
            <span className="mock-avatar">CF</span>
          </div>
          <div className="mock-stats">
            <div>
              <Icon name="bag" size={16} />
              <span>Ventas</span>
              <strong>
                Conectadas <i />
              </strong>
            </div>
            <div>
              <Icon name="box" size={16} />
              <span>Inventario</span>
              <strong>
                Organizado <i />
              </strong>
            </div>
            <div>
              <Icon name="wallet" size={16} />
              <span>Tu caja</span>
              <strong>
                Bajo control <i />
              </strong>
            </div>
          </div>
          <div className="mock-chart">
            <div>
              <b>Tu operación, en una sola vista</b>
              <span>Ventas · Inventario · Clientes</span>
            </div>
            <div className="chart-bars">
              {[35, 51, 43, 68, 50, 74, 61, 85, 72, 92, 80, 100].map((h, i) => (
                <span key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="chart-caption">
              <span>Información conectada</span>
              <span>Decisiones más claras ↗</span>
            </div>
          </div>
          <div className="mock-row">
            <span>
              <i className="mock-item" />
              Productos y variantes
            </span>
            <span>
              Un catálogo organizado <Icon name="check" size={14} />
            </span>
          </div>
        </div>
      </div>
      <span className="mock-disclaimer">
        VISTA CONCEPTUAL · DATOS ILUSTRATIVOS
      </span>
    </div>
  );
}
export function ProductShowcase() {
  return (
    <section className="product-section">
      <div className="container product-layout">
        <div>
          <SectionTitle
            light
            eyebrow="Productos CF"
            title={
              <>
                También construimos
                <br />
                nuestras propias ideas.
              </>
            }
            description="Creamos productos digitales para resolver necesidades que conocemos de cerca."
          />
          <div className="product-wordmark">
            ClosetFlow<span>↗</span>
          </div>
          <p className="product-description">
            Tu comercio, en una sola plataforma. Conecta ventas, inventario y
            clientes para gestionar tu negocio con más claridad.
          </p>
          <div className="product-tags">
            {[
              "Punto de venta",
              "Inventario",
              "Control de caja",
              "Catálogo online",
            ].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <ButtonLink href="/productos/closetflow" className="button-dark">
            Conocer ClosetFlow
          </ButtonLink>
          <p className="product-parent">Un producto de CF Intelligence.</p>
        </div>
        <ProductMockup />
      </div>
    </section>
  );
}
export function ProductFeatures() {
  return (
    <div className="feature-grid">
      {products[0].features.map((f) => (
        <div key={f}>
          <Icon name="check" size={20} />
          <span>{f}</span>
        </div>
      ))}
    </div>
  );
}
export function ProcessTimeline() {
  return (
    <div className="process-grid">
      {steps.map(([title, text], i) => (
        <div className="process-step" key={title}>
          <span className="step-number">
            0{i + 1}
            <span aria-hidden="true">↗</span>
          </span>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}
export function Methodology() {
  return (
    <section className="section container">
      <SectionTitle
        eyebrow="Cómo trabajamos"
        title={
          <>
            De una buena pregunta.
            <br />
            <span className="muted">A una solución que funciona.</span>
          </>
        }
        description="Te acompañamos en todo el ciclo. Con contexto de negocio, entregas claras y espacio para evolucionar."
      />
      <ProcessTimeline />
    </section>
  );
}
export function TechnologyGrid() {
  return (
    <section className="technology-section container">
      <div className="technology-intro">
        <span className="eyebrow">La base de lo que construimos</span>
        <p>
          La tecnología adecuada.
          <br />
          <span className="muted">Para cada desafío.</span>
        </p>
      </div>
      <div className="technology-grid">
        {technologies.map(([title, tech]) => (
          <div key={title}>
            <h3>{title}</h3>
            <p>{tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
export function ArticleCard({
  article,
  index,
}: {
  article: Article;
  index: number;
}) {
  return (
    <Link href={`/blog/${article.slug}`} className="article-card">
      <div className={`article-art art-${index % 3}`}>
        <div className="art-grid" />
        <Icon name={article.symbol} size={58} />
        <span className="art-label">CF / PERSPECTIVAS</span>
        <span className="art-arrow">
          <Icon name="northeast" size={18} />
        </span>
      </div>
      <div className="article-meta">
        <span>{article.category}</span>
        <span>{article.readTime} de lectura</span>
      </div>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
    </Link>
  );
}
export function InsightsSection() {
  return (
    <section className="section container">
      <div className="section-header-row">
        <SectionTitle
          eyebrow="Ideas para avanzar"
          title="Una mirada al siguiente paso."
        />
        <Link className="text-link" href="/blog">
          Explorar recursos <Icon name="arrow" size={18} />
        </Link>
      </div>
      <div className="article-grid">
        {articles.map((article, i) => (
          <ArticleCard article={article} index={i} key={article.slug} />
        ))}
      </div>
    </section>
  );
}
export function FAQ() {
  return (
    <section className="section container faq-layout">
      <SectionTitle
        eyebrow="Resolvamos tus dudas"
        title={
          <>
            Antes de
            <br />
            dar el primer paso.
          </>
        }
      />
      <div className="faq-list">
        {faqs.map(([q, a]) => (
          <details key={q}>
            <summary>
              {q}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
export function CTASection() {
  return (
    <section className="cta-section container">
      <div className="cta-decoration" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <span className="eyebrow">
        <span />
        El siguiente paso empieza aquí
      </span>
      <h2>
        Menos tareas manuales.
        <br />
        Más posibilidades para tu negocio.
      </h2>
      <p>
        Ese proceso que todavía depende de Excel, correos o tareas repetitivas
        <br className="desktop-break" /> puede ser el comienzo de algo mejor.
        Conversemos.
      </p>
      <ButtonLink href="/contacto" className="button-dark">
        Cuéntanos tu proyecto
      </ButtonLink>
      <span className="cta-note">
        Una conversación para entender. Un camino para construir.
      </span>
    </section>
  );
}
