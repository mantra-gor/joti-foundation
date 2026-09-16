"use client";

/**
 * PersonaSelector
 *
 * First-visit landing screen that forces the user to choose a persona before
 * accessing the site. Rendered via a React Portal so it floats above all
 * layout stacking contexts.
 *
 * Desktop  → centred glassmorphic modal (two cards side-by-side)
 * Mobile   → bottom-sheet drawer (slides up, cards stacked vertically)
 *
 * Cannot be dismissed without making a selection (no Escape key, no
 * backdrop-click). Once a card's CTA is clicked the selection is saved
 * to localStorage via PersonaProvider and the overlay disappears.
 *
 * ─────────────────────────────────────────────────────────────────────
 * DATA CONFIG — edit this object to swap copy, images, or CTAs without
 * touching any render logic.
 * ─────────────────────────────────────────────────────────────────────
 */

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Shield, Heart } from "lucide-react";
import { usePersona } from "@/lib/personaContext";

/* ── Data config ─────────────────────────────────────────────────────── */

const PERSONAS = [
  {
    id: "disaster",
    eyebrow: "Emergency Response",
    headline: "When seconds count,\nwe're already there.",
    description:
      "Real-time disaster relief — floods, earthquakes, and crises — delivered by trained rapid-response teams on the ground within hours.",
    image: "/images/g5.JPG",
    imageAlt:
      "Joti Foundation responders in life jackets loading supplies into an inflatable rescue boat",
    cta: { label: "Explore Relief Work", href: "/what-we-do" },
    Icon: Shield,
    /** Tailwind-safe class strings (used for accent borders / buttons) */
    accentBorder: "border-[#b32922]",
    accentBg: "bg-[#b32922]",
    accentText: "text-[#b32922]",
    overlayGradient:
      "linear-gradient(to top, rgba(10,6,4,0.92) 0%, rgba(60,14,10,0.72) 40%, rgba(20,8,6,0.45) 70%, rgba(0,0,0,0.15) 100%)",
  },
  {
    id: "social",
    eyebrow: "Community Impact",
    headline: "Spectacles, education,\nand enduring change.",
    description:
      "Long-term social programmes — spectacle donations, education access, and community welfare that transform lives permanently.",
    image: "/images/c10.JPG",
    imageAlt: "Joti Foundation volunteers distributing aid and working with community members",
    cta: { label: "See Our Programmes", href: "/what-we-do" },
    Icon: Heart,
    accentBorder: "border-[#4d6453]",
    accentBg: "bg-[#4d6453]",
    accentText: "text-[#4d6453]",
    overlayGradient:
      "linear-gradient(to top, rgba(6,18,10,0.94) 0%, rgba(15,40,22,0.75) 40%, rgba(6,18,10,0.45) 70%, rgba(0,0,0,0.15) 100%)",
  },
];

/* ── Animation variants ──────────────────────────────────────────────── */

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.94, y: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 280, damping: 26, delay: 0.05 },
  },
  exit: {
    opacity: 0,
    scale: 0.96,
    transition: { duration: 0.22, ease: "easeIn" },
  },
};

const sheetVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 30, delay: 0.05 },
  },
  exit: {
    y: "100%",
    opacity: 0,
    transition: { duration: 0.28, ease: [0.32, 0, 0.67, 0] },
  },
};

const cardVariants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.015,
    y: -4,
    transition: { type: "spring", stiffness: 400, damping: 25 },
  },
  tap: { scale: 0.985, y: 0 },
  selected: {
    scale: 1.025,
    transition: { type: "spring", stiffness: 500, damping: 20 },
  },
};

/* ── Sub-components ──────────────────────────────────────────────────── */

function PersonaCard({ persona, onSelect, selectedId }) {
  const isSelected = selectedId === persona.id;

  return (
    <motion.article
      variants={cardVariants}
      initial="rest"
      animate={isSelected ? "selected" : "rest"}
      whileHover={selectedId ? undefined : "hover"}
      whileTap={selectedId ? undefined : "tap"}
      className={[
        "relative flex flex-col overflow-hidden rounded-[4px] border-2 transition-[border-color,box-shadow] duration-300",
        "bg-white/5",
        isSelected
          ? `${persona.accentBorder} shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_8px_40px_rgba(0,0,0,0.5)]`
          : "border-white/15 hover:border-white/30 cursor-pointer",
        "md:min-h-[460px] min-h-[200px]",
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={() => !selectedId && onSelect(persona.id)}
      aria-label={`Choose ${persona.eyebrow} experience`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (!selectedId && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onSelect(persona.id);
        }
      }}
    >
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={persona.image}
        alt={persona.imageAlt}
        className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        aria-hidden="true"
        draggable={false}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: persona.overlayGradient }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8 gap-3 md:gap-4">
        {/* Eyebrow */}
        <div className="flex items-center gap-2">
          <persona.Icon
            size={14}
            strokeWidth={1.5}
            className="text-white shrink-0"
            style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.8))" }}
            aria-hidden="true"
          />
          <span
            className="font-mono text-[11px] font-semibold tracking-[0.14em] uppercase text-white"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.9), 0 0 12px rgba(0,0,0,0.6)" }}
          >
            {persona.eyebrow}
          </span>
        </div>

        {/* Headline */}
        <h2
          className="font-display text-[24px] leading-[30px] md:text-[30px] md:leading-[36px] font-bold text-white tracking-[-0.02em] whitespace-pre-line"
          style={{ textShadow: "0 2px 8px rgba(0,0,0,0.95), 0 1px 3px rgba(0,0,0,0.8)" }}
        >
          {persona.headline}
        </h2>

        {/* Description — hidden on mobile to keep sheet compact */}
        <p
          className="hidden md:block font-sans text-[14px] leading-[23px] text-white font-normal"
          style={{ textShadow: "0 1px 6px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.7)" }}
        >
          {persona.description}
        </p>

        {/* CTA */}
        <AnimatePresence>
          {isSelected ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className={[
                "mt-1 inline-flex items-center gap-2 rounded-[4px] px-5 py-2.5 text-[13px] font-semibold tracking-[0.02em]",
                persona.accentBg,
                "text-white",
              ].join(" ")}
            >
              <motion.span
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
              >
                Entering…
              </motion.span>
            </motion.div>
          ) : (
            <motion.button
              key="cta"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={(e) => {
                e.stopPropagation();
                onSelect(persona.id);
              }}
              className={[
                "mt-1 inline-flex items-center gap-2 rounded-[4px] px-5 py-2.5 text-[13px] font-semibold tracking-[0.02em]",
                "bg-black/40 border border-white/30 text-white",
                "hover:bg-black/55 hover:border-white/50",
                "transition-all duration-200",
                "backdrop-blur-md",
              ].join(" ")}
            >
              {persona.cta.label}
              <ArrowRight size={14} strokeWidth={2} aria-hidden="true" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Selected ring overlay */}
      {isSelected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`absolute inset-0 border-2 rounded-[4px] pointer-events-none ${persona.accentBorder} opacity-60`}
          aria-hidden="true"
        />
      )}
    </motion.article>
  );
}

