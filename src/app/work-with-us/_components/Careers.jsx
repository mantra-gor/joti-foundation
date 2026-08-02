import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";

export default function Careers() {
  return (
    <section
      id="careers"
      aria-labelledby="careers-heading"
      className="scroll-mt-24 py-section-mobile lg:py-section-desktop"
    >
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-4">
          <SectionEyebrow>Careers</SectionEyebrow>
          <h2
            id="careers-heading"
            className="max-w-2xl font-display text-headline-lg-mobile text-on-background md:text-headline-lg"
          >
            Build a Career in Disaster Resilience
          </h2>
          <p className="max-w-3xl font-sans text-body-lg text-on-surface-variant">
            Joti Foundation runs a deliberately lean, collaborative and
            mission-driven structure. Teams are small, decisions travel fast and
            the distance between a plan and a village is short. If you want
            scope over hierarchy — and you are willing to work in remote,
            disaster-prone districts — this is a place to do the most consequential
            work of your career.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-6 rounded border border-card-border bg-surface-container-lowest p-8 md:p-10">
            <span className="font-mono text-label-caps uppercase text-secondary">
              Current Openings
            </span>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
              <p className="max-w-xl font-sans text-body-md text-on-surface-variant">
                Roles are posted here as they open. We also read every
                speculative application — tell us where you would fit and why.
                The application form asks for the role, a link to your CV and
                where you are based.
              </p>
              <Button href="/careers" variant="primary" className="w-fit shrink-0">
                Send Us Your Application
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
