import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
await mkdir("qa", { recursive: true });
const browser = await chromium.launch();
for (const [name, width, height] of [
  ["desktop", 1440, 1000],
  ["tablet", 768, 1024],
  ["mobile", 390, 844],
  ["small-mobile", 320, 740],
]) {
  const page = await browser.newPage({ viewport: { width, height } });
  for (const route of [
    "/",
    "/office-info",
    "/services",
    "/about",
    "/contact",
  ]) {
    await page.goto(`http://127.0.0.1:3000${route}`);
    for (const image of await page.locator("main img").all()) {
      await image.scrollIntoViewIfNeeded();
      await image.evaluate((node) => node.decode());
    }
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    const slug = route === "/" ? "home" : route.slice(1);
    await page.screenshot({ path: `qa/${slug}-${name}.png`, fullPage: true });
    if (route === "/") await page.screenshot({ path: `qa/hero-${name}.png` });
  }
  console.log(
    `${name}: overflow=${await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)}`,
  );
  await page.close();
}
await browser.close();
