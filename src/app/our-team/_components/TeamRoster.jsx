"use client";

import Image from "next/image";
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
    label: "Board of Trustees",
    members: [
      {
        name: "Prabkiran Brar",
        title: "Chairperson",
        bio: "Founding Chairperson, dedicated to lifelong learning opportunities for underprivileged children across India. A teacher by instinct, she has spent the past decade funding education and teaching children in Sherewala, her father's hometown.",
        photo: "/images/team/prabkiran-brar.webp",
        linkedin: "#",
      },
      {
        name: "Ajit Brar",
        title: "Trustee",
        bio: "Managing Trustee. A successful lawyer by profession, a Welham Boy's Alumni who is a philanthropist, young adventurer, and compassionate rescue and relief expert.",
        photo: "/images/team/ajit-brar.jpeg",
        linkedin: "#",
      },
      {
        name: "Sarabjit Kaur",
        title: "Trustee",
        bio: "A mother of two who single-handedly carries the foundation's groundwork at the grassroots, identifying families and children in need. She has changed hundreds of lives in Punjab, driven by one mission — restoring dignity through food, shelter and financial help.",
        photo: "/images/team/sarabjit-kaur.webp",
        linkedin: "#",
      },
    ],
  },
  {
    label: "Advisory Board",
    members: [
      {
        name: "Ghanshyam Jethwa",
        title: "Strategic Advisor - Partnerships & Growth",
        bio: "Strategic Advisor - Partnerships & Growth. An international strategic leader with over 30 years of experience of managing complex emergencies and development programmes in four countries and 28 states of India.",
        photo: "/images/team/ghanshyam-jethwa.jpg",
        linkedin: "#",
      },
      // Second advisor pending — name and title not yet confirmed by the org.
    ],
  },
  {
    label: "Programme & Operations Team",
    members: [
      {
        name: "Divya Gupta",
        title: "CEO",
        bio: "Humanitarian and Development Leader with over 22 years of experience across Disaster Risk Reduction (DRR), climate resilience, Water, Sanitation and Hygiene Promotion (WASH), and public health promotion in India and Nepal.",
        photo: "/images/team/divya-gupta.png",
        linkedin: "#",
      },
      {
        name: "Ramjul Ali Barbhuiya",
        title: "Program Manager",
        bio: "Humanitarian and Development professional with over seven years of experience across DRR, WASH and Climate Resilience. Certified expert in Disaster Risk Management from International Association of Disaster Management.",
        photo: "/images/team/ramjul-ali.jpeg",
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
        bio: "Communication Specialist with 5 years of progressive experience in public relations, media relations content strategy, stakeholder communications, and brand management.",
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
        bio: "Three years of experience in Search and Rescue operations specialised in boat operations and handling.",
        linkedin: "#",
      },
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

const MotionLink = motion.create(Link);

/**
 * Headshot slot — one 4:5 block for every member, whatever their section. Pass a
 * `photo` on the member to swap the placeholder for a real headshot.
 */
function MemberPhoto({ name, title, photo }) {
  return (
    <div className="relative flex aspect-4/5 w-full shrink-0 items-center justify-center overflow-hidden rounded border border-card-border bg-surface-container-high text-on-surface-variant/50">
      {photo ? (
        <Image
          src={photo}
          alt={`${name}, ${title}`}
          fill
          sizes="(min-width: 1024px) 23vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
        />
      ) : (
        <UserRound size={56} strokeWidth={1.5} aria-hidden="true" />
      )}
    </div>
  );
}

function TeamMemberCard({ name, title, bio, photo, linkedin }) {
  return (
    <Card tone="white" padding="md" className="flex h-full flex-col gap-5">
      <div className="flex flex-col gap-5">
        <MemberPhoto name={name} title={title} photo={photo} />
        <div className="flex flex-col gap-1">
          <h3 className="font-display text-lg font-semibold text-on-background">
            {name}
          </h3>
          <p className="font-sans text-sm font-medium text-secondary">
            {title}
          </p>
        </div>
      </div>

      {bio ? (
        <p className="flex-1 font-sans text-body-md text-on-surface-variant">
          {bio}
        </p>
      ) : (
        <div className="flex-1" aria-hidden="true" />
      )}

      {/* <MotionLink
        href={linkedin}
        aria-label={`${name} on LinkedIn`}
        className="flex h-9 w-9 items-center justify-center self-start rounded-full border border-outline-variant text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
        whileHover={{ scale: 1.12, rotate: 8 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <Linkedin size={16} strokeWidth={1.5} aria-hidden="true" />
      </MotionLink> */}
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
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {tier.members.map((member, index) => (
                    <Reveal key={member.name} delay={(index % 4) * 0.06}>
                      <TeamMemberCard {...member} />
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
