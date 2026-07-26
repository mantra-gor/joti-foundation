import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Reveal from "@/components/motion/Reveal";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

export default function ContactSection() {
  return (
    <section className="pb-section-mobile lg:pb-section-desktop">
      <Container className="grid gap-8 lg:grid-cols-12 lg:items-start">
        <Reveal className="lg:col-span-7">
          <Card tone="white" padding="lg">
            <ContactForm />
          </Card>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5">
          <ContactDetails />
        </Reveal>
      </Container>
    </section>
  );
}
