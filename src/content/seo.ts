// Shared search-engine metadata: canonical URLs, business data for Google (JSON-LD).
import { CONTACT, SITE_URL } from "@/content/site";

export const SITE_NAME = "Global Triangle";

/** Google business profile (Maps) – connects the website with the listing. */
export const GOOGLE_MAPS_URL = "https://maps.google.com/maps?cid=1563202960694398056";
export const GOOGLE_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=ChIJV2dTvmHFs0cRaEwHgM-csRU";
export const SAME_AS: string[] = [GOOGLE_MAPS_URL];

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
    hasMap: GOOGLE_MAPS_URL,
    // Same opening hours as the Google business profile.
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
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
