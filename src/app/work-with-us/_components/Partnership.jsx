import { Landmark, Building2, HeartHandshake, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";

const partnerTypes = [
  {
    title: "Government & Institutional",
    Icon: Landmark,
    description:
      "Roshan Punjab, our children's eye health programme, is delivered in partnership with the Government of Punjab and has already reached approximately one million children. In emergencies, our Flood Response teams operate in close coordination with NDRF, SDRF and district authorities.",
  },
  {
    title: "Corporate & CSR",
    Icon: Building2,
    description:
      "CSR partnerships fund the training cohorts, rescue equipment and logistics that make a 24-hour response possible. Our Climate Action programme also works directly with corporates on groundwater conservation and climate adaptation.",
  },
  {
    title: "Philanthropic & Foundations",
    Icon: HeartHandshake,
    description:
      "National and international foundations give us the multi-year horizon that resilience work demands — sustaining Youth Response Units between disasters, not only during them.",
  },
  {
    title: "Community & Civil Society",
    Icon: Users,
    description:
      "Village Disaster Management Committees, panchayats, academic institutions and civil society organisations anchor our work locally, so preparedness stays owned by the community rather than delivered to it.",
  },
];

const targets2036 = [
  { value: "1,000", label: "Youth Response Units" },
  { value: "400", label: "Circle Quick Response Teams" },
  { value: "2,000", label: "Village Disaster Mgmt Committees" },
  { value: "50", label: "Disaster-Prone Districts" },
];

export default function Partnership() {
  return (
    <section
      id="partnership"
      aria-labelledby="partnership-heading"
      className="scroll-mt-24 bg-surface-container-low py-section-mobile lg:py-section-desktop"
    >
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-4">
          <SectionEyebrow>Partnership</SectionEyebrow>
          <h2
            id="partnership-heading"
            className="max-w-2xl font-display text-headline-lg-mobile text-on-background md:text-headline-lg"
          >
            Partner With Us
          </h2>
          <p className="max-w-3xl font-sans text-body-lg text-on-surface-variant">
            Partnership is our fifth strategic goal, not a funding line. By 2036
            we aim to work with government agencies, CSR partners, philanthropic
            institutions, national and international foundations and communities
            to mobilise resources that strengthen JF&rsquo;s long-term impact
            and institutional resilience — and to bring grassroots lessons back
            to the policy table.
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {partnerTypes.map(({ title, Icon, description }, index) => (
            <Reveal key={title} delay={(index % 2) * 0.08}>
              <Card tone="white" className="flex h-full flex-col">
                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded border border-secondary/30 text-secondary">
                  <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <h3 className="mb-3 font-display text-headline-md text-on-background">
                  {title}
                </h3>
                <p className="font-sans text-body-md text-on-surface-variant">
                  {description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="flex flex-col gap-6">
          <span className="font-mono text-label-caps uppercase text-on-surface-variant">
            What Partnership Builds by 2036
          </span>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
            {targets2036.map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col gap-2 border-t border-outline-variant pt-4"
              >
                <dt className="order-2 font-mono text-label-caps uppercase text-on-surface-variant">
                  {label}
                </dt>
                <dd className="order-1 font-display text-headline-lg-mobile text-on-background md:text-headline-lg">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-4 rounded border border-card-border bg-surface-container-lowest p-8 md:flex-row md:items-center md:justify-between md:gap-8">
            <p className="max-w-xl font-sans text-body-md text-on-surface-variant">
              Tell us what you want to change and where. We will come back with
              the programme design, the budget and the reporting cadence. The
              enquiry form goes straight to our partnerships desk.
            </p>
            <Button
              href="/partner-with-us"
              variant="primary"
              className="w-fit shrink-0"
            >
              Start a Partnership Conversation
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
