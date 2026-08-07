import ActiveOperationBar from "./_components/ActiveOperationBar";
import Hero from "./_components/Hero";
import StatsStrip from "./_components/StatsStrip";
import OurPurpose from "./_components/OurPurpose";
import CoreValues from "./_components/CoreValues";
import OperationalExcellence from "./_components/OperationalExcellence";
import MeasurableChange from "./_components/MeasurableChange";
import PartnerRibbon from "./_components/PartnerRibbon";
import ClosingCta from "./_components/ClosingCta";

export default function Home() {
  return (
    <>
      <ActiveOperationBar />
      <Hero />
      <StatsStrip />
      <OurPurpose />
      <CoreValues />
      <OperationalExcellence />
      <MeasurableChange />
      <PartnerRibbon />
      <ClosingCta />
    </>
  );
}
