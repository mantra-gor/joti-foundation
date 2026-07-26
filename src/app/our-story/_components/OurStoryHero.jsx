import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";

export default function OurStoryHero() {
  return (
    <section className="py-section-mobile lg:py-section-desktop">
      <Container className="flex flex-col gap-6">
        <Reveal>
          <SectionEyebrow>Our Story</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="max-w-4xl font-display text-headline-lg-mobile text-on-background md:text-headline-lg">
            We can&rsquo;t help everyone, but everyone can help someone.
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="max-w-2xl font-sans text-body-lg text-on-surface-variant">
            That belief is the whole of Joti Foundation&rsquo;s origin: one man
            in a small Punjab town who helped whoever stood in front of him, and
            a family that turned his example into an organisation.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
