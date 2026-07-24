# Girlhood Collective

Marketing & community site for Girlhood Collective — events, workshops, consulting, and community for women and girls across Greater Cincinnati.

Built with [Astro](https://astro.build) + [Preact](https://preactjs.com) islands for the interactive tools (Events RSVP, Consultation Intake, Worth Quiz). Static pages ship zero client-side JS; the three interactive tools hydrate only themselves.

## Design system

Brand source of truth: the Girlhood Collective **Brand Identity Guide**. See [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) for the full guide → code mapping (colors, type, logo construction, per-page secondary-color rotation) and for how to sync `design-system/` to a claude.ai/design project.

- `src/styles/tokens.css` — brand colors, type families, layout tokens
- `src/styles/global.css` — base reset, fonts, and shared primitives (nav, buttons, eyebrows, cards, form fields, footer)
- `src/components/` — reusable UI: `Nav`, `Footer`, `NumberedCard`, plus the interactive islands (`EventsExplorer`, `ConsultationIntake`, `WorthQuiz`)
- `src/data/` — content/data separated from markup: events, newsletter archive, intake question options, worth-quiz question bank & archetypes
- `design-system/` — standalone, sync-ready preview files (colors, typography, components) for pushing to claude.ai/design

This replaces the original `.dc.html` design-handoff prototypes (see `Website design.zip`) with production-ready, componentized source.

## Pages

Home, About, Events & Workshops, Newsletter, Work With Me, Tools, UGC Portfolio, Partners, Consultation Intake, Worth Quiz.

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview
```
