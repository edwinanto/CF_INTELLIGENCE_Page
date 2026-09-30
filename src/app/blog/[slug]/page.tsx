import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/lib/articles";
import { metadata, siteUrl } from "@/lib/seo";
import { Icon, JsonLd } from "@/components/ui";
import { CTASection, ArticleCard } from "@/components/sections";
export const dynamicParams = false;
export const generateStaticParams = () =>
  articles.map((a) => ({ slug: a.slug }));
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  if (!a) return {};
  const base = metadata(a.title, a.excerpt, `/blog/${slug}`);
  return {
    ...base,
    openGraph: { ...base.openGraph, type: "article" as const },
  };
}
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();
  return (
    <>
      <article className="container article-page">
        <Link href="/blog" className="text-link">
          <span aria-hidden="true">←</span> Ideas y recursos
        </Link>
        <header>
          <span className="eyebrow">
            {article.category} · {article.readTime} de lectura
          </span>
          <h1>{article.title}</h1>
          <p>{article.excerpt}</p>
          <span className="article-author">
            <Icon name="spark" size={18} /> Equipo editorial de CF Intelligence
          </span>
        </header>
        <div className="article-body">
          <aside>
            <span className="eyebrow">En este artículo</span>
            {article.sections.map((s, i) => (
              <a href={`#seccion-${i}`} key={s.title}>
                {s.title}
              </a>
            ))}
          </aside>
          <div className="prose">
            {article.sections.map((s, i) => (
              <section id={`seccion-${i}`} key={s.title}>
                <h2>{s.title}</h2>
                <p>{s.text}</p>
              </section>
            ))}
            <p className="article-ending">
              Cada proceso tiene su contexto.{" "}
              <Link href="/contacto">Conversemos sobre el tuyo.</Link>
            </p>
          </div>
        </div>
      </article>
      <section className="container section">
        <h2 className="related-title">Sigue explorando</h2>
        <div className="article-grid">
          {articles
            .filter((a) => a.slug !== slug)
            .map((a, i) => (
              <ArticleCard key={a.slug} article={a} index={i} />
            ))}
        </div>
      </section>
      <CTASection />
      {siteUrl && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            articleSection: article.category,
            author: {
              "@type": "Organization",
              name: "CF Intelligence",
              url: siteUrl,
            },
            publisher: { "@id": `${siteUrl}/#organization` },
            mainEntityOfPage: `${siteUrl}/blog/${slug}`,
            inLanguage: "es-PE",
          }}
        />
      )}
    </>
  );
}
