"use client";

import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import StatBlock from "@/components/ui/StatBlock";
import Reveal from "@/components/motion/Reveal";
import { useRegion } from "@/lib/regionContext";
import { HEADLINE_STATS, HEADLINE_STATS_PUNJAB } from "@/lib/stats";

export default function StatsStrip() {
  const { region } = useRegion();
  const stats = region === "punjab" ? HEADLINE_STATS_PUNJAB : HEADLINE_STATS;

  return (
    <section className="bg-secondary">
      <Container className="grid grid-cols-2 gap-8 py-10 lg:grid-cols-4">
        <AnimatePresence mode="wait" initial={false}>
          {stats.map((stat, index) => (
            <motion.div
              key={region + "-" + stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                duration: 0.28,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.05,
              }}
            >
              <Reveal onMount delay={index * 0.05}>
                <StatBlock inverse label={stat.label} value={stat.value} />
              </Reveal>
            </motion.div>
          ))}
        </AnimatePresence>
      </Container>
    </section>
  );
}
