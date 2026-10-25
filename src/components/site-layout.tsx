import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { CONTACT, SERVICE_LINKS } from "@/content/site";

const BRAND = "Global Triangle";

/** Brand name that browser translators (e.g. Google Translate) must never translate. */
export function Brand() {
  return (
    <span translate="no" className="notranslate">
      {BRAND}
    </span>
  );
}

/** Renders text with every "Global Triangle" protected from browser translation. */
export function withBrand(text: string): ReactNode {
  if (!text.includes(BRAND)) return text;
  return text.split(BRAND).flatMap((part, i) => (i === 0 ? [part] : [<Brand key={i} />, part]));
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span translate="no" className={`notranslate flex items-center gap-3 ${className}`}>
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

const SUB_NAV = [
  ...SERVICE_LINKS.map((s) => ({ ...s, label: s.label.replace(" & Mentoring", "") })),
  { to: "/referenzen", label: "Referenzen" },
] as const;

/** Solid header used on all subpages. */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const linkCls = "eyebrow transition-colors hover:text-gold";
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link to="/" aria-label="Global Triangle Startseite">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {SUB_NAV.map((n) => (
            <Link key={n.to} to={n.to} className={linkCls} activeProps={{ className: "text-gold" }}>
              {n.label}
            </Link>
          ))}
          <Link
            to="/"
            hash="kontakt"
            className="rounded-full bg-navy px-5 py-2 text-sm font-medium text-navy-foreground transition-transform hover:-translate-y-0.5"
          >
            Kontakt
          </Link>
        </nav>
        <button className="lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Menü öffnen">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            <Link to="/" className={`${linkCls} py-3`} onClick={() => setOpen(false)}>
              Start
            </Link>
            {SUB_NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className={`${linkCls} py-3`}
                activeProps={{ className: "text-gold" }}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/" hash="kontakt" className={`${linkCls} py-3`} onClick={() => setOpen(false)}>
              Kontakt
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  const linkCls = "text-sm text-navy-foreground/75 transition-colors hover:text-gold";
  return (
    <footer className="bg-navy pt-16 pb-10 text-navy-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-5 text-sm leading-relaxed text-navy-foreground/70">
            KI-Coaching, Grafik & Webdesign und Fotografie aus einer Hand – in Itzehoe und Umgebung.
          </p>
        </div>
        <div>
          <p className="eyebrow text-gold">Themen</p>
          <ul className="mt-4 space-y-2.5">
            {SERVICE_LINKS.map((s) => (
              <li key={s.to}>
                <Link to={s.to} className={linkCls}>
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-gold">
            <Brand />
          </p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link to="/referenzen" className={linkCls}>Referenzen</Link>
            </li>
            <li>
              <Link to="/" hash="team" className={linkCls}>Team</Link>
            </li>
            <li>
              <Link to="/" hash="kontakt" className={linkCls}>Kontakt</Link>
            </li>
            <li>
              <Link to="/impressum" className={linkCls}>Impressum</Link>
            </li>
            <li>
              <Link to="/datenschutzerklaerung" className={linkCls}>Datenschutz</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-gold">Kontakt</p>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/75">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                {CONTACT.street}
                <br />
                {CONTACT.city}
              </span>
            </li>
            <li>
              <a href={CONTACT.phoneHref} className="flex gap-2.5 transition-colors hover:text-gold">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {CONTACT.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="flex gap-2.5 transition-colors hover:text-gold">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-navy-foreground/15 px-5 pt-6 text-xs text-navy-foreground/55 sm:flex-row">
        <p>© {new Date().getFullYear()} <Brand />. Alle Rechte vorbehalten.</p>
        <p className="flex gap-5">
          <Link to="/impressum" className="hover:text-gold">Impressum</Link>
          <Link to="/datenschutzerklaerung" className="hover:text-gold">Datenschutz</Link>
        </p>
      </div>
    </footer>
  );
}

/** Header + content + footer for subpages. */
export function SubpageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

/** Navy title band used at the top of simple subpages. */
export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="bg-navy py-20 text-navy-foreground sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="mt-4 text-5xl font-medium leading-tight sm:text-6xl">{title}</h1>
        {children && <div className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-foreground/80">{children}</div>}
      </div>
    </section>
  );
}
