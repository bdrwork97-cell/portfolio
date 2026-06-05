import { createRequire } from 'module';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const htmlPath = join(root, 'public', 'Devik-Cloud-Engineer-Resume.html');
const pdfPath = join(root, 'public', 'Bodanapalli-Devik-Cloud-DevOps-Resume.pdf');

async function generate() {
  if (!existsSync(htmlPath)) {
    console.error('Resume HTML not found:', htmlPath);
    process.exit(1);
  }

  let puppeteer;
  try {
    puppeteer = await import('puppeteer');
  } catch {
    console.warn('Puppeteer not installed. Skipping PDF generation. Run: npm install');
    process.exit(0);
  }

  const browser = await puppeteer.default.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: pdfPath,
    format: 'Letter',
    printBackground: true,
    margin: { top: '0.4in', right: '0.5in', bottom: '0.4in', left: '0.5in' },
  });
  await browser.close();
  console.log('Resume PDF generated:', pdfPath);
}

generate().catch((err) => {
  console.error('Failed to generate resume PDF:', err);
  process.exit(1);
});
