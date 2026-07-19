import Container from "@/components/ui/Container";

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
        Razorpay page will come here.
      </p>
    </Container>
  );
}
