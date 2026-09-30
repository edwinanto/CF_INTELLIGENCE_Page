"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { services } from "@/lib/content";
import { Brand, Icon } from "./ui";

export function Header() {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const header = useRef<HTMLElement>(null);
  const serviceButton = useRef<HTMLButtonElement>(null);
  const mobileButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function outside(event: MouseEvent) {
      if (!header.current?.contains(event.target as Node)) {
        setExpanded(false);
        setMenu(false);
      }
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        if (expanded) {
          setExpanded(false);
          serviceButton.current?.focus();
        } else if (menu) {
          setMenu(false);
          mobileButton.current?.focus();
        }
      }
    }
    document.addEventListener("click", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("click", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [expanded, menu]);
  const close = () => {
    setMenu(false);
    setExpanded(false);
  };
  return (
    <header
      className="site-header"
      ref={header}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setExpanded(false);
      }}
    >
      <div className="container header-inner">
        <Link href="/" aria-label="CF Intelligence — Inicio" onClick={close}>
          <Brand />
        </Link>
        <button
          className="mobile-toggle"
          ref={mobileButton}
          aria-expanded={menu}
          aria-controls="main-nav"
          aria-label={menu ? "Cerrar menú" : "Abrir menú"}
          onClick={() => {
            setMenu(!menu);
            setExpanded(false);
          }}
        >
          <span />
          {menu ? "Cerrar" : "Menú"}
        </button>
        <nav
          id="main-nav"
          className={`main-nav ${menu ? "is-open" : ""}`}
          aria-label="Navegación principal"
        >
          <div
            className="nav-dropdown"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget))
                setExpanded(false);
            }}
          >
            <button
              ref={serviceButton}
              aria-expanded={expanded}
              aria-controls="services-menu"
              onClick={() => setExpanded(!expanded)}
              className={
                services.some((s) => pathname === `/${s.slug}`) ||
                pathname === "/servicios"
                  ? "active"
                  : ""
              }
            >
              Servicios
              <svg
                className={`chevron ${expanded ? "rotated" : ""}`}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {expanded && (
              <div id="services-menu" className="mega-menu">
                <Link href="/servicios" className="mega-intro" onClick={close}>
                  <span className="eyebrow">Nuestras capacidades</span>
                  <strong>
                    De la estrategia
                    <br />a la implementación.
                  </strong>
                  <span>
                    Explorar servicios <Icon name="arrow" size={18} />
                  </span>
                </Link>
                <div className="mega-links">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/${s.slug}`}
                      onClick={close}
                      aria-current={
                        pathname === `/${s.slug}` ? "page" : undefined
                      }
                    >
                      <Icon name={s.icon} size={20} />
                      <span>{s.title}</span>
                      <Icon name="northeast" size={14} />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {[
            ["/productos", "Productos"],
            ["/industrias", "Industrias"],
            ["/proyectos", "Proyectos"],
            ["/nosotros", "Nosotros"],
            ["/blog", "Ideas"],
          ].map(([url, label]) => (
            <Link
              key={url}
              href={url}
              aria-current={pathname.startsWith(url) ? "page" : undefined}
              onClick={close}
            >
              {label}
            </Link>
          ))}
          <Link href="/contacto" className="header-cta" onClick={close}>
            Hablemos <Icon name="northeast" size={16} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
