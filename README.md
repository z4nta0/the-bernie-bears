# The Bernie Bears

The website for The Bernie Bears, Lilah and Norah, two Bernese Mountain Dog sisters with a following across social media. The site introduces the girls, gathers their six social profiles in one place, and sends visitors on to the brand's main site and shop at [theberniebears.com](https://theberniebears.com/), which it exists to support rather than compete with. It's built and maintained by [techgeek.dev](https://techgeek.dev/), whose portfolio links to it.

Live at [theberniebears.dog](https://theberniebears.dog/).

## Stack

- **Node.js** 22.22 or newer (React Router 8 requires it)
- **Vite 8** dev server / bundler
- **React 19** + **TypeScript 6**
- **React Router 8** (Home, About, Social Links, and Contact, plus a 404 page for every other path)
- **ESLint 9** with typescript-eslint, and **Playwright** with axe-core for the test suites
- Deployed on **Netlify**, which serves `index.html` for every path (`public/_redirects`) and sends the security headers in `public/_headers`

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Checks

```bash
npm run lint       # ESLint across the repo
npm run typecheck  # TypeScript across src/, the configs, tests/, and the design/ scripts
```

## Tests

```bash
npm test                    # every suite
npm run test:accessibility  # axe-core plus scripted keyboard, naming, reflow, and motion checks
npm run test:interaction    # page navigation, the phone menu, and every link and button's hover, press, and focus feedback
npm run test:rendering      # full-page screenshots of each page state against approved baselines
npm run test:responsive     # every page and the phone menu from 320 to 1,920px: no sideways scroll, spill, or overlap
npm run test:seo            # titles, descriptions, canonical, robots, and social tags, structured data, the preview card, icons, robots.txt, and the sitemap
```

Each suite runs in Chromium, Firefox, and WebKit against its own dev server on port 5193, so a dev server already running on 5173 is left alone. Reports land in `tests/output/` (git-ignored); `npx playwright show-report tests/output/report` opens the HTML report. The rendering suite's approved screenshots live in `tests/rendering/baselines/` and match to the pixel, so after a change meant to alter how a page looks, review the diff in the report, then run `npm run test:rendering -- --update-snapshots` and commit the new baselines with the change. The baselines were captured on Linux, and font rendering differs between systems, so on macOS or Windows refresh them locally before relying on the comparison. If a browser is missing, `npx playwright install chromium firefox webkit` installs all three.

## Build

```bash
npm run build
npm run preview
```

## Images

The photos, the social preview card, and the icons are all rendered by scripts, so they can be rebuilt whenever something changes:

```bash
npm run photos    # resizes design/photos/ into WebP copies beside their pages and writes each page's photo-sizes.ts
npm run og-image  # captures design/og-image/card.html as public/og-image.jpg
npm run icons     # renders favicon.ico, the PNG icons, and the Apple touch icon from public/favicon.svg
```

To replace a photo, put the new original in `design/photos/` under the same name and run `npm run photos`. A new photo also needs a row in `PHO_REC_ARR` in `design/photos/render.mts`, saying which page shows it, whether the page crops it to a square, and twice the widest it's shown. Apps cache a link's preview card for days, so a changed card should get a new file name (`og-image-2.jpg`), with every tag in `index.html` that points at it updated.

## Project structure

```
src/
├── assets/            Self-hosted fonts
├── pages/
│   ├── home/          Home page and its .module.css, the hero portrait, and photo-sizes.ts (generated)
│   ├── about/         About page and its .module.css, the cartoon and the sisters' photos, and photo-sizes.ts (generated)
│   ├── links/         Social Links page and its .module.css
│   ├── contact/       Contact page and its .module.css
│   └── not-found/     The 404 page every unknown path shows, with its .module.css
├── ui/                The bar and the footer, each with its own .module.css, plus social-profiles.ts (the six profiles the Social Links page and the phone menu share), page-description.ts (a page's own search description), and scroll-top.ts (each new page opens at its top)
├── styles/            fonts.css (@font-face) + styles.css (design tokens, base element styles, the shared focus ring, and the shared entrance keyframes)
├── app.tsx            Root component and the route table
└── main.tsx           Entry point
public/                Files served at fixed addresses: the icons, the social card, robots.txt, sitemap.xml, and Netlify's _headers and _redirects
tests/
├── accessibility/     axe-core scan and scripted checks
├── interaction/       navigation, phone menu, and hover, press, and focus feedback checks
├── rendering/         screenshot comparisons and their baselines/
├── responsive/        layout checks across screen widths
├── seo/               head tags, structured data, preview card, icon, and crawler file checks
├── support/           the page states the suites visit
└── playwright.config.ts

design/                Source artwork, not served
├── icons/             render.mts, which builds the icon set in public/ (npm run icons)
├── og-image/          card.html and render.mts, which builds public/og-image.jpg (npm run og-image)
└── photos/            The original photos and render.mts, which builds their WebP copies (npm run photos)
```

## Design notes

- **Type pairing:** Dancing Script, a flowing script, for headings and the brand name, with Nunito for body text and buttons, both self-hosted (`src/assets/fonts/`, declared in `src/styles/fonts.css`), so a visit makes no third-party requests.
- **Palette:** A warm cream page (`#f7f7e2`) with a deeper cream yellow for highlights and the current page's link, the brand lavender (`#d1afe2`) for buttons and accents, a soft sage (`#8bad89`) as the second accent, and dark shades of both for text that has to meet contrast. Shadows carry a lavender tint, and the favicon's pink paw matches the girls' bows.
- **Scale:** Every size, from type to spacing to motion, is a step on one scale built from the plastic ratio (about 1.32) on an 11px base, and layout widths grow with the screen between fixed bounds.
- **Motion:** Each page fades up into place, the hero's blob morphs, its name badges float, and the bar's paw bounces. Links, buttons, and cards respond to hover, press, and keyboard focus with a color shift, a small lift or press-in, and a focus ring that eases in, and the phone menu fades in over a dimmed page with its rows arriving one after another. All of it turns off when a visitor's system asks for reduced motion, leaving only the instant color and position changes.

## Search and the main site

Only Home and Social Links are meant to appear in search; About and Contact overlap pages on the main site, so they and the 404 page carry `noindex`. The structured data names theberniebears.com as the brand's home. `index.html` carries the home page's title and description, since link checkers and many crawlers read it without running the site's script; the other pages set their own titles, and Social Links swaps in its own description while it's showing. Every page shares one social preview card, since link previews only ever read `index.html`.
