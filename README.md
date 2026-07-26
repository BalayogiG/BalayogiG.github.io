# BalayogiG.github.io

Personal portfolio, built with [Next.js](https://nextjs.org) (App Router) and Tailwind CSS, statically exported and deployed to GitHub Pages via GitHub Actions.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

All page content (about, experience, publications, projects, skills, contact links) lives in [`src/lib/data.ts`](src/lib/data.ts) — edit that file to update the site.

## Build

```bash
npm run build
```

Produces a static export in `out/`, which is what gets deployed to GitHub Pages by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on every push to `main`.
