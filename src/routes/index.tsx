import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Users,
  MessagesSquare,
  Handshake,
  Palette,
  Menu,
  X,
  Mail,
  Phone,
  Smartphone,
  MapPin,
  Globe,
  ArrowDown,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import logo from "@/assets/vision-gestalten-logo.png.asset.json";
import heroImg from "@/assets/hero-workshop.jpg";
import angebotImg from "@/assets/section-angebot.jpg";
import philosophieImg from "@/assets/section-philosophie.jpg";
import persoenlichesImg from "@/assets/section-persoenliches.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vision & Gestalten – Kreative Organisationsentwicklung" },
      {
        name: "description",
        content:
          "Visionsgestalten begleitet Organisationen kreativ: Moderation, Prozessbegleitung, Beteiligung und Gestaltung. Partizipation, Kreativität und Wertschätzung in Hannover.",
      },
      { property: "og:title", content: "Vision & Gestalten – Kreative Organisationsentwicklung" },
      {
        property: "og:description",
        content:
          "Kreative Organisationsentwicklung: Moderation, Prozessbegleitung, Beteiligung und Gestaltung für Teams und öffentliche Räume.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

const NAV = [
  { id: "start", label: "Start" },
  { id: "angebot", label: "Angebot" },
  { id: "philosophie", label: "Philosophie" },
  { id: "persoenliches", label: "Persönliches" },
  { id: "kontakt", label: "Kontakt" },
];

const ANGEBOTE = [
  {
    icon: MessagesSquare,
    title: "Moderation",
    text: "Moderation von Prozessen, Workshops und Großgruppen.",
  },
  {
    icon: Users,
    title: "Prozessbegleitung",
    text: "Teamentwicklung, Projektentwicklung, Zielfindung und Umsetzung.",
  },
  {
    icon: Handshake,
    title: "Beteiligung",
    text: "Planungsvorhaben, Stadtentwicklung, Identifikation und Demokratisierung.",
  },
  {
    icon: Palette,
    title: "Gestaltung",
    text: "Gestaltung öffentlicher Räume im Innen- und Außenbereich.",
  },
];

const WIR_TUN = [
  "beraten",
  "gestalten den Rahmen für Beteiligung",
  "leiten und moderieren den Prozess",
  "dokumentieren und werten Ergebnisse aus",
  "entwickeln einen Handlungsplan",
  "schaffen Projekte mit sichtbaren Ergebnissen",
];

const WERTE = [
  {
    title: "Partizipation",
    text: "Hinter jeder Organisation stehen Menschen mit Ideen und Bedürfnissen. Gebündelt können diese Ressourcen viel bewegen. Wir schaffen Rahmenbedingungen, in denen gemeinsame Ziele, Kreativität und Teamgeist entstehen.",
  },
  {
    title: "Kreativität",
    text: "Kreativität ist ein Grundbedürfnis des Menschen und eine Haltung. Mit ihr werden Probleme zur Herausforderung – im Spiel mit Material, Farben, Formen und Räumen entsteht ein individuelles Gesamtergebnis.",
  },
  {
    title: "Wertschätzung",
    text: "In einer wertschätzenden Atmosphäre wachsen Menschen über sich hinaus. Jenseits von Leistungs- und Konkurrenzdruck richten wir den Blick auf Stärken und Ressourcen – Begegnung auf Augenhöhe.",
  },
];

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
            ? "border-b border-border bg-background/85 backdrop-blur-md shadow-soft"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <a href="#start" className="flex items-center gap-3" aria-label="Vision & Gestalten Startseite">
            <img src={logo.url} alt="Vision & Gestalten" className="h-[2.45rem] w-auto sm:h-[2.8rem]" />
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className="eyebrow text-foreground/70 transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menü öffnen"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col px-5 py-2">
              {NAV.map((n) => (
                <a
                  key={n.id}
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="eyebrow py-3 text-foreground/75 transition-colors hover:text-primary"
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
          style={{ backgroundImage: `url(${heroImg})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background/90" aria-hidden />
        <div className="relative mx-auto w-full max-w-6xl px-5 pt-24">
          <div className="max-w-2xl">
            <p className="eyebrow text-primary">Visionsgestalten · Hannover</p>
            <h1 className="mt-4 text-5xl font-bold leading-[0.95] text-foreground sm:text-7xl">
              Kreative<br />Organisations&shy;entwicklung
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Wir schaffen einen kreativen, zielgerichteten Rahmen, in dem Teams ihren gemeinsamen
              Visionen eine neue Gestalt geben – und sie sichtbar machen.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#angebot"
                className="rounded-md bg-primary px-7 py-3 font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Unser Angebot
              </a>
              <a
                href="#kontakt"
                className="rounded-md border border-primary/40 px-7 py-3 font-medium text-primary transition-colors hover:bg-primary/5"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </div>
        <a
          href="#angebot"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/70 transition-colors hover:text-primary"
          aria-label="Nach unten"
        >
          <ArrowDown className="h-6 w-6 animate-bounce" />
        </a>
      </section>

      {/* Intro / WAS */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="reveal grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="eyebrow text-primary">Was?</p>
              <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
                Was macht Visionsgestalten?
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-7">
              <p>
                Visionsgestalten arbeitet mit Beratern, Trainern, Projektmanagern, Künstlern und
                Gestaltern als Netzwerkpartner zusammen.
              </p>
              <p>
                Schwerpunkt ist die Prozessbegleitung, Moderation und das Erstellen von Konzepten zur
                Beteiligung von Menschen – in Planung, Austausch und auf der Handlungsebene. Wir
                bündeln alle Ressourcen einer Organisation und schaffen neue Motivation und
                Zielrichtung im Team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Angebot parallax band */}
      <section id="angebot" className="relative">
        <div
          className="parallax absolute inset-0"
          style={{ backgroundImage: `url(${angebotImg})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-background/82 backdrop-blur-[2px]" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-5 py-28">
          <div className="reveal mx-auto max-w-2xl text-center">
            <p className="eyebrow text-primary">Angebot</p>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Vier Schwerpunkte</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Von der Moderation bis zur gestalterischen Umsetzung – kreativ und zielgerichtet.
            </p>
          </div>
          <div className="reveal mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ANGEBOTE.map((a) => (
              <article
                key={a.title}
                className="group rounded-xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <a.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-2xl font-semibold text-card-foreground">{a.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{a.text}</p>
              </article>
            ))}
          </div>

          <div className="reveal mx-auto mt-16 max-w-3xl rounded-xl border border-border bg-card/90 p-8 shadow-soft">
            <h3 className="text-2xl font-semibold">Wir …</h3>
            <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {WIR_TUN.map((w) => (
                <li key={w} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* WARUM */}
      <section className="bg-secondary py-24">
        <div className="mx-auto max-w-4xl px-5 text-center reveal">
          <p className="eyebrow text-primary">Warum?</p>
          <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
            Sichtbare Ergebnisse halten Motivation lebendig
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Veränderungsprozesse brauchen Sprechen, Denken und Reflexion – aber auch sichtbare,
            mittelbare Ergebnisse. Darum stehen gemeinsames Tun und Austausch im Vordergrund.
            Grundlage ist der Gedanke der Partizipation, des wertschätzenden Umgangs miteinander und
            der Kreativität.
          </p>
        </div>
      </section>

      {/* Philosophie parallax band + values */}
      <section id="philosophie" className="relative">
        <div
          className="parallax flex min-h-[60vh] items-center"
          style={{ backgroundImage: `url(${philosophieImg})` }}
        >
          <div className="absolute inset-0 bg-primary/55" aria-hidden />
          <div className="relative mx-auto max-w-4xl px-5 py-24 text-center reveal">
            <p className="eyebrow text-primary-foreground/80">Philosophie & Leitbild</p>
            <h2 className="mt-3 text-4xl font-semibold text-primary-foreground sm:text-6xl">
              Beteiligung. Nachhaltig &amp; sichtbar.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/90">
              Durch unser interdisziplinäres – wissenschaftlich, künstlerisch und handwerkliches –
              Leitbild gelingt es, dass Beteiligung nachhaltig umgesetzt wird.
            </p>
          </div>
        </div>

        <div className="bg-background py-24">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-3">
            {WERTE.map((w, i) => (
              <article
                key={w.title}
                className="reveal rounded-xl border border-border bg-card p-8 shadow-soft"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <span className="eyebrow text-primary/60">0{i + 1}</span>
                <h3 className="mt-2 text-3xl font-semibold">{w.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{w.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Persönliches */}
      <section id="persoenliches" className="bg-secondary py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <div className="reveal overflow-hidden rounded-2xl shadow-lift">
            <img
              src={persoenlichesImg}
              alt="Arbeitsplatz von Visionsgestalten"
              width={1600}
              height={1200}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="reveal">
            <p className="eyebrow text-primary">Persönliches & Partner</p>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Laura van Joolen</h2>
            <p className="mt-1 text-lg text-muted-foreground">Dipl. Kult. Wiss.</p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Hinter Visionsgestalten steht die Verbindung von Wissenschaft, Kunst und Handwerk.
              Mit Ansätzen aus Theater, Kunst und Wissenschaft sowie systemischen Methoden aus
              Erlebnispädagogik, Teamentwicklung und NLP entstehen kreative Beteiligungsprozesse.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              In Kooperation mit einem professionellen Netzwerk aus Künstlern, Trainern und
              Gestaltern werden gemeinsame Visionen sichtbar gemacht.
            </p>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="reveal grid gap-12 md:grid-cols-2">
            <div>
              <p className="eyebrow text-primary">Kontakt</p>
              <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
                Lassen Sie uns Ihre Vision gestalten
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
                Sie möchten einen Prozess begleiten lassen, einen Workshop moderieren oder ein
                Beteiligungsvorhaben starten? Schreiben Sie uns – wir freuen uns auf Ihr Projekt.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <ul className="space-y-5">
                <ContactRow icon={Mail} label="E-Mail">
                  <a className="hover:text-primary" href="mailto:vanjoolen@visionsgestalten.de">
                    vanjoolen@visionsgestalten.de
                  </a>
                </ContactRow>
                <ContactRow icon={Phone} label="Telefon">
                  <a className="hover:text-primary" href="tel:+4951160769774">
                    0511. 60 76 97 74
                  </a>
                </ContactRow>
                <ContactRow icon={Smartphone} label="Mobil">
                  <a className="hover:text-primary" href="tel:+4917320930060">
                    0173. 20 93 060
                  </a>
                </ContactRow>
                <ContactRow icon={MapPin} label="Adresse">
                  Visionsgestalten<br />Plaza de Rosalia 7<br />30449 Hannover
                </ContactRow>
                <ContactRow icon={Globe} label="Web">
                  www.visionsgestalten.de
                </ContactRow>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Impressum */}
      <footer className="border-t border-border bg-secondary py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center">
          <img src={logo.url} alt="Vision & Gestalten" className="h-9 w-auto" />
          <p className="text-sm text-muted-foreground">
            Visionsgestalten · Laura van Joolen · Plaza de Rosalia 7 · 30449 Hannover
          </p>
          <p className="text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} Visionsgestalten – Kreative Organisationsentwicklung.
            Alle Rechte vorbehalten.
          </p>
        </div>
      </footer>
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Mail;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="eyebrow text-[0.65rem] text-muted-foreground/70">{label}</p>
        <p className="text-base leading-snug text-card-foreground">{children}</p>
      </div>
    </li>
  );
}
