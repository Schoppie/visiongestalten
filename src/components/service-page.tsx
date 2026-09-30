import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ServicePageProps {
  eyebrow: string;
  title: string;
  intro: string;
  image: { url: string };
  imageAlt: string;
  highlights: string[];
  body: string[];
}

export function ServicePage({ eyebrow, title, intro, image, imageAlt, highlights, body }: ServicePageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-background/95">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link to="/" className="font-display text-xl font-semibold uppercase tracking-[0.2em]">
            Global<span className="text-gold"> Triangle</span>
          </Link>
          <Button asChild variant="ghost">
            <Link to="/" hash="leistungen"><ArrowLeft /> Zur Übersicht</Link>
          </Button>
        </div>
      </header>

      <main>
        <section className="bg-navy py-20 text-navy-foreground sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="eyebrow text-gold">{eyebrow}</p>
              <h1 className="mt-4 text-5xl font-medium leading-tight sm:text-7xl">{title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-foreground/80">{intro}</p>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-lift">
              <img src={image.url} alt={imageAlt} className="h-full w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="eyebrow text-gold">Was du bekommst</p>
              <ul className="mt-6 space-y-4">
                {highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-lg">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-accent-foreground"><Check className="h-4 w-4" /></span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-4xl font-medium">Gemeinsam zu einem stimmigen Ergebnis</h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
                {body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <Button asChild size="lg" className="mt-8 rounded-full">
                <Link to="/" hash="kontakt">Unverbindlich anfragen <ArrowRight /></Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy py-10 text-navy-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-navy-foreground/70">Global Triangle · Itzehoe</p>
          <a href="mailto:info@global-triangle.de" className="inline-flex items-center gap-2 text-sm transition-colors hover:text-gold"><Mail className="h-4 w-4" /> info@global-triangle.de</a>
        </div>
      </footer>
    </div>
  );
}
