export const officialSiteUrl = "https://cf.app";

export function resolveSeoConfig(env: Record<string, string | undefined>) {
  const url = new URL(env.SITE_URL?.trim() || officialSiteUrl);
  if (
    url.protocol !== "https:" ||
    url.username ||
    url.password ||
    url.port ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error(
      "SITE_URL debe ser un dominio HTTPS sin ruta, puerto, credenciales ni parámetros.",
    );
  }
  return {
    siteUrl: url.origin,
    indexable: env.NODE_ENV === "production" && env.SITE_INDEXABLE !== "false",
  };
}

// These pages still contain pending material; enable indexing once it is complete.
export const excludedFromSearch = new Set(["/privacidad", "/proyectos"]);

export const seoPages: Record<string, { title: string; description: string }> =
  {
    "/": {
      title: "Software e inteligencia artificial en Perú",
      description:
        "CF Intelligence desarrolla software a medida, integra sistemas y automatiza procesos con IA. Consultoría tecnológica y productos SaaS para empresas en Perú.",
    },
    "/servicios": {
      title: "Servicios tecnológicos para empresas en Perú",
      description:
        "Conoce nuestros servicios de software, inteligencia artificial, automatización, consultoría TI, IoT y capacitación para mejorar la operación de tu empresa.",
    },
    "/desarrollo-de-software": {
      title: "Desarrollo de software a medida en Perú",
      description:
        "Desarrollamos aplicaciones web, móviles, ERP, CRM y sistemas empresariales. Software a medida e integraciones adaptadas a los procesos de tu empresa.",
    },
    "/inteligencia-artificial": {
      title: "Inteligencia artificial para empresas en Perú",
      description:
        "Integra agentes de IA, asistentes y procesamiento de documentos en tu empresa. Diseñamos soluciones con datos autorizados y supervisión humana.",
    },
    "/automatizacion": {
      title: "Automatización de procesos empresariales",
      description:
        "Automatiza tareas, aprobaciones y reportes. Conectamos sistemas mediante APIs, flujos de trabajo y RPA para reducir el trabajo manual de tu equipo.",
    },
    "/consultoria": {
      title: "Consultoría tecnológica y TI en Perú",
      description:
        "Evalúa tus sistemas, infraestructura y procesos. Consultoría TI, diagnóstico tecnológico y una hoja de ruta para la transformación digital de tu empresa.",
    },
    "/iot": {
      title: "Desarrollo IoT y monitoreo remoto en Perú",
      description:
        "Conectamos sensores, dispositivos y plataformas. Soluciones IoT de telemetría, monitoreo remoto y alertas para convertir datos de campo en información útil.",
    },
    "/capacitacion": {
      title: "Capacitación en IA y tecnología para empresas",
      description:
        "Formación corporativa en inteligencia artificial, automatización, programación, Excel y Power BI. Programas prácticos, virtuales o presenciales.",
    },
    "/productos": {
      title: "Productos SaaS para empresas",
      description:
        "Explora los productos digitales de CF Intelligence. Conoce ClosetFlow, nuestra plataforma SaaS para conectar ventas, inventarios y gestión comercial.",
    },
    "/industrias": {
      title: "Software y automatización por industria",
      description:
        "Aplicaciones de software, IA e IoT para retail, logística, servicios, minería y más sectores. Diseñamos tecnología a partir del contexto de tu operación.",
    },
    "/blog": {
      title: "Blog de IA, software y automatización",
      description:
        "Guías para aplicar inteligencia artificial, automatizar procesos y desarrollar software empresarial. Ideas para tomar mejores decisiones tecnológicas.",
    },
    "/nosotros": {
      title: "Empresa de software y consultoría tecnológica",
      description:
        "Conoce CF Intelligence: consultoría, desarrollo de software, inteligencia artificial y productos SaaS. Desde el análisis de negocio hasta la implementación.",
    },
    "/contacto": {
      title: "Contacta a CF Intelligence | Cuéntanos tu proyecto",
      description:
        "Conversemos sobre tu proyecto de software, inteligencia artificial o automatización. Cuéntanos qué proceso necesitas mejorar y evaluemos una solución.",
    },
  };
