import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const pages = [
  "/",
  "/office-info",
  "/services",
  "/about",
  "/contact",
  "/patient-forms",
  "/make-a-payment",
];
for (const path of pages) {
  test(`${path}: responsive, accessible, valid navigation`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toHaveCount(1);
    // Scroll to trigger lazy loading, then verify actual decoding and responsive delivery.
    for (const image of await page.locator("main img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect(image).toHaveAttribute("alt", /.+/);
      await expect(image).toHaveAttribute("srcset", /400w/);
      await expect
        .poll(() =>
          image.evaluate(
            (node: HTMLImageElement) => node.complete && node.naturalWidth > 0,
          ),
        )
        .toBe(true);
      expect(
        await image.evaluate((node: HTMLImageElement) => node.currentSrc),
      ).toMatch(/\/photos\/.+\.webp$/);
    }
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      "href",
      `https://southvalleyfamilydental.com${path === "/" ? "" : path}`,
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(results.violations).toEqual([]);
    const links = await page
      .locator("a")
      .evaluateAll((nodes) => nodes.map((node) => node.getAttribute("href")));
    expect(links.every((href) => !!href && href !== "#")).toBe(true);
    expect(errors).toEqual([]);
    expect(await page.locator("form,input,textarea").count()).toBe(0);
  });
}
test("mobile menu supports focus, Escape, and navigation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const toggle = page.getByRole("button", {
    name: "Open navigation",
    exact: true,
  });
  await toggle.click();
  await expect(
    page.getByRole("button", { name: "Close navigation", exact: true }).first(),
  ).toHaveAttribute("aria-expanded", "true");
  await expect(
    page
      .getByRole("navigation", { name: "Mobile navigation" })
      .getByRole("link", { name: "Home", exact: true }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(toggle).toBeFocused();
  await toggle.click();
  await page
    .getByRole("navigation", { name: "Mobile navigation" })
    .getByRole("link", { name: "Services", exact: true })
    .click();
  await expect(page).toHaveURL(/\/services$/);
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
});
test("internal routes, metadata, redirects and 404", async ({ request }) => {
  for (const path of pages)
    expect((await request.get(path)).status()).toBe(200);
  expect((await request.get("/not-a-real-page")).status()).toBe(404);
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  expect(await sitemap.text()).toContain("/services");
  expect(await (await request.get("/robots.txt")).text()).toContain(
    "sitemap.xml",
  );
  expect((await request.get("/opengraph-image")).status()).toBe(200);
  const redirect = await request.get("/our-location", { maxRedirects: 0 });
  expect(redirect.status()).toBe(301);
  expect(redirect.headers().location).toBe("/office-info");
});
test("phone, directions, schema and confirmed hours are consistent", async ({
  page,
}) => {
  await page.goto("/contact");
  for (const link of await page.locator('a[href^="tel:"]').all())
    await expect(link).toHaveAttribute("href", "tel:+14357872122");
  const directions = page
    .getByRole("link", { name: "Get directions", exact: false })
    .first();
  await expect(directions).toHaveAttribute(
    "href",
    /https:\/\/www.google.com\/maps\/dir\//,
  );
  await expect(
    page.getByText("7:00 AM – 2:00 PM", { exact: true }).first(),
  ).toBeVisible();
  const schema = JSON.parse(
    await page.locator('script[type="application/ld+json"]').innerText(),
  );
  expect(schema["@type"]).toBe("Dentist");
  expect(schema.openingHours).toBeUndefined();
});
