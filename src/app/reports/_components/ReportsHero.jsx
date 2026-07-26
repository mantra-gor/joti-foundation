import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";

export default function ReportsHero() {
  return (
    <section className="py-section-mobile lg:py-section-desktop">
      <Container className="flex flex-col gap-6">
        <Reveal>
          <SectionEyebrow>Transparency</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="max-w-4xl font-display text-headline-lg-mobile text-on-background md:text-headline-lg">
            Reports
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="max-w-2xl font-sans text-body-lg text-on-surface-variant">
            A record of the work Joti Foundation has carried out — what was
            done, how, and where — published here as each report is
            released.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
