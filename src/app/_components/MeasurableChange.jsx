"use client";

import { Heart, Timer } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import { RAZORPAY_DONATE_URL } from "@/lib/constants";
import { IMPACT_STATS } from "@/lib/stats";

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
            Our impact isn&rsquo;t just in the numbers; it&rsquo;s in the
            silence after the storm where preparation meets purpose.
          </p>

          <motion.div
            className="flex items-center gap-4 rounded border border-on-secondary/20 bg-on-secondary/5 p-5"
            whileHover={{ x: 6, backgroundColor: "rgba(255,255,255,0.1)" }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-on-secondary/10 text-on-secondary">
              <Timer size={22} strokeWidth={1.5} aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-label-caps uppercase text-on-secondary/70">
                Response Time
              </span>
              <span className="font-sans text-body-md font-semibold text-on-secondary">
                Rescue and relief starting from the first 24 hours
              </span>
            </div>
          </motion.div>

          <Button
            href={RAZORPAY_DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="cta"
            inverse
            className="w-fit"
          >
            Support Their Training{" "}
            <Heart size={18} strokeWidth={1.5} aria-hidden="true" />
          </Button>
        </Reveal>

        <Reveal delay={0.15}>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded border border-on-secondary/20 bg-on-secondary/20">
            {IMPACT_STATS.map(({ value, label }) => (
              <motion.div
                key={label}
                className="flex flex-col-reverse gap-2 bg-secondary p-6"
                whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <dt className="font-sans text-body-md text-on-secondary/70">
                  {label}
                </dt>
                <dd className="font-display text-headline-md text-on-secondary">
                  {value}
                </dd>
              </motion.div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
