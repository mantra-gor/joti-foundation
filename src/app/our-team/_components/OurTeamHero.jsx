"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";

export default function OurTeamHero() {
  return (
    <section className="py-section-mobile lg:py-section-desktop">
      <Container className="flex flex-col gap-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <Reveal>
              <SectionEyebrow>Our Team</SectionEyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="max-w-3xl font-display text-headline-lg-mobile text-on-background md:text-headline-lg">
                A Lean, Collaborative, Mission-Driven Structure
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="max-w-2xl font-sans text-body-lg text-on-surface-variant">
                Joti Foundation adopts a lean, collaborative and mission-driven organisational
                structure designed to provide strong governance, strategic leadership and
                effective programme delivery.
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
                  src="/images/g28.JPG"
                  alt="A Joti Foundation volunteer in a hi-vis vest smiling as she carries a relief supply sack along the water's edge"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0"
                />
              </motion.div>
            </motion.div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <p className="max-w-3xl font-sans text-body-md text-on-surface-variant">
            The Board of Trustees is the highest governing body of Joti Foundation, ultimately
            responsible for the organisation&rsquo;s health and growth. The Board of Directors is
            the second-highest governing body and is collectively responsible for providing
            strategic direction, ensuring good governance and safeguarding the
            organisation&rsquo;s mission, values and long-term sustainability. Both of these
            Boards focus on governance rather than day-to-day management, delegating operational
            leadership to the Managing Trustee and Chief Executive Officer while providing
            strategic oversight, guidance and accountability. Furthermore, an independent
            Advisory Board offers technical expertise and external perspectives. The Strategic
            Leadership Team is responsible for translating the Strategic Plan into action and
            ensuring organisational performance.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="max-w-3xl font-sans text-body-md text-on-surface-variant">
            Two operational pillars support implementation: the Programme Management Team, which
            leads programme design and field execution, and the Operations Management Team,
            which oversees finance, administration, human resources, communications, IT and
            institutional systems. This structure enables JF to remain agile, youth-led and
            responsive while strengthening accountability, partnerships and long-term
            organisational sustainability.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
