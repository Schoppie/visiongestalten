// Shared contact details and navigation targets for all pages.
export const CONTACT = {
  name: "Global Triangle",
  street: "Trotzenburger Str. 35",
  city: "25524 Itzehoe",
  phone: "0151 1780 53 63",
  phoneHref: "tel:+4915117805363",
  email: "info@global-triangle.de",
  taxNumber: "1817700473",
};

export const SERVICE_LINKS = [
  { to: "/business-coaching", label: "Coaching & Mentoring" },
  { to: "/grafik-webdesign-itzehoe", label: "Grafik & Webdesign" },
  { to: "/fotografie", label: "Fotografie" },
] as const;

export const SITE_URL = "https://global-triangle.de";
