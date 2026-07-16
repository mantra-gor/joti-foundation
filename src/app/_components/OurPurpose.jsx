"use client";

import Image from "next/image";
import { Eye, Target } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Chip from "@/components/ui/Chip";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";

export default function OurPurpose() {
  return (
    <section className="py-section-mobile lg:py-section-desktop">
      <Container className="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="flex flex-col gap-6">
            <SectionEyebrow>Our Purpose</SectionEyebrow>
            <h2 className="font-display text-headline-lg-mobile text-on-background md:text-headline-lg">
              Resilience Built from Within
            </h2>
            <p className="font-sans text-body-md text-on-surface-variant">
              Joti Foundation operates on the front lines of climate change and
              disaster impact in India. We don&rsquo;t just send help; we build
              the capacity for communities to save themselves.
            </p>
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
                  alt="A volunteer greeting a mother and child during a relief visit"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0"
                />
              </motion.div>
            </motion.div>
          </div>
        </Reveal>

        <div className="flex flex-col gap-6 lg:col-span-7">
          <Reveal>
            <Card tone="white">
              <motion.div
                className="mb-6 flex h-12 w-12 items-center justify-center rounded bg-secondary-container/20 text-secondary"
                whileHover={{ rotate: -8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Eye size={22} strokeWidth={1.5} aria-hidden="true" />
              </motion.div>
              <h3 className="mb-3 font-display text-headline-md text-on-background">
                Our Vision
              </h3>
              <p className="font-sans text-body-md text-on-surface-variant">
                By 2036, an India where disaster-prone communities are
                resilient, prepared, and connected, with empowered community
                youth harnessing modern technology, leading timely life-saving
                actions, bridging critical access gaps to affected communities,
                and building safer, stronger, and more resilient futures for
                all.
              </p>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card tone="terracotta">
              <motion.div
                className="mb-6 flex h-12 w-12 items-center justify-center rounded bg-on-secondary/15 text-on-secondary"
                whileHover={{ rotate: -8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Target size={22} strokeWidth={1.5} aria-hidden="true" />
              </motion.div>
              <h3 className="mb-3 font-display text-headline-md text-on-secondary">
                The Mission
              </h3>
              <p className="mb-6 font-sans text-body-md text-on-secondary/85">
                Build, empower, and equip community youth response units to
                deliver life-saving rescue and immediate relief within the
                critical 24 hours after a disaster in tandem with NDRF, SDRF,
                and local authorities, while strengthening community capacities
                to anticipate, prevent, prepare for, respond to, and recover
                from disasters.
              </p>
              <div className="flex flex-wrap gap-3">
                <Chip tone="translucent" shape="pill">
                  Equip
                </Chip>
                <Chip tone="translucent" shape="pill">
                  Empower
                </Chip>
                <Chip tone="translucent" shape="pill">
                  Deploy
                </Chip>
              </div>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
