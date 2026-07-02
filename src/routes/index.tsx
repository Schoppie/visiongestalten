import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ArrowDown,
  ArrowRight,
  Compass,
  PenTool,
  Camera,
  Quote,
  Sparkles,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

import hero from "@/assets/gt/hero.jpg.asset.json";
import iraRound from "@/assets/gt/ira_round.png.asset.json";
import eykeRound from "@/assets/gt/eyke_round.png.asset.json";
import tonjaRound from "@/assets/gt/tonja_round.png.asset.json";
import iraImg from "@/assets/gt/ira.jpg.asset.json";
import eykeImg from "@/assets/gt/eyke.jpg.asset.json";
import tonjaImg from "@/assets/gt/tonja.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Global Triangle – Coaching, Grafik & Fotografie in Itzehoe" },
      {
        name: "description",
        content:
          "Global Triangle in Itzehoe: Business-Coaching, Grafik & Webdesign und Fotografie aus einer Hand. Ira, Eyke und Tonja begleiten dich bei Start und Wachstum.",
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "start", label: "Start" },
  { id: "leistungen", label: "Leistungen" },
  { id: "ueber-uns", label: "Über uns" },
  { id: "team", label: "Team" },
  { id: "kontakt", label: "Kontakt" },
];

const LEISTUNGEN = [
  {
    icon: Compass,
    image: iraRound,
    title: "Coaching & Mentoring",
    text: "Als bewährte Business-Coachin erstelle ich individuelle Lösungskonzepte für Firmen und Privatpersonen in Itzehoe und Umgebung. Ich unterstütze deine Ziele im Workout mit meinem umfassenden Coachingwissen.",
  },
  {
    icon: PenTool,
    image: eykeRound,
    title: "Grafik & Webdesign",
    text: "Als gelernte Schriftsetzerin und Marketingmanagerin in einer IT-Firma und Freelancerin fehlt mir das Potenzial für Langeweile. Mein Kopf ist voller Ideen und ich liebe es, kreativ zu sein.",
  },
  {
    icon: Camera,
    image: tonjaRound,
    title: "Fotografie",
    text: "Deine Bilder sollen dein Image reflektieren und für dich die richtigen Kunden anziehen. Ich arbeite mit dir und dem Design-Team und setze mich persönlich für deinen Erfolg ein – du sollst authentisch wirken.",
  },
];

const TEAM = [
  {
    name: "Ira Köhnke",
    role: "Coaching & Mentoring",
    image: iraImg,
    text: "Ira ist deine Beraterin, die dich positiv coacht und dir alles Wissen anhand gibt, welches du für dein Geschäft – ob Start oder bereits bestehendes Business – benötigst.",
  },
  {
    name: "Eyke Szopieray",
    role: "Grafik & Webdesign",
    image: eykeImg,
    text: "Eyke erstellt dir eine Homepage, Visitenkarten, Beschilderung, Flyer und weitere Gestaltungswünsche – kreativ, klar und mit Wiedererkennungswert.",
  },
  {
    name: "Tonja Fritz-Johnson",
    role: "Fotografie",
    image: tonjaImg,
    text: "Tonja erstellt dir professionelle Fotos mit Einblick in dein neues Business – authentisch und mit dem richtigen Blick für dein Image.",
  },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 40 36" className="h-9 w-auto" aria-hidden>
        <polygon
          points="20,3 37,33 3,33"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="13" cy="24" r="2.4" fill="var(--color-gold)" />
      </svg>
      <span className="font-display text-xl font-semibold uppercase tracking-[0.2em] leading-none">
        Global<span className="text-gold"> Triangle</span>
      </span>
    </span>
  );
}

