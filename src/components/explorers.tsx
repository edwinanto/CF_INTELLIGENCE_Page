"use client";
import { useState } from "react";
import Link from "next/link";
import { agents, industries } from "@/lib/content";
import { articles, blogCategories } from "@/lib/articles";
import { Brand, Icon, SectionTitle } from "./ui";
import { ArticleCard } from "./sections";
export function AgentExplorer() {
  const [selected, setSelected] = useState(0);
  const agent = agents[selected];
  return (
    <section className="agents-section" id="agentes">
      <div className="container agents-layout">
        <div className="agents-copy">
          <SectionTitle
            eyebrow="Inteligencia que trabaja contigo"
            title={
              <>
                Un equipo de agentes.
                <br />
                <span className="muted">Un negocio conectado.</span>
              </>
            }
            description="Estamos desarrollando un ecosistema de agentes que conecta información, personas y procesos. Inteligencia artificial integrada a la operación de tu empresa."
          />
          <span className="status-badge">
            <i /> Plataforma en desarrollo
          </span>
          <div
            className="agent-detail"
            id="agent-detail"
            role="tabpanel"
            aria-labelledby={`agent-tab-${selected}`}
            tabIndex={0}
            key={agent.name}
          >
            <span className="agent-detail-label">EXPLORA EL ECOSISTEMA</span>
            <h3>
              <Icon name={agent.icon} size={20} /> Agente {agent.name}
            </h3>
            <p>{agent.text}</p>
            <ul>
              {agent.tasks.map((t) => (
                <li key={t}>
                  <Icon name="check" size={14} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <Link href="/inteligencia-artificial" className="text-link">
            Descubre nuestra visión de IA <Icon name="arrow" size={18} />
          </Link>
        </div>
        <div className="agent-network">
          <div className="agent-network-header">
            <span>INTELIGENCIA EMPRESARIAL</span>
            <span>08 / AGENTES</span>
          </div>
          <div className="network-core">
            <Brand compact />
            <div>
              <strong>CF Intelligence Core</strong>
              <span>Un contexto compartido. Múltiples capacidades.</span>
            </div>
            <span className="core-pulse" />
          </div>
          <div className="network-stem" />
          <div
            className="agent-grid"
            role="tablist"
            aria-label="Funciones de los agentes"
            onKeyDown={(event) => {
              const buttons = Array.from(
                event.currentTarget.querySelectorAll<HTMLButtonElement>(
                  "button",
                ),
              );
              let next = selected;
              if (event.key === "ArrowRight" || event.key === "ArrowDown")
                next = (selected + 1) % agents.length;
              else if (event.key === "ArrowLeft" || event.key === "ArrowUp")
                next = (selected + agents.length - 1) % agents.length;
              else if (event.key === "Home") next = 0;
              else if (event.key === "End") next = agents.length - 1;
              else return;
              event.preventDefault();
              setSelected(next);
              buttons[next]?.focus();
            }}
          >
            {agents.map((a, i) => (
              <button
                id={`agent-tab-${i}`}
                key={a.name}
                role="tab"
                aria-selected={selected === i}
                aria-controls="agent-detail"
                tabIndex={selected === i ? 0 : -1}
                onClick={() => setSelected(i)}
                className={selected === i ? "selected" : ""}
              >
                <Icon name={a.icon} size={23} />
                <span>{a.name}</span>
                <i />
              </button>
            ))}
          </div>
          <div className="network-footer">
            <Icon name="shield" size={16} />
            <span>Permisos definidos · Trazabilidad · Supervisión humana</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export function IndustryExplorer({ full = false }: { full?: boolean }) {
  const [selected, setSelected] = useState(0);
  const list = full ? industries : industries.slice(0, 4);
  const current = list[selected];
  return (
    <section className="section container">
      <div className="section-header-row">
        <SectionTitle
          eyebrow="Contextos distintos. La misma visión."
          title="Tecnología que entiende tu industria."
          description="Cada operación tiene sus propias reglas. Empezamos por conocer las tuyas."
        />
        {!full && (
          <Link href="/industrias" className="text-link">
            Ver industrias <Icon name="arrow" size={18} />
          </Link>
        )}
      </div>
      <div className="industry-tabs" aria-label="Seleccionar industria">
        {list.map((item, i) => (
          <button
            key={item.name}
            className={selected === i ? "selected" : ""}
            aria-pressed={selected === i}
            onClick={() => setSelected(i)}
          >
            <Icon name={item.icon} />
            {item.name}
            <Icon name="northeast" size={16} />
          </button>
        ))}
      </div>
      <div className="industry-detail" aria-live="polite">
        <div>
          <span className="eyebrow">
            {current.name === "Agricultura"
              ? "Área de innovación · En exploración"
              : current.name}
          </span>
          <h3>{current.text}</h3>
          <p>{current.detail}</p>
        </div>
        <div className="industry-applications">
          {current.applications.map((a) => (
            <span key={a}>
              <Icon name="check" size={16} />
              {a}
            </span>
          ))}
          <Link
            href={`/contacto?servicio=${encodeURIComponent(current.name === "Agricultura" ? "IoT" : "Consultoría")}`}
            className="text-link"
          >
            Explorar una solución <Icon name="arrow" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
export function BlogExplorer() {
  const [category, setCategory] = useState("Todos");
  const [search, setSearch] = useState("");
  const normalize = (value: string) =>
    value
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  const filtered = articles.filter(
    (a) =>
      (category === "Todos" || a.category === category) &&
      normalize(`${a.title} ${a.excerpt}`).includes(normalize(search)),
  );
  return (
    <section className="container blog-list">
      <div className="blog-controls">
        <label className="search-field">
          <span>Buscar artículos</span>
          <input
            type="search"
            placeholder="¿Qué te gustaría explorar?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <label className="category-field">
          <span>Categoría</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {["Todos", ...blogCategories].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
      </div>
      <p className="results-count" role="status">
        {filtered.length} {filtered.length === 1 ? "artículo" : "artículos"}
      </p>
      {filtered.length ? (
        <div className="article-grid">
          {filtered.map((a, i) => (
            <ArticleCard article={a} index={i} key={a.slug} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Icon name="book" size={32} />
          <h2>Aún no hay artículos para esta búsqueda.</h2>
          <p>Prueba otra categoría o explora las ideas que ya publicamos.</p>
          <button
            className="button button-secondary"
            onClick={() => {
              setCategory("Todos");
              setSearch("");
            }}
          >
            Ver todos los artículos <Icon name="arrow" size={16} />
          </button>
        </div>
      )}
    </section>
  );
}
