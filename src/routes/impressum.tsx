import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SubpageShell } from "@/components/site-layout";
import { CONTACT } from "@/content/site";

const TITLE = "Impressum – Global Triangle Itzehoe";
const DESCRIPTION = "Impressum von Global Triangle, Trotzenburger Str. 35, 25524 Itzehoe – Anbieterkennzeichnung und Kontakt.";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <SubpageShell>
      <PageIntro eyebrow="Rechtliches" title="Impressum" />
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-4xl gap-10 px-5 sm:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Anbieter</h2>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              {CONTACT.name}
              <br />
              {CONTACT.street}
              <br />
              {CONTACT.city}
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Kontakt</h2>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              Telefon:{" "}
              <a href={CONTACT.phoneHref} className="text-foreground underline decoration-gold underline-offset-4">
                {CONTACT.phone}
              </a>
              <br />
              E-Mail:{" "}
              <a href={`mailto:${CONTACT.email}`} className="text-foreground underline decoration-gold underline-offset-4">
                {CONTACT.email}
              </a>
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Steuernummer</h2>
            <p className="mt-3 text-lg text-muted-foreground">{CONTACT.taxNumber}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Bildquellen</h2>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
              Tonja Fritz-Johnson, Ira Köhnke, Eyke Szopieray, Karolina Grabowska
            </p>
          </div>
        </div>
      </section>
    </SubpageShell>
  );
}
