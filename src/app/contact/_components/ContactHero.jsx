import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";

export default function ContactHero() {
  return (
    <section className="py-section-mobile lg:py-section-desktop">
      <Container className="flex flex-col gap-6">
        <Reveal>
          <SectionEyebrow>Contact</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="max-w-3xl font-display text-headline-lg-mobile text-on-background md:text-headline-lg">
            Let&rsquo;s Start a Conversation
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="max-w-2xl font-sans text-body-lg text-on-surface-variant">
            Whether you&rsquo;re looking to volunteer, partner with us, cover
            our work, or simply learn more about what we do, our team is
            ready to hear from you.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
