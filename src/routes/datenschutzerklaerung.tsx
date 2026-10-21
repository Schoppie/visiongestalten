import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SubpageShell, withBrand } from "@/components/site-layout";
import { DATENSCHUTZ } from "@/content/datenschutz";
import { pageHead } from "@/content/seo";

const TITLE = "Datenschutzerklärung – Global Triangle Itzehoe";
const DESCRIPTION =
  "Datenschutzerklärung von Global Triangle: Informationen zur Verarbeitung personenbezogener Daten, Hosting, Kontaktformular und deinen Rechten.";

export const Route = createFileRoute("/datenschutzerklaerung")({
  head: () =>
    pageHead({ path: "/datenschutzerklaerung", title: TITLE, description: DESCRIPTION, noindex: true }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <SubpageShell>
      <PageIntro eyebrow="Rechtliches" title="Datenschutzerklärung" />
      <section className="py-16 sm:py-20">
        <article className="mx-auto max-w-3xl px-5 text-muted-foreground">
          {DATENSCHUTZ.map((b, i) => {
            switch (b.type) {
              case "h2":
                return (
                  <h2 key={i} className="mt-14 mb-4 text-3xl font-semibold text-foreground first:mt-0">
                    {withBrand(b.text)}
                  </h2>
                );
              case "h3":
                return (
                  <h3 key={i} className="mt-8 mb-3 text-2xl font-semibold text-foreground">
                    {withBrand(b.text)}
                  </h3>
                );
              case "h4":
                return (
                  <h4 key={i} className="mt-7 mb-2 font-body text-lg font-semibold text-foreground">
                    {withBrand(b.text)}
                  </h4>
                );
              case "li":
                return (
                  <p key={i} className="mb-3 border-l-2 border-gold/60 pl-4 leading-relaxed">
                    {withBrand(b.text)}
                  </p>
                );
              default:
                return (
                  <p key={i} className="mb-4 leading-relaxed">
                    {withBrand(b.text)}
                  </p>
                );
            }
          })}
        </article>
      </section>
    </SubpageShell>
  );
}