/* ── Main export ─────────────────────────────────────────────────────── */

export default function PersonaSelector() {
  const { setPersona } = usePersona();
  const [mounted, setMounted] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const overlayRef = useRef(null);

  /* Mount guard — portals require the DOM to exist */
  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  /* Lock body scroll while visible */
  useEffect(() => {
    if (!mounted) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mounted]);

  /* Prevent Escape from dismissing the overlay */
  useEffect(() => {
    if (!mounted) return;
    const handler = (e) => {
      if (e.key === "Escape") e.preventDefault();
    };
    document.addEventListener("keydown", handler, true);
    return () => document.removeEventListener("keydown", handler, true);
  }, [mounted]);

  function handleSelect(id) {
    if (selectedId) return; // already selecting
    setSelectedId(id);
    /* Short delay so the "Entering…" animation is visible before the
       overlay exits. PersonaProvider will then hide us by setting state. */
    setTimeout(() => {
      setPersona(id);
    }, 650);
  }

  if (!mounted) return null;

  const panelVariant = isMobile ? sheetVariants : modalVariants;

  return createPortal(
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        ref={overlayRef}
        key="persona-backdrop"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-xl"
        style={{ background: "rgba(4, 7, 5, 0.85)" }}
        aria-modal="true"
        role="dialog"
        aria-label="Choose your experience"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Backdrop noise texture (softened so it doesn't distract) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.02'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "128px",
          }}
          aria-hidden="true"
        />

        {/* Panel — modal (desktop) or sheet (mobile) */}
        <motion.div
          key="persona-panel"
          variants={panelVariant}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={[
            /* Glassmorphic panel with stronger contrast against the backdrop */
            "bg-[#0a110d]/90 md:bg-white/[0.05] md:backdrop-blur-md",
            "border border-white/[0.10]",
            "shadow-[0_24px_80px_rgba(0,0,0,0.85)]",

            /* Desktop: floating modal */
            "md:relative md:rounded-[4px] md:w-full md:max-w-[860px] md:mx-4 md:my-auto",

            /* Mobile: full-width bottom sheet */
            "fixed bottom-0 left-0 right-0 md:static rounded-t-[12px] md:rounded-[4px]",
          ]
            .filter(Boolean)
            .join(" ")}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile drag-handle visual cue */}
          <div className="flex justify-center pt-3 pb-0 md:hidden" aria-hidden="true">
            <div className="h-[3px] w-10 rounded-full bg-white/20" />
          </div>

          {/* Header */}
          <header className="px-6 pt-6 pb-4 md:px-10 md:pt-10 md:pb-6 text-center">
            {/* Logotype / brand signal */}
            <div className="mb-3 flex items-center justify-center gap-2">
              <div className="h-px w-8 bg-white/20" aria-hidden="true" />
              <span className="font-mono text-[10px] font-medium tracking-[0.15em] uppercase text-white/50">
                Joti Foundation
              </span>
              <div className="h-px w-8 bg-white/20" aria-hidden="true" />
            </div>

            <h1 className="font-display text-[24px] leading-[30px] md:text-[34px] md:leading-[42px] font-bold text-white tracking-[-0.02em]">
              How would you like to{" "}
              <span
                className="relative inline-block"
                style={{
                  WebkitTextStroke: "0px",
                  background:
                    "linear-gradient(135deg, #d0e9d4 0%, #b4cdb8 50%, #819986 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                explore our work?
              </span>
            </h1>
            <p className="mt-2 font-sans text-[14px] md:text-[15px] leading-[22px] text-white/55">
              Choose the experience that matters most to you.
            </p>
          </header>

          {/* Cards grid */}
          <div className="px-4 pb-6 md:px-8 md:pb-10 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {PERSONAS.map((persona) => (
              <PersonaCard
                key={persona.id}
                persona={persona}
                onSelect={handleSelect}
                selectedId={selectedId}
              />
            ))}
          </div>

          {/* Footer note */}
          <div className="px-6 pb-5 md:px-10 md:pb-8 text-center">
            <p className="font-mono text-[10px] tracking-[0.08em] uppercase text-white/25">
              You can explore all programmes after selecting your focus
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}
