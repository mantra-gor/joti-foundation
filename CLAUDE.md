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

- `src/components/ui/`: `Button` (`variant: "primary" | "cta" | "ghost"`, plus an `inverse` boolean for on-photo/on-terracotta placements — see the component for the full on-dark/on-color matrix), `Card` (`tone: "white" | "sand" | "terracotta"`), `Chip` (`tone`, `shape: "rectangle" | "pill"` — rectangle is the DESIGN.md default, pill is an explicit escape hatch, currently only used for the Home "Equip / Empower / Deploy" tags), `SectionEyebrow`, `StatBlock`, `Container` (the 1440px max-width + token-driven responsive margin wrapper — every page/section should use this instead of hand-written `px-*` values), `Input`, `Textarea`, `Select` (`options` array + optional `placeholder`; renders the placeholder as an empty-value first option). `Input`/`Textarea`/`Select` share the same label + border + focus styling — use them rather than hand-rolling a field, and pass their `error` prop (it drives the red border, the message, `aria-invalid` and `aria-describedby`).
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
- Two older forms still have a Route Handler under `src/app/api/<name>/route.js` (`contact`, `volunteer`) that validates required fields server-side and calls `sendMail`. **These are the legacy path** — they stay put for now and get removed once the mailbox has bedded in. Don't add new ones (see "New forms" below). Newsletter used to be a third; it moved to a Server Action on 2026-07-31 and `/api/newsletter` no longer exists.
- Client Components call these with `postJson(path, body)` from `src/lib/api.js`, which now just `fetch`s a relative path (e.g. `postJson("/api/contact", form)`) — there is no more external base URL. Keep using `postJson` as the shared wrapper for loading/error/success UI states.
- **Donation** is not part of this pattern — a real payment flow needs a dedicated gateway integration, not email. `/donate` is still a stub; don't wire it to `sendMail` when building it.
- **New forms use a Server Action, not a Route Handler.** Put a `"use server"` `actions.js` in the route segment (see `src/app/careers/actions.js` and `src/app/partner-with-us/actions.js`) and import it into the form's Client Component. A form that isn't route-scoped puts its action beside the component instead — `src/components/layout/newsletterActions.js`, for the global footer signup. This repo should not be growing an HTTP API of its own — the real backend is the Laravel mailbox. Server Actions also get a framework Origin/Host CSRF check that a hand-written Route Handler does not. Validate every field in the action: it compiles to a POST endpoint anyone can call.
- Actions return `{ ok: true }` or `{ error: "…" }` rather than throwing — return values are serialized to the client, so keep them to what the UI needs and never surface backend error detail.

### Form validation (added 2026-07-31)

