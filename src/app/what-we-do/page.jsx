"use client";

import { useRegion } from "@/lib/regionContext";
import WhatWeDoHero from "./_components/WhatWeDoHero";
import InTheField from "./_components/InTheField";
import AssamFloodResponse2026 from "./_components/AssamFloodResponse2026";
import BiharFloodResponse2026 from "./_components/BiharFloodResponse2026";
import PunjabFloods2025 from "./_components/PunjabFloods2025";
import BuildBackBetter from "./_components/BuildBackBetter";
import AnticipatoryAction from "./_components/AnticipatoryAction";
import WhereWeWork from "./_components/WhereWeWork";
import StrategicGoals from "./_components/StrategicGoals";
import PunjabProgrammes from "./_components/PunjabProgrammes";

export default function WhatWeDoPage() {
  const { region } = useRegion();
  const isEmergency = region === "national";

  return (
    <>
      <WhatWeDoHero />
      <InTheField />

      {isEmergency ? (
        <>
          <AssamFloodResponse2026 />
          <BiharFloodResponse2026 />
          <PunjabFloods2025 />
          <BuildBackBetter />
          <AnticipatoryAction />
          <WhereWeWork />
          <StrategicGoals />
        </>
      ) : (
        <>
          <PunjabProgrammes />
          <WhereWeWork />
        </>
      )}
    </>
  );
}
