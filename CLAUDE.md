# Joti Foundation website

@AGENTS.md

Marketing / storytelling site for Joti Foundation, an Indian NGO running youth-led disaster response (rescue, relief, training). Next.js frontend only — no database, no CMS, no auth in this repo.

## Stack

- Next.js 16.2.10, App Router, routes under `src/app/`
- React 19.2.4
- JavaScript, not TypeScript — path alias `@/*` → `./src/*` (`jsconfig.json`)
- Tailwind CSS v4 — theme is defined in `src/app/globals.css` via `@theme inline`. There is **no** `tailwind.config.js`; v4 doesn't use one. Don't go looking for it or create one.
- `lucide-react` for icons — pass `strokeWidth={1.5}` explicitly at every usage to match DESIGN.md's sharp-icon spec (no wrapper component, not worth the indirection at this size).
- `framer-motion` — used for the shared `Reveal` wrapper (`src/components/motion/Reveal.jsx`, scroll-triggered section entrances) **and** for hover/tap micro-interactions on interactive elements (`Button`, `Card`, `StatBlock`, nav links, social icons, photo zooms, etc). Prefer spring transitions (`type: "spring", stiffness: 400, damping: 25`-ish) for hover/tap so they feel responsive rather than eased. Purely decorative, non-interactive flourishes (ambient/looping animation with no user input) are still out of scope — keep those out unless a screenshot specifically calls for them.
- ESLint flat config (`eslint.config.mjs`), `eslint-config-next/core-web-vitals` — `npm run lint`

## Design system

`DESIGN.md` (repo root) is the source of truth for color, type, spacing, radius, and elevation — read it before styling anything. It's already fully wired into `src/app/globals.css` as Tailwind v4 tokens (`--color-*`, `--text-*`, `--radius-*`, `--spacing-*`, `--shadow-hover`), and the three fonts (Bricolage Grotesque, Hanken Grotesk, JetBrains Mono) are already registered via `next/font/google` in `src/app/layout.jsx`.

- Use the existing tokens (`bg-primary`, `text-on-surface-variant`, `rounded-md`, `text-label-caps`, …). Never hardcode a hex value or an arbitrary value that duplicates a token that already exists.
- Need a new token? Add it to the `@theme inline` block in `globals.css`, named consistently with the existing set — don't invent one-off CSS elsewhere.
- Easy-to-forget hard constraints from `DESIGN.md`: max 4px corner radius on buttons/inputs/cards, no drop shadows (tonal borders + the one specified hover shadow only), 8px spacing grid, 1440px max content width.
- **`DESIGN.md` and the live Figma can drift.** If a pasted screenshot visibly contradicts a written rule (e.g. a fully pill-shaped tag where `DESIGN.md` calls for a 2px-radius rectangle — this already happened with the "Equip / Empower / Deploy" chips on the Home mockup), don't silently pick one. Flag the conflict and ask, or match the screenshot for that instance and note the inconsistency.

## Figma

The linked Figma file isn't reachable by tools here (no Figma MCP connected, and Figma file URLs need login, so a fetch just hits an auth wall). Workflow instead: screenshots of the relevant frame get pasted in-chat per page/section — this has already happened for the full Home page. Treat `DESIGN.md` as the source of truth for tokens; treat the pasted screenshot as the source of truth for that page's layout and composition. Stats and numeric claims in a screenshot (e.g. "12,400+ youth trained") are factual content from the org — transcribe them exactly, don't round or paraphrase.

## Component library

Built and in use — reuse these rather than rebuilding inline styles:

- `src/components/ui/`: `Button` (`variant: "primary" | "cta" | "ghost"`, plus an `inverse` boolean for on-photo/on-terracotta placements — see the component for the full on-dark/on-color matrix), `Card` (`tone: "white" | "sand" | "terracotta"`), `Chip` (`tone`, `shape: "rectangle" | "pill"` — rectangle is the DESIGN.md default, pill is an explicit escape hatch, currently only used for the Home "Equip / Empower / Deploy" tags), `SectionEyebrow`, `StatBlock`, `Container` (the 1440px max-width + token-driven responsive margin wrapper — every page/section should use this instead of hand-written `px-*` values), `Input`.
- `src/components/motion/Reveal.jsx`: scroll-reveal wrapper, see above.
- `src/components/layout/`: `Header.jsx` (sticky, nav = Home / What We Do / Our Team / Work With Us, plus `Volunteer` and `Donate Now` buttons), `Footer.jsx`, `NewsletterForm.jsx`.

