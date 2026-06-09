// Build the CV from README.md into a styled web page (dist/index.html) and a PDF (dist/cv.pdf).
// One markdown source -> one CSS -> both outputs, so the page and the PDF can never drift apart.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { marked } from 'marked';
import puppeteer from 'puppeteer';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

const md = await readFile(join(root, 'README.md'), 'utf8');
const css = await readFile(join(root, 'assets', 'cv.css'), 'utf8');

// gfm: true enables the pipe tables used by the Technical Skills section.
const bodyHtml = marked.parse(md, { gfm: true });

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Lewis David Creelman — Software Engineer</title>
  <meta name="description" content="Software Engineer — back-end APIs (TypeScript / GraphQL / Node.js on AWS) at 100k+ quotes/day, plus published C#/.NET open source.">
  <meta property="og:title" content="Lewis David Creelman — Software Engineer">
  <meta property="og:description" content="Back-end APIs (TypeScript / GraphQL / Node.js on AWS) at 100k+ quotes/day, plus published C#/.NET open source.">
  <meta property="og:type" content="profile">
  <meta property="og:url" content="https://lewisisworking.github.io/cv/">
  <meta name="twitter:card" content="summary">
  <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='6' fill='%230b5cab'/%3E%3Ctext x='16' y='22' font-family='Segoe UI,Arial,sans-serif' font-size='15' font-weight='700' fill='white' text-anchor='middle'%3ELC%3C/text%3E%3C/svg%3E">
  <style>${css}</style>
</head>
<body>
  <main class="cv">
    <a class="no-print download" href="cv.pdf">Download PDF &darr;</a>
    ${bodyHtml}
  </main>
</body>
</html>`;

await mkdir(dist, { recursive: true });
await writeFile(join(dist, 'index.html'), html, 'utf8');
console.log('Wrote dist/index.html');

// --no-sandbox is required for Chrome running as root inside GitHub Actions runners.
const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'networkidle0' });
await page.pdf({
  path: join(dist, 'cv.pdf'),
  format: 'A4',
  printBackground: true,
  margin: { top: '12mm', bottom: '12mm', left: '12mm', right: '12mm' },
});
await browser.close();
console.log('Wrote dist/cv.pdf');
