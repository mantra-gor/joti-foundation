"use client";

import { motion } from "framer-motion";
import { useRegion } from "@/lib/regionContext";

const OPTIONS = [
  {
    value: "national",
    label: "Emergency Response",
    shortLabel: "Emergency",
    title: "Emergency Response Across India",
  },
  {
    value: "punjab",
    label: "Community Impact",
    shortLabel: "Community",
    title: "Community Impact in Punjab",
  },
];

/**
 * RegionToggle — a sliding-pill segmented control rendered in the Header.
 *
 * Framer Motion's `layoutId` on the background indicator produces the
 * animated slide between options without any manual x-position math.
 *
 * Props:
 *   fullWidth: boolean — stretches the control to fill its container
 *              (used in the mobile menu where it should match the button width)
 */
export default function RegionToggle({ fullWidth = false, instanceId = "header" }) {
  const { region, setRegion } = useRegion();
  const indicatorId = `region-toggle-indicator-${instanceId}`;

  return (
    <div
      role="group"
      aria-label="Select website mode"
      className={`relative flex items-center rounded border border-outline-variant bg-surface-container-low p-0.5 ${
        fullWidth ? "w-full" : "shrink-0"
      }`}
    >
      {OPTIONS.map(({ value, label, shortLabel, title }) => {
        const isActive = region === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            title={title}
            aria-label={title}
            aria-checked={isActive}
            onClick={() => setRegion(value)}
            className={`relative z-10 cursor-pointer rounded font-mono text-[11px] sm:text-label-caps uppercase transition-colors select-none px-2.5 sm:px-3 py-1.5 ${
              fullWidth ? "flex-1 text-center" : ""
            } ${
              isActive
                ? "text-on-primary font-semibold"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            {/* Sliding background — shared layoutId so Framer Motion
                moves it smoothly between whichever button is active. */}
            {isActive && (
              <motion.span
                layoutId={indicatorId}
                className="absolute inset-0 rounded bg-primary"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                aria-hidden="true"
              />
            )}
            <span className="relative">
              {fullWidth ? label : <><span className="hidden xl:inline">{label}</span><span className="xl:hidden">{shortLabel}</span></>}
            </span>
          </button>
        );
      })}
    </div>
  );
}
