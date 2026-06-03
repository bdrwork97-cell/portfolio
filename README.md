# Bodanapalli Devik — Cloud DevOps Engineer Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Showcases cloud infrastructure, DevOps automation, and platform engineering experience across AWS and Azure.

## Tech Stack

- **React 18** — UI library
- **Vite 6** — Build tool and dev server
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Smooth animations
- **Lucide React** — Icons

## Features

- Dark theme with glassmorphism cards and animated gradients
- Floating cloud/server icons in hero section
- Animated stats counters and scroll-triggered reveals
- Vertical timeline for work experience
- Staggered skill badge animations
- Project cards with hover effects
- Fully responsive (desktop, tablet, mobile)
- SEO meta tags and semantic HTML

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Customization

Edit `src/data/portfolio.ts` to update:

- Personal info (name, email, phone, social links)
- Hero content and stats
- Skills, experience, projects, and certifications
- Resume download path

Place your resume PDF at `public/Devik-Cloud-Engineer-Resume.pdf`.

## Deploy to Vercel

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel auto-detects Vite — no extra config needed
4. Add your custom domain in Vercel project settings → Domains

### GitHub Pages (alternative)

Add to `vite.config.ts`:

```ts
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
});
```

## Project Structure

```
├── public/
│   ├── favicon.svg
│   └── Devik-Cloud-Engineer-Resume.pdf  (add your resume)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Certifications.tsx
│   │   ├── ResumeSection.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── AnimatedCounter.tsx
│   ├── data/
│   │   └── portfolio.ts
│   ├── hooks/
│   │   └── useScroll.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## License

Private — © Bodanapalli Devik
