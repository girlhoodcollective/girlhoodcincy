# Girlhood Collective

Marketing & community site for Girlhood Collective — events, workshops, consulting, and community for women and girls across Greater Cincinnati.

Built with [Astro](https://astro.build) + [Preact](https://preactjs.com) islands for the interactive tools (Events RSVP, Consultation Intake, Worth Quiz). Static pages ship zero client-side JS; the three interactive tools hydrate only themselves.

## Design system

- `src/styles/tokens.css` — brand colors, type families, layout tokens
- `src/styles/global.css` — base reset, fonts, and shared primitives (nav, buttons, eyebrows, cards, form fields, footer)
- `src/components/` — reusable UI: `Nav`, `Footer`, `NumberedCard`, plus the interactive islands (`EventsExplorer`, `ConsultationIntake`, `WorthQuiz`)
- `src/data/` — content/data separated from markup: events, newsletter archive, intake question options, worth-quiz question bank & archetypes

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
