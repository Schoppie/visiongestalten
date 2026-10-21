import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
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
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { Logo, SiteFooter } from "@/components/site-layout";
import { ContactForm } from "@/components/contact-form";
import { CONTACT } from "@/content/site";
import { businessJsonLd, pageHead } from "@/content/seo";

import heroVideoUrl from "@/assets/gt/hero.mp4";
import heroWebmUrl from "@/assets/gt/hero.webm";
import heroPosterUrl from "@/assets/gt/hero-poster.jpg";
import iraRoundUrl from "@/assets/gt/ira_round.png";
import eykeRoundUrl from "@/assets/gt/eyke_round.png";
import tonjaRoundUrl from "@/assets/gt/tonja_round.png";
import iraImgUrl from "@/assets/gt/ira.jpg";
import eykeImgUrl from "@/assets/gt/eyke-hd.jpg";
import tonjaImgUrl from "@/assets/gt/tonja.jpg";

const iraRound = { url: iraRoundUrl };
const eykeRound = { url: eykeRoundUrl };
const tonjaRound = { url: tonjaRoundUrl };
const iraImg = { url: iraImgUrl };
const eykeImg = { url: eykeImgUrl };
const tonjaImg = { url: tonjaImgUrl };

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      path: "/",
      title: "Werbeagentur Itzehoe – Webdesign, Coaching & Fotografie | Global Triangle",
      description:
        "Global Triangle ist deine Werbeagentur in Itzehoe: Webdesign & Grafik, Business Coaching und Fotografie aus einer Hand – für Gründer und Unternehmen im Kreis Steinburg.",
      jsonLd: [businessJsonLd()],
    }),
  component: Index,
});

const NAV: { label: string; id?: string; to?: "/referenzen" }[] = [
  { id: "start", label: "Start" },
  { id: "leistungen", label: "Leistungen" },
  { id: "ueber-uns", label: "Über uns" },
  { id: "team", label: "Team" },
  { to: "/referenzen", label: "Referenzen" },
  { id: "kontakt", label: "Kontakt" },
];

const LEISTUNGEN = [
  {
    icon: Compass,
    to: "/business-coaching" as const,
    image: iraRound,
    title: "Coaching & Mentoring",
    alt: "Ira Köhnke – Business Coaching in Itzehoe",
    text: "Als bewährte Business-Coachin erstelle ich individuelle Lösungskonzepte für Firmen und Privatpersonen in Itzehoe und Umgebung. Ich unterstütze deine Ziele im Workout mit meinem umfassenden Coachingwissen.",
  },
  {
    icon: PenTool,
    to: "/grafik-webdesign-itzehoe" as const,
    image: eykeRound,
    title: "Grafik & Webdesign",
    alt: "Eyke Szopieray – Webdesign und Grafikdesign in Itzehoe",
    text: "Als gelernte Schriftsetzerin und Marketingmanagerin in einer IT-Firma und Freelancerin fehlt mir das Potenzial für Langeweile. Mein Kopf ist voller Ideen und ich liebe es, kreativ zu sein.",
  },
  {
    icon: Camera,
    to: "/fotografie" as const,
    image: tonjaRound,
    title: "Fotografie",
    alt: "Tonja Fritz-Johnson – Business-Fotografie in Itzehoe",
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

function Index() {
  useReveal();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroMedia = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      // Parallax: the hero video moves slower than the page.
      if (heroMedia.current && window.scrollY < window.innerHeight * 1.2) {
        heroMedia.current.style.transform = `translate3d(0, ${window.scrollY * 0.4}px, 0)`;
      }
    };
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
            {NAV.map((n) =>
              n.to ? (
                <Link key={n.label} to={n.to} className="eyebrow transition-colors hover:text-gold">
                  {n.label}
                </Link>
              ) : (
                <a key={n.label} href={`#${n.id}`} className="eyebrow transition-colors hover:text-gold">
                  {n.label}
                </a>
              ),
            )}
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
              {NAV.map((n) =>
                n.to ? (
                  <Link
                    key={n.label}
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="eyebrow py-3 transition-colors hover:text-gold"
                  >
                    {n.label}
                  </Link>
                ) : (
                  <a
                    key={n.label}
                    href={`#${n.id}`}
                    onClick={() => setOpen(false)}
                    className="eyebrow py-3 transition-colors hover:text-gold"
                  >
                    {n.label}
                  </a>
                ),
              )}
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="start" className="relative flex min-h-screen items-center overflow-hidden">
        <div ref={heroMedia} className="absolute inset-0 will-change-transform" aria-hidden>
          <video
            className="h-full w-full object-cover motion-reduce:hidden"
            poster={heroPosterUrl}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src={heroWebmUrl} type="video/webm" />
            <source src={heroVideoUrl} type="video/mp4" />
          </video>
          <img src={heroPosterUrl} alt="" className="hidden h-full w-full object-cover motion-reduce:block" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-navy/85 via-navy/60 to-navy/85" aria-hidden />
        <div className="relative mx-auto w-full max-w-6xl px-5 pt-24">
          <div className="max-w-2xl reveal">
            <h1>
              <span className="eyebrow flex items-center gap-2 text-gold">
                <Sparkles className="h-4 w-4" aria-hidden /> Werbeagentur in Itzehoe
              </span>
              <span className="mt-5 block text-5xl font-medium leading-[1.02] text-navy-foreground sm:text-7xl">
                Wir unterstützen dich in deinem <span className="text-gold">Vorhaben</span>.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-foreground/85">
              Global Triangle ist keine klassische Werbeagentur. Business Coaching, Grafik &
              Webdesign und Fotografie in Itzehoe – aus einer Hand. Mit uns startest du dein
              Business erfolgreich oder baust es weiter aus.
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
              <Link
                key={l.title}
                to={l.to}
                aria-label={`${l.title} – mehr erfahren`}
                className="reveal group flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-soft transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div className="relative">
                  <img
                    src={l.image.url}
                    alt={l.alt}
                    className="h-28 w-28 rounded-full object-cover ring-4 ring-secondary"
                    loading="lazy"
                  />
                  <span className="absolute -bottom-2 -right-2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-gold text-accent-foreground shadow-soft">
                    <l.icon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="mt-7 text-2xl font-semibold">{l.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{l.text}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-foreground">
                  Mehr erfahren
                  <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
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
              alt="Ira Köhnke von Global Triangle – Werbeagentur und Business Coaching in Itzehoe"
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
                    alt={`${m.name} – ${m.role} bei Global Triangle in Itzehoe`}
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
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 md:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal">
            <p className="eyebrow text-gold">Kontakt</p>
            <h2 className="mt-3 text-4xl font-medium sm:text-5xl">Lass uns dein Vorhaben angehen</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Wir agieren seit Jahren erfolgreich im Webdesign, der Fotografie und im Coaching –
              regional und national. Wir arbeiten pragmatisch und lösungsorientiert und sind allem
              aufgeschlossen. Melde dich für ein kostenfreies Analyse-Gespräch.
            </p>
            <ul className="mt-8 space-y-4 text-lg">
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-gold">
                  <Phone className="h-4 w-4" />
                </span>
                <a href={CONTACT.phoneHref} className="hover:text-gold">{CONTACT.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-gold">
                  <Mail className="h-4 w-4" />
                </span>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-gold">{CONTACT.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-gold">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>
                  {CONTACT.street}, {CONTACT.city}
                </span>
              </li>
            </ul>
          </div>
          <div className="reveal">
            <ContactForm />
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
