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
    home/                the home page, its portrait, its photo sizes
    about/               the About page, its three photos, their sizes
    links/               the Social Links page
    contact/             the Contact page
  ui/                    what every page uses (nav, footer, scroll-top)
  styles/                global CSS only (fonts.css, styles.css)
```
Outside `src/`: `public/` (the favicon set, the social preview card,
`robots.txt`, the sitemap, and Netlify's `_redirects` and `_headers`),
`design/` (the original photos, the preview card's source, and the scripts
that render the photos, the card, and the icons), and `tests/` (see "## Test
suites").
- **`pages/` takes the place of `tabs/`.** Each route gets its own folder,
  and an image only that page shows lives beside it. The 404 page gets
  `pages/not-found/` in step 11.
- **A page's main file is named after its folder** (`pages/links/links.tsx`,
  not `social-links.tsx`), matching its route.
- **The bar and footer live in `ui/`** as `nav.tsx` and `footer.tsx`, since
  every page shows them.
- **`public/favicon.svg`** is the paw icon, served at a fixed address since
  browsers ask for it themselves; step 11 adds the raster icons beside it.

## Page navigation
Decided 2026-10-11, per "## Multi-Page React Sites: Scroll Position" in the
user-level rules. `ui/scroll-top.ts`'s `useScrTopFun`, called once in
`AppRooCom`, opens every link-driven page change at the top (instantly,
despite the global smooth scroll), scrolls a link's `#hash` target into view
instead when it has one, and leaves back and forward to the browser, which
returns the visitor to where they were.

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
   screen readers. Done 2026-10-11: `vite.config.ts`, `index.html` (its mount
   element renamed `appMouDiv`), `tsconfig.app.json`, and every TypeScript
   file under `src/`, each checked by every suite, with baselines refreshed
   only for reworded copy. The components are now `AppRooCom`, `NavBarCom`,
   `SitFooCom`, `HomPagCom`, `AboPagCom`, `LinPagCom`, and `ConPagCom`, and
   `BrowserRouter` moved up into `main.tsx`.
   - **Accessibility fixes along the way**: both navigation landmarks are
     labelled (Main and Footer), and every decorative emoji, arrow, and icon
     is hidden from screen readers, through a hidden span where the text
     isn't a flex container and through an `aria-label` where it is (the
     home banner button), while the footer's heart is announced as love.
     That cleared every glyph and landmark failure. The trait chips'
     selector became `.dog-traits > span`, so a hidden span inside a chip
     doesn't get a chip's styling.
   - **The active bar link's inline style went**: the stylesheet's
     `.nav-link.active` rule already set the same four values and wins on
     hover, which the capture harness confirmed (no difference at rest,
     hovered, or focused, in any engine).
   - **`app.tsx` kept its imports in their original order** until step 8:
     each page's file loaded a global stylesheet, and `home.css` and
     `about.css` both defined `.section-title`, whose About margin always won
     on both pages. Alphabetizing them shrank both pages, so each import said
     why it stayed put until the modules ended the collision.
   - **Sequencing**: the Social Links and Contact pages got their step 7
     rebuild and their formatting in one commit each, rather than formatting
     markup the next step replaced.
