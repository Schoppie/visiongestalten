import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Brand, PageIntro, SubpageShell } from "@/components/site-layout";
import { useReveal } from "@/hooks/use-reveal";
import { breadcrumbJsonLd, pageHead } from "@/content/seo";

const TITLE = "Referenzen – Werbeagentur Global Triangle Itzehoe";
const DESCRIPTION =
  "Referenzen der Werbeagentur Global Triangle: Websites, Logos, Visitenkarten und Coaching für Unternehmen und Vereine in Itzehoe und im Kreis Steinburg.";

export const Route = createFileRoute("/referenzen")({
  head: () =>
    pageHead({
      path: "/referenzen",
      title: TITLE,
      description: DESCRIPTION,
      jsonLd: [
        breadcrumbJsonLd([
          { name: "Start", path: "/" },
          { name: "Referenzen", path: "/referenzen" },
        ]),
      ],
    }),
  component: ReferenzenPage,
});

// Kundenliste der bisherigen Referenzen-Seite.
const REFERENCES: { name: string; tag: string; url?: string }[] = [
  {
    name: "Kiddy Kommode",
    tag: "Gestaltung",
    url: "https://www.11880.com/branchenbuch/itzehoe/181142902B102152514/kiddy-kommode-heike-paulsen.html",
  },
  { name: "Kamilla Medizinische Fußpflege", tag: "Gestaltung", url: "https://kamilla-medizinische-fusspflege.de/" },
  { name: "SCI Itzehoe – Schwimmschule", tag: "Gestaltung", url: "https://sport-club-itzehoe.de/sportarten/schwimmschule/" },
  { name: "Physiotherapie Hinrichs", tag: "Webdesign", url: "https://www.physiotherapie-hinrichs.de/" },
  { name: "Itzehoer Schützenverein", tag: "Gestaltung", url: "https://itzehoer-schuetzenverein.de/" },
  { name: "Lutima", tag: "Gestaltung", url: "https://lutima.de/" },
  { name: "Ihre Perle Itzehoe", tag: "Webdesign", url: "https://ihre-perle-itzehoe.de/" },
  { name: "Rednerservice Seifert", tag: "Webdesign", url: "https://rednerservice-seifert.de/" },
  { name: "Matthias Menzel", tag: "Webdesign", url: "https://matthiasmenzel.de/" },
  { name: "Horsess", tag: "Coaching · Pferdetrainerin" },
  { name: "Forensic Training Partnership", tag: "Coaching" },
];

function ReferenzenPage() {
  useReveal();
  return (
    <SubpageShell>
      <PageIntro eyebrow="Referenzen" title="Gemeinsam erfolgreich">
        <p>
          Ein starker Verbund und eine gute Zusammenarbeit zeichnen <Brand /> aus. Gemeinsam mit
          Ira, Eyke und Tonja – oder auch mit jedem von uns einzeln – kannst du erfolgreich
          zusammenarbeiten, um deine Ziele zu erreichen und dein Geschäft weiter auszubauen.
        </p>
      </PageIntro>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {REFERENCES.map((r, i) => {
            const inner = (
              <>
                <span className="eyebrow text-gold">{r.tag}</span>
                <span className="mt-3 block font-display text-3xl font-semibold leading-tight">{r.name}</span>
                {r.url && (
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                    Projekt ansehen <ExternalLink className="h-4 w-4" />
                  </span>
                )}
              </>
            );
            const cls =
              "reveal group flex min-h-48 flex-col rounded-2xl border border-border bg-card p-7 shadow-soft transition-all";
            return r.url ? (
              <a
                key={r.name}
                href={r.url}
                target="_blank"
                rel="noreferrer"
                className={`${cls} hover:-translate-y-1 hover:shadow-lift`}
                style={{ transitionDelay: `${(i % 3) * 70}ms` }}
              >
                {inner}
              </a>
            ) : (
              <div key={r.name} className={cls} style={{ transitionDelay: `${(i % 3) * 70}ms` }}>
                {inner}
              </div>
            );
          })}
        </div>

        <div className="reveal mx-auto mt-16 max-w-2xl px-5 text-center">
          <h2 className="text-4xl font-medium">Dein Projekt als nächste Referenz?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Melde dich für ein kostenfreies Analyse-Gespräch – wir freuen uns auf dich.
          </p>
          <Link
            to="/"
            hash="kontakt"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-8 py-3 font-medium text-navy-foreground shadow-soft transition-transform hover:-translate-y-0.5"
          >
            Kontakt aufnehmen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SubpageShell>
  );
}
