"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";

const photos = [
  {
    src: "/images/g10.JPG",
    alt: "Villagers carrying boxes and bundles on their heads as they walk out through a flooded brick-walled lane",
    caption: "Families moving belongings to higher ground as water enters the village.",
  },
  {
    src: "/images/g12.JPG",
    alt: "Joti Foundation responders in hi-vis vests talking with residents around a clipboard during a needs assessment",
    caption: "Assessing need house by house so relief reaches the families worst hit.",
  },
  {
    src: "/images/g5.JPG",
    alt: "Responders in life jackets loading supplies into an inflatable rescue boat at a flooded riverbank",
    caption: "Loading a rescue boat bound for villages cut off by the water.",
  },
];

export default function InTheField() {
  return (
    <section className="py-section-mobile lg:py-section-desktop">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-4">
          <SectionEyebrow>In the Field</SectionEyebrow>
          <h2 className="max-w-2xl font-display text-headline-lg-mobile text-on-background md:text-headline-lg">
            Flood Response, Punjab
          </h2>
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
                <p className="font-sans text-body-md text-on-surface-variant">{caption}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