7. **Content fixes**: the six real social links with SVG icons and the
   Shop card, the "Official Site" footer link, and the Contact page rebuilt
   without the form (see "## Content"). Done 2026-10-11.
   - **Social Links**: the six profiles and a Shop card for
     `https://theberniebears.com/collections/all`, in `SOC_LIN_ARR`. The
     platform icons are Simple Icons 16.35.0 paths (CC0), inlined and drawn
     at `1em` in their tile, and the shop's is a plain bag drawn for the page.
     The four existing cards keep their colors and copy; X (black) and
     Pinterest (#BD081C) use their brand colors, and the Shop card the site's
     sage accent. The X, Pinterest, and Shop descriptions are new copy for
     the user to review.
   - **Contact**: the form, which never sent anything, is gone, along with
     its styles. A panel offers "Open Contact Form" (the main site's
     Contact Us page, in a new tab) and "Email Us", and the email card's
     address is an underlined link in the dark text color, so it adds no
     contrast failure. Removing the form also fixed the page's sideways
     scrolling at 320px and 769px.
   - **Footer**: an Official Site link to `https://theberniebears.com/`
     joins the page links, wrapping to its own centered line on phones.
   - **Footer colors fixed**: the footer read three `--pink-*` tokens from an
     older palette that no longer exist, so its brand name and page links
     were invisible on the live site. They now read `--main-pale` (text and
     links), `--secondary` (the name), and `--main` (link hover).
   - **External links use `rel='noopener'` alone** (decided 2026-10-11 by
     the user): dropping `noreferrer` lets the main site's analytics, and the
     platforms', see the visits this site sends, while `noopener` still keeps
     the opened page from reaching this one.
   - **Found for later**: `links.css` still reads `--pink-pale` and
     `--pink-soft` for the social cards' border and hover border, which
     therefore draw no border at all (step 9). `about.css` holds the
     `.page-header` rules the Links and Contact pages also use, and the
     unused rules for the photo placeholders' old text (step 8).
8. **Hooks and CSS modules**: `aria-current` and `aria-expanded` in place of
   the active link's inline style and the menu's `open` class, the closed
   phone menu out of the Tab order, a `.module.css` per component, and every
   animation and transition given its reduced-motion variant. Done
   2026-10-11.
   - **State and hooks**: the toggle reports the menu through
     `aria-expanded`, the menu carries `data-mobile-menu-open`, and the
     current link is styled through the `aria-current` NavLink sets. No
     JavaScript finds elements by class, so no hook attributes were needed.
     The closed menu was already `display: none`, out of the Tab order.
   - **Modules**: `ui/nav`, `ui/footer`, and the home, about, links, and
     contact pages each have their own `.module.css`, classes kept verbatim
     and read through `cssModObj`, in markup order with regions, with Vite
     reading module classes as camelCase keys. `pawBounce`, `blobMorph`, and
     `badgeFloat` moved into their modules; `fadeInUp` stays global behind
     `global()`. The shared classes (`container`, `page-header`, `btn`,
     `paw-divider`, `page-enter`) were copied into each module that uses
     them, and every element reached through a descendant tag selector got a
     class of its own (named in the old hyphen style until step 9). Where an
     element carried `container` beside its own class, the two merged into
     one rule with the values that actually applied: the home features
     section's own padding never did, since the global `.container` loaded
     after it. The home section title takes the About margin that always won.
     Rule-less classes and the unused global utilities, the floating paw
     pattern, and `floatPaw` are gone, and `styles.css` holds only the
     tokens, base element styles, and `fadeInUp`.
   - **Reduced motion**: every animation and transition has a variant, and
     smooth scrolling turns off. Every page now passes the reduced-motion
     check, and the paw's spill failure cleared at every width, since it came
     from the paw's tilt.
   - **Verified** by comparing every element's computed style against the
     step's starting build at rest, hovered, and focused on every route at
     both widths and with the menu open, in all three engines, ignoring only
     the scoped keyframe names, plus the behavior checks. Chromium's
     baselines were refreshed page by page: once an entrance or loop stops
     animating under reduced motion, Chromium rasterizes that content off
     its animated layer, drawing text with subpixel rather than grayscale
     antialiasing and gradients and soft edges a level or two differently.
     Firefox and WebKit needed no refresh beyond 1 or 2 pixels on About.
     The Contact note's corner flake hasn't returned since, so it came from
     the same layer.
   - **`app.tsx`'s imports are alphabetical** again, since the modules ended
     the `.section-title` collision.
9. **Design tokens**: the siblings' core design numbers (the plastic ratio,
   with 1rem as an 11px base), this site's colors mapped to roles, the type,
   spacing, duration, easing, shadow, and focus ring tokens, and three-segment
   class and keyframe names. Done 2026-10-11 in five commits, the contrast
   approach agreed with the user first.
   - **Colors and fonts**: the page cream is `--bac-pag-col`, white
     `--bac-sur-col`, the cream yellow `--bor-mai-col` with a deeper
     `--bor-str-col`, the lavender `--acc-mai-col` (hover `--acc-hov-col`,
     tint `--acc-tin-col`, light `--acc-lig-col`), the sage `--acc-sec-col`
     (tint `--acs-tin-col`), and the greys `--tex-mai-col`, `--tex-sec-col`,
     and `--tex-mut-col`. **Project-specific roles**: `--bac-hig-col`
     (Background Highlight, the cream yellow as a fill: the current bar link
     and the gradients), `--acc-dar-col` and `--acs-dar-col` (lavender and
     sage text shades, the brand colors darkened by 0.175 and 0.205 OKLCH
     lightness to about #7e5b93 and #4f6f4e, the least that passes 4.5:1 on
     every background they sit on), and `--tex-inm-col` (#9a9a9a, quiet text
     on the dark footer). Dancing Script is `--fon-fam-bra` and Nunito
     `--fon-fam-mai`.
   - **Contrast**: every violation is gone in all three engines. Lavender and
     sage text read the dark shades, the muted grey darkened to #717171, and,
     departing from the plan's "darken the pill a touch", the lavender buttons
     and the two gradient bands keep their fills and set dark text (7.3:1),
     since white only passes on a deep purple. The paw rows' text color is the
     main text color: emoji ignore it, but axe checks it.
   - **Type and spacing**: the root is 68.75%, body text Base Plus 1, and
     every length sits on its step, measured from the old 16px rem, so most
     text is a little smaller. Gaps follow the direction they run, line
     heights sit on the rhythm, fixed boxes are squares on one rhythm step,
     and the photos are sized from their frames. The toggle's bars use `m05`
     with an `m04` gap and an `m02` shift, which still meet in an exact cross
     (ρ⁻⁴ + ρ⁻³ = ρ⁻¹). Nunito averages 2.27 characters per em, so paragraphs
     cap at `pow-012` (about 66) and the section subtitle at `pow-011` (about
     50). The old 24px and 40px radii fold into `--rad-bor-xla`, and the 4px
     and 5px borders into `--bor-wid-xla` (3px). Layout widths (the 1,100px
     columns, the grid minimums) wait for step 10.
   - **Durations and easing**: interface motion takes its nearest step (or
     the next one up where the nearest is over 10% shorter); the looping paw,
     blob, and badges round up as expressive motion; the second badge's delay
     reads half its own duration; every curve folds into the standard ease.
   - **Shadows**: `--sha-mai-col` is the lavender, so the elevation scale
     keeps the site's soft tinted shadows: small for the badges, contact cards,
     and current link, medium for resting cards, panels, frames, the bar, and
     the buttons, large for hovered cards and buttons and the open menu.
   - **Names**: every class has its three-segment name (matching the siblings
     for shared pieces), the keyframes are `pawIcoSpaLoopBounce`,
     `herBloDivLoopMorph`, `floBadDivLoopFloat`, and the shared
     `pageEnterFadeIn`, the card color property is `--soc-car-col`, and every
     rule and element comment labels it by its class's expansion.
   - **Open for step 10**: About's narrow overflow is now 35px at 320px and
     also reaches 360px in WebKit, from the fixed 321px cartoon frame (fixed
     in step 10).
