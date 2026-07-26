"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import NewsletterForm from "@/components/layout/NewsletterForm";
import { Facebook, Linkedin, Instagram } from "@/components/icons/BrandIcons";
import { SOCIAL_LINKS } from "@/lib/constants";

const organizationLinks = [
  { href: "/our-story", label: "Our Story" },
  { href: "/reports", label: "Reports" },
  { href: "/work-with-us#careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/refund-policy", label: "Refund Policy" },
];

const socialLinks = [
  { href: SOCIAL_LINKS.facebook, label: "Facebook", Icon: Facebook },
  { href: SOCIAL_LINKS.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: SOCIAL_LINKS.instagram, label: "Instagram", Icon: Instagram },
];

const MotionLink = motion.create(Link);

function FooterLink({ href, children }) {
  return (
    <MotionLink
      href={href}
      className="inline-block font-sans text-body-md text-on-surface transition-colors hover:text-primary"
      whileHover={{ x: 4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      {children}
    </MotionLink>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-outline-variant bg-surface-container">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-4">
          <Image
            src="/images/logo/jf-logo.png"
            alt="Joti Foundation"
            width={300}
            height={144}
            className="w-34 h-auto"
          />
          <p className="font-sans text-body-md text-on-surface-variant">
            Our within 24-hour response mission ensures that when disaster
            strikes, humanity strikes back faster. We deliver search & rescue,
            relief medical aid, and recovery support from the first critical
            hours.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {socialLinks.map(({ href, label, Icon }) => (
              <MotionLink
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
                whileHover={{ scale: 1.12, rotate: 8 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
              </MotionLink>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-mono text-label-caps uppercase text-on-surface-variant">
            Organization
          </span>
          <ul className="flex flex-col gap-3">
            {organizationLinks.map(({ href, label }) => (
              <li key={label}>
                <FooterLink href={href}>{label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-mono text-label-caps uppercase text-on-surface-variant">
            Newsletter
          </span>
          <NewsletterForm />
        </div>
      </Container>

      <div className="border-t border-outline-variant">
        <Container className="flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-sans text-sm text-on-surface-variant">
            © {new Date().getFullYear()} Joti Foundation.
          </span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-sans text-sm text-on-surface-variant transition-colors hover:text-primary"
              >
                {label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