## Layout chrome

Header and Footer are global, wired into `src/app/layout.jsx` — don't duplicate them per page. Footer's Organization/Resources link columns and the Privacy Policy link are still `href="#"` placeholders (see "Known pages").

## Forms & integrations

This repo is frontend-only by design:

- No database, no Next.js Route Handlers acting as a backend, no server secrets committed here.
- Contact, newsletter signup, donation, and "Work With Us" submissions call **external PHP APIs** hosted outside this repo (owner is building these separately).
- Call them with `fetch` from Client Components (`"use client"`); read the API base URL from an env var (`NEXT_PUBLIC_API_BASE_URL`, see `.env.local.example`) rather than hardcoding a host. `src/lib/api.js` exports `postJson()` — the shared fetch wrapper every form should use.
- CORS and server-side validation are the PHP API's job — this repo only needs client-side validation and loading/error/success UI states.
- Don't reach for a Route Handler as a shortcut for "just this one form" — keep the frontend/backend boundary consistent even before the PHP APIs exist. Until a given API is ready, stub the submit handler rather than building a Next-side workaround.
- `NewsletterForm` (footer) is built this way already: it calls `postJson("/newsletter", …)`, which throws until `NEXT_PUBLIC_API_BASE_URL` is actually set, so it renders a real error state rather than silently no-opping. A Work With Us contact/application form was deliberately **not** built yet — no screenshot has specified its fields, and inventing them would violate the "don't assume a typical NGO sitemap" rule below. Build it once that design exists.

## Rendering target

Not yet decided whether this ships as a standard Next.js server deploy or a full static export. Default to normal Next.js behavior — don't add `output: 'export'` to `next.config.mjs` and don't assume Vercel-only features — until that's settled. Ask before doing anything that would foreclose one path (static export disables the default `next/image` loader and rules out Route Handlers).

## Project structure

- Routes: `src/app/<route>/page.jsx`, kebab-case folder matching the URL.
- Shared, cross-page UI goes in `src/components/`. UI used by exactly one route can live in a colocated `_components/` folder inside that route segment — the `_` prefix opts it out of routing.
- Default-export function components named for what they render (`OurTeamPage`, not `page`) — don't carry forward the `function page() { return <div>page</div> }` placeholder currently in the `our-team` and `what-we-do` stubs.
- No need to `import React` — the automatic JSX runtime is already in use (see `layout.jsx`).

## Known pages

- `/` — Home. Built: all 7 sections from the shared design (hero + stats strip, purpose/vision/mission, core values grid, operational excellence, impact stats, closing CTA). Photography is still styled-div placeholders with intended `alt` text left in code comments — swap for real images when available, and eyedrop the exact Emergency Amber hex from Figma (`--color-accent` in `globals.css` is currently a placeholder).
- `/what-we-do` — stub, not yet built.
- `/our-team` — stub, not yet built.
- `/work-with-us` — stub route exists (linked from the header's `Volunteer` button and everywhere the mockup says "volunteer"/"join our squad"); not yet designed/built.
- `/donate` — stub route exists (linked from every `Donate Now` / "Support Our Mission" / "Support Their Training" CTA); not yet designed/built. Created as a dedicated route rather than an external link or modal — reasonable default, revisit if that's wrong.
- The footer's Our Story, Financials, Careers, Press Kit, Emergency Guide, Contact, and Privacy Policy links are still `href="#"` placeholders — none of these are confirmed as real routes yet. Confirm before building rather than assuming a typical NGO sitemap.

## Images

Static assets go in `public/`; render them with `next/image`. The current `public/*.svg` files are unused create-next-app placeholders — remove them once real imagery lands.

## Accessibility

Donor- and public-facing foundation site — treat accessibility as a baseline, not a follow-up pass: semantic HTML landmarks, meaningful `alt` text on every photo (especially the photojournalism-style disaster-response imagery), visible focus states, keyboard-operable nav and forms.

## Commands

- `npm run dev` — dev server
- `npm run build` / `npm run start` — production build / serve
- `npm run lint` — ESLint
