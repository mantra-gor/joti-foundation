import Container from "@/components/ui/Container";
import Chip from "@/components/ui/Chip";
import StatBlock from "@/components/ui/StatBlock";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";
import { COLD_WAVE_2026 } from "@/lib/stats";

const { location, period, stats, activities } = COLD_WAVE_2026;

export default function AnticipatoryAction() {
  return (
    <section className="py-section-mobile lg:py-section-desktop">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-4">
          <SectionEyebrow>Anticipatory Action</SectionEyebrow>
          <h2 className="max-w-2xl font-display text-headline-lg-mobile text-on-background md:text-headline-lg">
            Cold Wave 2026
          </h2>
          <div className="flex flex-wrap gap-3">
            <Chip>{location}</Chip>
            <Chip tone="amber">{period}</Chip>
          </div>
          <p className="max-w-2xl font-sans text-body-md text-on-surface-variant">
            Acting ahead of a forecast hazard costs a fraction of responding
            after it. Before the coldest weeks of the year, we worked with
            border villages in Fazilka to get warnings and insulation to the
            households least able to withstand them.
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="grid grid-cols-2 gap-8 border-y border-outline-variant py-8 md:grid-cols-3 lg:grid-cols-5">
            {stats.map(({ value, label }) => (
              <StatBlock key={label} label={label} value={value} divider />
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {activities.map(({ title, description }, index) => (
            <Reveal key={title} delay={index * 0.05}>
              <div className="flex h-full flex-col gap-2 border-l-2 border-secondary pl-6">
                <h3 className="font-sans text-body-lg font-semibold text-on-background">
                  {title}
                </h3>
                <p className="font-sans text-body-md text-on-surface-variant">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
