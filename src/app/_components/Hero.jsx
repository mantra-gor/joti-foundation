"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Heart, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";
import { RAZORPAY_DONATE_URL } from "@/lib/constants";
import { useRegion } from "@/lib/regionContext";
import { MODES_DATA } from "@/lib/modesData";
import HeroBackground from "./HeroBackground";

const fadeSlide = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
};

export default function Hero() {
  const { region } = useRegion();
  const currentMode = MODES_DATA[region] || MODES_DATA.national;
  const isEmergency = region === "national";

  return (
    <section className="group relative isolate flex min-h-110 items-end overflow-hidden bg-inverse-surface text-inverse-on-surface md:min-h-130">
      <AnimatePresence mode="sync">
        <motion.div
          key={region + "-bg"}
          className="absolute inset-0 -z-10 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          aria-hidden="true"
        >
          <HeroBackground images={currentMode.hero.images} />
        </motion.div>
      </AnimatePresence>
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/45 to-black/15"
        aria-hidden="true"
      />

      <Container className="flex flex-col gap-5 py-12 md:py-16">
        <Reveal onMount>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={region + "-eyebrow"} {...fadeSlide}>
              <SectionEyebrow inverse>{currentMode.hero.eyebrow}</SectionEyebrow>
            </motion.div>
          </AnimatePresence>
        </Reveal>

        <Reveal onMount delay={0.1}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.h1
              key={region + "-headline"}
              className="max-w-2xl font-display text-headline-lg-mobile text-inverse-on-surface md:text-headline-lg"
              {...fadeSlide}
            >
              {isEmergency ? (
                <>
                  The First 24 Hours:{" "}
                  <span className="text-white accent">Every Second Saves Lives.</span>
                </>
              ) : (
                <>
                  Rooted in Service:{" "}
                  <span className="text-white accent">
                    Building Healthier, Resilient Communities.
                  </span>
                </>
              )}
            </motion.h1>
          </AnimatePresence>
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
              {isEmergency ? "Active Operations" : "Explore Initiatives"}{" "}
              <Zap size={18} strokeWidth={1.5} aria-hidden="true" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
