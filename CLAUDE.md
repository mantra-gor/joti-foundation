# Joti Foundation website

@AGENTS.md

Marketing / storytelling site for Joti Foundation, an Indian NGO running youth-led disaster response (rescue, relief, training). No database, no CMS, no auth in this repo — but it does ship a small number of Next.js Route Handlers for form email delivery, see "Forms & integrations".

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

## Statistics

`src/lib/stats.js` is the **single source of truth for every number on the site** — headline impact figures, the Punjab Floods 2025 response, Build Back Better recovery, and the Cold Wave 2026 anticipatory action. It's transcribed from `data.md` (the org's own reporting) at the repo root.

- Never hardcode a stat in a component. Import from `@/lib/stats` so a correction in one place fixes every page.
- These are factual claims by an NGO. Transcribe exactly — don't round, paraphrase, or invent a figure to balance a grid. If a layout wants six stats and the data has five, change the layout.
- The earlier placeholder figures (`12,400+` youth trained, `850k` lives impacted, `42` districts, `10,000+` responders) were invented filler and have been removed. Don't reintroduce that pattern.
- The 1,000 YRU / 400 CQRT / 2,000 VDMC / 50 district numbers on `/work-with-us` and `/what-we-do` are **2036 targets**, not achievements — keep them labelled that way.

## Forms & integrations

**Superseded 2026-07-27:** the original plan below (external PHP APIs, no Route Handlers) was replaced with in-repo email delivery via `nodemailer`. Kept struck through for history — follow the bullets after it instead.

~~This repo is frontend-only by design: no database, no Next.js Route Handlers acting as a backend, no server secrets committed here. Contact, newsletter signup, donation, and "Work With Us" submissions call external PHP APIs hosted outside this repo. Don't reach for a Route Handler as a shortcut for "just this one form."~~

Current setup:

- `src/lib/mailer.js` wraps `nodemailer` with a Gmail SMTP transporter (`GMAIL_USER` / `GMAIL_APP_PASSWORD`, server-only env vars — see `.env.local.example`). `GMAIL_APP_PASSWORD` is a Google Account app password (requires 2-Step Verification on the account, generated at [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)), not the account's login password. Exports `sendMail({ subject, text, replyTo })`; submissions are emailed to `CONTACT_TO_EMAIL`.
- Each form has a matching Route Handler under `src/app/api/<name>/route.js` (`contact`, `volunteer`, `newsletter` so far) that validates required fields server-side and calls `sendMail`.
- Client Components call these with `postJson(path, body)` from `src/lib/api.js`, which now just `fetch`s a relative path (e.g. `postJson("/api/contact", form)`) — there is no more external base URL. Keep using `postJson` as the shared wrapper for loading/error/success UI states.
- **Donation** is not part of this pattern — a real payment flow needs a dedicated gateway integration, not email. `/donate` is still a stub; don't wire it to `sendMail` when building it.
- New forms: add a Route Handler next to the existing ones and call `sendMail` from it, rather than reintroducing an external-API assumption.

## Rendering target

This repo now ships Route Handlers (see "Forms & integrations" above), which rules out a full static export (`output: 'export'` disables Route Handlers and the default `next/image` loader). Standard Next.js server deploy is the working assumption going forward — don't add `output: 'export'` to `next.config.mjs`.

## Project structure

- Routes: `src/app/<route>/page.jsx`, kebab-case folder matching the URL.
- Shared, cross-page UI goes in `src/components/`. UI used by exactly one route can live in a colocated `_components/` folder inside that route segment — the `_` prefix opts it out of routing.
- Default-export function components named for what they render (`OurTeamPage`, not `page`) — don't carry forward the `function page() { return <div>page</div> }` placeholder currently in the `our-team` and `what-we-do` stubs.
- No need to `import React` — the automatic JSX runtime is already in use (see `layout.jsx`).

## Known pages

- `/` — Home. Built: all 7 sections from the shared design (hero + stats strip, purpose/vision/mission, core values grid, operational excellence, impact stats, closing CTA). Photography is still styled-div placeholders with intended `alt` text left in code comments — swap for real images when available, and eyedrop the exact Emergency Amber hex from Figma (`--color-accent` in `globals.css` is currently a placeholder).
- `/what-we-do` — stub, not yet built.
- `/our-team` — stub, not yet built.
- `/work-with-us` — Built: hero (with an anchor-link index into the three sections) plus Partnership, Careers, and Volunteering. Written without a Figma screenshot — all copy is derived from facts already in the repo (strategic goals, programmes, team structure, focus regions), so re-check it against the real Figma frame when one exists. Partnership and Careers CTAs point at `/contact`; the Volunteering CTA hands off to `/volunteer`.
- `/our-story` — Built: hero (the "we can't help everyone, but everyone can help someone" motto), Our Inspiration (the late Prabjot Singh of Sri Muktsar Sahib — he is Prabkiran Brar's father, which is why `/our-team` also references Sherewala), and Ignite the Future. Copy is a rewrite of text supplied from the org's old website; no Figma frame exists for it. The whole page is deliberately text-only — no hero photo, and no portrait of Prabjot Singh, at the owner's request.
- `/volunteer` — Built: a minimal contact-style form (name, email, phone, message), posting via `postJson("/api/volunteer", …)` to the local Route Handler (see "Forms & integrations"). No Figma design exists yet for this page, so structured fields (region, area of interest, etc.) are deferred until one does.
- `/donate` — stub route exists (linked from every `Donate Now` / "Support Our Mission" / "Support Their Training" CTA); not yet designed/built. Created as a dedicated route rather than an external link or modal — reasonable default, revisit if that's wrong.
- `/reports` — Built: hero + a card grid driven by `src/lib/reports.js` (`REPORTS` array — currently empty, so the page renders a "Coming soon" state). These are work/activity reports — what Joti Foundation did, how, and where — **not** financial statements. Built as a list page rather than a single link because more reports will be published over time. To publish a report: drop the PDF under `public/documents/reports/` and add `{ title, year, description, href }` to `REPORTS` — the page picks it up automatically, no component changes needed.
- The footer has no Press Kit — that link was removed (never a real deliverable). Legal links (Privacy Policy, Terms of Service, Refund Policy) are now real routes. An "Emergency Guide" link is not built and not confirmed as a real deliverable — don't add it without confirming first, and don't assume a typical NGO sitemap for anything else. (Our Story, Careers, Contact, and Reports point at real routes.)

## Images

Static assets go in `public/`; render them with `next/image`. The current `public/*.svg` files are unused create-next-app placeholders — remove them once real imagery lands.

**Every image currently in the repo is a stand-in** — the `public/images/*.JPG` photography and the logo files alike. Real imagery gets swapped in at go-live. So don't treat the present files as final: keep `alt` text describing what the photo *should* show for that slot, and don't build layouts that depend on a specific file's aspect ratio or crop.

## Accessibility

Donor- and public-facing foundation site — treat accessibility as a baseline, not a follow-up pass: semantic HTML landmarks, meaningful `alt` text on every photo (especially the photojournalism-style disaster-response imagery), visible focus states, keyboard-operable nav and forms.

## Commands

- `npm run dev` — dev server
- `npm run build` / `npm run start` — production build / serve
- `npm run lint` — ESLint
