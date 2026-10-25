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
    eyebrow: "KI-Coaching in Itzehoe",
    title: "KI-Coaching",
    metaTitle: "KI-Coaching Itzehoe – Gemini & Copilot mit Ira Köhnke | Global Triangle",
    metaDescription:
      "KI-Coaching in Itzehoe mit KI-Expertin Ira Köhnke: Lerne Google Gemini und Microsoft Copilot sicher im Arbeitsalltag zu nutzen – einzeln, im Team oder online.",
    intro: [
      "Künstliche Intelligenz kann dir jeden Tag Zeit sparen – wenn du weißt, wie du sie richtig einsetzt. Als KI-Expertin zeige ich dir, wie das geht.",
      "Mein Schwerpunkt liegt auf Google Gemini und Microsoft Copilot: Ich begleite dich von den ersten Schritten bis zum sicheren Einsatz in deinem Unternehmen.",
    ],
    image: iraImgUrl,
    imageAlt: "Ira Köhnke – KI-Expertin und KI-Coaching in Itzehoe",
    person: { name: "Ira Köhnke", role: "KI-Expertin" },
    quote:
      "Ich möchte mein Wissen an dich weitergeben, damit KI für dich zum echten Helfer wird – im Beruf und im Alltag.",
    highlightsTitle: "Mein KI-Coaching umfasst",
    highlights: [
      "Google Gemini",
      "Microsoft Copilot",
      "Einzelcoaching",
      "Teamschulungen",
      "Online-Coaching",
    ],
    bodyTitle: "Erfahrung, die dich weiterbringt",
    body: [
      "Durch meine langjährige Tätigkeit habe ich ein breites Wissen im Strukturaufbau, in der Projektplanung und in der Prozessoptimierung erworben – genau dort, wo KI heute am meisten bewirkt.",
      "Ich kenne die Abläufe in Start-ups ebenso wie in Großunternehmen und weiß, wo KI-Werkzeuge wirklich helfen und wo nicht.",
      "Gemeinsam finden wir heraus, welche Aufgaben du an Gemini oder Copilot abgeben kannst, damit dir mehr Zeit für das Wesentliche bleibt.",
    ],
    topics: {
      title: "Wir schauen gemeinsam, wo KI dir hilft",
      intro: "Was erwartet dich in meinem KI-Coaching:",
      items: [
        {
          title: "Einstieg in Gemini und Copilot",
          text: "Du lernst die Werkzeuge kennen, richtest sie ein und machst deine ersten Schritte – ganz ohne Vorkenntnisse.",
        },
        {
          title: "Die richtigen Fragen stellen",
          text: "Mit guten Anweisungen (Prompts) bekommst du von der KI genau die Ergebnisse, die du brauchst.",
        },
        {
          title: "Texte, E-Mails und Präsentationen",
          text: "Lass dir von der KI beim Schreiben, Zusammenfassen und Gestalten helfen – in Word, Outlook, PowerPoint, Gmail und Google Docs.",
        },
        {
          title: "Abläufe vereinfachen",
          text: "Wir finden wiederkehrende Aufgaben in deinem Unternehmen, die KI dir abnehmen oder beschleunigen kann.",
        },
        {
          title: "Sicher und verantwortungsvoll",
          text: "Was darfst du der KI anvertrauen? Wir klären Datenschutz, Grenzen und den sinnvollen Umgang mit Ergebnissen.",
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
