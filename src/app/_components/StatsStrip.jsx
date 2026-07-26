import Container from "@/components/ui/Container";
import StatBlock from "@/components/ui/StatBlock";
import Reveal from "@/components/motion/Reveal";
import { HEADLINE_STATS } from "@/lib/stats";

export default function StatsStrip() {
  return (
    <section className="bg-secondary">
      <Container className="grid grid-cols-2 gap-8 py-10 lg:grid-cols-4">
        {HEADLINE_STATS.map((stat, index) => (
          <Reveal key={stat.label} onMount delay={index * 0.05}>
            <StatBlock inverse label={stat.label} value={stat.value} />
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
