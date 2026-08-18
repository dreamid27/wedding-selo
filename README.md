# Wedding Selo — Landing Page

Landing page for **Wedding Selo**, a digital wedding invitation service.
Built with TanStack Start, React, TypeScript, and Tailwind CSS v4.

**[wedding.selo.my.id](https://wedding.selo.my.id)**

## Running

```bash
bun install
bun run dev      # http://localhost:3000
bun run build    # static production build → dist/client
bun run preview  # preview the production build locally
```

## Deployment (Cloudflare)

The site is fully static: `bun run build` prerenders every route (landing page
+ all `/template/<slug>` pages) into `dist/client`, along with `sitemap.xml`.
No server runtime, nginx, or environment variables are required.

- **One-off deploy:** `bun run deploy` (build + `wrangler deploy`, uploads
  `dist/client` as static assets per `wrangler.toml`).
- **Git integration (recommended):** connect the `dreamid27/wedding-selo` repo
  in the Cloudflare dashboard with **build command** `bun run build` and
  **deploy command** `bunx wrangler deploy`, so every push to `main` deploys.
- **Custom domain:** attach `wedding.selo.my.id` to the project in the
  Cloudflare dashboard.

Security and caching headers ship via `public/_headers`; unknown URLs fall back
to the SPA shell (`not_found_handling` in `wrangler.toml`), where the router
renders the branded 404 page.

## SEO

- Meta/Open Graph/Twitter tags are built by `src/lib/seo.ts` (per-page titles,
  descriptions, canonical URLs, and OG images — templates use their cover photo).
- Structured data: Organization + WebSite (root), FAQPage + Service with offers
  (landing), BreadcrumbList (template pages).
- `public/robots.txt`, generated `sitemap.xml`, and `public/llms.txt` (for AI
  crawlers) reference `https://wedding.selo.my.id`.
- Icons and social card: `public/favicon.svg` (+ `.ico`, apple-touch, 192/512
  PNGs) and `public/og.jpg`.

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
