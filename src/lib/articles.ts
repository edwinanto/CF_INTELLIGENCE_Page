export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  symbol: string;
  sections: { title: string; text: string }[];
};
export const blogCategories = [
  "Inteligencia artificial",
  "Automatización",
  "Desarrollo de software",
  "SaaS",
  "Transformación digital",
  "IoT",
  "Cloud",
  "Ciberseguridad",
  "Datos",
  "Tecnología empresarial",
];
export const articles: Article[] = [
  {
    slug: "agentes-ia-en-la-empresa",
    title: "De asistentes a agentes: la IA dentro de tu operación.",
    category: "Inteligencia artificial",
    excerpt:
      "Qué puede hacer un agente, dónde aporta valor y qué necesitas definir antes de integrarlo.",
    readTime: "4 min",
    symbol: "spark",
    sections: [
      {
        title: "Empieza por una tarea concreta",
        text: "Un agente combina un modelo de inteligencia artificial con instrucciones, información y herramientas. En un contexto empresarial puede consultar un sistema, preparar un reporte o proponer la siguiente acción. Su utilidad depende de que la tarea esté delimitada: quién la solicita, qué información necesita y qué resultado se espera.",
      },
      {
        title: "El contexto importa tanto como el modelo",
        text: "Para responder sobre tu negocio, el agente necesita fuentes confiables y actualizadas. Una base documental sin responsables o con versiones contradictorias limita la calidad de las respuestas. Conviene identificar primero las fuentes autorizadas y los permisos de cada usuario.",
      },
      {
        title: "Define los límites de acción",
        text: "Consultar un pedido y modificarlo implican riesgos distintos. Separa las herramientas de lectura de las que cambian información. Establece aprobación humana para acciones sensibles y registra qué se solicitó, qué fuentes se consultaron y qué acción se ejecutó.",
      },
      {
        title: "Valida antes de ampliar",
        text: "Construye un conjunto de situaciones representativas, incluidos errores y preguntas sin respuesta. Evalúa precisión, utilidad, costo y manejo de excepciones. Un piloto acotado ayuda a descubrir limitaciones antes de extender el agente a más procesos.",
      },
    ],
  },
  {
    slug: "automatizar-procesos-empresariales",
    title: "El mejor proceso para automatizar no siempre es el más complejo.",
    category: "Automatización",
    excerpt:
      "Cómo elegir un primer flujo de trabajo con reglas claras y un impacto que puedas evaluar.",
    readTime: "4 min",
    symbol: "workflow",
    sections: [
      {
        title: "Busca repetición y reglas comprensibles",
        text: "Una tarea frecuente con entradas conocidas suele ser un buen punto de partida. Recibir un formulario, validar sus campos y asignar un responsable puede resultar más fácil de evaluar que automatizar un proceso lleno de decisiones informales.",
      },
      {
        title: "Dibuja el proceso actual",
        text: "Documenta cada paso, las personas que intervienen y los sistemas utilizados. Incluye excepciones: datos incompletos, aprobaciones rechazadas y servicios que no responden. Ese mapa permite distinguir qué conviene automatizar y qué necesita rediseñarse primero.",
      },
      {
        title: "Diseña la recuperación",
        text: "Un flujo también necesita saber qué hacer cuando falla. Define reintentos, prevención de duplicados, avisos y una forma de retomar el trabajo manualmente. El registro de ejecuciones ayuda a explicar qué ocurrió y a corregir el problema.",
      },
      {
        title: "Mide antes y después",
        text: "Establece una referencia del tiempo empleado, los errores y los casos que necesitan intervención. Después del piloto, compara esas mismas variables. Decide si ampliar el flujo a partir de la evidencia, considerando también el esfuerzo de mantenimiento.",
      },
    ],
  },
  {
    slug: "de-excel-a-software-empresarial",
    title: "Cuando tu operación empieza a superar a tus hojas de cálculo.",
    category: "Desarrollo de software",
    excerpt:
      "Señales para evaluar una aplicación empresarial y organizar una transición por etapas.",
    readTime: "4 min",
    symbol: "code",
    sections: [
      {
        title: "Reconoce qué está dejando de funcionar",
        text: "Las hojas de cálculo permiten experimentar y resolver necesidades rápidamente. La dificultad aparece cuando varias personas mantienen copias distintas, las validaciones dependen de memoria o resulta difícil reconstruir quién modificó un dato. Esas señales justifican revisar el proceso.",
      },
      {
        title: "Ordena las reglas del negocio",
        text: "Antes de desarrollar, identifica los datos, los responsables y las decisiones que hoy viven dentro de fórmulas o conversaciones. Define qué campos son obligatorios, quién puede editar y qué condiciones deben cumplirse para avanzar.",
      },
      {
        title: "Compara alternativas",
        text: "Una plataforma existente puede resolver necesidades comunes. El software a medida cobra sentido cuando los procesos, integraciones o requisitos de control necesitan un diseño propio. Compara costo total, adaptación, mantenimiento y facilidad para recuperar tus datos.",
      },
      {
        title: "Migra con una primera versión útil",
        text: "Selecciona un flujo completo y acotado, limpia los datos y valida la migración con las personas que lo usan. Define una fecha de corte y una estrategia de recuperación. Amplía la solución después de comprobar que la primera etapa funciona en la operación real.",
      },
    ],
  },
];
