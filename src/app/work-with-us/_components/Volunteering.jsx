"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
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

// Proof that the model works, drawn from the Punjab Floods 2025 response.
const proofPoints = [
  { value: "100+", label: "Active Volunteers" },
  { value: "50+", label: "Deployed, Punjab Floods 2025" },
  { value: "25+", label: "Days Continuous Rescue" },
];

export default function Volunteering() {
  return (
    <section
      id="volunteering"
      aria-labelledby="volunteering-heading"
      className="scroll-mt-24 bg-surface-container-low py-section-mobile lg:py-section-desktop"
    >
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="order-1 flex flex-col gap-6 lg:col-span-7 lg:order-2">
          <Reveal>
            <SectionEyebrow>Volunteering</SectionEyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              id="volunteering-heading"
              className="max-w-2xl font-display text-headline-lg-mobile text-on-background md:text-headline-lg"
            >
              The First Responder Is Already There. It Could Be You.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-2xl font-sans text-body-lg text-on-surface-variant">
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
                className="flex flex-col gap-2 rounded border border-card-border bg-surface-container-lowest p-5 hover:shadow-hover sm:flex-row sm:gap-5"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
              >
                <span className="font-mono text-label-caps uppercase text-secondary sm:w-8 sm:shrink-0 sm:pt-1">
                  {number}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="font-display text-lg font-semibold text-on-background">
                    {title}
                  </h3>
                  <p className="font-sans text-body-md text-on-surface-variant">
                    {description}
                  </p>
                </div>
              </motion.div>
            ))}
          </Reveal>

          <Reveal delay={0.3} className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/volunteer" variant="primary">
                Apply to Volunteer{" "}
                <ArrowRight size={18} strokeWidth={1.5} aria-hidden="true" />
              </Button>
              <Button href="/what-we-do" variant="ghost">
                See the Work First
              </Button>
            </div>
            <p className="font-sans text-body-md text-on-surface-variant">
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
                  src="/images/g11.JPG"
                  alt="Volunteers and residents working shoulder to shoulder to pass relief sacks up a sandbagged embankment from a rescue boat"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0"
                />
              </motion.div>
            </motion.div>

            <dl className="grid grid-cols-3 gap-4">
              {proofPoints.map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col-reverse gap-1 rounded border border-card-border bg-surface-container-lowest p-4"
                >
                  <dt className="font-sans text-body-md text-on-surface-variant">
                    {label}
                  </dt>
                  <dd className="font-display text-headline-md text-secondary">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
