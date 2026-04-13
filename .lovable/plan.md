

## Shankar Mridha — Personal Brand Website

A 7-page static React + Vite website with HashRouter, custom color system, Google Fonts (Playfair Display, DM Sans, DM Mono), and full responsive design.

### Setup & Configuration
- Configure HashRouter, Google Fonts imports, custom color palette (Midnight Authority, Royal Gold, Deep Sapphire, Warm Ivory, Teal), and typography in Tailwind config and CSS variables
- Set `base: './'` in Vite config for GitHub Pages compatibility
- Add scroll entrance animations (fade + translateY) as reusable utilities

### Shared Components
- **Navbar** — Sticky, transparent on dark hero → solid Midnight on scroll. Logo + 7 nav links + "Book a Session" CTA. Mobile hamburger with slide-in drawer.
- **Footer** — 3-column layout with branding, social icons, nav links, copyright strip
- **Social icons bar** — Reusable component with LinkedIn, YouTube, Facebook, Instagram, WhatsApp links
- **Testimonials section** — 3 cards reused on Home and Clients pages
- **Placeholder image component** — Deep Sapphire boxes with DM Mono captions

### Pages

1. **Home (/)** — Hero with 2-col layout (text + photo placeholder), stat strip, About teaser, Services teaser (4 cards), Naya Code teaser (5 dimension tiles), Clients logo marquee, Testimonials, Social bar

2. **About (/about)** — Hero strip, 4-section alternating narrative timeline (Beginning → Corporate → Founder's Leap → Framework), pull quote, credentials strip, 4 current-role cards (Naya Code, KKINSUGI, Dale Carnegie, Art is Energy)

3. **Naya Code™ (/naya-code)** — Hero with radial glow, 3 belief cards, 5D Intelligence accordion/sections with Teal numbers, SVG pentagon radar diagram, 3 engagement-method cards

4. **Services (/services)** — Hero strip, target context statement, 7 alternating full-width service sections (each with name, audience tag, description, outcomes, format, CTA), programme portfolio tag grid

5. **Clients (/clients)** — Hero strip, sector filter pills, filterable 4-col client card grid (19 companies), speaking engagements section, testimonials

6. **Gallery (/gallery)** — Hero strip, category filter pills, masonry placeholder grid (10-12 items), lightbox overlay with navigation. Clear code comments for adding real photos.

7. **Contact (/contact)** — Hero strip, 2-col layout: left with WhatsApp button + email (display vs mailto separation) + phone + social icons; right with contact form (8 fields including programme interest dropdown), form endpoint placeholder, success message

### Key Details
- All CTAs route correctly between pages; external links open in new tabs
- CSS marquee animation for client logos (no JS library)
- SVG radar chart on Naya Code page using Teal color
- No pure black/white, no stock photos, no emoji
- Mobile-first responsive throughout