- `src/lib/validation.js` holds the rules, keyed by **field name** rather than by form — so `email` behaves identically on `/contact` and `/careers`, and the names match the mailbox contract (`name` / `email` / `phone` / `subject` / `message`). Adding a field to a form means adding its rule here, not inline in the component. It's pure and browser-API-free so it can also run server-side.
- `src/lib/useFormValidation.js` is the client hook every multi-field form uses: `fieldProps(name)` spreads value/onChange/onBlur/error/required onto an `Input`/`Textarea`/`Select`, and `handleSubmit(onValid)` validates everything, focuses the first offending field, and hands `onValid` the **trimmed** values. Forms carry `noValidate` so the custom messages show instead of native browser bubbles.
- Validation timing is deliberate: on blur and on submit, never while a field is being typed into for the first time — but a field already showing an error re-validates per keystroke so the message clears as soon as it's fixed.
- Separately from validation, `sanitiseField` strips characters a field can never hold, on every keystroke — currently just `phone`, which drops anything outside digits and `+ ( ) - . space`, and caps the value at 15 digits / 24 characters (E.164's ceiling plus room for formatting). `type="tel"` is a mobile-keyboard hint that blocks nothing, so without this you can type letters, or forty digits, into a phone box. The length cap lives in the sanitiser rather than a `maxLength` attribute so it survives paste and applies to every form at once; `validateField` still enforces the same limits for the server path.
- Values are validated trimmed, so whitespace-only input no longer satisfies a required field.
- Client-side validation is a UX layer, **not** a security boundary. The Server Actions and Route Handlers still only check for falsiness; they should move onto `validateForm` from the same module.

### Mailbox (added 2026-07-31)

Submissions are **also** written to a separate Laravel "mailbox" app, where staff triage them in a Filament panel. `API-doc.md`-style contract: write-only, `POST /api/v1/submissions` and `POST /api/v1/newsletter/subscribe`, bearer-token auth.

- `src/lib/mailbox.js` — axios client, server-only (`MAILBOX_URL` / `MAILBOX_API_TOKEN`, never `NEXT_PUBLIC_*`). Exports `recordSubmission(type, fields)` (`type`: `contact` | `careers` | `volunteer` | `partnership` — routing information for the mailbox, not a stored column) and `recordNewsletterSubscriber(email)`.
- **The email must go out whether or not the mailbox call succeeds.** Send mail first, then write to the mailbox. `recordSubmission` is best-effort by design: it logs and resolves instead of throwing, so a mailbox outage never becomes an error response for a visitor whose enquiry is already delivered. Don't wrap it in a `try`/`catch` at the call site, don't `await` it before the mail, and don't add retries (retries are the one thing likely to trip the mailbox's 60 req/min rate limit).
- **`recordNewsletterSubscriber` is the exception — it rejects on failure.** Newsletter signup sends no notification email (dropped 2026-07-31), so the mailbox row is the only record of it; swallowing a failure would mean telling a visitor they've subscribed when nothing was stored. It's the one call that belongs in a `try`/`catch`. Internally this is the `rethrow` option on `post` in `mailbox.js` — if another form ever loses its email path, it needs the same treatment.
- Unset env vars are a supported state for `recordSubmission` — the write is skipped with a warning and the form still works. Newsletter signup instead fails loudly, for the reason above.
- Form-specific extras (e.g. `organisation`, `position`) are sent flat and the mailbox folds them into the row's `payload`, so a new form field needs no change on the mailbox side. The flip side: a misspelled column name (`mesage`) silently lands in `payload` instead of the real column, so match `name` / `email` / `phone` / `subject` / `message` exactly.
- Email delivery via `sendMail` is the **superseded** path — it stays in place while the mailbox beds in and gets removed later; don't strip it out yet. Newsletter signup has already made that move: it's mailbox-only, no email.

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
- `/work-with-us` — Built: hero (with an anchor-link index into the three sections) plus Partnership, Careers, and Volunteering. Written without a Figma screenshot — all copy is derived from facts already in the repo (strategic goals, programmes, team structure, focus regions), so re-check it against the real Figma frame when one exists. All three sections hand off to their own form page — Partnership → `/partner-with-us`, Careers → `/careers`, Volunteering → `/volunteer`. (Partnership and Careers used to dump the visitor on `/contact` with an instruction to "mark your message Partnership"; that was replaced with real forms on 2026-07-31.)
- `/our-story` — Built: hero (the "we can't help everyone, but everyone can help someone" motto), Our Inspiration (the late Prabjot Singh of Sri Muktsar Sahib — he is Prabkiran Brar's father, which is why `/our-team` also references Sherewala), and Ignite the Future. Copy is a rewrite of text supplied from the org's old website; no Figma frame exists for it. The whole page is deliberately text-only — no hero photo, and no portrait of Prabjot Singh, at the owner's request.
- `/volunteer` — Built: a minimal contact-style form (name, email, phone, message), posting via `postJson("/api/volunteer", …)` to the local Route Handler (see "Forms & integrations"). No Figma design exists yet for this page, so structured fields (region, area of interest, etc.) are deferred until one does.
- `/partner-with-us` — Built: partnership enquiry form (name, organisation, email, phone, partnership type, message) submitting via the `submitPartnershipEnquiry` Server Action in `./actions.js`. The partnership-type options mirror the four partner categories on `/work-with-us#partnership` — keep them in sync. No Figma design exists yet.
- `/careers` — Built: application form (name, email, phone, role, CV/portfolio **link**, message) submitting via the `submitCareersApplication` Server Action in `./actions.js`. A link rather than a file upload on purpose: the mailbox ingest API is JSON-only, so there is nowhere to put a file. No Figma design exists yet.
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
