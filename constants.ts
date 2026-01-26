
export const WHATSAPP_BASE = "https://wa.me/51925396979";

export const WHATSAPP_LINKS = {
  ENGINEERING: `${WHATSAPP_BASE}?text=Hola%20ProWeb,%20estoy%20interesado%20en%20una%20asesor%C3%ADa%20de%20Ingenier%C3%ADa%20para%20mi%20proyecto.%20%C2%BFPodr%C3%ADan%20brindarme%20informaci%C3%B3n?`,
  WEB: `${WHATSAPP_BASE}?text=Hola%20ProWeb,%20vi%20su%20sitio%20y%20quiero%20una%20p%C3%A1gina%20web%20profesional%20para%20mi%20negocio.%20%C2%BFPodria%20darme%20informacion?`
};

export const WHATSAPP_LINK = WHATSAPP_LINKS.WEB; // Default fallback

export enum SectionId {
  Hero = "inicio",
  About = "nosotros",
  Services = "servicios",
  ValueProp = "propuesta",
  Process = "proceso",
}

export const NAV_LINKS = [
  { name: "Inicio", href: `#${SectionId.Hero}` },
  { name: "Nosotros", href: `#${SectionId.About}` },
  { name: "Servicios", href: `#${SectionId.Services}` },
  { name: "Valor", href: `#${SectionId.ValueProp}` },
  { name: "Proceso", href: `#${SectionId.Process}` },
];