10. **Horizontal layout** (done): option 2, the fluid horizontal rhythm
    tonys-toppers uses, chosen on 2026-10-11 over the vertical rhythm and
    kept by the user after comparing the dev site with the live one.
   - **Tokens**: `--hor-rhy-min` to `--hor-rhy-max` (100vw over a power of
     the core design number), `--gut-sid-pad` (horizontal step 016 held
     between `p01` and `p04`, about 19.3px to 44.9px, the siblings' gutter),
     and `--con-max-wid`, a 1,920px viewport over the second power (about
     1,094px), one step narrower than the siblings' cap to stay near the
     site's own 1,100px column. The social list caps at a vertical rhythm
     step, `p14` (about 747px, from 720px), added with `p13`.
   - **Pictures**: the hero box is a square as wide as its column, and the
     blob and portrait frame grow from their rhythm sizes with a horizontal
     step but never past their column. About's group frame stays at `p11`
     (about 321px, as on the live site, since growing it looked out of scale
     beside the intro) and shrinks only where its column is narrower, which
     ends About's overflow at 320px and 360px.
   - **Layout**: every section, the bar, and the footer pad their sides with
     the gutter, and the larger cards' side padding and the hero, intro,
     contact, and sisters gaps are horizontal steps clamped between spacing
     steps.
   - **Hero** (after the user's comparison): its height follows its content
     instead of holding 88% of the viewport, which left empty space on tall
     windows, and it stacks at 880px instead of 768px (the user asked for
     about 850px, and no breakpoint sat near it; 880px is reese-roofing's).
     The other pages keep 640px and 768px. The stacked hero's picture box is
     a centered square at `p11` (never wider than the column) rather than the
     column's full width, so the blob fills it and shows around the portrait
     one step smaller, and the badges sit just off the portrait's corners,
     the two-column proportions. On the live site the badges sat at the
     column's edges and the blob hid behind a portrait of its own size.
   - **Grids** (after the user's comparison): never a short last row. The
     features show four, two, or one columns and the facts six, three, two,
     or one, each grid's column minimum stepping between whole shares of the
     row once the cards fit at their minimum width (`--fea-car-wid`, `p09`,
     and `--fac-car-wid`, `p08`, each rising with a horizontal step). Their
     column gap stays at `--spa-hor-p02` so the math can read it.
   - **Accessibility review**: axe reports no violations apart from the 404
     page's missing `h1` (step 11). Its undecided results are all contrast
     over gradients and the translucent bar; measured against every gradient
     stop, everything passes except Contact's closing line, which takes a
     slightly darker lavender (4.85:1). The user checked the bar's text by
     eye and with WAVE while photos scroll under it, and it holds up.
   - **WAVE** (run by the user 2026-10-11): no errors, and Social Links
     clean. Contact's emoji row was a paragraph hidden from screen readers,
     so it became a `div` like the paw dividers, clearing its "possible
     heading" alert. Kept as they are: About's tagline (a subtitle under the
     `h1`, not a heading of its own), and Home's redundant link alerts (the
     logo beside the bar's Home link, and the bar's Social Links beside the
     closing banner's link to the same page), which are expected pairs.
11. **New features** (done 2026-10-11): the 404 page, security headers
    (`public/_headers`), image optimization (originals in `design/photos/`,
    WebP copies written by a script, an SVG favicon plus the raster favicon
    set), the SEO pass and social preview card per "## Kind of site", and
    interaction feedback.
    - **404 page**: done 2026-10-11 in `pages/not-found/`, reached by the
      router's catch-all route. It reuses the other pages' gradient header
      (an `h1`, a line in the girls' voice, and the Contact page's two pill
      buttons, Back Home and Follow Along to Social Links), with its own
      title and `noindex`. That cleared the last accessibility failure. At
      the user's request its band then stretched from the bar to the footer
      (the app's main element became a flex column so a page can fill it),
      with its content centered both ways and its bottom rule dropped.
    - **Security headers**: done 2026-10-11, the siblings' `_headers` with
      `form-action 'none'` (the site has no forms) and Referrer-Policy
      `strict-origin-when-cross-origin` instead of `same-origin`, so the
      main site and the platforms still see the visits this site sends (the
      user's choice in step 7), and Vite emitting every asset as a file
      (`assetsInlineLimit: 0`). Checked by serving the build with the
      headers: no violations on any page or the phone menu in all three
      engines, with both fonts and every photo loading.
    - **Images**: done 2026-10-11. The four originals live in
      `design/photos/`, and `npm run photos` writes WebP copies beside their
      pages at twice their largest shown size, at 0.85 quality (the lowest
      with no difference at 3x zoom on the portrait's fur and the cartoon's
      outlines), plus a `photo-sizes.ts` per page that the img elements read
      for their width and height. The portrait and the sisters' photos are
      cut to the centered square their frames already showed. 1,321 KB came
      down to 219 KB. Lilah's and Norah's photos load lazily, and the
      cartoon's CSS height is `auto`, since its new height attribute
      otherwise overrode its square aspect ratio. Every changed pixel in the
      refreshed baselines sits inside a photo.
    - **SEO**: done 2026-10-11. Each page renders its own head tags, which
      React 19 moves into the head and removes when the page changes: Home
      a canonical address, Social Links ("Follow Lilah & Norah | The Bernie
      Bears") a title and a canonical address, and About, Contact, and the
      404 page a title and `noindex`. `index.html` carries the home page's
      title ("Lilah & Norah, the Bernie Bears | Bernese Mountain Dogs") and
      its description, the site's one description tag, plus the author and
      the JSON-LD graph (this domain's `WebSite`, published by The Bernie
      Bears, an `Organization` whose `url` is theberniebears.com, with the
      Contact page's email and the six profiles in `sameAs`). React adds a
      page's own description beside one in `index.html` rather than
      replacing it, so Social Links swaps the one tag's text for its own
      through `ui/page-description.ts`'s `usePagDesFun` while it shows. The
      build compacts the JSON-LD and fails on invalid JSON. `public/` gains
      `robots.txt` (every crawler allowed) and a sitemap of Home and Social
      Links. The user submitted the sitemap to Google Search Console and
      Bing, and confirmed the security headers, after the deploy.
      - **Raw head fix** (2026-10-11, after the deploy): opengraph.xyz, which
        reads the raw HTML without running the script, found only the
        fallback title "The Bernie Bears" (16 characters) and no
        description, since both came from React. So `index.html` now carries
        the home page's title and description, and the SEO suite checks the
        raw page the same way.
    - **Social previews and favicon set**: done 2026-10-11. `npm run
      og-image` captures `design/og-image/card.html` (the cartoon logo, the
      main site's own icon, in About's dashed white card over the page
      headers' gradient, above "Follow Lilah & Norah" in Dancing Script) as
      `public/og-image.jpg`, a JPEG at quality 90 (about 45 KB), since as a
      PNG it came to 337 KB and 85 left ringing around the script at 3x
      zoom. `npm run icons` renders the ICO, the 16 to 512px PNGs, and an
      inset apple touch icon on white from `public/favicon.svg`, the pink
      paw, kept pink by the user's choice to match the girls' bows and the
      main site's cover. The head gains `theme-color` (the brand lavender),
      the full Open Graph and Twitter tags matching Home's title and
      description with `twitter:site` set to `@theberniebears`, and the
      structured data's logo and image. Off-site, for the user after deploy:
      check the card with a preview checker such as opengraph.xyz.
    - **Interaction feedback**: done 2026-10-11. Every link and button
      grows the siblings' focus ring in from a zero-width outline (the global
      rule in `styles.css`), with the footer handing its links the light
      lavender (`--foc-rin-col`) so the ring shows on the dark band, and
      every control with its own transition lists the two outline
      properties. Buttons, the toggle, and the social cards press in to
      0.97; text and pill links dim. New hovers: the brand name darkens, the
      toggle's bars darken (now the dark lavender at rest, since the light
      lavender failed 3:1 against the white bar), the current bar link
      deepens, and Contact's email turns lavender. The pill buttons and the
      feature and sister cards fade between two shadow layers instead of
      easing `box-shadow`; the social cards keep the eased shadow, since they
      clip their corners for the stripe. The cards lift 2px, within the
      rule's range, instead of 4px to 6px. The phone menu fades and settles in
      as it opens and back out as it closes, leaving the tab order only once
      it's gone. `tests/interaction/feedback.spec.ts`, from tonys-toppers,
      checks every control's hover, press, and focus on every state in all
      three engines, and that reduced motion stops them moving.
    - **Phone menu extras and scrim** (asked for by the user 2026-10-11,
      after the siblings' menus): under the links the menu adds "Follow
      Lilah & Norah" over a row of the six profile icons (the user's pick
      over an Official Site button), a "Visit the Official Site" link, and
      the footer's tagline, centered like the links, with every row fading
      in after the last. The six profiles moved to `ui/social-profiles.ts`,
      which the Social Links page and the menu both read. A scrim in the
      scrim role (the main text color at about 43%) dims the page while the
      menu is open; the bar sits at `z-index` 4 and the scrim at 3, above
      the hero's badges at 2, instead of the bar's old 100. As in
      tonys-toppers and reese-roofing, the open menu makes the page inert,
      tapping the scrim or pressing Escape closes it (Escape returning
      focus to the toggle), and widening the screen past 640px closes it.
      The icons on both pages pass the pointer through to their links, since
      WebKit didn't show a link pressed when the press landed on an SVG
      shape, which the feedback suite caught on the X icon.
      `tests/interaction/menu.spec.ts` checks the open menu and each way out.
12. **Close-out**: the README rewritten (it still describes the placeholder
    site), the full rule audit passes, and the version bump to 1.0.0 (asked
    for by the user 2026-10-11: remind them when close-out finishes).

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
  open menu at 15 widths from 320 to 1,920px (the 640px, 768px, and 880px
  breakpoints and the pixel past each included), failing on sideways
  scrolling, an unclipped element past either edge, text spilling its box,
  or two reachable controls overlapping.
- `npm run test:interaction`: checks how the site behaves when used.
  `navigation.spec.ts` (added 2026-10-11) follows each page's footer link from
  the bottom of the page, the current page's own bar link, and a phone menu
  link, expecting each new page to open at its top, and checks that back
  returns to the earlier position. `menu.spec.ts` checks the phone menu's
  scrim, the inert page behind it, and each way out. `feedback.spec.ts`
  hovers, presses, and focuses every reachable control on every state, failing
  on any that doesn't respond or whose focus ring doesn't ease in, and checks
  that reduced motion stops them moving.
- `npm run test:seo` (added 2026-10-11): each page's head loaded directly
  and while moving between pages (the one title, the one description and
  canonical on Home and Social Links, `noindex` and neither on the others),
  the structured data against the profile links and email the pages show,
  and the crawler files.
- `npm test` runs every suite.
