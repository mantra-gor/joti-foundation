/**
 * Region context — "national" (default) or "punjab".
 *
 * Punjab donors can switch to the Punjab view to see only Punjab-specific
 * data and impact on the Home and What We Do pages. The selection persists
 * across page navigations via localStorage.
 *
 * Usage in any Client Component:
 *   import { useRegion } from "@/lib/regionContext";
 *   const { region, setRegion } = useRegion();
 */

"use client";

import { createContext, useContext } from "react";

export const REGIONS = {
  national: "national",
  punjab: "punjab",
};

export const RegionContext = createContext({
  region: REGIONS.national,
  setRegion: () => {},
});

export function useRegion() {
  return useContext(RegionContext);
}
