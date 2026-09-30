# CF Intelligence — definición del sitio

## Arquitectura de información y sitemap

Sitio corporativo en español para responsables de negocio y equipos de TI en Perú. Tres recorridos: entender una solución, explorar productos y presentar una necesidad.

- `/`: propuesta de valor, capacidades, ecosistema IA, producto, metodología, industrias, recursos y contacto.
- `/nosotros`: propósito, principios y acompañamiento.
- `/servicios`: seis capacidades y acceso a cada especialidad.
- `/desarrollo-de-software`, `/inteligencia-artificial`, `/automatizacion`, `/consultoria`, `/iot`, `/capacitacion`: problema, enfoque, aplicaciones y entregables.
- `/productos`: catálogo extensible de productos propios.
- `/productos/closetflow`: presentación de la plataforma y solicitud de demostración.
- `/industrias`: aplicaciones por sector y agricultura como área de innovación.
- `/proyectos`: estructura de casos; no publicar referencias ni métricas sin evidencia.
- `/blog`: recursos filtrables por categoría.
- `/blog/[slug]`: artículos editoriales y navegación relacionada.
- `/contacto`: formulario de consulta con validación y adaptador para CRM.
- `/privacidad`: información transparente sobre el tratamiento del formulario; revisión legal pendiente antes de publicar.

## Sistema visual

- Fondo carbón #101211, superficies #181c19 y #20251f, texto marfil #f3f5ed, secundario #acb3a9, acento lima #d1f279.
- Tipografía sans serif de sistema, títulos de gran tamaño con tracking ajustado; etiquetas monoespaciadas.
- Contenedor de 1280 px, retícula de 12 columnas, espaciado base de 8 px. Secciones con 96–112 px de aire en escritorio y 64 px en móvil.
- Bordes finos, radios de 12–20 px, botones con contraste alto y foco visible.
- Diagramas SVG/CSS originales, sin fotografías de stock ni logotipos de terceros.
- Identificador tipográfico provisional CF Intelligence hasta recibir el logo oficial.
- Transiciones breves y respeto de `prefers-reduced-motion`.

## Estructura visual de inicio

1. Cabecera compacta con navegación, desplegable de servicios y CTA.
2. Hero editorial: promesa de negocio a la izquierda; diagrama de inteligencia aplicada a la derecha.
3. Franja de capacidades: estrategia, software, inteligencia artificial, automatización.
4. Retícula de seis servicios con descripción y enlace.
5. Ecosistema de agentes: núcleo CF y ocho funciones seleccionables; indicar que la plataforma está en desarrollo.
6. ClosetFlow: bloque claro, maqueta ilustrativa del producto y funcionalidades del brief.
7. Metodología en ocho etapas y tecnologías agrupadas.
8. Industrias, recursos y preguntas frecuentes.
9. CTA de diagnóstico y footer completo.

## Componentes y contenido

Header, Brand, MegaMenu, Footer, ButtonLink, SectionTitle, Icon, ServiceCard, ServiceGrid, IntelligenceDiagram, AgentExplorer, ProductShowcase, ProcessTimeline, IndustryExplorer, ArticleCard, BlogExplorer, FAQ, CTASection, ContactForm y JsonLd. Contenido de servicios, industrias, productos y artículos en módulos tipados independientes de la presentación.

## Arquitectura técnica

Next.js App Router, React, TypeScript y Tailwind CSS. Páginas prerenderizadas y componentes de servidor por defecto. Componentes cliente limitados a menú, filtros, agentes y formulario. Metadatos por página, Open Graph, Twitter Cards, canonical cuando exista dominio configurado, sitemap y robots. Schema Organization, WebSite, Service, SoftwareApplication, Article y BreadcrumbList según página.

El formulario valida en cliente y servidor. Solo anuncia envío exitoso cuando un webhook configurado confirma recepción. Sin conexión, muestra el estado real. No se inventan correo, teléfono, dirección, datos legales, testimonios ni estadísticas. Antes de producción: dominio, logo oficial, responsable legal y CRM. No se promete una puntuación Lighthouse sin medirla.
