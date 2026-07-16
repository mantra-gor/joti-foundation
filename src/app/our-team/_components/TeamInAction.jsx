"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Reveal from "@/components/motion/Reveal";

export default function TeamInAction() {
  return (
    <section className="py-section-mobile lg:py-section-desktop">
      <Container>
        <Reveal>
          <motion.div
            className="group relative aspect-21/9 w-full overflow-hidden rounded"
            initial="rest"
            whileHover="hover"
          >
            <motion.div
              className="absolute inset-0"
              variants={{ rest: { scale: 1 }, hover: { scale: 1.08 } }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <Image
                src="/images/g37.JPG"
                alt="Joti Foundation staff and volunteers distributing relief kits to women in the community"
                fill
                sizes="100vw"
                className="object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0"
              />
            </motion.div>
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
              aria-hidden="true"
            />
            <div className="absolute bottom-0 left-0 p-8 md:p-10">
              <p className="max-w-md font-sans text-body-md text-surface-variant">
                Beyond the org chart, our people work directly alongside the communities they
                serve.
              </p>
            </div>
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
