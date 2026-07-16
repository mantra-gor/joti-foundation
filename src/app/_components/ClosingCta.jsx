import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";

export default function ClosingCta() {
  return (
    <section className="py-section-mobile lg:py-section-desktop">
      <Container>
        <Reveal>
          {/* rounded-3xl intentionally exceeds DESIGN.md's 4px card cap — this
              reads as a section-level banner, not a strict card, matching the
              softly-rounded treatment in the Home mockup. */}
          <div className="relative overflow-hidden rounded-lg bg-surface-container px-8 py-16 text-center md:px-16">
            <div
              className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-outline-variant/40 md:h-72 md:w-72"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-outline-variant/30 md:h-80 md:w-80"
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col items-center gap-6">
              <h2 className="max-w-2xl font-display text-headline-lg-mobile text-on-background md:text-headline-lg">
                Ready to make a difference?
              </h2>
              <p className="max-w-xl font-sans text-body-lg text-on-surface-variant">
                Your contribution fuels the training, equipment, and logistics
                needed to save lives in India&rsquo;s most vulnerable moments.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button href="/donate" variant="cta">
                  Donate Now
                </Button>
                <Button href="/work-with-us" variant="ghost">
                  Become a Volunteer
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
