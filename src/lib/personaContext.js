/**
 * Persona context — "disaster" (Disaster Management) or "social" (Social Initiatives).
 *
 * First-time visitors are shown the PersonaSelector modal/sheet and must pick
 * a persona before accessing the site. The selection is persisted in
 * localStorage under the key "jf-persona" so the selector is skipped on
 * return visits.
 *
 * Usage in any Client Component:
 *   import { usePersona } from "@/lib/personaContext";
 *   const { persona, setPersona } = usePersona();
 */

"use client";

import { createContext, useContext } from "react";

export const PERSONAS = {
  disaster: "disaster",
  social: "social",
};

export const PersonaContext = createContext({
  /** null = not yet chosen (selector is showing) */
  persona: null,
  setPersona: () => {},
});

export function usePersona() {
  return useContext(PersonaContext);
}
