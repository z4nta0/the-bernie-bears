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
   `tsc -b` fails without it.
3. **ESLint**, set up from the sibling projects' `eslint.config.ts`.
4. **Playwright and axe** in all three engines, with baseline screenshots of
   every route at phone and desktop widths and the open phone menu, taken
   before anything moves. Its dev server runs on port 5193 (the siblings use
   5190 through 5192). Whatever the live site already fails is listed here
   for the step that fixes it.
5. **Directory structure**, matching tonys-toppers: kebab-case files, a
   folder per route under `pages/`, the bar and footer in `ui/`, the fonts
   (Dancing Script and Nunito) self-hosted, and the Netlify fallback moved
   from `netlify.toml` to `public/_redirects`.
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
