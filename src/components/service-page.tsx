import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, ExternalLink, Phone, Quote } from "lucide-react";
import { SubpageShell, withBrand } from "@/components/site-layout";
import { useReveal } from "@/hooks/use-reveal";
import { CONTACT } from "@/content/site";
import { SERVICES, type ServiceContent } from "@/content/services";

export function ServicePage({ service: s }: { service: ServiceContent }) {
  useReveal();
  const others = SERVICES.filter((x) => x.slug !== s.slug);

  return (
    <SubpageShell>
      {/* Intro */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-24 md:grid-cols-[1.15fr_0.85fr]">
          <div className="reveal">
            <h1>
              <span className="eyebrow block text-gold">{s.eyebrow}</span>
              <span className="mt-4 block text-5xl font-medium leading-[1.05] sm:text-7xl">{s.title}</span>
            </h1>
            <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-navy-foreground/85">
              {s.intro.map((p) => (
                <p key={p}>{withBrand(p)}</p>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/"
                hash="kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 font-medium text-accent-foreground shadow-soft transition-transform hover:-translate-y-0.5"
              >
                Kostenfreies Analyse-Gespräch <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={CONTACT.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/40 px-7 py-3 font-medium transition-colors hover:bg-navy-foreground/10"
              >
                <Phone className="h-4 w-4" /> {CONTACT.phone}
              </a>
            </div>
          </div>
          <figure className="reveal">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-lift">
              <img
                src={s.image}
                alt={s.imageAlt}
                className="h-full w-full object-cover"
                style={{ objectPosition: s.imagePosition ?? "50% 30%" }}
              />
            </div>
            <figcaption className="mt-4 text-sm text-navy-foreground/70">
              <span className="font-display text-xl text-navy-foreground">{s.person.name}</span> · {s.person.role}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Body + highlights */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[1.15fr_0.85fr]">
          <div className="reveal">
            <h2 className="text-4xl font-medium sm:text-5xl">{s.bodyTitle}</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
              {s.body.map((p) => (
                <p key={p}>{withBrand(p)}</p>
              ))}
            </div>
            {s.quote && (
              <figure className="mt-10 border-l-2 border-gold pl-6">
                <Quote className="h-6 w-6 text-gold" />
                <blockquote className="mt-3 font-display text-2xl italic leading-snug sm:text-3xl">
                  „{s.quote}“
                </blockquote>
                <figcaption className="eyebrow mt-3 text-muted-foreground">— {s.person.name}</figcaption>
              </figure>
            )}
            {s.extraLink && (
              <p className="mt-8 text-lg text-muted-foreground">
                {s.extraLink.text}{" "}
                <a
                  href={s.extraLink.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-foreground underline decoration-gold underline-offset-4"
                >
                  {s.extraLink.label} <ExternalLink className="h-4 w-4" />
                </a>
              </p>
            )}
          </div>
          <aside className="reveal h-fit rounded-2xl border border-border bg-card p-8 shadow-soft">
            <p className="eyebrow text-gold">{s.highlightsTitle}</p>
            <ul className="mt-6 space-y-4">
              {s.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-lg">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-accent-foreground">
                    <Check className="h-4 w-4" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* Topics */}
      {s.topics && (
        <section className="bg-secondary py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-5">
            <div className="reveal max-w-3xl">
              <p className="eyebrow text-gold">Themen</p>
              <h2 className="mt-3 text-4xl font-medium sm:text-5xl">{s.topics.title}</h2>
              {s.topics.intro && <p className="mt-4 text-lg text-muted-foreground">{s.topics.intro}</p>}
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {s.topics.items.map((t, i) => (
                <article
                  key={t.title}
                  className="reveal rounded-2xl bg-card p-7 shadow-soft"
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <span className="font-display text-4xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-2xl font-semibold">{t.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{t.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About */}
      {s.about && (
        <section className="bg-secondary py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-5 reveal">
            <p className="eyebrow text-gold">Über mich</p>
            <h2 className="mt-3 text-4xl font-medium sm:text-5xl">{s.about.title}</h2>
            <div className="mt-8 grid gap-5 text-lg leading-relaxed text-muted-foreground sm:grid-cols-2 sm:gap-x-10">
              {s.about.paragraphs.map((p) => (
                <p key={p}>{withBrand(p)}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* References */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow text-gold">Referenzen</p>
              <h2 className="mt-3 text-4xl font-medium sm:text-5xl">Gemeinsam erfolgreich</h2>
              {s.references && <p className="mt-4 text-lg text-muted-foreground">{withBrand(s.references.intro)}</p>}
            </div>
            <Link
              to="/referenzen"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-6 py-3 font-medium transition-colors hover:border-gold hover:text-gold"
            >
              Zu unseren Referenzen <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          {s.references && (
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {s.references.items.map((r) => (
                <div key={r.name} className="reveal rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <p className="font-display text-2xl font-semibold uppercase tracking-wide">{r.name}</p>
                  <p className="mt-1 text-muted-foreground">{r.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Other topics */}
      <section className="border-t border-border bg-background py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow reveal text-center text-gold">Weitere Themen</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                to={o.slug}
                className="reveal group flex items-center gap-5 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-lift"
              >
                <img
                  src={o.image}
                  alt={o.imageAlt}
                  className="h-20 w-20 rounded-full object-cover ring-4 ring-secondary"
                  style={{ objectPosition: o.imagePosition ?? "50% 30%" }}
                  loading="lazy"
                />
                <span className="flex-1">
                  <span className="block text-2xl font-semibold">{o.title}</span>
                  <span className="text-sm text-muted-foreground">{o.person.name}</span>
                </span>
                <ArrowRight className="h-5 w-5 text-gold transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SubpageShell>
  );
}
