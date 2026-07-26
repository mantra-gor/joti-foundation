"use client";

import { LifeBuoy } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";
import { PUNJAB_FLOODS_SCALE, PUNJAB_FLOODS_RESPONSE } from "@/lib/stats";

export default function PunjabFloods2025() {
  return (
    <section
      id="punjab-floods-2025"
      aria-labelledby="punjab-floods-heading"
      className="scroll-mt-24 bg-secondary py-section-mobile lg:py-section-desktop"
    >
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-4">
          <SectionEyebrow inverse>Punjab Floods 2025</SectionEyebrow>
          <h2
            id="punjab-floods-heading"
            className="max-w-3xl font-display text-headline-lg-mobile text-on-secondary md:text-headline-lg"
          >
            One of the Worst Humanitarian Crises in the Indo-Pak Border Belt
          </h2>
          <p className="max-w-2xl font-sans text-body-lg text-on-secondary/85">
            Floodwater cut off villages along the border, submerging farmland
            that families depend on for the year ahead. Joti Foundation
            responded in the first hours and stayed for the months that
            followed.
          </p>
        </Reveal>

        <Reveal delay={0.05} className="flex flex-col gap-6">
          <h3 className="font-mono text-label-caps uppercase text-on-secondary/70">
            The Scale of the Crisis
          </h3>
          <dl className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {PUNJAB_FLOODS_SCALE.map(({ value, label }) => (
              // flex-col-reverse: the value reads first, but `dt` stays
              // before `dd` in the DOM as the HTML spec requires.
              <div
                key={label}
                className="flex flex-col-reverse gap-2 rounded border border-on-secondary/20 p-5"
              >
                <dt className="font-sans text-body-md text-on-secondary/70">
                  {label}
                </dt>
                <dd className="font-display text-headline-md text-on-secondary">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-6">
          <h3 className="font-mono text-label-caps uppercase text-on-secondary/70">
            What We Did
          </h3>
          <dl className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {PUNJAB_FLOODS_RESPONSE.map(({ value, label }) => (
              <motion.div
                key={label}
                className="flex flex-col-reverse gap-2 rounded border border-on-secondary/20 bg-on-secondary/5 p-5"
                whileHover={{ y: -6, backgroundColor: "rgba(255,255,255,0.1)" }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <dt className="font-sans text-body-md text-on-secondary/80">
                  {label}
                </dt>
                <dd className="font-display text-headline-md text-on-secondary">
                  {value}
                </dd>
              </motion.div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-col gap-4 rounded border border-on-secondary/20 bg-on-secondary/5 p-8 sm:flex-row sm:items-center sm:gap-6">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-on-secondary/10 text-on-secondary">
              <LifeBuoy size={22} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <p className="font-sans text-body-lg text-on-secondary">
              <span className="font-semibold">50+ trained volunteers</span>{" "}
              deployed across flooded border villages using motor rafts,
              reaching households that no other responder could get to.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
