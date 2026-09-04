"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Chip from "@/components/ui/Chip";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";
import { useRegion } from "@/lib/regionContext";

const focusRegions = [
  "North Eastern States",
  "Uttarakhand",
  "Himachal Pradesh",
  "Punjab",
];
// Punjab-view: surface Punjab first, annotate it as the founding region
const focusRegionsPunjab = ["Punjab", "North Eastern States", "Uttarakhand", "Himachal Pradesh"];

const preparednessStates = [
  "Gujarat — earthquakes and cyclones",
  "Andhra Pradesh — floods and cyclones",
];

const fadeSlide = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
};

export default function WhereWeWork() {
  const { region } = useRegion();
  const isPunjab = region === "punjab";
  const regions = isPunjab ? focusRegionsPunjab : focusRegions;

  return (
    <section className="py-section-mobile lg:py-section-desktop">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-4">
          <SectionEyebrow>Geographic Focus Areas</SectionEyebrow>
          <h2 className="max-w-2xl font-display text-headline-lg-mobile text-on-background md:text-headline-lg">
            Where We Work
          </h2>
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={region + "-where-desc"}
              className="max-w-2xl font-sans text-body-md text-on-surface-variant"
              {...fadeSlide}
            >
              {isPunjab
                ? "Punjab is Joti Foundation's founding region — the place where our youth-led response model was proven during the 2025 border floods and where all three of our core programmes are active. JF is also expanding to three additional focus regions across India."
                : "Over the next decade, JF will prioritise intensive work in four disaster-prone focus regions. In parallel, JF will undertake preparedness interventions in additional states, with the flexibility to elevate these states to focus areas as needs and capacities evolve."}
            </motion.p>
          </AnimatePresence>
        </Reveal>

        <Reveal delay={0.05}>
          <figure className="flex flex-col gap-3">
            <div className="overflow-hidden rounded border border-card-border bg-surface-container-lowest">
              <Image
                src="/images/geographic-focus-areas.png"
                alt="Map of India titled Joti Foundation Geographic Focus Areas. Punjab, Himachal Pradesh, Uttarakhand and the North Eastern states — Arunachal Pradesh, Assam, Meghalaya, Nagaland, Manipur, Mizoram and Tripura — are marked in green as focus areas for building local youth capacity and community resilience. Gujarat and Andhra Pradesh are marked in orange as preparedness areas. Delhi is marked as the national coordination point for NDMA and NDRF."
                width={2090}
                height={1384}
                sizes="(min-width: 1440px) 1440px, 100vw"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="font-sans text-body-md text-on-surface-variant">
              Focus regions, preparedness states and the national coordination
              point that make up JF&rsquo;s geographic footprint.
            </figcaption>
          </figure>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          <Reveal delay={0.1} className="flex flex-col gap-4">
            <span className="font-mono text-label-caps uppercase text-on-surface-variant">
              Focus Regions, 2026–2036
            </span>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={region + "-chips"}
                className="flex flex-wrap gap-3"
                {...fadeSlide}
              >
                {regions.map((r) => (
                  <div key={r} className="flex items-center gap-2">
                    <Chip
                      tone={isPunjab && r === "Punjab" ? "terracotta" : undefined}
                    >
                      {r}
                    </Chip>
                    {isPunjab && r === "Punjab" && (
                      <span className="font-mono text-label-caps uppercase text-secondary">
                        Founding Region
                      </span>
                    )}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </Reveal>

          {!isPunjab && (
            <Reveal delay={0.15} className="flex flex-col gap-4">
              <span className="font-mono text-label-caps uppercase text-on-surface-variant">
                Preparedness States
              </span>
              <div className="flex flex-wrap gap-3">
                {preparednessStates.map((state) => (
                  <Chip key={state} tone="amber">
                    {state}
                  </Chip>
                ))}
              </div>
            </Reveal>
          )}

          {isPunjab && (
            <Reveal delay={0.15} className="flex flex-col gap-4">
              <span className="font-mono text-label-caps uppercase text-on-surface-variant">
                Active Programmes in Punjab
              </span>
              <div className="flex flex-wrap gap-3">
                <Chip tone="terracotta">Roshan Punjab — Eye Health</Chip>
                <Chip tone="terracotta">Flood Response</Chip>
                <Chip tone="terracotta">Climate Action</Chip>
              </div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
