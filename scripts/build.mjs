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
  <title>Lewis David Creelman — CV</title>
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
  margin: { top: '14mm', bottom: '14mm', left: '14mm', right: '14mm' },
});
await browser.close();
console.log('Wrote dist/cv.pdf');
