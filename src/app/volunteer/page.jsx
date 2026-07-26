import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import VolunteerForm from "./_components/VolunteerForm";

export const metadata = {
  title: "Volunteer | Joti Foundation",
  description:
    "Apply to train as a youth first responder with Joti Foundation.",
};

// Minimal contact-style form (name, email, phone, message) posting via
// postJson() to the external PHP API — no Figma design exists yet for this
// page, so structured fields (region, area of interest, etc.) are deferred
// until one does. See CLAUDE.md "Known pages" / "Forms & integrations".
export default function VolunteerPage() {
  return (
    <Container
      as="section"
      className="flex flex-1 flex-col gap-8 py-section-mobile lg:py-section-desktop"
    >
      <div className="flex max-w-2xl flex-col gap-6">
        <SectionEyebrow>Volunteer</SectionEyebrow>
        <h1 className="font-display text-headline-lg-mobile text-on-background md:text-headline-lg">
          Volunteer Application
        </h1>
        <p className="font-sans text-body-lg text-on-surface-variant">
          Tell us a bit about yourself and where you&apos;re based. Our team
          will follow up on next steps for training with a Youth Response
          Unit.
        </p>
      </div>

      <div className="max-w-xl">
        <VolunteerForm />
      </div>

      <Button href="/work-with-us#volunteering" variant="ghost" className="w-fit">
        Back to Volunteering
      </Button>
    </Container>
  );
}
