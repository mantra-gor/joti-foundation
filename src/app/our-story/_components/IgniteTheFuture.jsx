import { Sprout, Sun, Trees, Accessibility } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";
import { RAZORPAY_DONATE_URL } from "@/lib/constants";

const commitments = [
  {
    title: "Children Thrive",
    Icon: Sprout,
    description:
      "A future in which children do not go hungry, but thrive — fed, in school and safe.",
  },
  {
    title: "Women Shine",
    Icon: Sun,
    description:
      "A future in which women do not hide, but shine — standing on their own feet and leading in their own communities.",
  },
  {
    title: "Villages Grow",
    Icon: Trees,
    description:
      "A future in which villages do not struggle, but grow — prepared for what the climate brings and able to recover from it.",
  },
  {
    title: "No One Written Off",
    Icon: Accessibility,
    description:
      "A future in which people with disabilities do not give up on a secure, healthy and nourished life free of discrimination.",
  },
];

export default function IgniteTheFuture() {
  return (
    <section
      aria-labelledby="ignite-heading"
      className="py-section-mobile lg:py-section-desktop"
    >
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-4">
          <SectionEyebrow>Our Commitment</SectionEyebrow>
          <h2
            id="ignite-heading"
            className="max-w-2xl font-display text-headline-lg-mobile text-on-background md:text-headline-lg"
          >
            Ignite the Future of Our Country
          </h2>
          <p className="max-w-3xl font-sans text-body-lg text-on-surface-variant">
            We are driven by empathy and a strong sense of justice &mdash; to
            fight for the abolition of poverty, for gender equality, and for a
            more sustainable future.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {commitments.map(({ title, Icon, description }, index) => (
            <Reveal key={title} delay={(index % 2) * 0.08}>
              <Card tone="white" className="flex h-full flex-col">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded border border-secondary/30 text-secondary">
                  <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="mb-3 font-display text-headline-md text-on-background">
                  {title}
                </h3>
                <p className="font-sans text-body-md text-on-surface-variant">
                  {description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="max-w-3xl font-sans text-body-md text-on-surface-variant">
            Team Joti Foundation works at the grassroots and connects with
            people directly, so we understand what they need emotionally,
            mentally, physically and psychologically. We are here to reform the
            system, spark our country&rsquo;s future, and make a difference in
            the lives of others.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-col gap-4 rounded border border-card-border bg-surface-container-lowest p-8 md:flex-row md:items-center md:justify-between md:gap-8">
            <p className="max-w-xl font-sans text-body-md text-on-surface-variant">
              Everyone can help someone. Fund a response, or train as a first
              responder in your own district.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                href={RAZORPAY_DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="cta"
                className="shrink-0"
              >
                Donate Now
              </Button>
              <Button href="/work-with-us" variant="ghost" className="shrink-0">
                Work With Us
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
