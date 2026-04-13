# CLAUDE.md — shankarmridha

Personal branding site for Shankar Mridha, a leadership coach and creator of the **Naya Code™** framework. Built as a static SPA deployed via GitHub Pages (HashRouter).

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite (plugin-react-swc) |
| Routing | react-router-dom v6 — **HashRouter** (required for GH Pages static hosting) |
| Styling | Tailwind CSS v3 + tailwindcss-animate |
| UI primitives | shadcn/ui (Radix UI under the hood) — components live in `src/components/ui/` |
| Data fetching | TanStack React Query v5 (available but minimal use currently) |
| Forms | react-hook-form + zod |
| Icons | lucide-react |
| Notifications | sonner |
| Tests | Vitest + @testing-library/react |
| Package manager | bun (lock file present); npm also works |

---

## Folder Structure

```
src/
  components/        # Shared layout & feature components
    ui/              # shadcn/ui primitives — DO NOT hand-edit, regenerate via CLI
    Navbar.tsx
    Footer.tsx
    Testimonials.tsx
    SocialIcons.tsx
    NavLink.tsx
    PlaceholderImage.tsx
  pages/             # One file per route
    Index.tsx        # Home page
    About.tsx
    NayaCode.tsx     # Naya Code™ framework detail
    Services.tsx
    Clients.tsx
    Gallery.tsx
    TestimonialsPage.tsx
    Contact.tsx
    NotFound.tsx
  hooks/             # Custom React hooks
  lib/
    utils.ts         # cn() helper (clsx + tailwind-merge)
  test/              # Vitest test files
  App.tsx            # Router + global providers
  main.tsx           # Entry point
  index.css          # Tailwind directives + CSS custom properties

public/
  logos/             # Client logo images
  Shankar.png        # Hero photo
  favicon.ico
```

---

## Design System

All brand colours are CSS custom properties defined in `src/index.css` and mapped in `tailwind.config.ts`. Always use Tailwind classes — never inline HSL values except for gradients that Tailwind can't express.

| Token | Usage |
|---|---|
| `bg-midnight` | Primary dark background (hero, sections) |
| `bg-sapphire` | Secondary dark background (cards, nav sections) |
| `bg-ivory` | Light background sections |
| `text-gold` / `bg-gold` | Primary accent — CTAs, highlights, borders |
| `text-teal` / `bg-teal` | Secondary accent — pills, dividers |
| `text-ivory` | Body text on dark backgrounds |
| `text-body-light` | Body text on light (ivory) backgrounds |

**Fonts** (loaded via Google Fonts in `index.html`):
- `font-display` → Playfair Display (serif) — headings
- `font-body` → DM Sans (sans-serif) — body, buttons, labels
- `font-mono` → DM Mono (monospace) — stat labels, tags, numeric codes

**Typical section pattern:**
```tsx
<section className="bg-midnight py-20 md:py-24">
  <div className="container mx-auto px-6 max-w-6xl">
    ...
  </div>
</section>
```

---

## Routing

Uses `HashRouter` — all routes are hash-prefixed (`/#/about`). Do not switch to `BrowserRouter`; the site is deployed as static files on GitHub Pages without server-side routing.

Routes are defined in `src/App.tsx`. Add new pages there alongside a new file in `src/pages/`.

---

## Coding Conventions

- **Functional components only** — no class components.
- **Named exports for pages, default exports acceptable for components** — be consistent with the existing pattern in each file.
- **No index barrel files** — import directly from the source file.
- **Path alias `@/`** maps to `src/` (configured in `tsconfig.app.json` and `vite.config.ts`). Always use `@/` over relative `../../` imports.
- **Tailwind only** for styling — no CSS modules, no styled-components.
- **shadcn/ui components** in `src/components/ui/` are generated scaffolding. Add new ones with `npx shadcn-ui@latest add <component>`, don't hand-edit them.
- Static data arrays (nav links, service cards, testimonials, etc.) live at the top of the file that uses them, typed inline.
- The `cn()` utility from `@/lib/utils` combines `clsx` + `tailwind-merge` — use it for conditional class strings.

---

## Commands

```bash
bun dev          # Start dev server (localhost:8080 by default)
bun build        # Production build → dist/
bun preview      # Preview production build
bun test         # Run Vitest tests once
bun test:watch   # Vitest in watch mode
bun lint         # ESLint
```

---

## Deployment

Static site — the `dist/` folder is deployed to GitHub Pages. `HashRouter` is mandatory for this to work (no 404 on direct URL access).

---

## Key Content Notes

- **Naya Code™** is Shankar's proprietary leadership framework — the trademark symbol (™) must appear on every usage.
- The **5 intelligence dimensions** are: Decision, Relational, Augmented, Contextual, Inner Stability — numbered 01–05.
- WhatsApp CTA links to `https://wa.me/919860606671`.
- Stats used throughout: 29+ Years, 200+ Programmes, 13 Sectors, VOC 97+, NPS 95+.
