// Shared search-engine metadata: canonical URLs, business data for Google (JSON-LD).
import { CONTACT, SITE_URL } from "@/content/site";

export const SITE_NAME = "Global Triangle";

/** Link the Google business profile here once known (e.g. Maps URL). */
export const SAME_AS: string[] = [];

export const BUSINESS_ID = `${SITE_URL}/#business`;

export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": BUSINESS_ID,
    name: SITE_NAME,
    description:
      "Werbeagentur in Itzehoe für Grafik & Webdesign, Business-Coaching und Fotografie – alles aus einer Hand.",
    url: `${SITE_URL}/`,
    telephone: "+49 151 17805363",
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: CONTACT.street,
      postalCode: "25524",
      addressLocality: "Itzehoe",
      addressRegion: "Schleswig-Holstein",
      addressCountry: "DE",
    },
    areaServed: [
      { "@type": "City", name: "Itzehoe" },
      { "@type": "AdministrativeArea", name: "Kreis Steinburg" },
    ],
    knowsAbout: ["Werbeagentur", "Webdesign", "Grafikdesign", "Business Coaching", "Fotografie"],
    employee: [
      { "@type": "Person", name: "Ira Köhnke", jobTitle: "Business-Coachin" },
      { "@type": "Person", name: "Eyke Szopieray", jobTitle: "Grafik- & Webdesignerin" },
      { "@type": "Person", name: "Tonja Fritz-Johnson", jobTitle: "Fotografin" },
    ],
    ...(SAME_AS.length ? { sameAs: SAME_AS } : {}),
  };
}

interface PageHeadInput {
  path: string;
  title: string;
  description: string;
  noindex?: boolean;
  jsonLd?: object[];
}

export function pageHead({ path, title, description, noindex, jsonLd = [] }: PageHeadInput) {
  const url = `${SITE_URL}${path === "/" ? "/" : path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      ...(noindex ? [{ name: "robots", content: "noindex, follow" }] : []),
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: jsonLd.map((data) => ({
      type: "application/ld+json",
      children: JSON.stringify(data),
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function serviceJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: [
      { "@type": "City", name: "Itzehoe" },
      { "@type": "AdministrativeArea", name: "Kreis Steinburg" },
    ],
  };
}
