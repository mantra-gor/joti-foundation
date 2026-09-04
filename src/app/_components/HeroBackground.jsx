"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const ROTATION_INTERVAL_MS = 4000;

/**
 * HeroBackground — cycles through `images` on a timer.
 *
 * Positioning and z-index live on the AnimatePresence wrapper in Hero.jsx
 * so that Framer Motion can crossfade two instances simultaneously.
 * This component is intentionally free of absolute/z-index so the parent
 * can control the stacking layer during the transition.
 */
export default function HeroBackground({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % images.length);
    }, ROTATION_INTERVAL_MS);
    return () => clearInterval(id);
    // images.length is stable for the life of this mount; the component
    // remounts (via parent key) when the region changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="absolute inset-0">
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover grayscale transition-all duration-[2000ms] ease-out group-hover:grayscale-0 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
