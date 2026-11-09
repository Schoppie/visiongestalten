// Texte der drei Themen-Seiten – übernommen von der bisherigen global-triangle.de.
import iraImgUrl from "@/assets/gt/ira-hd.jpg";
import eykeImgUrl from "@/assets/gt/eyke-team.jpg";
import tonjaImgUrl from "@/assets/gt/tonja.jpg";
import { breadcrumbJsonLd, pageHead, serviceJsonLd } from "@/content/seo";

export interface ServiceContent {
  slug: "/business-coaching" | "/grafik-webdesign-itzehoe" | "/fotografie";
  eyebrow: string;
  title: string;
  /** Sub-headline under the page title. */
  tagline?: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  image: string;
  imageAlt: string;
  imagePosition?: string;
  person: { name: string; role: string };
  quote?: string;
  /** Label of the call-to-action button in the intro. */
  ctaLabel?: string;
  highlightsTitle?: string;
  highlights?: string[];
  bodyTitle?: string;
  body?: string[];
  topics?: {
    title: string;
    intro?: string;
    items: { title: string; subtitle?: string; text: string }[];
  };
  about?: { title: string; paragraphs: string[] };
  references?: { intro: string; items: { name: string; text: string }[] };
  extraLink?: { href: string; label: string; text: string };
  /** Closing call-to-action block before the references. */
  cta?: { title: string; intro?: string; text: string[]; button: string };
}

