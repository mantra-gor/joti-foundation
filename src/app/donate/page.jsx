import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { RAZORPAY_DONATE_URL } from "@/lib/constants";

export default function DonatePage() {
  return (
    <Container
      as="section"
      className="flex flex-1 flex-col gap-4 py-16 md:py-24"
    >
      <h1 className="font-display text-headline-lg-mobile text-on-background md:text-headline-lg">
        Donate
      </h1>
      <p className="max-w-2xl font-sans text-body-md text-on-surface-variant">
        Your contribution fuels the training, equipment, and logistics needed
        to save lives in India&rsquo;s most vulnerable moments.
      </p>
      <div>
        <Button href={RAZORPAY_DONATE_URL} target="_blank" rel="noopener noreferrer" variant="cta">
          Donate Now
        </Button>
      </div>
    </Container>
  );
}
