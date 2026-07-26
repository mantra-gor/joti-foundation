import {
  ClipboardList,
  Flag,
  Handshake,
  Megaphone,
  Wallet,
  ServerCog,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";

const functions = [
  {
    title: "Programme Management",
    Icon: ClipboardList,
    description:
      "Design programmes across the disaster management cycle and carry them through to field execution.",
  },
  {
    title: "Frontline Execution",
    Icon: Flag,
    description:
      "Lead rescue, relief and community mobilisation in our focus districts when a disaster hits.",
  },
  {
    title: "Partnerships & Resource Mobilisation",
    Icon: Handshake,
    description:
      "Build the government, CSR and philanthropic relationships that sustain the work between emergencies.",
  },
  {
    title: "Communication",
    Icon: Megaphone,
    description:
      "Document what happens in the field and tell it honestly — to communities, partners and policymakers.",
  },
  {
    title: "Finance & Administration",
    Icon: Wallet,
    description:
      "Hold the standard of transparency and accountability that every rupee moving through JF depends on.",
  },
  {
    title: "People, IT & Institutional Systems",
    Icon: ServerCog,
    description:
      "Build the human resources, technology and institutional systems that let a lean team stay agile.",
  },
];

export default function Careers() {
  return (
    <section
      id="careers"
      aria-labelledby="careers-heading"
      className="scroll-mt-24 py-section-mobile lg:py-section-desktop"
    >
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-4">
          <SectionEyebrow>Careers</SectionEyebrow>
          <h2
            id="careers-heading"
            className="max-w-2xl font-display text-headline-lg-mobile text-on-background md:text-headline-lg"
          >
            Build a Career in Disaster Resilience
          </h2>
          <p className="max-w-3xl font-sans text-body-lg text-on-surface-variant">
            Joti Foundation runs a deliberately lean, collaborative and
            mission-driven structure. Teams are small, decisions travel fast and
            the distance between a plan and a village is short. If you want
            scope over hierarchy — and you are willing to work in remote,
            disaster-prone districts — this is a place to do the most consequential
            work of your career.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {functions.map(({ title, Icon, description }, index) => (
            <Reveal key={title} delay={(index % 3) * 0.08}>
              <Card tone="sand" className="flex h-full flex-col">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded border border-secondary/30 text-secondary">
                  <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-on-background">
                  {title}
                </h3>
                <p className="font-sans text-body-md text-on-surface-variant">
                  {description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-6 rounded border border-card-border bg-surface-container-lowest p-8 md:p-10">
            <span className="font-mono text-label-caps uppercase text-secondary">
              Current Openings
            </span>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
              <p className="max-w-xl font-sans text-body-md text-on-surface-variant">
                Roles are posted here as they open. We also read every
                speculative application — if you can see where you would fit in
                the six areas above, tell us which one and why. Mark your
                message &ldquo;Careers&rdquo; when you write to us.
              </p>
              <Button href="/contact" variant="primary" className="w-fit shrink-0">
                Send Us Your Application
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
