# Joti Foundation website

Marketing / storytelling site for Joti Foundation, an Indian NGO running youth-led disaster response (rescue, relief, training). This repo is a Next.js frontend only — no database, no CMS, no auth.

## Stack

- Next.js 16 (App Router), React 19, JavaScript (no TypeScript) — path alias `@/*` → `./src/*`
- Tailwind CSS v4 — theme tokens defined in `src/app/globals.css` via `@theme inline` (no `tailwind.config.js`)
- `lucide-react` for icons, `framer-motion` for scroll reveals and hover/tap micro-interactions
- ESLint flat config (`eslint-config-next/core-web-vitals`)

See `CLAUDE.md` for detailed conventions and `DESIGN.md` for the design system (color, type, spacing, radius, elevation).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Commands

- `npm run dev` — dev server
- `npm run build` / `npm run start` — production build / serve
- `npm run lint` — ESLint

## Project structure

- Routes live at `src/app/<route>/page.jsx`, kebab-case folder matching the URL.
- Shared, cross-page UI lives in `src/components/` (`ui/`, `motion/`, `layout/`). UI used by a single route can live in a colocated `_components/` folder inside that route segment.
- Static assets go in `public/`, rendered with `next/image`.

## Pages

- `/` — Home (fully built)
- `/what-we-do` — stub
- `/our-team` — stub
- `/work-with-us` — stub route (linked from header "Volunteer" button)
- `/donate` — stub route (linked from "Donate Now" CTAs)

## Forms & integrations

Contact, newsletter, donation, and "Work With Us" submissions call external PHP APIs hosted outside this repo. Forms use `postJson()` from `src/lib/api.js`, reading the API base URL from `NEXT_PUBLIC_API_BASE_URL` (see `.env.local.example`). This repo only handles client-side validation and loading/error/success UI states — CORS and server-side validation are the API's responsibility.
