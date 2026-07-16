import { Glasses, LifeBuoy, Droplets } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";

const programmes = [
  {
    title: "Roshan Punjab",
    subtitle: "Children's Eye Health",
    Icon: Glasses,
    description:
      "Roshan Punjab is Joti Foundation's flagship children's eye health programme that strengthens long-term resilience by improving children's vision and learning outcomes. The programme screens school-going children for vision impairments, trains teachers to conduct basic screenings, promotes self-testing through visual charts in schools and facilitates the provision of spectacles where required. Implemented in partnership with the Government of Punjab, the programme has already reached approximately one million children, helping them build healthier and more resilient futures.",
  },
  {
    title: "Flood Response",
    subtitle: "Rescue & Relief",
    Icon: LifeBuoy,
    description:
      "Flood Response is JF's emergency response programme focused on delivering life-saving rescue and relief during the critical first few hours of a disaster. Through trained youth responders, rescue boats and close coordination with NDRF, SDRF and local authorities, JF bridges physical access barriers to reach isolated communities and ensure timely assistance when every minute matters.",
  },
  {
    title: "Climate Action",
    subtitle: "Groundwater & Jal Jeevan",
    Icon: Droplets,
    description:
      "The Climate Action programme strengthens community resilience by promoting groundwater conservation, sustainable water management and climate adaptation measures. The programme supports corporates and communities to better prepare for the increasing impacts of climate change through awareness, local action and practical solutions that protect natural resources and strengthen long-term water security. Jal Jeevan aims to improve access to safe and sustainable drinking water in vulnerable communities, promoting water security through community-based solutions, awareness, infrastructure support and partnerships with local institutions.",
  },
];

export default function Programmes() {
  return (
    <section className="bg-surface-container-low py-section-mobile lg:py-section-desktop">
      <Container className="flex flex-col gap-12">
        <Reveal className="flex flex-col gap-4">
          <SectionEyebrow>Our Programmes</SectionEyebrow>
          <h2 className="max-w-2xl font-display text-headline-lg-mobile text-on-background md:text-headline-lg">
            Existing Programmes
          </h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {programmes.map(({ title, subtitle, Icon, description }, index) => (
            <Reveal key={title} delay={index * 0.1}>
              <Card tone="white" className="flex h-full flex-col">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded bg-secondary-container/20 text-secondary">
                  <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <span className="mb-1 font-mono text-label-caps uppercase text-secondary">
                  {subtitle}
                </span>
                <h3 className="mb-3 font-display text-headline-md text-on-background">
                  {title}
                </h3>
                <p className="font-sans text-body-md text-on-surface-variant">{description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
