# Media Compressor — Landing Page

A modern, production-quality landing page for the Media Compressor desktop app. Built with Next.js (App Router), TypeScript, and Tailwind CSS. Static export–compatible for deployment to GitHub Pages.

**Repo structure:** The repository root contains `app/` and `landing/`. This README and all commands below refer to the **landing** folder. Always run `npm run deploy`, `npm run build`, etc. from inside `landing/` (e.g. `cd landing` first from the repo root).

## Tech stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- Responsive, accessible, SEO-friendly
- Static export (`output: 'export'`)

## Run locally

```bash
cd landing
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). For production basePath (e.g. `/media-compressor`) you can run:

```bash
npm run build
npx serve out
```

Then open `http://localhost:3000/media-compressor` (or the port `serve` reports).

## Build (static export)

```bash
npm run build
```

This generates a fully static site in the `out/` directory. No `next export` is needed; Next.js 14 uses `output: 'export'` in `next.config.mjs` and writes static files when you run `next build`.

## Deploy to GitHub Pages

The project is set up for GitHub Pages under the repository path (e.g. `https://max-im.github.io/media-compressor`). `basePath` and `assetPrefix` in `next.config.mjs` are set to `/media-compressor` for production.

### Option 1: Deploy with gh-pages

From the **repository root**:

```bash
cd landing
npm run deploy
```

From inside `landing/`:

```bash
npm run deploy
```

This runs a **GitHub Pages build** (with `NEXT_PUBLIC_BASE_PATH=/media-compressor`), then publishes the contents of `out/` to the root of the `gh-pages` branch. The site is served at `https://max-im.github.io/media-compressor/`.

**Two build modes:**
- **Local** — `npm run build` (no base path). Use with `npx serve out` and open `http://localhost:3000/`.
- **GitHub Pages** — `npm run deploy` (runs `build:gh` then pushes with `-t --nojekyll`). The `-t` flag includes dotfiles (e.g. `.nojekyll`); `--nojekyll` disables Jekyll so the `_next` folder is published (Jekyll ignores underscore-prefixed paths). In the repo **Settings → Pages**, set the source to the `gh-pages` branch.

**If assets (JS/CSS) return 404 after deploy:**

1. **`.nojekyll`** — The repo includes `public/.nojekyll`. It is copied to `out/` on build and tells GitHub Pages *not* to use Jekyll. Jekyll ignores folders whose names start with `_`, so without `.nojekyll` the `_next` folder would never be published and all chunk requests would 404. Do not remove it.
2. Open the site at **exactly** `https://max-im.github.io/media-compressor/` (with `/media-compressor/` in the URL). Opening the repo root or another path will break asset resolution.
3. In **Settings → Pages**, ensure the source is the **gh-pages** branch (root), not `main` or `/docs`.
4. Run a clean deploy: `npm run build` then `npx gh-pages -d out`, and do a hard refresh (Ctrl+Shift+R / Cmd+Shift+R) to avoid cached HTML.

### Option 2: GitHub Actions

1. Create `.github/workflows/deploy.yml` in the **repository root** (not inside `landing/`), for example:

```yaml
name: Deploy landing to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          cache-dependency-path: landing/package-lock.json
      - run: cd landing && npm ci && npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: landing/out
```

2. In **Settings → Pages**, choose “GitHub Actions” as the source.

## Project structure

```
landing/
├── app/
│   ├── globals.css      # Global styles and CSS variables
│   ├── layout.tsx       # Root layout, fonts, SEO meta
│   └── page.tsx         # Home page composition
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── Benefits.tsx
│   ├── SupportedFormats.tsx
│   ├── Screenshots.tsx
│   ├── Download.tsx
│   ├── FAQ.tsx
│   └── Footer.tsx
├── public/              # Static assets (optional)
├── next.config.mjs      # basePath, assetPrefix, output: 'export'
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Customization

- **Download links**: Update `DOWNLOAD_URL` in `Hero.tsx`, `Download.tsx`, and `Header.tsx` (or centralize in a shared constant) to point to your actual release URLs.
- **GitHub repo**: Replace `max-im/media-compressor` with your repo if different.
- **Screenshots**: Replace the placeholder UI in `Hero.tsx` and the placeholder blocks in `Screenshots.tsx` with real app screenshots (e.g. put images in `public/` and use the Next.js `Image` component with `unoptimized: true` for static export).
- **Theme**: Edit `--accent`, `--background`, and related variables in `app/globals.css` and optionally add `prefers-color-scheme: dark` overrides (partially set up).

## License

Same as the main project (MIT).
