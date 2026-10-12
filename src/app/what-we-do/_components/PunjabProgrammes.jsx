"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Chip from "@/components/ui/Chip";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";
import { MODES_DATA } from "@/lib/modesData";

export default function PunjabProgrammes() {
  const programmes = MODES_DATA.punjab.whatWeDo.programmes;

  return (
    <div className="flex flex-col">
      {programmes.map((prog, progIndex) => {
        const isAlternate = progIndex % 2 === 1;

        return (
          <section
            key={prog.id}
            id={prog.id}
            aria-labelledby={`${prog.id}-heading`}
            className={`scroll-mt-24 border-t border-outline-variant py-section-mobile lg:py-section-desktop ${
              isAlternate ? "bg-surface-container-low" : "bg-surface"
            }`}
          >
            <Container className="flex flex-col gap-12">
              <Reveal className="flex flex-col gap-4">
                <SectionEyebrow>{prog.eyebrow}</SectionEyebrow>
                <div className="flex flex-wrap gap-2">
                  <Chip tone="terracotta">{prog.badge}</Chip>
                </div>
                <h2
                  id={`${prog.id}-heading`}
                  className="max-w-3xl font-display text-headline-lg-mobile text-on-background md:text-headline-lg"
                >
                  {prog.title}
                </h2>
                <p className="max-w-3xl font-sans text-body-lg text-primary font-medium">
                  {prog.lead}
                </p>
              </Reveal>

              <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
                <div className="flex flex-col gap-5 lg:col-span-7">
                  {prog.paragraphs.map((para, i) => (
                    <Reveal key={i} delay={i * 0.08}>
                      <p className="font-sans text-body-md text-on-surface-variant leading-relaxed">
                        {para}
                      </p>
                    </Reveal>
                  ))}
                </div>

                <div className="lg:col-span-5">
                  <Reveal delay={0.15}>
                    <div
                      className={`rounded border border-outline-variant p-6 sm:p-8 ${
                        isAlternate ? "bg-surface" : "bg-surface-container-low"
                      }`}
                    >
                      <h3 className="mb-6 font-mono text-label-caps uppercase text-on-surface-variant">
                        Programme Key Metrics
                      </h3>
                      <dl className="grid grid-cols-2 gap-6">
                        {prog.stats.map(({ value, label }) => (
                          <div key={label} className="flex flex-col gap-1">
                            <dd className="font-display text-headline-md text-primary">
                              {value}
                            </dd>
                            <dt className="font-sans text-body-sm text-on-surface-variant">
                              {label}
                            </dt>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </Reveal>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {prog.images.map(({ src, alt, caption }, imgIndex) => (
                  <Reveal key={src} delay={imgIndex * 0.1}>
                    <div className="flex flex-col gap-3">
                      <motion.div
                        className="group relative aspect-16/10 w-full overflow-hidden rounded border border-outline-variant bg-inverse-surface"
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
                            sizes="(min-width: 768px) 50vw, 100vw"
                            className="object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0"
                          />
                        </motion.div>
                      </motion.div>
                      <p className="font-sans text-body-sm text-on-surface-variant">
                        {caption}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Container>
          </section>
        );
      })}
    </div>
  );
}
