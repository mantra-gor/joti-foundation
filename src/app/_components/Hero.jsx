"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Heart, Zap } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";
import { RAZORPAY_DONATE_URL } from "@/lib/constants";
import { useRegion } from "@/lib/regionContext";
import HeroBackground from "./HeroBackground";

const CONTENT = {
  national: {
    eyebrow: "Active Operations Assam Flood 2026",
    headline: (
      <>
        The First 24 Hours:{" "}
        <span className="text-white accent">Every Second Saves Lives.</span>
      </>
    ),
    images: [
      {
        src: "/images/assam-flood-2026/IMG_7269.JPG.jpeg",
        alt: "Three women wade chest-deep through muddy floodwater past a submerged village shopfront, carrying belongings above the waterline",
      },
      {
        src: "/images/assam-flood-2026/IMG_7277.JPG.jpeg",
        alt: "Residents wait on the tin roof of a flooded market row as brown water surges through the street below",
      },
      {
        src: "/images/assam-flood-2026/IMG_7275.JPG.jpeg",
        alt: "Floodwater standing at door height inside a village home, its veranda furniture half submerged",
      },
      {
        src: "/images/assam-flood-2026/IMG_7276.JPG.jpeg",
        alt: "A cluster of tin-roofed village houses cut off by floodwater that has risen to their windows",
      },
      {
        src: "/images/assam-flood-2026/IMG_7274.JPG.jpeg",
        alt: "A submerged homestead seen across a wide expanse of floodwater under clear sky",
      },
    ],
  },
  punjab: {
    eyebrow: "Punjab — JF's Founding Region",
    headline: (
      <>
        Serving Punjab:{" "}
        <span className="text-white accent">
          From Border Villages to Every District.
        </span>
      </>
    ),
    images: [
      {
        src: "/images/g5.JPG",
        alt: "Responders in life jackets loading supplies into an inflatable rescue boat at a flooded Punjab riverbank",
      },
      {
        src: "/images/d1.JPG",
        alt: "A relief worker in an orange vest wades through Punjab floodwater carrying a supply sack, with a rescue boat crew close behind",
      },
      {
        src: "/images/g25.JPG",
        alt: "A line of Joti Foundation responders in hi-vis vests wading through Punjab floodwater with relief sacks on their heads",
      },
      {
        src: "/images/g10.JPG",
        alt: "Villagers carrying boxes and bundles on their heads as they walk out through a flooded brick-walled lane in Punjab",
      },
      {
        src: "/images/g28.JPG",
        alt: "A Joti Foundation volunteer smiles while carrying a relief supply sack beside Punjab floodwaters",
      },
      {
        src: "/images/c10.JPG",
        alt: "Joti Foundation volunteers at work during the Punjab flood response operation",
      },
    ],
  },
};

const fadeSlide = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
};

export default function Hero() {
  const { region } = useRegion();
  const content = CONTENT[region];

  return (
    <section className="group relative isolate flex min-h-110 items-end overflow-hidden bg-inverse-surface text-inverse-on-surface md:min-h-130">
      {/* AnimatePresence mode="sync" crossfades the outgoing background out
          while the incoming one fades in simultaneously. The key on the
          motion.div causes React to remount HeroBackground (resetting the
          rotation timer to image 0) while the visual transition stays smooth. */}
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
          <HeroBackground images={content.images} />
        </motion.div>
      </AnimatePresence>
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/40 to-black/10"
        aria-hidden="true"
      />

      <Container className="flex flex-col gap-5 py-12 md:py-16">
        <Reveal onMount>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={region + "-eyebrow"} {...fadeSlide}>
              <SectionEyebrow inverse>{content.eyebrow}</SectionEyebrow>
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
              {content.headline}
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
              Active Operations{" "}
              <Zap size={18} strokeWidth={1.5} aria-hidden="true" />
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
