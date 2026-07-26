"use client";

import { motion } from "framer-motion";

const TONE_CLASSES = {
  white: "bg-surface-container-lowest border-card-border text-on-surface",
  sand: "bg-surface-container border-card-border text-on-surface",
  terracotta: "bg-secondary border-on-secondary/15 text-on-secondary",
  forest: "bg-primary border-on-primary/15 text-on-primary",
};

const PADDING_CLASSES = {
  md: "p-8",
  lg: "p-10",
};

export default function Card({
  tone = "white",
  padding = "md",
  className = "",
  children,
  ...rest
}) {
  const classes = [
    "rounded border transition-shadow duration-200 hover:shadow-hover",
    TONE_CLASSES[tone],
    PADDING_CLASSES[padding],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.div
      className={classes}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 350, damping: 28 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