function Index() {
  useReveal();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border bg-background/85 text-foreground backdrop-blur-md shadow-soft"
            : "bg-transparent text-navy-foreground"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#start" aria-label="Global Triangle Startseite">
            <Logo />
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="eyebrow transition-colors hover:text-gold"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menü öffnen"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-border bg-background/95 text-foreground backdrop-blur-md md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col px-5 py-2">
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="eyebrow py-3 transition-colors hover:text-gold"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="start" className="relative flex min-h-screen items-center">
        <div
          className="parallax absolute inset-0"
          style={{ backgroundImage: `url(${hero.url})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy/60 to-navy/85" aria-hidden />
        <div className="relative mx-auto w-full max-w-6xl px-5 pt-24">
          <div className="max-w-2xl reveal">
            <p className="eyebrow flex items-center gap-2 text-gold">
              <Sparkles className="h-4 w-4" /> Werbeagentur · Itzehoe
            </p>
            <h1 className="mt-5 text-5xl font-medium leading-[1.02] text-navy-foreground sm:text-7xl">
              Wir unterstützen dich in deinem <span className="text-gold">Vorhaben</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-foreground/85">
              Global Triangle ist keine klassische Werbeagentur. Coaching, Grafik & Webdesign und
              Fotografie – aus einer Hand. Mit uns startest du dein Business erfolgreich oder baust
              es weiter aus.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#leistungen"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 font-medium text-accent-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Unsere Leistungen <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#kontakt"
                className="rounded-full border border-navy-foreground/40 px-7 py-3 font-medium text-navy-foreground transition-colors hover:bg-navy-foreground/10"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </div>
        <a
          href="#leistungen"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/80 transition-colors hover:text-gold"
          aria-label="Nach unten"
        >
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </a>
      </section>

      {/* Leistungen */}
      <section id="leistungen" className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="eyebrow text-gold">Leistungen</p>
            <h2 className="mt-3 text-4xl font-medium sm:text-5xl">Drei Stärken, ein Team</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Von der ersten Idee bis zum sichtbaren Ergebnis begleiten wir dich – strategisch,
              gestalterisch und im Bild.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {LEISTUNGEN.map((l, i) => (
              <article
                key={l.title}
                className="reveal group flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="relative">
                  <img
                    src={l.image.url}
                    alt={l.title}
                    className="h-28 w-28 rounded-full object-cover ring-4 ring-secondary"
                    loading="lazy"
                  />
                  <span className="absolute -bottom-2 -right-2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold text-accent-foreground shadow-soft">
                    <l.icon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="mt-7 text-2xl font-semibold">{l.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{l.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Über uns */}
      <section id="ueber-uns" className="relative overflow-hidden bg-navy py-28 text-navy-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-2">
          <div className="reveal overflow-hidden rounded-3xl shadow-lift">
            <img
              src={iraImg.url}
              alt="Ira Köhnke – Global Triangle"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="reveal">
            <p className="eyebrow text-gold">Über uns</p>
            <h2 className="mt-3 text-4xl font-medium leading-tight sm:text-5xl">
              Mehr als eine klassische Werbeagentur
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy-foreground/85">
              <p>
                Du kannst von uns alle Dienste einer klassischen Werbeagentur erhalten – doch wir
                sind mehr. Mit uns kannst du dein Business erfolgreich starten oder, wenn du bereits
                ein Unternehmen hast, es erfolgreich ausbauen.
              </p>
              <p>
                Du wünschst dir jemanden, der dich begleitet und dir zeigt, welche Schritte nötig
                sind, um erfolgreich zu starten oder noch erfolgreicher zu sein? Genau dafür sind wir
                da.
              </p>
            </div>
            <figure className="mt-9 border-l-2 border-gold pl-6">
              <Quote className="h-6 w-6 text-gold" />
              <blockquote className="mt-3 font-display text-2xl italic leading-snug sm:text-3xl">
                Eine Idee ist nur eine Idee. Wann und wie du sie angehst, bestimmt, was daraus wird.
              </blockquote>
              <figcaption className="mt-3 eyebrow text-navy-foreground/70">— Mark Twain</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bg-secondary py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="eyebrow text-gold">Team</p>
            <h2 className="mt-3 text-4xl font-medium sm:text-5xl">Wir sind Ira, Eyke und Tonja</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              In einem individuellen, kostenfreien Analyse-Gespräch klären wir gemeinsam, wie wir dir
              weiterhelfen und welche Schritte notwendig sind.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {TEAM.map((m, i) => (
              <article
                key={m.name}
                className="reveal overflow-hidden rounded-2xl bg-card shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={m.image.url}
                    alt={m.name}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-7">
                  <p className="eyebrow text-gold">{m.role}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{m.name}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{m.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="bg-background py-24">
        <div className="mx-auto max-w-4xl px-5 text-center reveal">
          <p className="eyebrow text-gold">Kontakt</p>
          <h2 className="mt-3 text-4xl font-medium sm:text-5xl">Lass uns dein Vorhaben angehen</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Wir agieren seit Jahren erfolgreich im Webdesign, der Fotografie und im Coaching –
            regional und national. Wir arbeiten pragmatisch und lösungsorientiert und sind allem
            aufgeschlossen. Melde dich für ein kostenfreies Analyse-Gespräch.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@global-triangle.de"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-8 py-3 font-medium text-navy-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Jetzt Kontakt aufnehmen <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-navy py-12 text-navy-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center">
          <Logo className="text-navy-foreground" />
          <p className="text-sm text-navy-foreground/70">
            Global Triangle · Coaching, Grafik & Webdesign und Fotografie · Itzehoe
          </p>
          <p className="text-xs text-navy-foreground/50">
            © {new Date().getFullYear()} Global Triangle. Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
}
