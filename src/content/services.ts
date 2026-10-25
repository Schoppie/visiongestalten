// Texte der drei Themen-Seiten – übernommen von der bisherigen global-triangle.de.
import iraImgUrl from "@/assets/gt/ira-hd.jpg";
import eykeImgUrl from "@/assets/gt/eyke-hd.jpg";
import tonjaImgUrl from "@/assets/gt/tonja.jpg";
import { breadcrumbJsonLd, pageHead, serviceJsonLd } from "@/content/seo";

export interface ServiceContent {
  slug: "/business-coaching" | "/grafik-webdesign-itzehoe" | "/fotografie";
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  image: string;
  imageAlt: string;
  imagePosition?: string;
  person: { name: string; role: string };
  quote?: string;
  highlightsTitle: string;
  highlights: string[];
  bodyTitle: string;
  body: string[];
  topics?: { title: string; intro?: string; items: { title: string; text: string }[] };
  about?: { title: string; paragraphs: string[] };
  references?: { intro: string; items: { name: string; text: string }[] };
  extraLink?: { href: string; label: string; text: string };
}

export const SERVICES: ServiceContent[] = [
  {
    slug: "/business-coaching",
    eyebrow: "Business Coaching in Itzehoe",
    title: "Coaching & Mentoring",
    metaTitle: "Business Coaching Itzehoe – Ira Köhnke | Global Triangle",
    metaDescription:
      "Business Coaching in Itzehoe mit Ira Köhnke: Einzel-, Gruppen- und Online-Coaching zu Karriere, Kommunikation, Strategie und Stressbewältigung. Jetzt Kontakt aufnehmen.",
    intro: [
      "Ich helfe dir dabei, die Entwicklung deines Unternehmens nicht nur zu verbessern, sondern es auch nachhaltig zu unterstützen.",
      "Dabei bin ich dein Kompass für all die wichtigen Aufgaben, die du mit deiner Firma in Zukunft verfolgen möchtest.",
    ],
    image: iraImgUrl,
    imageAlt: "Ira Köhnke – Business-Coachin in Itzehoe",
    person: { name: "Ira Köhnke", role: "Coaching & Mentoring" },
    quote:
      "Ich möchte mein Wissen an dich weitergeben, damit du dir sowohl in deinem Beruf als auch in deinem Privatleben mehr Freiheiten schaffen kannst.",
    highlightsTitle: "Mein Coaching umfasst",
    highlights: [
      "Businesscoaching",
      "Individuelles Coaching",
      "Gruppencoaching",
      "Online-Coaching",
      "Personal Coaching",
    ],
    bodyTitle: "Erfahrung, die dich wachsen lässt",
    body: [
      "Durch meine langjährige Tätigkeit habe ich ein großes und breitgefächertes Wissen in den Bereichen des Strukturaufbaus, in der Projektplanung sowie in der Prozessoptimierung erworben.",
      "Mein umfangreiches Wissen erstreckt sich nicht nur über mehrere Jahrzehnte, sondern befasst sich zudem sowohl mit den Strukturen in Start-ups als auch mit denen in Großunternehmen.",
      "Dank meines Rates und meiner Erfahrung kannst du wachsen, während dein Business in die richtigen und vor allem erfolgreichen Bahnen gelenkt wird.",
    ],
    topics: {
      title: "Wir werfen einen gemeinsamen Blick auf deinen aktuellen Konflikt",
      intro: "Was erwartet dich in meinem Business Coaching:",
      items: [
        {
          title: "Karriereentwicklung",
          text: "Einzelpersonen können mein Business Coaching in Anspruch nehmen, um ihre Karriereziele zu definieren und zu erreichen.",
        },
        {
          title: "Stressbewältigung",
          text: "Kann Führungskräften und Mitarbeitern helfen, Stress und Burnout zu bewältigen und einen ausgewogenen Lebensstil zu pflegen.",
        },
        {
          title: "Kommunikation",
          text: "Effektive Kommunikation ist entscheidend im Geschäftsbereich. Kommunikationsfähigkeiten verbessern, Konflikte lösen und Teamarbeit fördern sind meine Ziele für dich.",
        },
        {
          title: "Zielsetzung und Strategie",
          text: "Einzelpersonen bei der Definition klarer Ziele und der Entwicklung von Strategien zur Erreichung dieser Ziele unterstützen.",
        },
        {
          title: "Selbstreflexion und Selbstbewusstsein",
          text: "Selbstvertrauen stärken, die Selbstwahrnehmung verbessern und persönliche Hindernisse überwinden.",
        },
      ],
    },
    references: {
      intro:
        "Ein starker Verbund und eine gute Zusammenarbeit zeichnen Global Triangle aus. Gemeinsam mit Eyke und Tonja – oder auch mit jedem von uns einzeln – kannst du erfolgreich zusammenarbeiten, um deine Ziele zu erreichen und dein Geschäft weiter auszubauen.",
      items: [
        { name: "Horsess", text: "Pferdetrainerin" },
        { name: "Forensic Training Partnership", text: "Forensic Training Partnership" },
        { name: "Body Mind Health Training", text: "Mobiles Gesundheitstraining" },
      ],
    },
  },
  {
    slug: "/grafik-webdesign-itzehoe",
    eyebrow: "Webdesign & Grafikdesign in Itzehoe",
    title: "Grafik & Webdesign",
    metaTitle: "Webdesign Itzehoe – Homepage, Logo & Flyer | Global Triangle",
    metaDescription:
      "Webdesign und Grafikdesign in Itzehoe: Eyke Szopieray erstellt deine Homepage, dein Logo, Visitenkarten, Flyer und Außenwerbung – alles aus einer Hand.",
    intro: [
      "Du erhältst Visitenkarten, Flyer und eine neue Homepage, natürlich auch gerne ein Logo, Außenwerbung, Autobeschriftung, Fahnen, T-Shirts und das ganze Repertoire, wie du es dir wünscht.",
      "Ich fühle mich in deine Ideen für das Branding ein und stelle alles zusammen.",
    ],
    image: eykeImgUrl,
    imageAlt: "Eyke Szopieray – Grafik & Webdesign in Itzehoe",
    imagePosition: "50% 25%",
    person: { name: "Eyke Szopieray", role: "Grafik & Webdesign" },
    highlightsTitle: "Dein Werbepaket",
    highlights: [
      "Logo & Branding",
      "Visitenkarten & Flyer",
      "Homepage",
      "Außenwerbung & Beschilderung",
      "Autobeschriftung",
      "Fahnen & T-Shirts",
    ],
    bodyTitle: "Alles aus einer Hand",
    body: [
      "Meine Fähigkeiten im Grafikdesign & Webdesign, gepaart mit meinem Hintergrund im Marketing, machen mich zu einer wertvollen Ressource für dein Unternehmen, wenn du dein Branding und deine Präsenz verbessern möchtest.",
      "Ich bin in der Lage, dir ein umfassendes Werbepaket anzubieten.",
      "Mit Global Triangle bist du mit deinem Business umfassend versorgt, vom Coaching bis zum Erfolg!",
    ],
    about: {
      title: "Eyke Szopieray – Grafikdesign & Webdesign in Itzehoe",
      paragraphs: [
        "Seit ich 12 Jahre alt bin, lebe ich in Itzehoe, mit ein paar Jahren zwischendurch in Münster und in Kassel.",
        "Ich arbeite als Marketing-Managerin für die collana apps GmbH in Itzehoe. Hier vermarkte ich die Instandhaltungssoftware maintool. Ich bin gelernte Schriftsetzerin (heute Mediengestalterin).",
        "Seit Oktober 2024 vermarkte ich zusätzlich zum Marketing Häuser für die Deutsche Bank Immobilien als selbständige Immobilienberaterin.",
        "Mein Hobby widme ich als Übungsleiterin den Kindern in der Schwimmschule des SCI Itzehoe.",
        "Gerne gestalte und entwerfe ich dein ganzes Werbeportfolio. Mein Kopf ist voller Ideen und ich liebe es, kreativ zu sein. Mein Abitur absolvierte ich im Kunst-Leistungskurs der AVS Itzehoe. Mein Sinn für Kreativität begleitet mich vom Kindesalter an.",
        "Mit dem richtigen Gespür für Form und Farbe gestalte ich deinen ersten Unternehmensauftritt oder die Überarbeitung deines Unternehmensauftritts mit neuem Pfiff.",
      ],
    },
  },
  {
    slug: "/fotografie",
    eyebrow: "Fotografie in Itzehoe und Umgebung",
    title: "Fotografie",
    metaTitle: "Fotografin Itzehoe – Business-Fotos & Portraits | Global Triangle",
    metaDescription:
      "Business-Fotografie in Itzehoe: Portraits, Headshots, Teamfotos und Imageaufnahmen für Website, Social Media und Print – authentisch fotografiert von Tonja Fritz-Johnson.",
    intro: [
      "Deine Bilder sind mehr als nur Fotos – sie sind das Aushängeschild deines Unternehmens. Mein Ziel ist es, dein Image authentisch widerzuspiegeln und genau die Kunden anzulocken, die zu dir passen.",
      "Deshalb biete ich professionelle, branchenübergreifende Fotografie in Itzehoe und Umgebung an, die dich und dein Business optimal in Szene setzt.",
    ],
    image: tonjaImgUrl,
    imageAlt: "Tonja Fritz-Johnson – Fotografin für Business-Fotos in Itzehoe",
    person: { name: "Tonja Fritz-Johnson", role: "Fotografie" },
    highlightsTitle: "Ob für Website, Social Media oder Print",
    highlights: ["Portraits & Headshots", "Teamfotos", "Imageaufnahmen", "Vielseitig einsetzbare Bildserien"],
    bodyTitle: "Lass uns zusammen deine Geschichte fotografieren",
    body: [
      "Gemeinsam mit dir, Ira und Eyke vom Design-Team entwickle ich ein individuelles Konzept, das deine Werte und deine Einzigartigkeit sichtbar macht. Ich setze mich persönlich für deinen Erfolg ein und sorge dafür, dass du dich auf dein Business konzentrieren kannst.",
      "Damit dein Investment langfristig wirkt, erstelle ich vielseitig einsetzbare Fotos, die du flexibel für deine Website, Social Media oder Printmedien nutzen kannst. So kannst du deine Inhalte jederzeit anpassen, ohne ständig neue Bilder produzieren zu müssen.",
      "Eine gute Planung ist der Schlüssel zu ausdrucksstarken Bildern. Deshalb besprechen wir im Voraus deine Wünsche und Ziele, damit jedes Detail stimmt. Ob Portraits, Teamfotos oder Imageaufnahmen – gemeinsam rücken wir dein Projekt ins richtige Licht und schaffen Bilder, die dich natürlich wirken lassen.",
      "Lass uns zusammen deine Geschichte schreiben, bzw. fotografieren!",
    ],
    extraLink: {
      href: "http://www.wallingfordportraits.co.uk/about",
      label: "wallingfordportraits.co.uk",
      text: "Hier findest du einige Headshots & Portraits.",
    },
  },
];

export function getService(slug: ServiceContent["slug"]) {
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) throw new Error(`Unknown service ${slug}`);
  return s;
}

export function serviceHead(s: ServiceContent) {
  return pageHead({
    path: s.slug,
    title: s.metaTitle,
    description: s.metaDescription,
    jsonLd: [
      serviceJsonLd(s.eyebrow, s.metaDescription, s.slug),
      breadcrumbJsonLd([
        { name: "Start", path: "/" },
        { name: s.title, path: s.slug },
      ]),
    ],
  });
}
