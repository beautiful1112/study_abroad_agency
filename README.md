# Rooute Education & Migration (趣袋鼠)

Bilingual (ZH default + EN) static website for an Australian study-abroad and immigration agency. Built with [Astro](https://astro.build/) from the [Healthcare Astro Theme](https://github.com/web-stacked/healthcare-astro-theme), rebranded for Rooute.

- **Chinese brand:** 趣袋鼠  
- **English brand:** Rooute Education & Migration  
- **Domain:** [https://rooute-edu-immi.com](https://rooute-edu-immi.com)

## Local development

Requires Node.js **22.12+**.

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

```bash
npm run build    # output in dist/
npm run preview  # preview production build
npm run check    # Astro + TypeScript checks
```

## Languages

| Locale | URL prefix | Example |
|--------|------------|---------|
| Chinese (default) | none | `/`, `/about/`, `/services/` |
| English | `/en` | `/en/`, `/en/about/`, `/en/services/` |

Copy lives in `src/data/i18n/zh.ts` and `src/data/i18n/en.ts`.  
Brand/contact placeholders: `src/data/site.json`.

## Customize first

1. Update phone, email, address in [`src/data/site.json`](src/data/site.json)
2. Set your Formspree endpoint: `"formspreeEndpoint": "https://formspree.io/f/xxxxxx"`
3. Replace placeholder contact details and map query when the office address is final
4. Swap stock theme images in `src/assets/` for licensed photography when ready
5. Logo source: `brand-logos/2.jpg` (navy) → `src/assets/logo.jpg`

Do **not** invent MARA / MARN numbers. Add them only when registration is confirmed.

## Contact form

The contact form posts to Formspree (static-friendly, no server runtime).

1. Create a form at [formspree.io](https://formspree.io/)
2. Paste the endpoint into `src/data/site.json` → `formspreeEndpoint`
3. Rebuild and redeploy

Until configured, the form shows a setup message instead of submitting.

## Cloudflare Pages / Workers (static)

| Setting | Value |
|---------|--------|
| Build command | `npm run build` |
| Build output / assets | `dist` (see [`wrangler.jsonc`](wrangler.jsonc)) |
| Node version | `22` (see `.node-version`) |

If your project uses **Deploy command** `npx wrangler versions upload`, keep [`wrangler.jsonc`](wrangler.jsonc) so Wrangler uploads `./dist` as static assets.

Do **not** leave Deploy command as bare `npx wrangler versions upload` without `wrangler.jsonc` — that fails with “Missing entry-point to Worker script or to assets directory”.

Alternatively, in classic Pages settings: set **Build output directory** to `dist` and clear any custom deploy command.

## Project structure (key paths)

```text
src/
  components/pages/   # Shared page bodies (locale-aware)
  data/i18n/          # ZH + EN dictionaries
  data/site.json      # Brand, contact, Formspree
  pages/              # Chinese routes
  pages/en/           # English routes
  styles/tailwind.css # Navy design tokens
brand-logos/          # Original logo exports (0–4.jpg)
```

## License

Theme base is MIT (TechStacked / healthcare-astro-theme). Site content and branding belong to Rooute Education & Migration.
