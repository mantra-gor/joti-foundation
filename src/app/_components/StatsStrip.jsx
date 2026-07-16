import Container from "@/components/ui/Container";
import StatBlock from "@/components/ui/StatBlock";
import Reveal from "@/components/motion/Reveal";

const stats = [
  { label: "Response Time", value: "Under 24h" },
  { label: "Youth Trained", value: "12,400+" },
  { label: "Lives Impacted", value: "850k" },
  { label: "Districts Active", value: "42" },
];

export default function StatsStrip() {
  return (
    <section className="bg-secondary">
      <Container className="grid grid-cols-2 gap-8 py-10 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.05}>
            <StatBlock inverse label={stat.label} value={stat.value} />
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
