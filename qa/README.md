# QA results — September 27, 2026

## Owner photography update

- Visually classified all 26 source photographs; 19 distinct images are displayed across seven routes. Individual staff portraits are prepared but remain unpublished pending current-roster confirmation.
- Replaced public placeholders with authentic photography; added a captioned office tour, equipment gallery, team photo, portrait, and local aerial context.
- Generated 130 static WebP variants (five widths per photo), with original files preserved and metadata stripped from delivery copies.
- Browser suite: 30/30 passed, now also checking every displayed photo decodes, has alt text/srcset, and loads a static WebP URL.
- Captured five main routes at 1440, 768, 390, and 320px; reviewed homepage desktop/mobile and About, Office Info, Services, and Contact layouts.
- New Lighthouse mobile result with real photography: **99 performance / 100 accessibility / 100 best practices / 100 SEO**. LCP 2.1s, TBT 20ms, CLS 0. Local lab results vary by run and do not replace production monitoring.
- Build, TypeScript, and formatting checks pass. Full per-photo classification is in [PHOTO-INVENTORY.md](../PHOTO-INVENTORY.md).

## Initial build baseline (before photography)

- Production build and TypeScript: passed; all routes prerendered.
- Formatting and Git whitespace checks: passed.
- Playwright: 30/30 passed across desktop Chromium, tablet Chromium, and iPhone-sized WebKit.
- Axe: no violations in the tested WCAG A/AA rules on all seven content routes.
- Navigation: menu opening, focus placement, Escape, route changes, call links, directions URL, and internal routes checked.
- SEO: page titles/descriptions, canonicals, Dentist JSON-LD, robots, sitemap, generated Open Graph image, redirects, and 404 response checked.
- Screenshots captured at 1440, 768, 390, and 320px; no horizontal overflow. Desktop/mobile screenshots visually reviewed. Final adjustments improved placeholder contrast and prevented the hero plaque from covering the placeholder caption.
- Lighthouse mobile, local production server: **98 performance / 100 accessibility / 100 best practices / 100 SEO**. FCP 1.2s, LCP 2.2s, TBT 20ms, CLS 0. These are lab measurements with placeholder imagery, not real-user Core Web Vitals. The audit preceded the final caption spacing and wordmark whitespace fixes.
- Dependency install audit: zero reported vulnerabilities at installation.
- Contact information and office hours are centralized. No PHI, contact forms, payment fields, analytics, or third-party embeds are present.

Screenshots and full Lighthouse reports are generated locally in this directory and excluded from Git. Reproduce screenshots with `npm run qa:visual` against `npm start`; run `npm run qa:lighthouse` with a locally installed Chrome (or set `CHROME_PATH`).

Still requires owner/production validation: authentic image loading and optimization, real Safari/iPhone hardware, actual phone dialing, map destination accuracy, verified forms/payment transactions, final business content, privacy policy, and real legacy URL inventory. See [PRE-LAUNCH.md](../PRE-LAUNCH.md).
