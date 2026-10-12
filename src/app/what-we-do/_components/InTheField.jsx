"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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

export default function InTheField() {
  const { region } = useRegion();
  const currentMode = MODES_DATA[region] || MODES_DATA.national;
  const { eyebrow, title, photos } = currentMode.whatWeDo.inTheField;

  return (
    <section className="py-section-mobile lg:py-section-desktop">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-4">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={region + "-field-eyebrow"} {...fadeSlide}>
              <SectionEyebrow>{eyebrow}</SectionEyebrow>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait" initial={false}>
            <motion.h2
              key={region + "-field-title"}
              className="max-w-2xl font-display text-headline-lg-mobile text-on-background md:text-headline-lg"
              {...fadeSlide}
            >
              {title}
            </motion.h2>
          </AnimatePresence>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {photos.map(({ src, alt, caption }, index) => (
            <Reveal key={src} delay={index * 0.1}>
              <div className="flex flex-col gap-3">
                <motion.div
                  className="group relative aspect-4/3 w-full overflow-hidden rounded"
                  whileHover="hover"
                  initial="rest"
                >
                  <motion.div
                    className="absolute inset-0"
                    variants={{ rest: { scale: 1 }, hover: { scale: 1.08 } }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0"
                    />
                  </motion.div>
                </motion.div>
                <p className="font-sans text-body-md text-on-surface-variant">
                  {caption}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
