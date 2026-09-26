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
  await page.goto("http://127.0.0.1:3000");
  await page.screenshot({ path: `qa/home-${name}.png`, fullPage: true });
  console.log(
    `${name}: overflow=${await page.evaluate(() => document.documentElement.scrollWidth > innerWidth)}`,
  );
  await page.close();
}
await browser.close();
