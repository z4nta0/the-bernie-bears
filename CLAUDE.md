# Project CLAUDE.md: the-bernie-bears

A website for The Bernie Bears, Lilah and Norah, two Bernese Mountain Dog
sisters with a following across social media (React, Vite, React Router,
deployed on Netlify at https://theberniebears.dog/). Every rule in the
user-level CLAUDE.md applies here; this file records only what's specific to
this project. ease-my-life, reese-roofing, seal-and-shield, and tonys-toppers
have already been converted to those rules and serve as worked examples, with
tonys-toppers the closest match.

## Kind of site
Decided 2026-10-11. A real brand, so the site is indexed where it should be,
never the demo treatment, and it gets normal SEO, not local SEO (no
storefront, hours, or service area).
- **It's tertiary to the brand's main site.** The Bernie Bears' main site is
  https://theberniebears.com/, a Shopify store that also carries "Meet the
  Bears" (`/pages/meet-the-bears`), "Our Story" (`/pages/about-us`), "Social
  Media" (`/pages/our-social-media`), and "Contact Us" (`/pages/contact`).
  This site only exists to promote the brand and the main site, and must
  never compete with or overwhelm the main site's SEO.
- **Indexed routes**: Home (`/`) and Social Links (`/links`) only, the part
  of the site the main one doesn't already cover. About and Contact carry
  `noindex` (they overlap the main site's own pages) and are left out of the
  sitemap, as is the 404 page.
- **One entity, and it lives on .com**: the structured data is a `WebSite`
  for this domain whose `publisher` is an `Organization` with its `url` set to
  `https://theberniebears.com/` and `sameAs` listing the six social profiles,
  so search engines treat the main site as the brand's home.
- **Search copy**: titles and descriptions lead with Lilah and Norah and
  following them on social media, never shop, merch, or store terms, and no
  copy is lifted from the main site.
- **Links to the main site**: an "Official Site" link in the footer, and a
  "Shop" card on the Social Links page pointing to
  `https://theberniebears.com/collections/all` (the main site's own "Our
  Shop" link). The store is mentioned elsewhere only where it reads
  naturally.
- **Author meta**: The Bernie Bears.
- **Off-site, for the user**: optionally link to this site from the main
  site's Social Media page.

## Content
Decided 2026-10-11.
- **Social profiles**, the same six everywhere (the Social Links page and
  the structured data's `sameAs`), each drawn as an SVG brand icon rather
  than an emoji:
  - Instagram: https://www.instagram.com/theberniebears
  - YouTube: https://www.youtube.com/@theberniebears
  - TikTok: https://www.tiktok.com/@theberniebears
  - X: https://x.com/theberniebears
  - Pinterest: https://www.pinterest.com/theberniebears/
  - Facebook: https://www.facebook.com/theberniebears
- **Contact**: the email is hello@theberniebears.com (confirmed by the user
  on the main site). The placeholder form, which never sent anything, is
  removed, and the Contact page sends visitors to the main site's Contact Us
  page, with the email as a `mailto:` link.

## Directory structure
Decided 2026-10-11, matching tonys-toppers' adaptation of the user-level
"### Directory structure" layout to a website with routes rather than a web
app with tabs.
```
src/
  main.tsx               entry point
  app.tsx                React Router setup, the bar, and the footer
  assets/                fonts/ (the self-hosted fonts)
  pages/
    home/                the home page and the hero portrait
    about/               the About page and its three photos
    links/               the Social Links page
    contact/             the Contact page
  ui/                    components every page uses (nav, footer)
  styles/                global CSS only (fonts.css, styles.css)
```
Outside `src/`: `public/` (the favicon and Netlify's `_redirects`) and
`tests/` (see "## Test suites").
- **`pages/` takes the place of `tabs/`.** Each route gets its own folder,
  and an image only that page shows lives beside it. The 404 page gets
  `pages/not-found/` in step 11.
- **A page's main file is named after its folder** (`pages/links/links.tsx`,
  not `social-links.tsx`), matching its route.
- **The bar and footer live in `ui/`** as `nav.tsx` and `footer.tsx`, since
  every page shows them.
- **`public/favicon.svg`** is the paw icon, served at a fixed address since
  browsers ask for it themselves; step 11 adds the raster icons beside it.

## Unused files
Decided 2026-10-11, the same as tonys-toppers. An unused image is listed for
the user to confirm before it's removed. Any other file that nothing
references is removed without asking, and Windows `:Zone.Identifier`
download markers are deleted whenever they turn up (and ignored by git).

## Cleanup plan
Decided 2026-10-11, following tonys-toppers' order. Steps 1 through 10 go on
the `cleanup-code` branch, step 11 on `site-features`, and the final rule
passes on `close-out`.
1. **Project setup**: this file, the unused files removed (the duplicate
   `src/pages/Navbar.tsx` and `Navbar.css`, and `src/declarations.d.ts`,
   which repeated the image module types `vite/client` already provides),
   and `.gitignore` brought in line with the siblings', ignoring
   `:Zone.Identifier` markers. Done 2026-10-11, with a byte-for-byte
   identical build.
2. **Dependency upgrades**, one major version at a time with a build check
   after each: Vite 8 with `@vitejs/plugin-react` 6, React 19, React Router 8
   (the single `react-router` package, replacing `react-router-dom`), then
   TypeScript 6.0. Each is checked against the previous build with
   screenshots, computed styles, and axe in all three engines.
   `@types/node` is installed too, since `tsconfig.node.json` asks for it and
   `tsc -b` fails without it. Done 2026-10-11, in four commits.
   - **How it was checked**: a scratchpad script (using tonys-toppers'
     Playwright, since this project's suites come in step 4) captured every
     route plus a missing path at 390px and 1,440px, and the open phone menu,
     with every looping animation frozen at its start: full-page screenshots,
     every element's computed style at rest, each link and button hovered,
     each Tab stop focused, and axe. A second script opened and used the
     menu, navigated, and sent and reset the contact form. Capturing one
     build twice showed what counts as noise: WebKit's link and footer
     widths jitter by under 0.1px at some widths, which moves a few thousand
     pixels, and Chromium redraws some text's antialiasing on About at 390px
     and a 9 by 3px spot on Contact at 1,440px.
   - **Vite 8**: done 2026-10-11, with `@vitejs/plugin-react` 6 and
     `@types/node`. Its CSS minifier reorders declarations, writes colors as
     lowercase or 8-digit hex (only custom properties' raw text shows it),
     and writes `background : none` and `transparent` as a `0 0` position,
     which draws nothing different. Everything else matched.
   - **React 19**: done 2026-10-11, with matching captures, behavior, and no
     console errors. The bundle grows from 58.7 to 81.5 KB gzipped, React
     19's own size.
   - **React Router 8**: done 2026-10-11, with every import moved to
     `react-router` and `npm audit` clear of the old router's three moderate
     advisories. It renders a navigation as a React transition, so a check
     that reads the new page has to wait for it rather than read it the
     moment the URL changes.
   - **TypeScript 6.0**: done 2026-10-11. It only type checks (Vite
     compiles), so a clean `tsc -b` and a byte-for-byte identical build stood
     in for the browser checks. The dev server runs and passes the behavior
     checks too.
   - **Not yet done**: the four files whose imports moved keep their old
     formatting until step 6.
3. **ESLint**, set up from the sibling projects' `eslint.config.ts`. Done
   2026-10-11 with tonys-toppers' copy unchanged and the sibling projects'
   versions; the source lints with no findings. `npm run build` now type
   checks first, as in the siblings, `tsconfig.node.json` type checks the
   config too, and `package.json` and `tsconfig.node.json` follow the JSON
   rule (the other tsconfig files wait for step 6).
4. **Playwright and axe** in all three engines, with baseline screenshots of
   every route at phone and desktop widths and the open phone menu, taken
   before anything moves. Its dev server runs on port 5193 (the siblings use
   5190 through 5192). Whatever the live site already fails is listed here
   for the step that fixes it. Done 2026-10-11 (see "## Test suites"). The
   keyboard walk passes everywhere; everything else below fails on the live
   site, in every engine unless noted:
   - **Contrast** (serious, every page): the logo text, lavender headings,
     dog badges, buttons, floating name badges, paw dividers, social card
     labels, and footer text all fall short on the cream background: step 9,
     whose color roles are where the contrast gets fixed, raised with the
     user first since the colors visibly change. axe also marks contrast as
     needing review by hand on every page, for text over the gradients and
     photos.
   - **Two unlabeled navigation landmarks**: the bar's and the footer's
     `<nav>` (desktop, where both show): step 6.
   - **Decorative glyphs read aloud** in the logo link ("🐾 The Bernie
     Bears"), "See All Social Links 🐾", every social card (its emoji and
     →), and "Send Message 🐾": step 6 (the form goes in step 7).
   - **No reduced motion**: `fadeInUp`, `pawBounce`, `badgeFloat`, and
     `blobMorph` all play: step 8. The responsive suite's "span.paw-icon
     spills its text" at every width is the same problem, since the
     bouncing paw's rotation tilts its box while the check measures it
     untilted; it clears once the paw stops under reduced motion.
   - **Sideways scrolling**: About at 320px (32px, the intro's columns run
     past the edge), Contact at 320px (about 4px), and Contact at 769px
     (155px, its two-column layout just above the 768px breakpoint pushes
     the form past the edge): step 10's layout work. `body { overflow-x :
     hidden }` hides these from the responsive suite's element check, so
     only its sideways-scroll line and the scripted reflow test report them.
   - **The 404 page has no `h1`**: step 11.
   - **Rendering flakes**: Firefox redraws the Nunito body text a little
     differently from run to run (every Nunito line, never the Dancing
     Script headings), likely from the fonts arriving from Google Fonts,
     and Chromium redraws the antialiasing of the Contact note's rounded
     corner (a 9 by 3px spot, 2 levels off). Both are rechecked once step 5
     self-hosts the fonts; until then, a failure there gets a rerun, not
     new baselines.
5. **Directory structure**, matching tonys-toppers: kebab-case files, a
   folder per route under `pages/`, the bar and footer in `ui/`, the fonts
   (Dancing Script and Nunito) self-hosted, and the Netlify fallback moved
   from `netlify.toml` to `public/_redirects`. Done 2026-10-11 in four
   commits: the fallback moved to `public/_redirects` (`netlify.toml` held
   nothing else); the source files moved with only their import paths
   changed and a byte-for-byte identical build; the photos moved beside their
   pages and the paw icon to `public/favicon.svg`; and the fonts self-hosted
   from the same latin files Google served, each a variable font declared
   across its full weight range. Self-hosting settled the Firefox flake from
   step 4: Firefox spaced the Nunito text a fraction of a pixel differently
   than it had from Google (enough to move the hero line's paw emoji about
   1px), so its two home baselines and Chromium's home phone baseline (58
   pixels in the "Norah" badge, 2 levels off) were refreshed once, and three
   reruns then matched in every engine. Chromium's Contact note corner still
   flakes now and then (a 9 by 3px spot on any of the box's corners, 2
   levels off); a failure there gets a rerun, not new baselines.
6. **Formatting, naming, and comment pass**, one file per commit, including
   `vite.config.ts` (adding the shipped-page minifier) and `index.html`, with
   the copy fixes (no em dashes) and every decorative emoji hidden from
   screen readers.
7. **Content fixes**: the six real social links with SVG icons and the
   Shop card, the "Official Site" footer link, and the Contact page rebuilt
   without the form (see "## Content").
8. **Hooks and CSS modules**: `aria-current` and `aria-expanded` in place of
   the active link's inline style and the menu's `open` class, the closed
   phone menu out of the Tab order, a `.module.css` per component, and every
   animation and transition given its reduced-motion variant.
9. **Design tokens**: the siblings' core design numbers (the plastic ratio,
   with 1rem as an 11px base), this site's colors mapped to roles, the type,
   spacing, duration, easing, shadow, and focus ring tokens, and three-segment
   class and keyframe names.
10. **Horizontal layout comparison**, decided with the user per "Width is
    decided per project", then a WAVE and manual accessibility review.
11. **New features**: the 404 page, security headers (`public/_headers`),
    image optimization (originals in `design/photos/`, WebP copies written by
    a script, an SVG favicon plus the raster favicon set), the SEO pass and
    social preview card per "## Kind of site", and interaction feedback.
12. **Close-out**: the README rewritten (it still describes the placeholder
    site), the full rule audit passes, and the version bump.

## Test suites
Added 2026-10-11, adapted from tonys-toppers'. Playwright suites live in
`tests/`, one project per suite and engine in `tests/playwright.config.ts`,
which starts its own dev server on port 5193 (never the usual 5173, nor the
sibling projects' 5190 through 5192) and stops it afterwards. Every suite
runs in Chromium, Firefox, and WebKit. Results, screenshots, and traces go to
`tests/output/` (git-ignored); `npx playwright show-report
tests/output/report` opens the HTML report. The states the suites visit
(every route and the 404 page at 390px and 1,440px, plus the phone menu open
at 390px) are listed in `tests/support/states.ts`, whose `opeStaFun` skips
animations that repeat forever (the hero's blob, the name badges, and the
bar's paw) when waiting for the page to settle.
- `npm run test:accessibility`: the pre-commit accessibility scan. axe-core
  checks each state against WCAG 2.2 A and AA plus best practices
  (`axe.spec.ts`), and scripted checks (`scripted.spec.ts`) cover link and
  button names (a decorative arrow or emoji in a name fails), a Tab walk
  (order, traps, focus on screen, uncovered, and visible), reflow at 320px,
  and motion under reduced motion. axe's "needs review" results are printed
  and attached to the report rather than failing the run.
- `npm run test:rendering`: compares a full-page screenshot of every state
  with its baseline in `tests/rendering/baselines/`, with zero tolerance and
  a per-pixel color threshold of 0, under reduced motion and with the page's
  clock fixed to one date, since the footer's year comes from it. Baselines
  are captured on Linux. After an intended visual change, refresh with `npm
  run test:rendering -- --update-snapshots` and commit the baselines with it.
- `npm run test:responsive`: measures every route, the 404 page, and the
  open menu at 13 widths from 320 to 1,920px (the 640px and 768px
  breakpoints and the pixel past each included), failing on sideways
  scrolling, an unclipped element past either edge, text spilling its box,
  or two reachable controls overlapping.
- `npm test` runs every suite. The interaction and SEO suites join in step
  11, as in tonys-toppers.
