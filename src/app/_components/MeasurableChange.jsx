"use client";

import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";

const statRows = [
  { badge: "24h", label: "Response Time", description: "Average emergency deployment speed" },
  { badge: "50+", label: "Communities", description: "Disaster-prone zones fully prepared" },
];

export default function MeasurableChange() {
  return (
    <section className="relative overflow-hidden bg-secondary py-section-mobile lg:py-section-desktop">
      <div
        className="pointer-events-none absolute -right-24 top-0 h-full w-1/2 -skew-x-12 bg-on-secondary/5"
        aria-hidden="true"
      />

      <Container className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal className="flex flex-col gap-6">
          <h2 className="font-display text-headline-lg-mobile text-on-secondary md:text-headline-lg">
            Measurable Change
          </h2>
          <p className="max-w-md font-sans text-body-lg text-on-secondary/85">
            Our impact isn&rsquo;t just in the numbers; it&rsquo;s in the silence after the storm
            where preparation meets purpose.
          </p>

          <div className="flex flex-col gap-4">
            {statRows.map(({ badge, label, description }) => (
              <motion.div
                key={label}
                className="flex items-center gap-4 rounded border border-on-secondary/20 bg-on-secondary/5 p-5"
                whileHover={{ x: 6, backgroundColor: "rgba(255,255,255,0.1)" }}
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
              >
                <span className="flex h-12 w-16 shrink-0 items-center justify-center rounded bg-on-secondary/10 font-display text-lg font-semibold text-on-secondary">
                  {badge}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-label-caps uppercase text-on-secondary/70">
                    {label}
                  </span>
                  <span className="font-sans text-body-md font-semibold text-on-secondary">
                    {description}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex flex-col items-center gap-4 rounded border border-on-secondary/20 bg-on-secondary/5 p-10 text-center">
            <motion.div whileHover={{ scale: 1.15, rotate: -6 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
              <Heart size={40} strokeWidth={1.5} className="text-on-secondary" aria-hidden="true" />
            </motion.div>
            <span className="font-display text-display-xl-mobile text-on-secondary">
              10,000+
            </span>
            <p className="max-w-xs font-sans text-body-md text-on-secondary/85">
              Responders trained and ready for the next call to action.
            </p>
            <Button href="/donate" variant="cta" inverse>
              Support Their Training
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
