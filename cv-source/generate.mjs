import { chromium } from "playwright";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "cv");
fs.mkdirSync(outDir, { recursive: true });

const targets = [
  { html: "cv-ar.html", pdf: "Abdulaziz-Ismail-CV-AR.pdf" },
  { html: "cv-en.html", pdf: "Abdulaziz-Ismail-CV-EN.pdf" },
];

const browser = await chromium.launch();
for (const { html, pdf } of targets) {
  const page = await browser.newPage();
  const filePath = pathToFileURL(path.join(__dirname, html)).href;
  await page.goto(filePath, { waitUntil: "networkidle" });
  await page.pdf({
    path: path.join(outDir, pdf),
    format: "A4",
    printBackground: true,
  });
  await page.close();
  console.log("Generated:", pdf);
}
await browser.close();
