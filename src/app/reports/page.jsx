import ReportsHero from "./_components/ReportsHero";
import ReportsList from "./_components/ReportsList";

export const metadata = {
  title: "Reports | Joti Foundation",
  description:
    "Reports on the work Joti Foundation has carried out — what was done, how, and where.",
};

export default function ReportsPage() {
  return (
    <>
      <ReportsHero />
      <ReportsList />
    </>
  );
}
