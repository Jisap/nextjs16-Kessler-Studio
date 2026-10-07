# Motion & Sound Direction — Starter Kit

A follow-along starter kit for the tutorial. This is the same Next.js /
TypeScript / Tailwind project structure as the finished build, with the
actual implementation stripped out — pages, components, and styles are
left as minimal scaffolds with `TODO` comments marking what to build
during the video.

Built by **Script Valley**.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Every route already
resolves — you'll just see empty placeholder sections until you build
each piece out.

## Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS**
- **Framer Motion** — for the curtain-wipe page transition you'll build
- **GSAP + ScrollTrigger** — for the infinite-scroll project/archive grids you'll build
- **Lenis** — smooth scrolling

All dependencies and config (`package.json`, `tailwind.config.ts`,
`tsconfig.json`, `next.config.mjs`) are already set up and match the
finished project exactly — nothing to install or configure beyond
`npm install`.

## Project structure

```
src/
  app/
    layout.tsx            root layout, fonts, metadata, nav/footer shell (done)
    fonts.ts               local OFL font loader (done, no network needed at build)
    globals.css             Tailwind + base resets (done) — animation CSS is TODO
    page.tsx                Home — TODO: hero
    projects/page.tsx       Projects — TODO: infinite-scroll grid
    archive/page.tsx        Archive — TODO: infinite-scroll list
    information/page.tsx    Information — TODO: about/info sections
    sample-project/page.tsx Case study template — TODO: case study content
  components/
    navbar/                 TODO: primary nav + collaborator flyout
    footer/                 TODO: contact links + copyright
    transition/             TODO: route-change curtain wipe (framer-motion)
                            TransitionLink.tsx is done — it's the wiring
                            that will call into RouteTransition once you
                            build it out
    preview/                TODO: scroll-driven image preview (Archive page)
  data/                     Content data (projects, archive, info, nav) —
                            shapes are defined, values are placeholders
  assets/fonts/             Bundled OFL font files (Big Shoulders, Outfit) (done)
public/
  images/                   Placeholder imagery, ready to use (see below)
  audio/tick.wav            UI tick sound for the Archive scroll preview
```

## What's already done vs. what you'll build

**Already wired up** (infrastructure, not the tutorial's teaching content):
- Next.js/TypeScript/Tailwind config, fonts, base CSS resets and color
  tokens
- Routing and file structure for all 5 pages
- `TransitionLink.tsx` (routes internal links through the transition
  system once it exists)
- Data file shapes (`InfoItem`, `Project`, `ArchiveEntry`, `NavLink`,
  `ArticleItem`) with one placeholder entry each

**Left as `TODO` for the tutorial:**
- The hero and its scrambled-letter hover effect (Home)
- The infinite-scroll project grid and archive list (GSAP + ScrollTrigger)
- The scroll-driven preview image swap (Preview)
- The navbar + collaborator flyout, and its expand/collapse CSS
- The footer
- The information/about page layout
- The sample-project case study layout
- The curtain-wipe page transition itself (RouteTransition)
- Filling in real content in `src/data/*.ts`

## Imagery

All imagery in `public/images/` is procedurally generated placeholder
artwork (abstract waveform/gradient compositions), ready to use as-is
while you build, or swap out for your own. Reference sizes if you want
to replace them:

| File | Location | Recommended size | Aspect | Purpose |
| --- | --- | --- | --- | --- |
| `site-icon.png` | `public/` | 512×512 | 1:1 | Favicon / app icon (monogram) |
| `og-image.jpg` | `public/` | 1200×630 | ~1.91:1 | Social share preview |
| `images/projects/project-1..6.jpg` | `public/images/projects/` | 1600×1200 | 4:3 | Projects grid thumbnails |
| `images/archive/archive-1..30.jpg` | `public/images/archive/` | 1200×900 | 4:3 | Archive scroll preview pool |
| `images/sample-project/hero-1.jpg` | `public/images/sample-project/` | 1920×1440 | 4:3 | Case study top hero |
| `images/sample-project/hero-2.jpg` | `public/images/sample-project/` | 1920×1440 | 4:3 | Case study mid hero |
| `images/sample-project/hero-3.jpg` | `public/images/sample-project/` | 1920×1920 | 1:1 | Case study closing full-bleed frame |
| `images/sample-project/detail-1..4.jpg` | `public/images/sample-project/` | 1500×1200 | 5:4 | Case study detail grid |
| `images/nav/collab-1..3.jpg` | `public/images/nav/` | 200×200 | 1:1 | Nav flyout collaborator thumbnails |

## Fonts

Typography uses two SIL Open Font License typefaces, bundled locally under
`src/assets/fonts/` via `next/font/local` (no network call at build time):

- **Big Shoulders** (Bold/Regular) — display/headline type
- **Outfit** (Bold/Regular) — body and UI text

License files are included alongside each font (`*-OFL.txt`).
