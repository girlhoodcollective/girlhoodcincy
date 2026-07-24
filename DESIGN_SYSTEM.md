# Girlhood Collective — Design System

Source of truth: `Girlhood_Collective_Brand_Identity.pdf` (Brand Identity Guide), supplied by the brand owner. This document maps that guide to the code in this repo and to the sync-ready preview bundle in `design-system/`.

## Where the brand guide lives in code

| Brand Identity Guide | Code |
|---|---|
| Color palette, type families | `src/styles/tokens.css` |
| Base reset, wordmark, nav, buttons, cards, forms | `src/styles/global.css` |
| Logo construction & usage rules | `src/components/Nav.astro`, `src/components/Footer.astro` (via `.brand`/`.brand-name`/`.brand-suffix` in `global.css`) |

### Color mapping

| Guide name | Hex | Token | Role |
|---|---|---|---|
| Warm Ivory | `#F8F6F0` | `--gc-ivory` | Primary — backgrounds |
| Heritage Navy | `#1D3557` | `--gc-navy` (+ `--gc-navy-deep`, `--gc-slate` aliases) | Primary — anchor/trust |
| Sage | `#94B4A9` | `--gc-sage` | Secondary — wellness/community |
| Emerald | `#40826D` | `--gc-emerald` | Secondary — elevated/editorial (default) |
| Hydrangea Blue | `#6F96CF` | `--gc-hydrangea` (+ legacy alias `--gc-lavender`) | Secondary — social/community |
| Peony | `#F971AF` | `--gc-peony` (+ legacy alias `--gc-pink-pale` → `--gc-peony-soft`) | Accent — delight only |

**Secondary rotation.** The guide requires *one* secondary per application. Rather than hand-picking a color per element, each page overrides `--gc-emerald` (the token most of the shared CSS already reads for accents/eyebrows/hovers) to the page's assigned secondary in its own `<style>` block:

- **Sage:** About, Partners
- **Emerald (default, no override needed):** Work With Me, Tools, UGC, Consultation Intake
- **Hydrangea:** Home, Events, Newsletter, Worth Quiz

Peony appears in exactly one recurring spot (the "Why this is personal" eyebrow on About/Work With Me) — a deliberate, sparing delight touch, never a card border, background, or button.

### Typography mapping

| Guide role | Family | Token |
|---|---|---|
| Headlines | Playfair Display 700–900 | `--font-serif` / `--font-display` |
| Body | DM Sans 300–700 | `--font-sans` |
| Editorial accent | Playfair Display Italic | expressed via `font-style: italic` on `--font-serif` (`.serif-script`), not a separate family |

The earlier prototype (`Website design.zip`) used Abril Fatface for the wordmark/display numerals and a script font (Petit Formal Script) for emotional words. Neither appears in the Brand Identity Guide, so both were removed — `--font-display` now points at Playfair Display, and the script font import was dropped entirely.

### Logo construction

`.brand` / `.brand-name` / `.brand-suffix` in `global.css` position "Collective" (Playfair Display Italic, smaller) absolutely, right-aligned above "Girlhood" (Playfair Display bold) — matching the guide's construction spec without needing a logo image asset. Color is locked to Navy-on-light / Ivory-on-dark only, per "never render the wordmark in Sage, Emerald, Hydrangea, or Peony."

### Not yet implemented

The guide's graphic language also calls for botanical line illustrations and garden-inspired trellis patterns. Those need real illustration assets — out of scope for this pass. A `.scallop-edge` utility and a brass (`--gc-brass`) rule/divider token are in place in `global.css` as a start.

## Getting this into claude.ai/design as a permanent default (Option 2)

This repo can't push to a claude.ai/design project directly from this session — `DesignSync` needs a design-system login (`/design-login`) that isn't available in this remote/web environment. The `design-system/` folder is prepped so a session that *does* have that access can sync it in a few steps:

1. **Authorize once.** From a Claude Code session with an interactive terminal (desktop app, or a local/CLI session — not this web session), run `/design-login` and follow the prompt to grant design-system access.
2. **Sync.** In that same session, run `/design-sync` (or drive the `DesignSync` tool directly): `list_projects` → `create_project` (e.g. "Girlhood Collective") if it doesn't exist yet → `finalize_plan` with `localDir` set to this repo → `write_files` pointing at `design-system/*.html` (and optionally `src/styles/tokens.css` / `global.css` for reference).
3. **Preview cards.** Each file in `design-system/` starts with a `<!-- @dsCard group="..." -->` marker (`Colors`, `Typography`, `Components`), so the Design System pane in claude.ai/design will build its gallery automatically — no manual `register_assets` call needed.

Files ready to sync:

- `design-system/colors.html` — full palette with roles and per-page usage
- `design-system/typography.html` — type specimen
- `design-system/buttons-nav.html` — wordmark, nav, button variants (including the light/dark contrast rule)
- `design-system/cards.html` — the numbered stat-card pattern
