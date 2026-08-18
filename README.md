# Wedding Selo — Landing Page

Landing page for **Wedding Selo**, a digital wedding invitation service.
Built with TanStack Start, React, TypeScript, and Tailwind CSS v4.

## Running

```bash
bun install
bun run dev      # http://localhost:3000
bun run build    # production build
```

## Pages

- `/` — landing page (hero, benefits, features, template catalog, how to order, pricing, testimonials, FAQ, contact)
- `/template/<slug>` — full invitation preview per template (cover, countdown, couple, love story, events, gallery, RSVP, digital gift envelope)

## Customization

### Contact, pricing, testimonials, FAQ

All frequently-changing data is centralized in **`src/lib/site-config.ts`**:

- `siteConfig.contact` — email, WhatsApp number (display & `wa.me` format), Instagram, address
- `pricing` — pricing packages and their feature lists
- `testimonials` and `faqs`

Changing the WhatsApp number/email in this one file automatically updates every
CTA button across the site (all WhatsApp links are built through the `waLink()` helper).

### Invitation templates

The template catalog lives in **`src/lib/templates.ts`**. Each template is a
single object containing sample data (couple, schedule, love story) and theme
tokens (colors + fonts). To add a new template, just add one object — the
`/template/<slug>` preview page becomes available automatically and its card
appears on the landing page.

### Photos

All photos live in `public/images/` (sourced from Unsplash/Pexels, free license).
Replace the files or update the `cover`/`hero`/`gallery` paths in `templates.ts`.
