
export const WHATSAPP_LINK = "https://wa.me/51925396979?text=Hola,%20quiero%20asesoría%20en%20ingeniería%20y%20páginas%20web%20profesionales";

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
