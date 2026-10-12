"use client";

import Image from "next/image";
import { LifeBuoy } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";
import { PUNJAB_FLOODS_SCALE, PUNJAB_FLOODS_RESPONSE } from "@/lib/stats";

const PUNJAB_RESPONSE_PHOTOS = [
  {
    src: "/images/g25.JPG",
    alt: "Line of Joti Foundation responders wading through deep floodwater carrying relief sacks on their heads",
    caption:
      "Responders forming human supply chains to wade through floodwaters with relief sacks.",
  },
  {
    src: "/images/d1.JPG",
    alt: "A relief worker wades through deep floodwaters carrying emergency supply sacks",
    caption:
      "Navigating deep water with rescue boat backup to deliver immediate food rations.",
  },
  {
    src: "/images/youth/youth-punjab-flood-rescue-child.jpg",
    alt: "Youth responder carrying a child through floodwaters in Punjab",
    caption:
      "Local youth first responders evacuating vulnerable children to safe dry ground.",
  },
  {
    src: "/images/g28.JPG",
    alt: "A Joti Foundation volunteer carrying a relief supply sack beside floodwaters",
    caption:
      "Volunteer teams distributing household essentials door-to-door in Punjab flood zones.",
  },
];

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

        <Reveal delay={0.12} className="flex flex-col gap-6">
          <h3 className="font-mono text-label-caps uppercase text-on-secondary/70">
            Ground Operations in Action
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PUNJAB_RESPONSE_PHOTOS.map(({ src, alt, caption }, i) => (
              <div key={src} className="flex flex-col gap-3">
                <motion.div
                  className="group relative aspect-4/3 w-full overflow-hidden rounded border border-on-secondary/20 bg-black/20"
                  whileHover="hover"
                  initial="rest"
                >
                  <motion.div
                    className="absolute inset-0"
                    variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0"
                    />
                  </motion.div>
                </motion.div>
                <p className="font-sans text-body-sm text-on-secondary/75">
                  {caption}
                </p>
              </div>
            ))}
          </div>
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
