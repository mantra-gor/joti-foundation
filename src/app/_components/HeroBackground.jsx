"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const ROTATION_INTERVAL_MS = 4000;

const images = [
  {
    src: "/images/assam-flood-2026/IMG_7269.JPG.jpeg",
    alt: "Three women wade chest-deep through muddy floodwater past a submerged village shopfront, carrying belongings above the waterline",
  },
  {
    src: "/images/assam-flood-2026/IMG_7277.JPG.jpeg",
    alt: "Residents wait on the tin roof of a flooded market row as brown water surges through the street below",
  },
  {
    src: "/images/assam-flood-2026/IMG_7275.JPG.jpeg",
    alt: "Floodwater standing at door height inside a village home, its veranda furniture half submerged",
  },
  {
    src: "/images/assam-flood-2026/IMG_7276.JPG.jpeg",
    alt: "A cluster of tin-roofed village houses cut off by floodwater that has risen to their windows",
  },
  {
    src: "/images/assam-flood-2026/IMG_7274.JPG.jpeg",
    alt: "A submerged homestead seen across a wide expanse of floodwater under clear sky",
  },
];

export default function HeroBackground() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((index) => (index + 1) % images.length);
    }, ROTATION_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
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
