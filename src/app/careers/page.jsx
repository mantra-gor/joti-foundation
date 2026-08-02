import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import Reveal from "@/components/motion/Reveal";
import CareersForm from "./_components/CareersForm";

export const metadata = {
  title: "Careers | Joti Foundation",
  description:
    "Apply to work with Joti Foundation — a lean, youth-led, women-led disaster resilience team working in remote, disaster-prone districts.",
};

// Own page rather than a redirect to /contact: applications need the role and
// a CV/portfolio link, which the general contact form doesn't ask for. Roles
// are posted on /work-with-us#careers; speculative applications land here too.
// No Figma frame exists for it yet.
export default function CareersPage() {
  return (
    <Container
      as="section"
      className="flex flex-1 flex-col gap-8 py-section-mobile lg:py-section-desktop"
    >
      <Reveal onMount className="flex max-w-2xl flex-col gap-6">
        <SectionEyebrow>Careers</SectionEyebrow>
        <h1 className="font-display text-headline-lg-mobile text-on-background md:text-headline-lg">
          Apply to Join the Team
        </h1>
        <p className="font-sans text-body-lg text-on-surface-variant">
          Teams here are small, decisions travel fast and the distance between a
          plan and a village is short. Apply for a posted role, or tell us where
          you would fit and why — we read every speculative application.
        </p>
      </Reveal>

      <Reveal onMount delay={0.1} className="max-w-3xl">
        <CareersForm />
      </Reveal>

      <Button href="/work-with-us#careers" variant="ghost" className="w-fit">
        Back to Careers
      </Button>
    </Container>
  );
}
