"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import RegionToggle from "@/components/ui/RegionToggle";
import { RAZORPAY_DONATE_URL } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/our-team", label: "Our Team" },
  { href: "/work-with-us", label: "Work With Us" },
];

const MotionLink = motion.create(Link);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant bg-surface/90 backdrop-blur-md">
      <Container className="flex items-center justify-between py-5">
        <MotionLink
          href="/"
          className="shrink-0"
          onClick={() => setIsOpen(false)}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <Image
            src="/images/logo/jf-logo.png"
            alt="Joti Foundation"
            width={300}
            height={144}
            preload
            className="h-10 w-auto sm:h-12"
          />
        </MotionLink>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <MotionLink
                key={href}
                href={href}
                aria-current={isActive ? "page" : undefined}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className={`relative font-mono text-label-caps uppercase transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {label}
                <motion.span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-px w-full bg-primary"
                  variants={{
                    rest: { scaleX: isActive ? 1 : 0 },
                    hover: { scaleX: 1 },
                  }}
                  style={{ originX: 0 }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                />
              </MotionLink>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {/* Toggle visible at lg+ only — at md the header is already
              crowded with 4 nav links and two action buttons. */}
          <span className="hidden lg:block">
            <RegionToggle />
          </span>
          <Button href="/volunteer" variant="ghost" size="sm">
            Volunteer
          </Button>
          <Button
            href={RAZORPAY_DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="cta"
            size="sm"
          >
            Donate Now
          </Button>
        </div>

        <motion.button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-on-background md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsOpen((open) => !open)}
          whileTap={{ scale: 0.9 }}
        >
          <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.svg
                key="close"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <path
                  d="M6 6l12 12M18 6L6 18"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                />
              </motion.svg>
            ) : (
              <motion.svg
                key="menu"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.button>
      </Container>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.nav
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-1 overflow-hidden border-t border-outline-variant px-5 py-3 md:hidden"
          >
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <MotionLink
                  key={href}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  whileTap={{ scale: 0.97 }}
                  className={`rounded px-2 py-3 font-mono text-label-caps uppercase transition-colors hover:bg-surface-container hover:text-primary ${
                    isActive ? "text-primary" : "text-on-surface-variant"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </MotionLink>
              );
            })}
            <div className="mt-2 flex flex-col gap-2 border-t border-outline-variant pt-3">
              {/* Full-width toggle in mobile menu — matches the button width */}
              <RegionToggle fullWidth />
              <Button
                href="/work-with-us"
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                Volunteer
              </Button>
              <Button
                href={RAZORPAY_DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="cta"
                size="sm"
                onClick={() => setIsOpen(false)}
              >
                Donate Now
              </Button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
