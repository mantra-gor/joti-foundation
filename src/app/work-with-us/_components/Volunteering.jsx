"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Chip from "@/components/ui/Chip";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";

const steps = [
  {
    number: "01",
    title: "Train",
    description:
      "Learn search and rescue, relief distribution and community mobilisation as part of a Youth Response Unit in your area.",
  },
  {
    number: "02",
    title: "Prepare",
    description:
      "Between disasters, work alongside Village Disaster Management Committees on prevention, mitigation and preparedness.",
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "When your district is hit, respond in the critical first 24 hours in coordination with NDRF, SDRF and local authorities.",
  },
];

const regions = [
  "North Eastern States",
  "Uttarakhand",
  "Himachal Pradesh",
  "Punjab",
];

export default function Volunteering() {
  return (
    <section
      id="volunteering"
      aria-labelledby="volunteering-heading"
      className="scroll-mt-24 bg-primary py-section-mobile lg:py-section-desktop"
    >
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="order-1 flex flex-col gap-6 lg:col-span-7 lg:order-2">
          <Reveal>
            <SectionEyebrow inverse>Volunteering</SectionEyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              id="volunteering-heading"
              className="max-w-2xl font-display text-headline-lg-mobile text-on-primary md:text-headline-lg"
            >
              The First Responder Is Already There. It Could Be You.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-2xl font-sans text-body-lg text-on-primary/85">
              Local youth are usually the first people present when a disaster
              strikes, and are uniquely positioned to act immediately —
              particularly in remote locations where external responders take
              time to arrive. We equip and train those young people so that
              rescue and relief arrive inside the first 24 hours, not after.
            </p>
          </Reveal>

          <Reveal delay={0.25} className="flex flex-col gap-3">
            {steps.map(({ number, title, description }) => (
              <motion.div
                key={number}
                className="flex flex-col gap-2 rounded border border-on-primary/20 bg-on-primary/5 p-5 sm:flex-row sm:gap-5"
                whileHover={{ x: 6, backgroundColor: "rgba(255,255,255,0.1)" }}
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
              >
                <span className="font-mono text-label-caps uppercase text-secondary-container sm:w-8 sm:shrink-0 sm:pt-1">
                  {number}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-lg font-semibold text-on-primary">
                    {title}
                  </h3>
                  <p className="font-sans text-body-md text-on-primary/80">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </Reveal>

          <Reveal delay={0.3} className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/volunteer" variant="primary" inverse>
                Apply to Volunteer{" "}
                <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" />
              </Button>
              <Button href="/what-we-do" variant="ghost" inverse>
                See the Work First
              </Button>
            </div>
            <p className="font-sans text-body-md text-on-primary/70">
              The application form lives on a separate page — it takes you
              through where you are based and how you want to contribute.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="order-2 lg:col-span-5 lg:order-1">
          <div className="flex flex-col gap-6">
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
                  src="/images/g37.JPG"
                  alt="A woman volunteer in a Joti Foundation hi-vis vest handing out bundles of clothing to women gathered at a community distribution table"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0"
                />
              </motion.div>
            </motion.div>

            <div className="flex flex-col gap-3">
              <span className="font-mono text-label-caps uppercase text-on-primary/70">
                Focus Regions, 2026&ndash;2036
              </span>
              <div className="flex flex-wrap gap-3">
                {regions.map((region) => (
                  <Chip key={region} tone="translucent">
                    {region}
                  </Chip>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
