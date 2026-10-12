"use client";

import Image from "next/image";
import { Eye, Target } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Chip from "@/components/ui/Chip";
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

export default function OurPurpose() {
  const { region } = useRegion();
  const currentMode = MODES_DATA[region] || MODES_DATA.national;
  const p = currentMode.purpose;

  return (
    <section className="py-section-mobile lg:py-section-desktop">
      <Container className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="flex flex-col gap-6">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={region + "-eyebrow"} {...fadeSlide}>
                <SectionEyebrow>{p.eyebrow}</SectionEyebrow>
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait" initial={false}>
              <motion.h2
                key={region + "-heading"}
                className="font-display text-headline-lg-mobile text-on-background md:text-headline-lg"
                {...fadeSlide}
              >
                {p.heading}
              </motion.h2>
            </AnimatePresence>

            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={region + "-desc"}
                className="font-sans text-body-md text-on-surface-variant"
                {...fadeSlide}
              >
                {p.description}
              </motion.p>
            </AnimatePresence>

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
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0"
                  />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-6 lg:col-span-7">
          <Reveal>
            <Card tone="terracotta">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="flex gap-3">
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded bg-on-primary/15 text-on-primary"
                    whileHover={{ rotate: -8, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <Eye size={22} strokeWidth={1.5} aria-hidden="true" />
                  </motion.div>
                  <h3 className="font-display text-headline-md text-on-primary">
                    {p.visionTitle}
                  </h3>
                </div>
                <span className="font-mono text-label-caps uppercase text-on-primary/70">
                  {p.visionEyebrow}
                </span>
              </div>
              <p className="mb-6 font-sans text-body-md text-on-primary/85">
                {p.visionText}
              </p>
              <div className="flex flex-wrap gap-3">
                {p.visionChips.map((chip) => (
                  <Chip key={chip} tone="translucent" shape="pill">
                    {chip}
                  </Chip>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card tone="terracotta">
              <div className="mb-6 flex items-center justify-between gap-4">
                <div className="flex gap-3">
                  <motion.div
                    className="flex h-12 w-12 items-center justify-center rounded bg-on-secondary/15 text-on-secondary"
                    whileHover={{ rotate: -8, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  >
                    <Target size={22} strokeWidth={1.5} aria-hidden="true" />
                  </motion.div>
                  <h3 className="mb-3 font-display text-headline-md text-on-secondary">
                    {p.missionTitle}
                  </h3>
                </div>
                <span className="font-mono text-label-caps uppercase text-on-secondary/70">
                  {p.missionEyebrow}
                </span>
              </div>
              <p className="mb-6 font-sans text-body-md text-on-secondary/85">
                {p.missionText}
              </p>
              <div className="flex flex-wrap gap-3">
                {p.missionChips.map((chip) => (
                  <Chip key={chip} tone="translucent" shape="pill">
                    {chip}
                  </Chip>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
