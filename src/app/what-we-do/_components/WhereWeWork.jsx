import Image from "next/image";
import Container from "@/components/ui/Container";
import Chip from "@/components/ui/Chip";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";

const focusRegions = [
  "North Eastern States",
  "Uttarakhand",
  "Himachal Pradesh",
  "Punjab",
];
const preparednessStates = [
  "Gujarat — earthquakes and cyclones",
  "Andhra Pradesh — floods and cyclones",
];

export default function WhereWeWork() {
  return (
    <section className="py-section-mobile lg:py-section-desktop">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-4">
          <SectionEyebrow>Geographic Focus Areas</SectionEyebrow>
          <h2 className="max-w-2xl font-display text-headline-lg-mobile text-on-background md:text-headline-lg">
            Where We Work
          </h2>
          <p className="max-w-2xl font-sans text-body-md text-on-surface-variant">
            Over the next decade, JF will prioritise intensive work in four
            disaster-prone focus regions. In parallel, JF will undertake
            preparedness interventions in additional states, with the
            flexibility to elevate these states to focus areas as needs and
            capacities evolve.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <figure className="flex flex-col gap-3">
            <div className="overflow-hidden rounded border border-card-border bg-surface-container-lowest">
              <Image
                src="/images/geographic-focus-areas.png"
                alt="Map of India titled Joti Foundation Geographic Focus Areas. Punjab, Himachal Pradesh, Uttarakhand and the North Eastern states — Arunachal Pradesh, Assam, Meghalaya, Nagaland, Manipur, Mizoram and Tripura — are marked in green as focus areas for building local youth capacity and community resilience. Gujarat and Andhra Pradesh are marked in orange as preparedness areas. Delhi is marked as the national coordination point for NDMA and NDRF."
                width={2090}
                height={1384}
                sizes="(min-width: 1440px) 1440px, 100vw"
                className="h-auto w-full"
              />
            </div>
            <figcaption className="font-sans text-body-md text-on-surface-variant">
              Focus regions, preparedness states and the national coordination
              point that make up JF&rsquo;s geographic footprint.
            </figcaption>
          </figure>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          <Reveal delay={0.1} className="flex flex-col gap-4">
            <span className="font-mono text-label-caps uppercase text-on-surface-variant">
              Focus Regions, 2026–2036
            </span>
            <div className="flex flex-wrap gap-3">
              {focusRegions.map((region) => (
                <Chip key={region}>{region}</Chip>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="flex flex-col gap-4">
            <span className="font-mono text-label-caps uppercase text-on-surface-variant">
              Preparedness States
            </span>
            <div className="flex flex-wrap gap-3">
              {preparednessStates.map((state) => (
                <Chip key={state} tone="amber">
                  {state}
                </Chip>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
