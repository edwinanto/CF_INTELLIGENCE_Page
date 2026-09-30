import { ButtonLink } from "@/components/ui";
export default function NotFound() {
  return (
    <section className="container page-hero">
      <span className="eyebrow">404 / Un nuevo camino</span>
      <h1>Esta página no está aquí.</h1>
      <p>
        Puedes volver al inicio y explorar las soluciones de CF Intelligence.
      </p>
      <ButtonLink href="/">Volver al inicio</ButtonLink>
    </section>
  );
}
