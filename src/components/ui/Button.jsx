"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const VARIANT_CLASSES = {
  primary: "bg-primary text-on-primary hover:opacity-90",
  cta: "bg-secondary text-on-secondary hover:opacity-90",
  ghost: "border border-outline text-on-background hover:bg-surface-container",
};

const INVERSE_VARIANT_CLASSES = {
  primary: "bg-on-primary text-primary hover:opacity-90",
  cta: "bg-surface text-secondary hover:opacity-90",
  ghost: "border border-inverse-on-surface text-inverse-on-surface hover:bg-inverse-on-surface/10",
};

const SIZE_CLASSES = {
  sm: "px-4 py-2",
  md: "px-6 py-3",
};

const TAP_TRANSITION = { type: "spring", stiffness: 500, damping: 30 };
const HOVER_TRANSITION = { type: "spring", stiffness: 400, damping: 25 };

const MotionLink = motion.create(Link);

export default function Button({
  variant = "primary",
  inverse = false,
  size = "md",
  href,
  type = "button",
  disabled = false,
  className = "",
  children,
  ...rest
}) {
  const toneClasses = (inverse ? INVERSE_VARIANT_CLASSES : VARIANT_CLASSES)[variant];
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded font-sans text-button transition-colors duration-200",
    SIZE_CLASSES[size],
    toneClasses,
    disabled ? "pointer-events-none opacity-50" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const motionProps = disabled
    ? {}
    : {
        whileHover: { scale: 1.03, y: -1 },
        whileTap: { scale: 0.97, y: 0 },
        transition: HOVER_TRANSITION,
      };

  if (href) {
    return (
      <MotionLink href={href} className={classes} {...motionProps} {...rest}>
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      className={classes}
      {...motionProps}
      whileTap={disabled ? undefined : { scale: 0.97, y: 0, transition: TAP_TRANSITION }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
