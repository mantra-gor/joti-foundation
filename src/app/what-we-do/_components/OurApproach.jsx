import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";

export default function OurApproach() {
  return (
    <section className="py-section-mobile lg:py-section-desktop">
      <Container className="flex flex-col gap-6">
        <Reveal>
          <SectionEyebrow>Our Approach</SectionEyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-3xl font-display text-headline-md text-on-background">
            Joti Foundation believes that every life can be saved when communities have timely
            access to rescue and relief and are empowered to build resilience before, during
            and after disasters.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="max-w-2xl font-sans text-body-md text-on-surface-variant">
            Local youth are often the first people present when disasters strike and are
            uniquely positioned to act immediately, particularly in remote and hard-to-reach
            locations where external responders may take time to arrive. By strengthening
            local capacities before disasters occur and embedding youth-led response systems
            within communities, JF can complement government efforts and create sustainable,
            locally owned disaster resilience systems.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
