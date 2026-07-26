"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";

export default function WhatWeDoHero() {
  return (
    <section className="py-section-mobile lg:py-section-desktop">
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <Reveal>
            <SectionEyebrow>What We Do</SectionEyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="max-w-3xl font-display text-headline-lg-mobile text-on-background md:text-headline-lg">
              Across the Complete Disaster Management Cycle
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-2xl font-sans text-body-lg text-on-surface-variant">
              Joti Foundation is a youth-led, women-led disaster resilience
              non-profit organisation focused on saving lives, strengthening
              communities and building resilience across the complete Disaster
              Management Cycle. The cycle includes Prevention and Mitigation,
              Preparedness, Response and Recovery. Guided by the belief that
              every minute matters during a disaster, JF works to empower and
              equip local youth to become first responders capable of delivering
              timely rescue and relief starting from the critical 24 hours after
              a disaster, while bridging the physical connection needed to reach
              disaster-affected communities.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="lg:col-span-5">
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
                src="/images/g25.JPG"
                alt="A line of Joti Foundation responders in hi-vis vests wading through floodwater with relief sacks carried on their heads"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0"
              />
            </motion.div>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
