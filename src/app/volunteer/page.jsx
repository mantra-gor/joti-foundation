import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

export const metadata = {
  title: "Volunteer | Joti Foundation",
  description:
    "Apply to train as a youth first responder with Joti Foundation.",
};

// Stub route so the "Apply to Volunteer" CTA on /work-with-us resolves. The
// application form itself is not built yet — no design or field list has been
// specified, and it will post to the external PHP API via postJson() like
// NewsletterForm does, not to a Next Route Handler.
export default function VolunteerPage() {
  return (
    <Container
      as="section"
      className="flex flex-1 flex-col gap-6 py-section-mobile lg:py-section-desktop"
    >
      <SectionEyebrow>Volunteer</SectionEyebrow>
      <h1 className="max-w-2xl font-display text-headline-lg-mobile text-on-background md:text-headline-lg">
        Volunteer Application
      </h1>
      <p className="max-w-2xl font-sans text-body-lg text-on-surface-variant">
        The application form is being set up. In the meantime, read how our
        Youth Response Units train, prepare and deploy.
      </p>
      <Button href="/work-with-us#volunteering" variant="ghost" className="w-fit">
        Back to Volunteering
      </Button>
    </Container>
  );
}
