import WorkWithUsHero from "./_components/WorkWithUsHero";
import Partnership from "./_components/Partnership";
import Careers from "./_components/Careers";
import Volunteering from "./_components/Volunteering";

export const metadata = {
  title: "Work With Us | Joti Foundation",
  description:
    "Partner with Joti Foundation, build a career in disaster resilience, or train as a youth first responder in your own district.",
};

export default function WorkWithUsPage() {
  return (
    <>
      <WorkWithUsHero />
      <Partnership />
      <Careers />
      <Volunteering />
    </>
  );
}
