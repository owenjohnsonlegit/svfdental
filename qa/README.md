# QA results — September 27, 2026

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
