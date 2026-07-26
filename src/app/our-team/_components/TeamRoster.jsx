"use client";

import Link from "next/link";
import { UserRound, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";
import { Linkedin } from "@/components/icons/BrandIcons";

const tiers = [
  {
    label: "Leadership",
    emphasis: "lg",
    members: [
      {
        name: "Ajit Brar",
        title: "Managing Trustee",
        bio: "A successful lawyer by profession, a Welham Boy's Alumni who is a philanthropist, young adventurer, and compassionate rescue and relief expert.",
        linkedin: "#",
      },
      {
        name: "Ghanshyam Jethwa",
        title: "Strategic Advisor - Partnerships & Growth",
        bio: "An international strategic leader with over 30 years of experience of managing complex emergencies and development programmes in four countries and 28 states of India.",
        linkedin: "#",
      },
      {
        name: "Divya Gupta",
        title: "CEO",
        bio: "Humanitarian and Development Leader with over 22 years of experience across Disaster Risk Reduction (DRR), climate resilience, Water, Sanitation and Hygiene Promotion (WASH), and public health promotion in India and Nepal.",
        linkedin: "#",
      },
    ],
  },
  {
    label: "Management Team",
    emphasis: "md",
    members: [
      {
        name: "Ramjul Ali Barbhuiya",
        title: "Program Manager",
        bio: "Humanitarian and Development professional with over seven years of experience across DRR, WASH and Climate Resilience. Certified expert in Disaster Risk Management from International Association of Disaster Management.",
        linkedin: "#",
      },
      {
        name: "Ajeet Gupta",
        title: "HR and Finance Manager",
        bio: "Jawaharlal Nehru University Alumni with 3 years of work experience.",
        linkedin: "#",
      },
      {
        name: "Sumit Singh",
        title: "Communication Manager",
        bio: "Communication Specialist with 5 years of progressive experience in public relations, media relations, content strategy, stakeholder communications, and brand management.",
        linkedin: "#",
      },
      {
        name: "Arshdeep Singh Brar",
        title: "Manager, Rescue Operations",
        bio: "Three years of work experience in rescue operation management and field coordination, logistics management and team coordination.",
        linkedin: "#",
      },
      {
        name: "Arsh Gondara",
        title: "Manager, Rescue Operations",
        bio: "Three years of experience in Search and Rescue operations, specialised in boat operations and handling.",
        linkedin: "#",
      },
    ],
  },
  {
    label: "Program & Field Team",
    emphasis: "sm",
    members: [
      {
        name: "Lovepreet Singh",
        title: "Program Associate",
        bio: "Over two years of experience in field coordination, stakeholder management and program coordination.",
        linkedin: "#",
      },
      {
        name: "Harvinder Singh Brar",
        title: "Program Associate",
        bio: "Over two years of experience in Program Management, field coordination and stakeholder management.",
        linkedin: "#",
      },
      {
        name: "Arsh Shaini",
        title: "Field Documentation Associate",
        bio: "Over two years of experience in field level documentation and working with multi-sectoral engagement.",
        linkedin: "#",
      },
      {
        name: "Sukhwinder Singh",
        title: "Field Associate",
        bio: "Over two years of experience in field management, ground set-up and local team support.",
        linkedin: "#",
      },
      {
        name: "Surinder Singh",
        title: "Field Associate",
        bio: "Over two years of experience in field level coordination and programme management.",
        linkedin: "#",
      },
      {
        name: "Harmesh Singh",
        title: "Field Associate",
        bio: "Over two years of experience in programme management, village mapping and programme implementation at ground level.",
        linkedin: "#",
      },
    ],
  },
];

const NAME_SIZE_CLASSES = {
  lg: "text-headline-md",
  md: "text-lg",
  sm: "text-base",
};

const MotionLink = motion.create(Link);

function TeamMemberCard({ name, title, bio, linkedin, emphasis }) {
  return (
    <Card
      tone="white"
      padding={emphasis === "lg" ? "lg" : "md"}
      className="flex h-full flex-col gap-5"
    >
      <div className="flex items-start gap-4">
        {/* Photo placeholder — swap for a real headshot, alt: `${name}, ${title}` */}
        <div className="flex aspect-square w-16 shrink-0 items-center justify-center rounded border border-card-border bg-surface-container-high text-on-surface-variant/50">
          <UserRound
            size={emphasis === "lg" ? 28 : 24}
            strokeWidth={1.5}
            aria-hidden="true"
          />
        </div>
        <div className="flex flex-col gap-1 pt-1">
          <h3
            className={`font-display font-semibold text-on-background ${NAME_SIZE_CLASSES[emphasis]}`}
          >
            {name}
          </h3>
          <p className="font-sans text-sm font-medium text-secondary">{title}</p>
        </div>
      </div>

      <p className="flex-1 font-sans text-body-md text-on-surface-variant">{bio}</p>

      <MotionLink
        href={linkedin}
        aria-label={`${name} on LinkedIn`}
        className="flex h-9 w-9 items-center justify-center self-start rounded-full border border-outline-variant text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
        whileHover={{ scale: 1.12, rotate: 8 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <Linkedin size={16} strokeWidth={1.5} aria-hidden="true" />
      </MotionLink>
    </Card>
  );
}

function TierConnector() {
  return (
    <div className="flex justify-center" aria-hidden="true">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant text-outline">
        <ChevronDown size={18} strokeWidth={1.5} />
      </div>
    </div>
  );
}

export default function TeamRoster() {
  return (
    <section className="bg-surface-container-low py-section-mobile lg:py-section-desktop">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-4">
          <SectionEyebrow>The Team</SectionEyebrow>
          <h2 className="max-w-2xl font-display text-headline-lg-mobile text-on-background md:text-headline-lg">
            The People Behind Our Mission
          </h2>
        </Reveal>

        <div className="flex flex-col gap-10">
          {tiers.map((tier, tierIndex) => (
            <div key={tier.label} className="flex flex-col gap-10">
              {tierIndex > 0 && <TierConnector />}
              <div className="flex flex-col gap-6">
                <Reveal>
                  <SectionEyebrow>{tier.label}</SectionEyebrow>
                </Reveal>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {tier.members.map((member, index) => (
                    <Reveal key={member.name} delay={(index % 3) * 0.06}>
                      <TeamMemberCard {...member} emphasis={tier.emphasis} />
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
