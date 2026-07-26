import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";

export default function OurInspiration() {
  return (
    <section
      aria-labelledby="our-inspiration-heading"
      className="bg-surface-container-low py-section-mobile lg:py-section-desktop"
    >
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-start">
        <Reveal className="flex flex-col gap-4 lg:col-span-5">
          <SectionEyebrow>Our Inspiration</SectionEyebrow>
          <h2
            id="our-inspiration-heading"
            className="font-display text-headline-lg-mobile text-on-background md:text-headline-lg"
          >
            Late Prabjot Singh
          </h2>
          <p className="font-sans text-body-lg text-on-surface-variant">
            Loving father, husband and philanthropist &mdash; the true
            inspiration behind the founding of Joti Foundation.
          </p>
        </Reveal>

        <div className="flex flex-col gap-6 lg:col-span-7">
          <Reveal delay={0.1}>
            <p className="font-sans text-body-md text-on-surface-variant">
              Prabjot Singh was the most trusted and humble figure in his
              hometown of Sri Muktsar Sahib, Punjab. With his great
              heartedness and magnanimous spirit, he led the expansion and
              development of the entire town without ever seeking credit for
              it. Every soul who crossed his path was openly welcomed for
              whatever help they needed.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-sans text-body-md text-on-surface-variant">
              His charitable tales have no end even today. Visitors to
              Sherewala are still told of a leader who took care of families in
              need, funded the education of children, helped young women stand
              on their own feet, and guided officials who came looking for
              support &mdash; deeds that remain an inspiration to many.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
