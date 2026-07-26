"use client";

import { motion } from "framer-motion";

/**
 * Scroll-triggered section entrance.
 *
 * `onMount` animates as soon as the component mounts instead of waiting for the
 * element to scroll into view. Use it for anything on the first screen: the
 * scroll trigger only fires once the element is 80px inside the viewport, so
 * content sitting near the fold can otherwise stay at `opacity: 0` on entry —
 * and how much chrome sits above the fold changes (header, hero, an operation
 * banner), which would silently break it again.
 */
export default function Reveal({
  as = "div",
  delay = 0,
  y = 24,
  onMount = false,
  className = "",
  children,
}) {
  const MotionTag = motion[as] ?? motion.div;
  const visible = { opacity: 1, y: 0 };

  const trigger = onMount
    ? { animate: visible }
    : { whileInView: visible, viewport: { once: true, margin: "-80px" } };

  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      {...trigger}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
