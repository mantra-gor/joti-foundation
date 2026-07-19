import Link from "next/link";
import { Home } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";

const quickLinks = [
  { href: "/what-we-do", label: "What We Do" },
  { href: "/our-team", label: "Our Team" },
  { href: "/work-with-us", label: "Work With Us" },
];

export default function NotFound() {
  return (
    <Container
      as="section"
      className="flex flex-1 flex-col items-center justify-center gap-8 py-section-mobile text-center lg:py-section-desktop"
    >
      <Reveal className="flex flex-col items-center gap-3">
        <SectionEyebrow>Error 404</SectionEyebrow>
        <span
          className="font-display text-display-xl-mobile text-primary md:text-display-xl"
          aria-hidden="true"
        >
          404
        </span>
      </Reveal>

      <Reveal delay={0.1} className="flex flex-col items-center gap-4">
        <h1 className="max-w-xl font-display text-headline-lg-mobile text-on-background md:text-headline-lg">
          Page Not Found
        </h1>
        <p className="max-w-md font-sans text-body-lg text-on-surface-variant">
          The page you&rsquo;re looking for doesn&rsquo;t exist, was moved, or
          hasn&rsquo;t been deployed yet. Let&rsquo;s get you back to solid
          ground.
        </p>
      </Reveal>

      <Reveal delay={0.2} className="flex flex-wrap items-center justify-center gap-4">
        <Button href="/" variant="primary">
          <Home size={18} strokeWidth={1.5} aria-hidden="true" />
          Return Home
        </Button>
        <Button href="/donate" variant="cta">
          Donate Now
        </Button>
      </Reveal>

      <Reveal
        delay={0.3}
        className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-outline-variant pt-8"
      >
        {quickLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="font-mono text-label-caps uppercase text-on-surface-variant transition-colors hover:text-primary"
          >
            {label}
          </Link>
        ))}
      </Reveal>
    </Container>
  );
}
