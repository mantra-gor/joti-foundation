import OurStoryHero from "./_components/OurStoryHero";
import OurInspiration from "./_components/OurInspiration";
import IgniteTheFuture from "./_components/IgniteTheFuture";

export const metadata = {
  title: "Our Story | Joti Foundation",
  description:
    "Joti Foundation was founded in memory of the late Prabjot Singh of Sri Muktsar Sahib, Punjab, whose lifetime of quiet help became the foundation's mission.",
};

export default function OurStoryPage() {
  return (
    <>
      <OurStoryHero />
      <OurInspiration />
      <IgniteTheFuture />
    </>
  );
}
