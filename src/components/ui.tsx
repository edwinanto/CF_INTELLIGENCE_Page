import Link from "next/link";
import type { ReactNode } from "react";

const paths: Record<string, ReactNode> = {
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  northeast: (
    <>
      <path d="M6 18 18 6M6 6h12v12" />
    </>
  ),
  code: (
    <>
      <path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18" />
    </>
  ),
  spark: (
    <>
      <path d="m12 2 2.8 7.2L22 12l-7.2 2.8L12 22l-2.8-7.2L2 12l7.2-2.8L12 2Z" />
    </>
  ),
  workflow: (
    <>
      <rect x="2" y="3" width="7" height="6" rx="1" />
      <rect x="15" y="15" width="7" height="6" rx="1" />
      <path d="M5 9v9h10M9 6h9v9" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m16 8-2 6-6 2 2-6 6-2Z" />
    </>
  ),
  sensor: (
    <>
      <circle cx="12" cy="12" r="2" />
      <path d="M7 7a7 7 0 0 0 0 10M17 7a7 7 0 0 1 0 10M4 4a11 11 0 0 0 0 16M20 4a11 11 0 0 1 0 16" />
    </>
  ),
  book: (
    <>
      <path d="M12 5v16M3 3c4 0 6 0 9 2 3-2 5-2 9-2v15c-4 0-6 0-9 3-3-3-5-3-9-3V3Z" />
    </>
  ),
  chart: (
    <>
      <path d="M4 3v17h17M8 15l4-5 4 2 5-7M16 5h5v5" />
    </>
  ),
  wallet: (
    <>
      <rect x="3" y="5" width="18" height="15" rx="2" />
      <path d="M3 6V4l14-2v3M16 11h5v5h-5z" />
    </>
  ),
  chat: (
    <>
      <path d="M4 3h16v14H9l-5 4V3ZM8 8h8M8 12h5" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" />
    </>
  ),
  layers: (
    <>
      <path d="m12 2 10 5-10 5L2 7l10-5ZM2 12l10 5 10-5M2 17l10 5 10-5" />
    </>
  ),
  bag: (
    <>
      <path d="M4 7h16l1 14H3L4 7ZM8 8V6a4 4 0 0 1 8 0v2" />
    </>
  ),
  box: (
    <>
      <path d="m12 2 9 5v10l-9 5-9-5V7l9-5ZM3 7l9 5 9-5M12 12v10M7 5l9 5" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="7" r="4" />
      <path d="M2 21v-3a7 7 0 0 1 14 0v3M16 3a4 4 0 0 1 0 8M18 14a6 6 0 0 1 4 6" />
    </>
  ),
  pulse: (
    <>
      <path d="M2 12h5l3-8 4 16 3-8h5" />
    </>
  ),
  leaf: (
    <>
      <path d="M20 3C7 1 1 9 5 16c7 8 16 0 15-13ZM4 21 15 10" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <ellipse cx="12" cy="12" rx="4" ry="9" />
      <path d="M3 12h18" />
    </>
  ),
  shield: (
    <>
      <path d="m12 2 9 4v7c0 5-9 9-9 9S3 18 3 13V6l9-4Z" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),
};
export function Icon({
  name = "spark",
  size = 24,
  className = "",
}: {
  name?: string;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name] || paths.spark}
    </svg>
  );
}
export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className="brand">
      <span className="brand-mark" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      {!compact && (
        <span>
          cf<span className="brand-light">intelligence</span>
          <span className="brand-period">.</span>
        </span>
      )}
    </span>
  );
}
export function ButtonLink({
  href,
  children,
  secondary = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`button ${secondary ? "button-secondary" : "button-primary"} ${className}`}
    >
      {children}
      <Icon name="arrow" size={18} />
    </Link>
  );
}
export function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className={`section-heading ${light ? "on-light" : ""}`}>
      <span className="eyebrow">
        <span />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero container">
      <span className="eyebrow">
        <span />
        {eyebrow}
      </span>
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </section>
  );
}
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