export const SERVICES: ServiceContent[] = [
  {
    slug: "/business-coaching",
    eyebrow: "KI-Beratung & Coaching in Itzehoe",
    title: "KI-Beratung & Coaching",
    tagline: "KI verstehen. Möglichkeiten erkennen. Einfach anwenden.",
    metaTitle: "KI-Beratung & KI-Coaching Itzehoe – Copilot mit Ira Köhnke | Global Triangle",
    metaDescription:
      "KI-Beratung und KI-Coaching in Itzehoe mit Ira Köhnke: Microsoft Copilot und weitere KI-Werkzeuge sinnvoll im Arbeitsalltag einsetzen – einzeln, im Team oder online.",
    intro: [
      "Entdecke, wie künstliche Intelligenz dich im Arbeitsalltag unterstützen kann. Ich begleite dich dabei, passende Einsatzmöglichkeiten zu finden, KI-Werkzeuge kennenzulernen und sie selbstständig anzuwenden.",
      "Du möchtest künstliche Intelligenz nutzen, weißt aber nicht, wo du anfangen sollst? Oder du hast bereits erste Erfahrungen gesammelt und möchtest bessere Ergebnisse erzielen?",
      "Ich unterstütze dich dabei, KI sinnvoll in deinen Arbeitsalltag einzubinden. Gemeinsam betrachten wir deine Aufgaben und finden heraus, wo KI hilfreich sein kann und wo ihre Grenzen liegen.",
      "Mein Schwerpunkt liegt auf der praktischen Anwendung von Microsoft Copilot und weiteren KI-Werkzeugen. Du brauchst keine technischen Vorkenntnisse, sondern nur die Bereitschaft, Neues auszuprobieren.",
    ],
    image: iraImgUrl,
    imageAlt: "Ira Köhnke – KI-Beratung und KI-Coaching in Itzehoe",
    person: { name: "Ira Köhnke", role: "KI-Beratung & Coaching" },
    ctaLabel: "Kostenfreies Erstgespräch vereinbaren",
    topics: {
      title: "Meine Angebote",
      items: [
        {
          title: "Individuelle KI-Beratung",
          subtitle: "Finde heraus, was zu deinem Unternehmen passt.",
          text: "Wir betrachten deine täglichen Aufgaben und entwickeln konkrete Ideen für den Einsatz von KI. Ob Texte, Recherche, Informationsaufbereitung oder Wissensmanagement: Im Mittelpunkt stehen deine Anforderungen, nicht das Werkzeug. Gemeinsam legen wir fest, welche Anwendungen du ausprobieren möchtest und wie du sinnvoll starten kannst.",
        },
        {
          title: "Persönliches KI-Coaching",
          subtitle: "Lerne direkt an deinen eigenen Aufgaben.",
          text: "Im Coaching arbeiten wir mit Beispielen aus deinem Alltag. Du lernst, klare Anweisungen für die KI zu formulieren, Ergebnisse zu verbessern und Antworten kritisch zu prüfen. So entwickelst du hilfreiche Vorlagen und mehr Sicherheit im Umgang mit KI.",
        },
        {
          title: "Microsoft Copilot im Arbeitsalltag",
          subtitle: "Von ersten Fragen zur praktischen Anwendung.",
          text: "Du möchtest Microsoft Copilot besser kennenlernen oder gezielter nutzen? Ich begleite dich mit verständlichen Erklärungen und praktischen Übungen. Wir orientieren uns an deinen Aufgaben und den Anwendungen, die dir zur Verfügung stehen.",
        },
        {
          title: "KI-Workshops für kleine Teams",
          subtitle: "Gemeinsam lernen und ausprobieren.",
          text: "In praxisnahen Workshops erhält dein Team einen verständlichen Einstieg in die Arbeit mit KI. Wir üben mit typischen Aufgaben, entwickeln klare Anweisungen und besprechen, wie Ergebnisse geprüft werden können. Die Inhalte richten sich nach eurem Kenntnisstand und euren Zielen.",
        },
        {
          title: "Bewusst und verantwortungsvoll mit KI arbeiten",
          subtitle: "Nicht jede Aufgabe eignet sich für KI. Und nicht jede Antwort ist richtig.",
          text: "Deshalb gehören der Umgang mit vertraulichen Informationen, das Prüfen von Ergebnissen und das Erkennen von Grenzen zu meiner Beratung. Ziel ist ein bewusster Einsatz, bei dem du die Kontrolle behältst.",
        },
      ],
    },
    about: {
      title: "Ira Köhnke | KI-Beratung & Coaching",
      paragraphs: [
        "Ich verbinde Erfahrung in digitalen Prozessen und Schulungen mit der praktischen Anwendung von künstlicher Intelligenz.",
        "Als zertifizierte AI-Managerin arbeite ich mit Microsoft Copilot und Microsoft 365. In meinem beruflichen Alltag unterstütze ich Kolleginnen und Kollegen bei der Nutzung von KI, entwickle Vorlagen und begleite Schulungen und Workshops.",
        "Diese Erfahrung bringe ich in meine Beratung ein. Mir ist wichtig, komplizierte Themen verständlich zu erklären und gemeinsam Lösungen zu entwickeln, die zu deinen Aufgaben passen.",
        "Mein Anspruch: Du sollst KI nicht nur kennenlernen, sondern sinnvoll und selbstständig anwenden können.",
      ],
    },
    references: {
      intro:
        "Ein starker Verbund und eine gute Zusammenarbeit zeichnen Global Triangle aus. Gemeinsam mit Eyke und Tonja – oder auch mit jedem von uns einzeln – kannst du erfolgreich zusammenarbeiten, um deine Ziele zu erreichen und dein Geschäft weiter auszubauen.",
      items: [],
    },
    cta: {
      title: "Dein Einstieg in die KI-Beratung",
      intro: "Lass uns über deine Möglichkeiten sprechen.",
      text: [
        "Du möchtest wissen, ob und wie KI dich unterstützen kann?",
        "In einem kostenfreien Erstgespräch sprechen wir über deine Aufgaben, Fragen und Ziele. Gemeinsam klären wir, welche Unterstützung zu dir passt.",
        "Du brauchst weder technisches Vorwissen noch eine fertige Idee.",
      ],
      button: "Kostenfreies Erstgespräch vereinbaren",
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
      "Neben der Fotografie gehört auch Forensic Training Partnership zu meinen Unternehmen.",
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
