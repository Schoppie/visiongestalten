import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Brand, PageIntro, SubpageShell } from "@/components/site-layout";
import { useReveal } from "@/hooks/use-reveal";
import img_kamilla from "@/assets/refs/kamilla.jpg";
import img_sci from "@/assets/refs/sci.jpg";
import img_hinrichs from "@/assets/refs/hinrichs.jpg";
import img_schuetzen from "@/assets/refs/schuetzen.jpg";
import img_lutima from "@/assets/refs/lutima.jpg";
import img_perle from "@/assets/refs/perle.jpg";
import img_seifert from "@/assets/refs/seifert.jpg";
import img_menzel from "@/assets/refs/menzel.jpg";
import img_fricke from "@/assets/refs/schoengesund.jpg";
import img_lauschbar from "@/assets/refs/lauschbar.jpg";
import img_kiddy from "@/assets/refs/kiddy-kommode.jpg";
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
const REFERENCES: { name: string; tag: string; url?: string; img?: string }[] = [
  { name: "Kamilla Medizinische Fußpflege", tag: "Gestaltung", url: "https://kamilla-medizinische-fusspflege.de/", img: img_kamilla },
  { name: "SCI Itzehoe – Schwimmschule", tag: "Gestaltung", url: "https://sport-club-itzehoe.de/sportarten/schwimmschule/", img: img_sci },
  { name: "Physiotherapie Hinrichs", tag: "Webdesign", url: "https://www.physiotherapie-hinrichs.de/", img: img_hinrichs },
  { name: "Itzehoer Schützenverein", tag: "Gestaltung", url: "https://itzehoer-schuetzenverein.de/", img: img_schuetzen },
  { name: "Lutima", tag: "Gestaltung", url: "https://lutima.de/", img: img_lutima },
  { name: "Ihre Perle Itzehoe", tag: "Webdesign", url: "https://ihre-perle-itzehoe.de/", img: img_perle },
  { name: "Rednerservice Seifert", tag: "Webdesign", url: "https://rednerservice-seifert.de/", img: img_seifert },
  { name: "Matthias Menzel", tag: "Webdesign", url: "https://matthiasmenzel.de/", img: img_menzel },
  { name: "Lauschbar Itzehoe", tag: "Plakat", url: "https://www.instagram.com/global.triangle.de/p/DHYiqvBMB4M/", img: img_lauschbar },
  { name: "Anke Fricke", tag: "Webdesign", url: "https://anke-fricke.de/", img: img_fricke },
  {
    name: "Kiddy Kommode",
    tag: "Gestaltung",
    url: "https://www.11880.com/branchenbuch/itzehoe/181142902B102152514/kiddy-kommode-heike-paulsen.html",
    img: img_kiddy,
  },
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
                {r.img && (
                  <img
                    src={r.img}
                    alt={`Startseite ${r.name}`}
                    loading="lazy"
                    width={800}
                    height={500}
                    className="-mx-7 -mt-7 mb-6 aspect-[16/10] w-[calc(100%+3.5rem)] max-w-none rounded-t-2xl border-b border-border object-cover object-top"
                  />
                )}
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
              "reveal group flex min-h-48 flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition-all";
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
