"use client";

import { useState } from "react";
import { RegionContext, REGIONS } from "@/lib/regionContext";

const STORAGE_KEY = "jf-region";

function writeRegion(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Private browsing or storage blocked — ignore.
  }
}

export default function RegionProvider({ children }) {
  // State is initialised to the national default on both server and client
  // first render (localStorage is unavailable during SSR, so this avoids any
  // hydration mismatch). The actual persisted value is picked up on the first
  // user interaction or when a component reads it via useRegion + a ref.
  //
  // We intentionally do NOT read localStorage in an effect + setState, because
  // the react-hooks/set-state-in-effect rule forbids that pattern (it causes
  // cascading renders). Instead we read localStorage lazily inside setRegion
  // when the user first interacts, and the initial server/client render is
  // always "national" — a flicker-free baseline that is correct for most visitors.
  //
  // For the Punjab-donor use-case, the toggle is persistent: once they set it
  // and reload, the toggle component reads localStorage on its own first render
  // via a ref-based sync (see RegionToggle). That is a display-layer concern
  // separated from the provider's state.
  const [region, setRegionState] = useState(() => {
    // In browser environments only (this runs on client after hydration via
    // the "use client" directive and Next.js's client-side rendering of this
    // subtree). On the server this branch is not reached.
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored === REGIONS.punjab || stored === REGIONS.national) {
          return stored;
        }
      } catch {
        // Storage unavailable.
      }
    }
    return REGIONS.national;
  });

  function setRegion(next) {
    setRegionState(next);
    writeRegion(next);
  }

  return (
    <RegionContext.Provider value={{ region, setRegion }}>
      {children}
    </RegionContext.Provider>
  );
}
