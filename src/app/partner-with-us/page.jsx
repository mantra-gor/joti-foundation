import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";
import PartnershipForm from "./_components/PartnershipForm";

export const metadata = {
  title: "Partner With Us | Joti Foundation",
  description:
    "Start a partnership conversation with Joti Foundation — government, CSR, philanthropic and community partnerships across the disaster management cycle.",
};

// Own page rather than a redirect to /contact: partnership enquiries need
// organisation and partnership-type context that the general contact form
// doesn't ask for. No Figma frame exists for it yet.
export default function PartnerWithUsPage() {
  return (
    <Container
      as="section"
      className="flex flex-1 flex-col gap-8 py-section-mobile lg:py-section-desktop"
    >
      <Reveal onMount className="flex max-w-2xl flex-col gap-6">
        <SectionEyebrow>Partnership</SectionEyebrow>
        <h1 className="font-display text-headline-lg-mobile text-on-background md:text-headline-lg">
          Partner With Us
        </h1>
        <p className="font-sans text-body-lg text-on-surface-variant">
          Tell us what you want to change and where. We will come back with the
          programme design, the budget and the reporting cadence — whether you
          are a government department, a CSR team, a foundation or a community
          organisation.
        </p>
      </Reveal>

      <Reveal onMount delay={0.1} className="max-w-3xl">
        <PartnershipForm />
      </Reveal>

      <Button
        href="/work-with-us#partnership"
        variant="ghost"
        className="w-fit"
      >
        Back to Partnership
      </Button>
    </Container>
  );
}
