import Link from "next/link";
import { services } from "@/lib/content";
import { Brand, Icon } from "./ui";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" aria-label="CF Intelligence — Inicio">
            <Brand />
          </Link>
          <p>
            Diseñamos, construimos y conectamos
            <br />
            la tecnología de tu negocio.
          </p>
          <span className="footer-location">
            <Icon name="globe" size={15} /> Desde Perú. Con visión global.
          </span>
        </div>
        <div>
          <h3>Capacidades</h3>
          {services.map((s) => (
            <Link href={`/${s.slug}`} key={s.slug}>
              {s.title}
            </Link>
          ))}
        </div>
        <div>
          <h3>Ecosistema CF</h3>
          <Link href="/productos">Nuestros productos</Link>
          <Link href="/productos/closetflow">ClosetFlow</Link>
          <Link href="/inteligencia-artificial#agentes">Agentes de IA</Link>
          <Link href="/industrias">Industrias</Link>
        </div>
        <div>
          <h3>Conócenos</h3>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/proyectos">Proyectos</Link>
          <Link href="/blog">Ideas y recursos</Link>
          <Link href="/contacto">
            Contacto <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} CF Intelligence.</span>
        <span>Tecnología con propósito de negocio.</span>
        <Link href="/privacidad">Privacidad</Link>
      </div>
    </footer>
  );
}
