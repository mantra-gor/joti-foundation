import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";
import { BUILD_BACK_BETTER } from "@/lib/stats";

export default function BuildBackBetter() {
  return (
    <section className="bg-surface-container-low py-section-mobile lg:py-section-desktop">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-4">
          <SectionEyebrow>Recovery &amp; Rehabilitation</SectionEyebrow>
          <h2 className="max-w-2xl font-display text-headline-lg-mobile text-on-background md:text-headline-lg">
            Build Back Better
          </h2>
          <p className="max-w-2xl font-sans text-body-md text-on-surface-variant">
            Relief ends when the water recedes. Recovery is the longer work of
            rebuilding homes, land and schooling so the next flood does less
            damage than the last one.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BUILD_BACK_BETTER.map(({ value, title, description }, index) => (
            <Reveal key={title} delay={index * 0.05}>
              <Card tone="white" className="flex h-full flex-col">
                <span className="mb-2 font-display text-headline-md text-secondary">
                  {value}
                </span>
                <h3 className="mb-3 font-sans text-body-lg font-semibold text-on-background">
                  {title}
                </h3>
                <p className="font-sans text-body-md text-on-surface-variant">
                  {description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
