"use client";

import Link from "next/link";
import {
  HandHeart,
  Users,
  Shield,
  HeartHandshake,
  ShieldCheck,
  BrainCog,
  Sprout,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";

const values = [
  {
    title: "Compassion in Action",
    description:
      "We place people at the centre of everything we do and act with empathy, dignity and urgency.",
    Icon: HandHeart,
  },
  {
    title: "Youth Stewardship",
    description:
      "We believe young people are not merely beneficiaries but leaders, first responders and custodians of resilient communities.",
    Icon: Users,
  },
  {
    title: "Courage",
    description:
      "We act decisively and responsibly, especially in times of uncertainty and crisis.",
    Icon: Shield,
  },
  {
    title: "Collaboration",
    description:
      "We achieve greater impact by working hand in hand with communities, NDRF, SDRF, government agencies, CSR partners, academic institutions and civil society organisations.",
    Icon: HeartHandshake,
  },
  {
    title: "Integrity, Accountability and Transparency",
    description:
      "We uphold the highest standards of ethics, transparency and accountability in all our decisions, actions and use of resources.",
    Icon: ShieldCheck,
  },
  {
    title: "Innovation and Continuous Improvement",
    description:
      "We embrace learning, modern technology and emerging practices to strengthen our work.",
    Icon: BrainCog,
  },
  {
    title: "Agility and Growth Mindset",
    description:
      "We remain adaptive, responsive and forward-looking in a rapidly changing world.",
    Icon: Sprout,
  },
];

const MotionLink = motion.create(Link);

export default function CoreValues() {
  return (
    <section className="bg-surface-container-low py-section-mobile lg:py-section-desktop">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <SectionEyebrow className="justify-center">Our DNA</SectionEyebrow>
          <h2 className="font-display text-headline-lg-mobile text-on-background md:text-headline-lg">
            Core Values
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ title, description, Icon }, index) => (
            <Reveal key={title} delay={(index % 4) * 0.05}>
              <Card tone="sand" className="h-full">
                <motion.div
                  className="mb-6 flex h-11 w-11 items-center justify-center rounded border border-secondary/30 text-secondary"
                  whileHover={{ rotate: -8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                </motion.div>
                <h3 className="mb-2 font-display text-lg font-semibold text-on-background">
                  {title}
                </h3>
                <p className="font-sans text-body-md text-on-surface-variant">
                  {description}
                </p>
              </Card>
            </Reveal>
          ))}

          <Reveal delay={0.35}>
            <Card
              tone="terracotta"
              className="flex h-full flex-col justify-between"
            >
              <div>
                <h3 className="mb-3 font-display text-lg font-semibold text-on-secondary">
                  Be the change India needs.
                </h3>
                <p className="font-sans text-body-md text-on-secondary/85">
                  Join our network of community responders.
                </p>
              </div>
              <MotionLink
                href="/work-with-us"
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="mt-6 inline-flex items-center gap-2 border-t border-on-secondary/20 pt-4 font-sans text-button text-on-secondary transition-opacity hover:opacity-80"
              >
                Join Our Team{" "}
                <motion.span
                  className="inline-flex"
                  variants={{ rest: { x: 0 }, hover: { x: 4 } }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
                </motion.span>
              </MotionLink>
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
