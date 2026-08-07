import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";
import { PARTNERS } from "@/lib/partners";

/**
 * The seam is only invisible if the two tracks are exactly the same width and
 * the animation travels exactly one track width (-50% of the pair). That's why
 * each item carries its own horizontal padding instead of the list carrying a
 * `gap` — a gap would add a half-item of empty space at the join.
 *
 * A short partner list also has to be repeated until one track is wider than
 * the viewport, otherwise the loop shows blank space before it restarts.
 */
const MIN_TRACK_ITEMS = 8;
const SECONDS_PER_ITEM = 5;

const track = Array.from(
  { length: Math.ceil(MIN_TRACK_ITEMS / PARTNERS.length) },
  () => PARTNERS,
).flat();

function PartnerTrack({ duplicate = false }) {
  return (
    <ul
      className={`flex shrink-0 items-center ${duplicate ? "motion-reduce:hidden" : ""}`}
      aria-hidden={duplicate || undefined}
    >
      {track.map((partner, index) => (
        <li
          key={`${partner.name}-${index}`}
          className="flex shrink-0 items-center justify-center px-8 md:px-12"
        >
          {/*
           * The artwork is not a consistent shape, so display size is
           * normalised here rather than per file. Height drives it — most logos
           * sit on a padded square-ish canvas and need the room — but a wide
           * wordmark (Zomato is 4.7:1) would run to ~380px at that height and
           * swamp the row, so `max-w-*` caps it and `object-contain` fits the
           * mark inside whichever limit binds first.
           */}
          <Image
            src={partner.logo}
            alt={partner.name}
            width={partner.width}
            height={partner.height}
            className="h-16 w-auto max-w-36 object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 md:h-20 md:max-w-44"
          />
        </li>
      ))}
    </ul>
  );
}

export default function PartnerRibbon() {
  if (PARTNERS.length === 0) return null;

  return (
    <section
      aria-labelledby="partners-heading"
      className="border-y border-outline-variant/60 bg-surface-container-low py-16 lg:py-20"
    >
      <Reveal className="flex flex-col gap-10">
        <Container className="flex flex-col gap-3">
          <SectionEyebrow>Our Partners</SectionEyebrow>
          <h2
            id="partners-heading"
            className="max-w-3xl font-display text-headline-md text-on-background"
          >
            We work in close coordination with government disaster management
            systems and alongside supportive partners.
          </h2>
        </Container>

        {/* Full-bleed: the ribbon runs edge to edge, so it sits outside Container. */}
        <div className="overflow-hidden mask-[linear-gradient(to_right,transparent,black_80px,black_calc(100%-80px),transparent)] motion-reduce:mask-none">
          <div
            className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-6"
            style={{
              "--marquee-duration": `${track.length * SECONDS_PER_ITEM}s`,
            }}
          >
            <PartnerTrack />
            <PartnerTrack duplicate />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
