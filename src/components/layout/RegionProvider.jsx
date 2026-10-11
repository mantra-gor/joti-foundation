"use client";

import { useSyncExternalStore, useCallback } from "react";
import { RegionContext, REGIONS } from "@/lib/regionContext";

const STORAGE_KEY = "jf-region";

function subscribe(callback) {
  window.addEventListener("storage", callback);
  window.addEventListener("jf-region-change", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("jf-region-change", callback);
  };
}

function getSnapshot() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === REGIONS.punjab || stored === REGIONS.national) {
      return stored;
    }
  } catch {
    // Storage unavailable.
  }
  return REGIONS.national;
}

function getServerSnapshot() {
  return REGIONS.national;
}

export default function RegionProvider({ children }) {
  const region = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setRegion = useCallback((next) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
      window.dispatchEvent(new Event("jf-region-change"));
    } catch {
      // Private browsing or storage blocked — ignore.
    }
  }, []);

  return (
    <RegionContext.Provider value={{ region, setRegion }}>
      {children}
    </RegionContext.Provider>
  );
}
