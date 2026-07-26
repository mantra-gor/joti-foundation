import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";

export const legalLinkClass =
  "text-primary underline underline-offset-2 decoration-outline-variant hover:text-secondary transition-colors";

export function LegalHero({ title, effectiveDate, intro }) {
  return (
    <section className="py-section-mobile lg:py-section-desktop">
      <Container className="flex flex-col gap-6">
        <Reveal>
          <SectionEyebrow>Legal</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="max-w-3xl font-display text-headline-lg-mobile text-on-background md:text-headline-lg">
            {title}
          </h1>
        </Reveal>
        {effectiveDate && (
          <Reveal delay={0.15}>
            <p className="font-mono text-label-caps uppercase text-on-surface-variant">
              Effective date: {effectiveDate}
            </p>
          </Reveal>
        )}
        {intro && (
          <Reveal delay={0.2}>
            <p className="max-w-3xl font-sans text-body-lg text-on-surface-variant">
              {intro}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}

export function LegalBody({ children }) {
  return (
    <section className="pb-section-mobile lg:pb-section-desktop">
      <Container>
        <Reveal className="flex max-w-3xl flex-col gap-10 border-t border-outline-variant pt-12">
          {children}
        </Reveal>
      </Container>
    </section>
  );
}

export function LegalNotice({ children }) {
  return (
    <p className="rounded border border-card-border bg-surface-container-lowest p-6 font-sans text-sm text-on-surface-variant md:p-8">
      {children}
    </p>
  );
}

export function LegalSection({ heading, children }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-display text-body-lg font-semibold text-on-background">
        {heading}
      </h2>
      {children}
    </div>
  );
}

export function LegalParagraph({ children }) {
  return (
    <p className="font-sans text-body-md text-on-surface-variant">
      {children}
    </p>
  );
}

export function LegalList({ children }) {
  return (
    <ul className="flex flex-col gap-2 pl-5 font-sans text-body-md text-on-surface-variant marker:text-secondary list-disc">
      {children}
    </ul>
  );
}
