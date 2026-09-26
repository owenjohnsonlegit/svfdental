# South Valley Family Dental

Next.js App Router, TypeScript, Tailwind CSS 4, and Lucide. Static-rendered marketing pages with no database, patient accounts, payment processing, or contact form. Only the responsive navigation needs client interaction.

## Run

Requires Node.js 20.9+ (Node 22 recommended).

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Production: `npm run build && npm start`.

## Check

```sh
npm run build
npm run typecheck
npx playwright install chromium webkit
npm run test:e2e
```

Browser tests cover desktop Chromium, tablet Chromium, and mobile WebKit, including axe accessibility checks, layout overflow, page rendering, navigation, metadata, redirects, schema, and missing-page behavior. WebKit testing is useful coverage but does not replace testing on real Safari/iPhone hardware.

## Content

- `src/data/practice.ts`: contact information, office hours, provider URLs, navigation.
- `src/data/services.ts`: categorized services and practice features.
- `src/data/staff.ts`: roster, hidden until verified.
- `src/data/testimonials.ts`: approved testimonials only.
- `src/components/ui.tsx`: shared cards, hours, CTAs, and labeled image placeholders.
- `src/app/globals.css`: responsive design tokens and styles.
- `next.config.ts`: provisional legacy redirects.

Routes: `/`, `/office-info`, `/services`, `/about`, `/contact`. `/patient-forms` and `/make-a-payment` are call-assistance fallbacks until exact external URLs are configured. Once configured, primary/footer navigation opens providers directly with an external-navigation label.

Local SEO includes canonical URLs, page descriptions, Open Graph artwork, favicon, sitemap, robots, and Dentist JSON-LD. Unconfirmed hours are deliberately excluded from structured data.

**Before deployment, complete [PRE-LAUNCH.md](PRE-LAUNCH.md).** The legacy site blocked automated access, so approved photography, provider links, testimonials, and several business facts remain outstanding. No fabricated provider URLs, staff biographies, or reviews are used.
