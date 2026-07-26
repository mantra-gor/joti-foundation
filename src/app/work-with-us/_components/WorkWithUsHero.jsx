"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";

const pathways = [
  {
    number: "01",
    title: "Partnership",
    description:
      "Fund, co-design and scale programmes across the disaster management cycle.",
    href: "#partnership",
  },
  {
    number: "02",
    title: "Careers",
    description:
      "Join a lean team that turns the strategic plan into field execution.",
    href: "#careers",
  },
  {
    number: "03",
    title: "Volunteering",
    description:
      "Train as a first responder and answer the call in your own district.",
    href: "#volunteering",
  },
];

const MotionLink = motion.create(Link);

export default function WorkWithUsHero() {
  return (
    <section className="py-section-mobile lg:py-section-desktop">
      <Container className="flex flex-col gap-16">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <Reveal>
              <SectionEyebrow>Work With Us</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="max-w-3xl font-display text-headline-lg-mobile text-on-background md:text-headline-lg">
                Partner, Build a Career, or Join the Response
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="max-w-2xl font-sans text-body-lg text-on-surface-variant">
                Joti Foundation is a youth-led, women-led disaster resilience
                organisation working across prevention and mitigation,
                preparedness, response and recovery. By 2036 we intend to stand
                up 1,000 Youth Response Units, 400 Circle Quick Response Teams
                and 2,000 Village Disaster Management Committees across 50
                disaster-prone districts. None of that happens without partners
                who fund it, colleagues who run it and volunteers who show up in
                the first 24 hours.
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
                  src="/images/g7.JPG"
                  alt="A Joti Foundation volunteer in a hi-vis vest greeting a mother and her baby among neighbours gathered on mud-covered ground after a flood"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0"
                  priority
                />
              </motion.div>
            </motion.div>
          </Reveal>
        </div>

        <nav aria-label="Ways to work with us">
          <ul className="grid gap-4 md:grid-cols-3">
            {pathways.map(({ number, title, description, href }, index) => (
              <Reveal key={href} as="li" delay={0.25 + index * 0.08}>
                <MotionLink
                  href={href}
                  className="flex h-full flex-col gap-3 rounded border border-card-border bg-surface-container-lowest p-6 transition-colors hover:border-secondary"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                >
                  <motion.span
                    className="flex items-center justify-between font-mono text-label-caps uppercase text-secondary"
                    variants={{ rest: { y: 0 }, hover: { y: -2 } }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    {number}
                    <motion.span
                      className="inline-flex text-on-surface-variant"
                      variants={{
                        rest: { x: 0, y: 0 },
                        hover: { x: 3, y: 3 },
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    >
                      <ArrowDownRight
                        size={18}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </motion.span>
                  </motion.span>
                  <span className="font-display text-headline-md text-on-background">
                    {title}
                  </span>
                  <span className="font-sans text-body-md text-on-surface-variant">
                    {description}
                  </span>
                </MotionLink>
              </Reveal>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
