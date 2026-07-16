import Container from "@/components/ui/Container";
import Chip from "@/components/ui/Chip";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";

const focusRegions = ["North Eastern States", "Uttarakhand", "Himachal Pradesh", "Punjab"];
const preparednessStates = [
  "Gujarat — earthquakes and cyclones",
  "Andhra Pradesh — floods and cyclones",
];
const activeDistricts = ["Fazilka", "Muktsar", "Patiala", "Bhatinda", "Sangrur"];

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
            Over the next decade, JF will prioritise intensive work in four disaster-prone
            focus regions. In parallel, JF will undertake preparedness interventions in
            additional states, with the flexibility to elevate these states to focus areas as
            needs and capacities evolve.
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          <Reveal delay={0.05} className="flex flex-col gap-4">
            <span className="font-mono text-label-caps uppercase text-on-surface-variant">
              Focus Regions, 2026–2036
            </span>
            <div className="flex flex-wrap gap-3">
              {focusRegions.map((region) => (
                <Chip key={region}>{region}</Chip>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4">
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

          <Reveal delay={0.15} className="flex flex-col gap-4">
            <span className="font-mono text-label-caps uppercase text-on-surface-variant">
              Currently Active — Punjab Districts
            </span>
            <div className="flex flex-wrap gap-3">
              {activeDistricts.map((district) => (
                <Chip key={district} tone="forest">
                  {district}
                </Chip>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
