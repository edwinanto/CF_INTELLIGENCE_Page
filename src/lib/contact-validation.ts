export const contactServices = [
  "Desarrollo de software",
  "Inteligencia artificial",
  "Automatización",
  "Consultoría",
  "IoT",
  "Capacitación",
  "Producto SaaS",
  "Otro",
];
export type ContactData = {
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
  website: string;
};
export type ContactErrors = Partial<Record<keyof ContactData, string>>;
export function validateContact(input: unknown): {
  data?: ContactData;
  errors: ContactErrors;
} {
  if (!input || typeof input !== "object" || Array.isArray(input))
    return { errors: { name: "Completa los datos de la consulta." } };
  const raw = input as Record<string, unknown>;
  const value = (key: string) =>
    typeof raw[key] === "string" ? raw[key].trim() : "";
  const data: ContactData = {
    name: value("name"),
    company: value("company"),
    role: value("role"),
    email: value("email"),
    phone: value("phone"),
    service: value("service"),
    message: value("message"),
    consent: raw.consent === true,
    website: value("website"),
  };
  const errors: ContactErrors = {};
  if (data.name.length < 2 || data.name.length > 100)
    errors.name = "Escribe tu nombre (entre 2 y 100 caracteres).";
  if (data.company.length < 2 || data.company.length > 160)
    errors.company = "Escribe el nombre de tu empresa.";
  if (data.role.length > 100) errors.role = "Usa hasta 100 caracteres.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) || data.email.length > 254)
    errors.email = "Escribe un correo válido.";
  if (data.phone && !/^[+\d\s().-]{6,30}$/.test(data.phone))
    errors.phone = "Revisa el teléfono o deja el campo vacío.";
  if (!contactServices.includes(data.service))
    errors.service = "Selecciona un servicio.";
  if (data.message.length < 20 || data.message.length > 3000)
    errors.message = "Cuéntanos tu necesidad en 20 a 3000 caracteres.";
  if (!data.consent)
    errors.consent = "Necesitamos tu autorización para responder la consulta.";
  return { data: Object.keys(errors).length ? undefined : data, errors };
}
