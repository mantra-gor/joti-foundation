"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
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

export default function OperationalExcellence() {
  const { region } = useRegion();
  const currentMode = MODES_DATA[region] || MODES_DATA.national;
  const { eyebrow, heading, description, items } = currentMode.operationalExcellence;

  return (
    <section className="py-section-mobile lg:py-section-desktop">
      <Container className="flex flex-col gap-12">
        <Reveal className="max-w-2xl">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={region + "-oe-eyebrow"} {...fadeSlide}>
              <SectionEyebrow>{eyebrow}</SectionEyebrow>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait" initial={false}>
            <motion.h2
              key={region + "-oe-heading"}
              className="mt-3 mb-4 font-display text-headline-lg-mobile text-on-background md:text-headline-lg"
              {...fadeSlide}
            >
              {heading}
            </motion.h2>
          </AnimatePresence>

          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={region + "-oe-desc"}
              className="font-sans text-body-md text-on-surface-variant"
              {...fadeSlide}
            >
              {description}
            </motion.p>
          </AnimatePresence>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map(({ tag, tone, title, description: itemDesc, image, alt, objectPosition }, index) => (
            <Reveal key={title} delay={index * 0.1}>
              <motion.div
                className="group relative flex h-[340px] flex-col justify-end overflow-hidden rounded bg-inverse-surface p-8"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.div
                  className="absolute inset-0"
                  variants={{ rest: { scale: 1 }, hover: { scale: 1.08 } }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className={`object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 ${objectPosition ?? "object-center"}`}
                  />
                </motion.div>
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"
                  aria-hidden="true"
                />
                <motion.div
                  className="relative flex flex-col gap-3"
                  variants={{ rest: { y: 0 }, hover: { y: -6 } }}
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                >
                  <Chip tone={tone} shape="rectangle" className="w-fit">
                    {tag}
                  </Chip>
                  <h3 className="font-display text-headline-md text-inverse-on-surface">
                    {title}
                  </h3>
                  <p className="font-sans text-body-md text-surface-variant">
                    {itemDesc}
                  </p>
                </motion.div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
