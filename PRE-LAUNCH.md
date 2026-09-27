# Owner pre-launch checklist

The live legacy site returned a Cloudflare challenge during migration on September 27, 2026. Content is based on the supplied project brief, not an independently retrieved copy of the legacy site. This build is ready for review; the items below block final content approval and deployment.

- [ ] Confirm practice name, dentist name/credentials, phone, full postal address, and map destination.
- [ ] Confirm **Thursday hours**: the brief reports both 8 AM–5 PM and 7 AM–2 PM. The website intentionally displays “Call to confirm.”
- [ ] Confirm all other hours, every-other-Friday schedule, and closures. Update `src/data/practice.ts`; add structured opening hours only after confirmation (do not publish misleading weekly Friday hours).
- [ ] Supply and test the **exact patient forms URL** and **exact secure payment URL** with the practice/provider. Set the two centralized URL values; navigation then links directly to the external services. Until then, call-assistance pages are used. Do not substitute a generic provider homepage.
- [ ] Confirm accepted insurance, claim filing, HMO policy, cash/check/card acceptance, and flexible payment arrangements.
- [ ] Confirm CareCredit availability and the approved link; no financing terms or provider link are published yet.
- [ ] Confirm the listed services and descriptions from the owner-supplied copy. Treatment availability, orthodontics, implants, TMJ/TMD care, and emergency scheduling need particular attention.
- [ ] Confirm the Kids Club / USS Sugar Swatters program and electronic quieter drill system mentioned in the supplied copy.
- [ ] Confirm digital X-rays, intraoral pictures, nitrous oxide, child-friendly staff training, sterilization/autoclaving, and infection-control statements.
- [ ] Confirm Dr. Johnson’s degree, institution, summa cum laude distinction, Providence practice since 2005, continuing education, and Cache Valley/family background.
- [ ] Verify current staff roster, roles, biographies, and portrait permissions. The seven biographies in the owner-supplied copy are displayed for review; current employment still needs confirmation. Bethany is omitted because she is not included in that copy. Owner-supplied portraits of Paige, Bethany, and Teresa are prepared; the group photograph is displayed without individual labels. The `verified` flag tracks roster confirmation and is not used to hide owner-requested draft copy.
- [ ] Confirm testimonial publication permissions before launch. The four owner-supplied patient quotations and attributions are now displayed verbatim on Home and Testimonials.
- [ ] Confirm Spanish-language availability for launch; “Se habla español” is included as requested in the supplied copy.
- [ ] Confirm official social links (currently omitted).
- [x] Review and integrate owner-supplied photography. All 26 images are classified in PHOTO-INVENTORY.md; selected office, dentist, team, exterior, equipment, and valley photos now replace public placeholders. Responsive WebP copies preserve originals and use intrinsic dimensions, alt text, and lazy loading.
- [ ] Confirm the three individual staff names/current employment before enabling their prepared portrait cards.
- [ ] Confirm rights to any migrated assets and approve the provisional mountain wordmark or replace it with the official logo.
- [ ] Review the current practice privacy policy and add the approved policy/link if appropriate. No policy was invented; no analytics, forms, tracking pixels, maps embed, or medical-data collection have been added.
- [ ] Retrieve the old sitemap/URL inventory, confirm the provisional redirects in `next.config.ts`, and add redirects for other valuable old URLs. Verify canonical domain and DNS/deployment configuration.
- [ ] Complete real-device Chrome/Safari checks, click-to-call, map destination, actual forms/payment flows, final image QA, and performance checks after approved content/assets are added.

## Content and asset provenance

`src/data/practice.ts`, `services.ts`, and `staff.ts` use the provided redesign brief. Page copy, service descriptions, staff biographies, and testimonials now follow the owner-supplied Updated Website Copy. `testimonials.ts` contains the four owner-supplied quotations. No stock or AI-generated people/office imagery is used. Photography is from the owner-supplied images/ directory. Portrait names follow source filenames; roles are not inferred. The provisional wordmark is code-native artwork.

## Launch workflow

Update centralized data → approve final photography/content → verify provider URLs and redirects → `npm ci` → `npm run build` → `npm run typecheck` → `npm run test:e2e` → review production preview → deploy after owner content approval. Protect preview deployments from indexing using hosting access protection or `X-Robots-Tag: noindex`; the committed robots configuration is for the final production domain.

## Copy update

Applied the owner-supplied Updated Website Copy throughout the site. Thursday remains “Call to confirm.” CareCredit details are conditional on a confirmed provider URL. Patient forms and payment URLs remain unset, with call-assistance pages. No FAQ or Privacy Policy link was added because neither an approved page nor a destination was supplied. Insurance text links to existing office information instead of an unavailable FAQ.
