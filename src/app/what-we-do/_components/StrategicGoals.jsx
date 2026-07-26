import Container from "@/components/ui/Container";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";

const goals = [
  {
    number: "01",
    title: "Local Disaster Response Systems",
    description:
      "Establish and sustain at least 1,000 local Youth Response Units (YRUs), 400 Circle Quick Response Teams (CQRTs) and 2,000 Village Disaster Management Committees (VDMCs) across the disaster-prone districts in India by 2036.",
  },
  {
    number: "02",
    title: "Timely Search, Rescue and Relief",
    description:
      "By 2036, ensure that all JF-supported districts have trained youth response units capable of delivering life-saving rescue and relief within the first 24 hours of a disaster through a national network of YRUs (approximately 5,000 youth).",
  },
  {
    number: "03",
    title: "Climate-Resilient Communities",
    description:
      "By 2036, build resilient communities in at least 50 disaster-prone districts by implementing programmes across all four phases of the Disaster Management Cycle: Prevention and Mitigation, Preparedness, Response and Recovery.",
  },
  {
    number: "04",
    title: "Disaster Management Policies and Systems",
    description:
      "Assist policymakers in refining Disaster Management policies annually by bringing grassroots lessons and innovations to the decision-making table.",
  },
  {
    number: "05",
    title: "Strategic Partnerships and Resource Mobilisation",
    description:
      "By 2036, establish strategic partnerships with government agencies, CSR partners, philanthropic institutions, national and international foundations and communities to mobilise sustainable resources that strengthen JF's long-term impact and institutional resilience.",
  },
];

export default function StrategicGoals() {
  return (
    <section className="bg-surface-container-low py-section-mobile lg:py-section-desktop">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-4">
          <SectionEyebrow>Where We&rsquo;re Headed by 2036</SectionEyebrow>
          <h2 className="max-w-2xl font-display text-headline-lg-mobile text-on-background md:text-headline-lg">
            Five Strategic Goals
          </h2>
        </Reveal>

        <div className="flex flex-col gap-4">
          {goals.map(({ number, title, description }, index) => (
            <Reveal key={number} delay={index * 0.06}>
              <div className="flex flex-col gap-4 rounded border border-card-border bg-surface-container-lowest p-6 md:flex-row md:items-start md:gap-8 md:p-8">
                <span className="font-mono text-label-caps uppercase text-secondary md:w-12 md:shrink-0">
                  {number}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-headline-md text-on-background">
                    {title}
                  </h3>
                  <p className="font-sans text-body-md text-on-surface-variant">
                    {description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
