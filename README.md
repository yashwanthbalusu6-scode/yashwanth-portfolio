# Yashwanth Balusu — Portfolio

A high-tech portfolio for an AI/ML Engineer & Data Scientist, built with **React + TypeScript + Vite + Tailwind + Framer Motion**, with an interactive neural-network canvas background.

## Stack

- React 18 + TypeScript
- Vite (fast dev + small production bundles)
- Tailwind CSS (utility styling, dark theme with cyan/violet accents)
- Framer Motion (scroll reveals, hover transitions, modal animation)
- Lucide React (icons)
- Pure-canvas particle/neural background (no Three.js, keeps bundle light)

## Local development

```bash
# 1. Install
npm install

# 2. Run dev server
npm run dev
# → http://localhost:5173

# 3. Production build
npm run build
npm run preview
```

> Requires Node 18+ (20 recommended).

## Editing content

All copy lives in **`src/data/portfolio.ts`**. Update:

- `PROFILE` — name, contact, links
- `ABOUT` — intro, paragraphs, skill groups
- `PROJECTS` — featured case studies (problem / approach / impact / live URL)
- `EXPERIENCE` — roles, clients, bullets, stack
- `EDUCATION` — degrees

The page re-renders automatically.

## Deployment

### Option A — GitHub Pages (automatic via Actions)

1. Push this repo to GitHub.
2. In **Settings → Pages**, set **Source = GitHub Actions**.
3. Push to `main` — the included workflow at `.github/workflows/deploy.yml` will:
   - Build the site with `VITE_BASE_PATH=/<your-repo-name>/`
   - Publish `dist/` to GitHub Pages.

Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

If you deploy to a **user / organisation page** (`<your-username>.github.io`), drop the base override — open `.github/workflows/deploy.yml` and change `VITE_BASE_PATH: /${{ github.event.repository.name }}/` to `VITE_BASE_PATH: /`.

### Option B — AWS S3 + CloudFront

```bash
npm run build
aws s3 sync dist/ s3://<your-bucket> --delete
# Then invalidate CloudFront if needed:
aws cloudfront create-invalidation \
  --distribution-id <ID> --paths "/*"
```

The bucket should be configured as a **static website host** (index.html / 404.html as index document). The `base` path in `vite.config.ts` should stay `/` for S3+CloudFront.

### Option C — Netlify / Vercel / Cloudflare Pages

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- No env var needed (base stays `/`).

### Option D — Any static host

`dist/` after `npm run build` is a fully static bundle. Upload it anywhere.

## Project structure

```
.
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── public/
│   └── favicon.svg
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── data/
│   │   └── portfolio.ts        ← edit copy here
│   └── components/
│       ├── Nav.tsx
│       ├── Hero.tsx
│       ├── Section.tsx
│       ├── About.tsx
│       ├── Projects.tsx        ← case-study modals
│       ├── Experience.tsx      ← timeline
│       ├── Education.tsx
│       ├── Contact.tsx
│       ├── Footer.tsx
│       └── NeuralBackground.tsx
└── .github/workflows/deploy.yml
```

## Design notes

- Dark `#05070a` base with cyan (`#22d3ee`) and violet (`#a78bfa`) accents.
- All section reveals are `whileInView` + `once`, so animations don't replay on scroll-back.
- The canvas background respects `prefers-reduced-motion` (nodes still draw but don't animate).
- Project cards open a focus-trapped modal with full case studies. Click outside or press **Esc** to close.
- The navbar uses an `IntersectionObserver` to highlight the active section.
- No tracking, no fonts beyond Google Fonts (Inter + JetBrains Mono).

## Customising the theme

- Colours: `tailwind.config.js` → `theme.extend.colors.accent`
- Hero copy & tagline: `src/components/Hero.tsx` + `src/data/portfolio.ts → PROFILE.taglineHighlights`
- Background density / speed: `src/components/NeuralBackground.tsx` (tweak `density`, `MAX_DIST`, drift coefficients)

## License

Personal portfolio — feel free to use the layout as inspiration, but please replace the content with your own.
