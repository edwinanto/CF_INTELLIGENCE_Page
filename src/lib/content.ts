export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string;
  eyebrow: string;
  headline: string;
  description: string;
  applications: string[];
  deliverables: string[];
  question: string;
};
export const services: Service[] = [
  {
    slug: "desarrollo-de-software",
    title: "Desarrollo de software",
    short: "Software que se adapta a tu operación. Y crece con ella.",
    icon: "code",
    eyebrow: "Software a medida",
    headline: "Tu negocio tiene su propia lógica. Tu software también debería.",
    description:
      "Diseñamos aplicaciones web, móviles y sistemas empresariales a partir de tus procesos. Desde una herramienta interna hasta una plataforma SaaS, conectamos la experiencia de las personas con la operación del negocio.",
    applications: [
      "Aplicaciones web y móviles",
      "ERP, CRM y sistemas administrativos",
      "Puntos de venta y comercio electrónico",
      "Plataformas SaaS y portales internos",
      "APIs e integración de sistemas",
      "Modernización de software existente",
    ],
    deliverables: [
      "Mapa de procesos y alcance priorizado",
      "Prototipo y arquitectura de la solución",
      "Software probado y documentación",
      "Despliegue, transferencia y plan de evolución",
    ],
    question: "¿Tu equipo adapta su trabajo a las limitaciones de un sistema?",
  },
  {
    slug: "inteligencia-artificial",
    title: "Inteligencia artificial",
    short: "Convierte tus datos en decisiones y acciones concretas.",
    icon: "spark",
    eyebrow: "IA aplicada al negocio",
    headline: "La inteligencia artificial empieza con un problema real.",
    description:
      "Diseñamos asistentes, agentes y herramientas de análisis que utilizan la información de tu empresa. Definimos qué decisiones puede apoyar la IA, qué acciones puede ejecutar y cuándo necesita revisión humana.",
    applications: [
      "Agentes y asistentes inteligentes",
      "Búsqueda en documentación empresarial",
      "Procesamiento inteligente de documentos",
      "IA generativa y lenguaje natural",
      "Análisis predictivo y machine learning",
      "Visión artificial y análisis de imágenes",
    ],
    deliverables: [
      "Evaluación de viabilidad y calidad de datos",
      "Prototipo con criterios de evaluación",
      "Integraciones y permisos delimitados",
      "Monitoreo, trazabilidad y supervisión humana",
    ],
    question:
      "¿Tienes información valiosa que todavía cuesta consultar o utilizar?",
  },
  {
    slug: "automatizacion",
    title: "Automatización",
    short: "Menos tareas repetitivas. Más tiempo para lo que importa.",
    icon: "workflow",
    eyebrow: "Operaciones conectadas",
    headline: "Haz que tus procesos avancen. Sin perseguir cada tarea.",
    description:
      "Conectamos aplicaciones, información y equipos para reducir el trabajo manual. Diseñamos flujos con validaciones, alertas y seguimiento para que cada operación tenga un siguiente paso claro.",
    applications: [
      "Flujos de aprobación y seguimiento",
      "Integraciones mediante APIs y webhooks",
      "Automatización documental",
      "Notificaciones y reportes programados",
      "RPA para tareas repetitivas",
      "Agentes con acciones y permisos definidos",
    ],
    deliverables: [
      "Mapa del proceso y sus excepciones",
      "Flujos integrados con sistemas existentes",
      "Registro de ejecuciones y gestión de errores",
      "Indicadores y documentación operativa",
    ],
    question:
      "¿Cuántas veces copia tu equipo la misma información entre sistemas?",
  },
  {
    slug: "consultoria",
    title: "Consultoría tecnológica",
    short: "Decisiones tecnológicas con una dirección de negocio clara.",
    icon: "compass",
    eyebrow: "Estrategia antes de construir",
    headline: "Primero entendemos el negocio. Después definimos la tecnología.",
    description:
      "Evaluamos procesos, sistemas e infraestructura para ayudarte a decidir qué mejorar, qué integrar y qué construir. Convertimos necesidades dispersas en una hoja de ruta con prioridades y criterios de inversión.",
    applications: [
      "Diagnóstico y transformación digital",
      "Auditoría de sistemas y arquitectura",
      "Infraestructura, cloud y redes",
      "Bases de datos y calidad de información",
      "Seguridad y continuidad del negocio",
      "Evaluación de IA y automatización",
    ],
    deliverables: [
      "Diagnóstico del estado actual",
      "Riesgos y oportunidades priorizados",
      "Arquitectura objetivo y alternativas",
      "Hoja de ruta con dependencias y alcance",
    ],
    question: "¿Necesitas claridad antes de invertir en tecnología?",
  },
  {
    slug: "iot",
    title: "Internet de las cosas",
    short: "Conecta el mundo físico con decisiones en tiempo real.",
    icon: "sensor",
    eyebrow: "Del sensor a la operación",
    headline: "Lo que ocurre en campo también puede ser información útil.",
    description:
      "Diseñamos soluciones para capturar datos de dispositivos y convertirlos en monitoreo, alertas y acciones. Integramos sensores, sistemas embebidos, conectividad y aplicaciones en una misma arquitectura.",
    applications: [
      "Telemetría y adquisición de datos",
      "Sensores y dispositivos ESP32",
      "Monitoreo y control remoto",
      "Dashboards y alertas operativas",
      "Integración IoT, cloud e IA",
      "Exploración de agricultura tecnológica",
    ],
    deliverables: [
      "Evaluación de conectividad y entorno",
      "Prototipo de captura de datos",
      "Plataforma de monitoreo e integración",
      "Plan de instalación y mantenimiento",
    ],
    question:
      "¿Tu operación necesita visibilidad de lo que ocurre fuera de la oficina?",
  },
  {
    slug: "capacitacion",
    title: "Capacitación",
    short: "Conocimiento que tu equipo puede poner en práctica.",
    icon: "book",
    eyebrow: "Aprender para aplicar",
    headline: "La tecnología funciona mejor cuando tu equipo sabe usarla.",
    description:
      "Diseñamos programas para empresas y profesionales a partir de su nivel y sus objetivos. Trabajamos con ejercicios y situaciones de negocio para convertir nuevos conocimientos en capacidades aplicables.",
    applications: [
      "Inteligencia artificial y automatización",
      "Programación y desarrollo web",
      "Excel y Power BI",
      "Bases de datos y análisis de información",
      "Transformación digital",
      "Gestión tecnológica",
    ],
    deliverables: [
      "Diagnóstico de necesidades de aprendizaje",
      "Programa y ejercicios personalizados",
      "Sesiones presenciales, virtuales o workshops",
      "Material de consulta y evaluación práctica",
    ],
    question: "¿Qué podría hacer tu equipo con las herramientas adecuadas?",
  },
];
export const agents = [
  {
    name: "Comercial",
    icon: "chart",
    text: "Organiza oportunidades, consulta el historial de clientes y prepara el seguimiento comercial.",
    tasks: [
      "Consultar oportunidades",
      "Preparar seguimientos",
      "Resumir interacciones",
    ],
  },
  {
    name: "Financiero",
    icon: "wallet",
    text: "Organiza documentos y ayuda a detectar diferencias para que tu equipo pueda revisarlas.",
    tasks: [
      "Clasificar documentos",
      "Identificar diferencias",
      "Preparar reportes",
    ],
  },
  {
    name: "Operaciones",
    icon: "workflow",
    text: "Coordina tareas entre sistemas y alerta sobre pasos pendientes o excepciones.",
    tasks: ["Consultar estados", "Crear tareas", "Alertar incidencias"],
  },
  {
    name: "Marketing",
    icon: "spark",
    text: "Apoya la planificación de contenidos y reúne información para evaluar campañas.",
    tasks: [
      "Preparar borradores",
      "Organizar campañas",
      "Consolidar información",
    ],
  },
  {
    name: "Soporte",
    icon: "chat",
    text: "Encuentra respuestas en documentación aprobada y deriva las consultas que requieren atención humana.",
    tasks: [
      "Consultar documentación",
      "Clasificar consultas",
      "Derivar incidencias",
    ],
  },
  {
    name: "Datos",
    icon: "database",
    text: "Consulta fuentes autorizadas y transforma información dispersa en reportes comprensibles.",
    tasks: ["Consultar información", "Generar resúmenes", "Detectar anomalías"],
  },
  {
    name: "Proyectos",
    icon: "layers",
    text: "Consolida avances, identifica pendientes y facilita el seguimiento del equipo.",
    tasks: ["Resumir avances", "Organizar pendientes", "Crear reportes"],
  },
  {
    name: "Tecnología",
    icon: "code",
    text: "Facilita la consulta de documentación técnica y el seguimiento de eventos operativos.",
    tasks: ["Consultar sistemas", "Documentar procesos", "Clasificar eventos"],
  },
];
export const steps = [
  ["Descubrimos", "Entendemos tu negocio, las personas y el problema."],
  ["Analizamos", "Identificamos oportunidades y definimos prioridades."],
  ["Diseñamos", "Damos forma a la experiencia y la arquitectura."],
  ["Desarrollamos", "Construimos y validamos la solución por etapas."],
  ["Integramos", "Conectamos tus sistemas, plataformas y datos."],
  ["Implementamos", "Desplegamos y acompañamos la puesta en marcha."],
  ["Medimos", "Evaluamos el uso y los resultados del proceso."],
  ["Mejoramos", "Evolucionamos con las necesidades del negocio."],
];
export const industries = [
  {
    name: "Retail y comercio",
    icon: "bag",
    text: "Conecta ventas, inventario y clientes.",
    detail:
      "Centraliza productos y variantes, da seguimiento a movimientos de inventario y conecta los canales de venta con la operación comercial.",
    applications: [
      "Punto de venta",
      "Inventario y variantes",
      "Catálogo online",
    ],
  },
  {
    name: "Logística",
    icon: "box",
    text: "Información que acompaña cada movimiento.",
    detail:
      "Da visibilidad a solicitudes, entregas e incidencias. Integra información operativa para reducir la coordinación manual entre equipos.",
    applications: ["Trazabilidad", "Gestión de entregas", "Alertas operativas"],
  },
  {
    name: "Servicios",
    icon: "layers",
    text: "Procesos claros de principio a fin.",
    detail:
      "Organiza solicitudes, asignación de responsables y seguimiento de atención con una vista compartida del trabajo.",
    applications: [
      "Gestión de solicitudes",
      "CRM",
      "Automatización documental",
    ],
  },
  {
    name: "Minería",
    icon: "sensor",
    text: "Visibilidad para operaciones distribuidas.",
    detail:
      "Explora la captura de datos operativos y la integración de reportes para acompañar decisiones de mantenimiento y supervisión.",
    applications: ["Telemetría", "Reportes de campo", "Monitoreo de activos"],
  },
  {
    name: "Recursos humanos",
    icon: "people",
    text: "Más espacio para las personas.",
    detail:
      "Ordena solicitudes internas, documentos y tareas de incorporación, con permisos y seguimiento por responsable.",
    applications: ["Onboarding", "Portales internos", "Flujos de aprobación"],
  },
  {
    name: "Educación",
    icon: "book",
    text: "Conecta aprendizaje y gestión.",
    detail:
      "Diseña experiencias de formación y herramientas administrativas que faciliten el acceso a contenidos y el seguimiento de actividades.",
    applications: [
      "Plataformas educativas",
      "Gestión académica",
      "Asistentes de consulta",
    ],
  },
  {
    name: "Salud",
    icon: "pulse",
    text: "Información organizada para la gestión.",
    detail:
      "Mejora la coordinación administrativa y el acceso autorizado a información, considerando la sensibilidad de los datos desde el diseño.",
    applications: [
      "Gestión de citas",
      "Procesos administrativos",
      "Control de acceso",
    ],
  },
  {
    name: "Agricultura",
    icon: "leaf",
    text: "Un nuevo campo para la tecnología.",
    detail:
      "Área de innovación en exploración: sensores ambientales, monitoreo de cultivos, trazabilidad y automatización de riego. Su implementación requiere validar condiciones de campo.",
    applications: ["IoT agrícola", "Monitoreo ambiental", "Trazabilidad"],
  },
];
export const technologies = [
  ["Experiencias digitales", "React · Next.js · TypeScript"],
  ["Lógica de negocio", "Laravel · PHP · Node.js · Python"],
  ["Datos", "PostgreSQL · MySQL · SQL Server · Redis"],
  ["Infraestructura", "Docker · Linux · Nginx · Cloud"],
  ["Inteligencia artificial", "LLM · RAG · Agentes · Visión artificial"],
  ["Sistemas conectados", "REST APIs · Webhooks · ERP · CRM"],
];
export const faqs = [
  [
    "¿Necesito tener un proyecto completamente definido?",
    "No. Podemos empezar con un proceso que quieras mejorar o un problema que necesites resolver. La etapa de descubrimiento nos permite definir objetivos, alcance y una primera ruta de trabajo.",
  ],
  [
    "¿Pueden trabajar con los sistemas que ya utilizamos?",
    "Evaluamos los sistemas existentes y sus opciones de integración. Según sus APIs, documentación y restricciones, definimos cómo conectarlos o qué partes conviene modernizar.",
  ],
  [
    "¿Cómo se define el costo y el plazo de un proyecto?",
    "Dependen del alcance, las integraciones, la complejidad y los requisitos de operación. Después de entender la necesidad, preparamos una propuesta con etapas, entregables y condiciones claras.",
  ],
  [
    "¿La inteligencia artificial puede operar con supervisión humana?",
    "Sí. Definimos permisos, validaciones y puntos de revisión según el riesgo de cada acción. Las decisiones sensibles pueden requerir aprobación antes de ejecutarse.",
  ],
  [
    "¿Qué sucede después de implementar la solución?",
    "Acordamos el acompañamiento, mantenimiento y evolución que necesita el proyecto. La documentación y la transferencia de conocimiento forman parte de la entrega.",
  ],
];
export const products = [
  {
    slug: "closetflow",
    name: "ClosetFlow",
    category: "Gestión comercial · SaaS",
    description:
      "Una plataforma para conectar ventas, inventario y la gestión de tu comercio.",
    features: [
      "Punto de venta",
      "Inventario y variantes",
      "Ventas y control de caja",
      "Clientes y reportes",
      "Catálogo online",
      "Gestión multiempresa",
      "Integración de pagos",
      "Analítica comercial",
    ],
  },
];
