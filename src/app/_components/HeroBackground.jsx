"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const ROTATION_INTERVAL_MS = 4000;

const images = [
  {
    src: "/images/d1.JPG",
    alt: "Volunteers in orange safety vests carrying relief supplies through a flooded village",
  },
  {
    src: "/images/g5.JPG",
    alt: "Relief workers loading supplies onto a rescue boat at the water's edge",
  },
  {
    src: "/images/g11.JPG",
    alt: "Volunteers passing relief supplies down to a rescue boat on a flooded riverbank",
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
