"use client";

/**
 * PersonaProvider
 *
 * Rules:
 *   - PersonaSelector is shown ONLY on the home page ("/").
 *   - On the home page, it shows on every fresh page load/refresh
 *     (session-based: resets when the browser tab reloads).
 *   - Once the user picks a persona, that choice is persisted to localStorage
 *     ("jf-persona") so other pages can read it for personalised content.
 *   - On non-home pages the selector is never shown; persona is read from
 *     localStorage and available via usePersona().
 */

import { useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { PersonaContext, PERSONAS } from "@/lib/personaContext";
import PersonaSelector from "@/components/ui/PersonaSelector";

const STORAGE_KEY = "jf-persona";
const VALID_PERSONAS = new Set(Object.values(PERSONAS));

function readStoredPersona() {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && VALID_PERSONAS.has(stored)) return stored;
  } catch {
    // Storage unavailable (private browsing, etc.)
  }
  return null;
}

function writePersona(value) {
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Ignore storage errors.
  }
}

export default function PersonaProvider({ children }) {
  const pathname = usePathname();

  /**
   * persona — the stored selection (from localStorage). Used by any page
   * to personalise content via usePersona(). Can be null before first selection.
   */
  const [persona, setPersonaState] = useState(() => readStoredPersona());

  /**
   * selectedThisSession — flips to true the moment the user picks a persona
   * during this page load. Prevents the selector from re-appearing when the
   * user navigates back to "/" within the same SPA session.
   * Resets to false on every hard refresh (React state = in-memory only).
   */
  const [selectedThisSession, setSelectedThisSession] = useState(false);

  const setPersona = useCallback((id) => {
    setPersonaState(id);
    setSelectedThisSession(true);
    writePersona(id); // persist for other pages
  }, []);

  // Show selector only on home page AND not yet chosen this session.
  const showSelector = pathname === "/" && !selectedThisSession;

  return (
    <PersonaContext.Provider value={{ persona, setPersona }}>
      {children}
      {showSelector && <PersonaSelector />}
    </PersonaContext.Provider>
  );
}
