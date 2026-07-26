"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Chip from "@/components/ui/Chip";
import Reveal from "@/components/motion/Reveal";

const excellence = [
  {
    tag: "01 — Rescue and Relief",
    tone: "terracotta",
    title: "First Response, First Priority",
    description:
      "Our water-rescue units reach stranded families within hours, pairing swift extraction with the food, water, and shelter relief they need immediately after.",
    image: "/images/d1.JPG",
    alt: "A relief worker in an orange vest wades through floodwater carrying a supply sack, with a rescue boat crew close behind",
  },
  {
    tag: "02 — Logistics",
    tone: "amber",
    title: "Swift Logistic Deployment",
    description:
      "Our water-rescue units are trained to navigate difficult terrains to reach isolated pockets within hours.",
    image: "/images/g25.JPG",
    alt: "A line of relief workers wading through floodwater carrying supply sacks",
  },
  {
    tag: "03 — Recovery",
    tone: "forest",
    title: "The Heart of Service",
    description:
      "Beyond food and shelter, we provide the psychological first aid that communities need to begin healing.",
    image: "/images/g11.JPG",
    alt: "Volunteers forming a chain to pass relief sacks up a sandbagged embankment from a rescue boat",
  },
  {
    tag: "04 — Rehabilitation",
    tone: "terracotta",
    title: "Rebuilding What Was Lost",
    description:
      "We stay long after the water recedes, supporting families as they rebuild homes, livelihoods, and a sense of normalcy.",
    image: "/images/g28.JPG",
    alt: "A Joti Foundation volunteer smiles while carrying a relief supply sack beside floodwaters",
  },
];

export default function OperationalExcellence() {
  return (
    <section className="py-section-mobile lg:py-section-desktop">
      <Container className="flex flex-col gap-12">
        <Reveal className="max-w-2xl">
          <h2 className="mb-4 font-display text-headline-lg-mobile text-on-background md:text-headline-lg">
            Operational Excellence
          </h2>
          <p className="font-sans text-body-md text-on-surface-variant">
            Combining tactical precision with deep human connection to ensure no
            one is left behind in the mud.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {excellence.map(
            ({ tag, tone, title, description, image, alt }, index) => (
              <Reveal key={title} delay={index * 0.1}>
                <motion.div
                  className="group relative flex aspect-4/3 flex-col justify-end overflow-hidden rounded bg-inverse-surface p-8"
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
                      className="object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0"
                    />
                  </motion.div>
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"
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
                      {description}
                    </p>
                  </motion.div>
                </motion.div>
              </Reveal>
            ),
          )}
        </div>
      </Container>
    </section>
  );
}
