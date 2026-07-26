import ContactHero from "./_components/ContactHero";
import ContactSection from "./_components/ContactSection";

export const metadata = {
  title: "Contact | Joti Foundation",
  description:
    "Get in touch with Joti Foundation for partnerships, volunteering, media, or general inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  );
}
