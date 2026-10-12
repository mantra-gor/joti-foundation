"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";
import { useRegion } from "@/lib/regionContext";
import { MODES_DATA } from "@/lib/modesData";

const fadeSlide = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
};

export default function WhatWeDoHero() {
  const { region } = useRegion();
  const currentMode = MODES_DATA[region] || MODES_DATA.national;
  const heroData = currentMode.whatWeDo.hero;

  return (
    <section className="py-section-mobile lg:py-section-desktop">
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <Reveal>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={region + "-eyebrow"} {...fadeSlide}>
                <SectionEyebrow>{heroData.eyebrow}</SectionEyebrow>
              </motion.div>
            </AnimatePresence>
          </Reveal>

          <Reveal delay={0.1}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.h1
                key={region + "-title"}
                className="max-w-3xl font-display text-headline-lg-mobile text-on-background md:text-headline-lg"
                {...fadeSlide}
              >
                {heroData.title}
              </motion.h1>
            </AnimatePresence>
          </Reveal>

          <Reveal delay={0.2}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={region + "-intro"}
                className="max-w-2xl font-sans text-body-lg text-on-surface-variant"
                {...fadeSlide}
              >
                {heroData.description}
              </motion.p>
            </AnimatePresence>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-5">
          <motion.div
            className="group relative aspect-4/3 w-full overflow-hidden rounded"
            whileHover="hover"
            initial="rest"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={region + "-img"}
                className="absolute inset-0"
                variants={{ rest: { scale: 1 }, hover: { scale: 1.08 } }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Image
                  src={heroData.image}
                  alt={heroData.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
