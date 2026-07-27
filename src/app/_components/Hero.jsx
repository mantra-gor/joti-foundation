import { Heart, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";
import { RAZORPAY_DONATE_URL } from "@/lib/constants";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section className="group relative isolate flex min-h-110 items-end overflow-hidden bg-inverse-surface text-inverse-on-surface md:min-h-130">
      <HeroBackground />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/40 to-black/10"
        aria-hidden="true"
      />

      <Container className="flex flex-col gap-5 py-12 md:py-16">
        <Reveal onMount>
          <SectionEyebrow inverse>
            Active Operations Assam Flood 2026
          </SectionEyebrow>
        </Reveal>

        <Reveal onMount delay={0.1}>
          <h1 className="max-w-2xl font-display text-headline-lg-mobile text-inverse-on-surface md:text-headline-lg">
            The First 24 Hours:{" "}
            <span className="text-white accent">Every Second Saves Lives.</span>
          </h1>
        </Reveal>

        <Reveal onMount delay={0.2}>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              href={RAZORPAY_DONATE_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="cta"
            >
              Support Our Mission{" "}
              <Heart size={18} strokeWidth={1.5} aria-hidden="true" />
            </Button>
            <Button href="/what-we-do" variant="ghost" inverse>
              Active Operations{" "}
              <Zap size={18} strokeWidth={1.5} aria-hidden="true" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
