# AI Context for Shaurya Das Portfolio Website

This file is written for AI coding agents. Read it before making changes.

## 1. Project Identity

- **Project name:** Shaurya Das Portfolio Website
- **One-sentence description:** Static React/Vite portfolio site for presenting Shaurya Das's software engineering products, resumes, and contact links without exposing private source code.
- **Main purpose:** Help recruiters and technical reviewers understand Shaurya's product-building work through public-safe summaries and case studies.
- **Target users:** Recruiters, interviewers, technical reviewers, collaborators, Shaurya, future maintainers, and AI coding agents.
- **Current status:** Private static portfolio repo suitable for local development and static deployment, with an original prehistoric React/SVG/CSS artwork system. No backend, database, authentication, or analytics are present in the repo.

## 2. What This Project Does

The app renders a single-page portfolio with:

- Sticky navigation.
- Hero section and primary CTAs.
- About section.
- "What I build" cards.
- Featured product cards.
- Product case studies.
- Resume download cards.
- GitHub/private-repo explanation.
- Contact cards.
- Footer.

Core workflows:

1. Visitor lands on the hero section.
2. Visitor scans product-builder positioning.
3. Visitor opens Featured Products.
4. Visitor reads product cards and jumps to case studies.
5. Visitor downloads a resume PDF.
6. Visitor contacts Shaurya or opens GitHub/LinkedIn.

Success looks like:

- The site is polished, responsive, and recruiter-friendly.
- Product work is clear without exposing private repositories.
- Resume downloads work.
- Project artwork maps to the correct stable product ID and remains decorative.
- Noindex/search-indexing controls remain intact unless explicitly changed.

Do not misunderstand this repo as:

- A backend application.
- A database-backed app.
- An authenticated portal.
- The source repository for the products described in the case studies.
- A public source-code showcase for private products.

## 3. Architecture Summary

Main components:

- `index.html`: HTML shell, title, description, noindex tags, Vite script entry.
- `src/main.jsx`: React root mount and CSS import.
- `src/App.jsx`: Page composition and section order.
- `src/data/portfolioData.js`: Source of truth for most display data.
- `src/data/projectArtwork.js`: Stable project-ID-to-decorative-scene mapping; never a source for project claims.
- `src/components/*.jsx`: Presentational components.
- `src/components/pixel/*.jsx`: Original reusable dinosaurs, hero/About landscapes, meteor, and project treasure scenes.
- `src/styles.css`: Global styling and responsive layout.
- `src/pixel-art.css`: Prehistoric art tokens, geometry, animation, art breakpoints, and reduced-motion behavior.
- `tests/portfolio-integrity.test.mjs`: Ten Node integrity tests for content, artwork, accessibility-source, privacy/noindex, and runtime-data-collection contracts.
- `public/`: Static assets and Cloudflare/noindex deployment files.

Entry points:

- Browser loads `index.html`.
- Vite loads `src/main.jsx`.
- React renders `App`.

Data flow:

```text
src/data/portfolioData.js -> src/App.jsx -> components -> rendered static UI
```

State flow:

- `Navbar.jsx` uses local React state only for the responsive menu and viewport-mode synchronization.
- Escape and menu-link selection close the mobile menu; no page or product state is stored.
- No global state manager exists.
- No runtime data fetching exists.

Storage/persistence:

- No runtime storage.
- Public static files live in `public/` and are copied into `dist/`.

Background processes:

- None in this website.

Platform-specific systems:

- None in this repo. Platform-specific systems are described only as product case-study content.

External integrations:

- GitHub profile links.
- LinkedIn profile links.
- Email `mailto:` link.
- Outbound public product links, including Whoopberry and Chrome Web Store listings; the portfolio does not fetch data from them.
- Cloudflare Pages `_headers` file for noindex headers.

Permission-sensitive areas:

- The portfolio site requests no browser permissions.
- Product descriptions mention permission-sensitive technologies, but their source is not in this repo.

Security-sensitive areas:

- `public/` because anything there can be deployed.
- `src/data/portfolioData.js` because it contains public product claims and source-code boundary language.
- `index.html`, `public/robots.txt`, and `public/_headers` because they control noindex behavior.
- `public/resume/` because PDFs are publicly downloadable.

Privacy-sensitive areas:

- Product case-study copy.
- Resume PDFs.
- Contact information.
- Any future screenshots.

## 4. Codebase Map for AI Agents

Important folders:

- `src/components/`: reusable React components.
- `src/components/pixel/`: portfolio-authored decorative scene and sprite components.
- `src/data/`: centralized portfolio data.
- `public/product-logos/`: public logo assets.
- `public/resume/`: public resume PDFs.
- `public/screenshots/`: future public screenshot assets.
- `docs/`: documentation.
- `tests/`: lightweight repository integrity tests.
- `dist/`: generated build output; do not edit directly.
- `node_modules/`: generated dependencies; do not edit.

Important files:

- `src/data/portfolioData.js`: edit this for product copy, resume metadata, GitHub cards, contacts, and nav items.
- `src/App.jsx`: edit this for section composition or hard-coded About/GitHub wrapper copy.
- `src/components/ProductCard.jsx`: edit this for product card rendering and scene integration.
- `src/components/ProductDetail.jsx`: edit this for case-study rendering.
- `src/components/ResumeCard.jsx`: edit this for resume download behavior.
- `src/styles.css`: edit this for visual design and responsive behavior.
- `src/pixel-art.css`: edit this for sprite geometry, environmental motion, treasure states, and art-specific responsive/reduced-motion rules.
- `src/components/pixel/PixelSpriteLibrary.jsx`: reusable original dinosaur, chest, reward, and environmental primitives.
- `src/components/pixel/PrehistoricLandscape.jsx`: hero landscape with the meteor, developer T-Rex, chest, ferns, and flowers.
- `src/components/pixel/AboutPrehistoricScene.jsx`: calm decorative Brachiosaurus landscape beside the About copy.
- `src/components/pixel/ProjectTreasureScene.jsx`: decorative project-card artwork selected by stable project ID.
- `src/data/projectArtwork.js`: project-to-dinosaur/environment/chest/reward mapping.
- `index.html`: edit this for document metadata and noindex meta tags.
- `public/_headers`: edit this for Cloudflare Pages static headers.
- `public/robots.txt`: edit this for crawler policy.

Where to make common changes:

- Product wording: `src/data/portfolioData.js`.
- Product logo path: `src/data/portfolioData.js` plus `public/product-logos/`.
- Resume file link: `src/data/portfolioData.js` plus `public/resume/`.
- Resume download behavior: `src/components/ResumeCard.jsx`.
- Contact link: `src/data/portfolioData.js`.
- Visual spacing or layout: `src/styles.css`.
- Section order: `src/App.jsx`.
- Noindex behavior: `index.html`, `public/robots.txt`, `public/_headers`.
- Documentation: `README.md`, `AI_CONTEXT.md`, `docs/*.md`.

Where not to make changes casually:

- Do not edit `dist/`.
- Do not edit `node_modules/`.
- Do not change `package-lock.json` unless dependency installation intentionally changed it.
- Do not change `package.json` scripts/dependencies unless explicitly requested.
- Do not remove noindex controls unless explicitly requested.
- Do not add sensitive files to `public/`.

## 5. Critical Behavior Rules

Preserve these rules unless the user explicitly requests otherwise:

1. **Private product safety:** Do not expose private product source code, prompts, database details, secrets, implementation files, logs, private file paths, or private repositories.
2. **No public source claims:** Do not add "View Source" buttons or claim private product repositories are public.
3. **Noindex posture:** Keep `index.html`, `public/robots.txt`, and `public/_headers` aligned so the site remains link-accessible but not intentionally search-indexed.
4. **No authentication assumption:** The site is not password-protected. Do not describe noindex as security or authentication.
5. **Resume downloads:** Preserve normal anchor download behavior for resume PDFs unless asked to change it.
6. **Public assets:** Treat everything under `public/` as public.
7. **Artwork accessibility:** Project scenes are decorative and must be hidden from assistive technology without hiding product text or links.
8. **Stable artwork mapping:** Product scenes are selected by exact product ID through `projectArtwork.js`, never by array position or a product-name guess.
9. **Honest boundaries:** Case studies should not overstate security, privacy, anti-bypass, AI, or product guarantees.
10. **No tracking:** Do not add analytics or tracking without explicit approval.
11. **Original artwork boundary:** Read `docs/PREHISTORIC_PIXEL_ART_BIBLE.md` before changing artwork. Do not copy Petalwind assets, CSS, coordinates, timings, palette, scenes, characters, branding, or layouts. Do not add an external sprite without documented provenance and public-use permission.
12. **Accessible motion:** Decorative motion cannot carry content, intercept project links, create tab stops, or remain animated under reduced motion. Hover chest states require keyboard and touch-safe equivalents.

Special caution:

The portfolio describes security, blocking, self-control, privacy, admin-protected, native helper, browser-extension, and AI products. Those systems are mostly not implemented in this repo, but their public descriptions must remain honest and careful. Do not weaken stated boundaries or imply guarantees that are not present in the repository.

## 6. AI Coding Instructions

Future AI agents should:

- Read `AI_CONTEXT.md` first.
- Read `README.md` and `docs/ARCHITECTURE.md` before major changes.
- Inspect relevant files before editing.
- Do not invent architecture.
- Do not invent features, commands, test coverage, environment variables, deployment settings, license terms, or security guarantees.
- Do not remove safety or privacy language without explicit approval.
- Do not weaken noindex or private-repo boundaries without explicit approval.
- Do not change storage formats, public file paths, or resume names casually.
- Preserve existing behavior unless asked.
- Prefer small, focused patches.
- Update docs when behavior changes.
- Run or recommend `npm test` and `npm run build` after changes.
- Explain assumptions clearly.
- Identify unknowns instead of guessing.

## 7. Common Modification Guide

### To Add or Edit a Product

Inspect:

- `src/data/portfolioData.js`
- `src/components/ProductCard.jsx`
- `src/components/ProductDetail.jsx`
- `src/styles.css`

Keep product object fields consistent with existing entries.

### To Change UI Layout

Inspect:

- `src/App.jsx`
- `src/components/*.jsx`
- `src/styles.css`

Check both desktop and mobile media queries.

### To Change Prehistoric Artwork or Motion

Read:

- `docs/PREHISTORIC_PIXEL_ART_BIBLE.md`
- `src/pixel-art.css`
- `src/components/pixel/PixelSpriteLibrary.jsx`
- `src/components/pixel/PrehistoricLandscape.jsx`
- `src/components/pixel/AboutPrehistoricScene.jsx`
- `src/components/pixel/ProjectTreasureScene.jsx`
- `src/data/projectArtwork.js`

Keep authoritative product facts in `src/data/portfolioData.js`. Map scenes by stable project ID, preserve the exact palette roles and original-art boundary, provide hover/focus/touch/reduced-motion states together, and recompose rather than uniformly shrinking the desktop scene.

### To Change Product Logos

Inspect:

- `public/product-logos/`
- `src/data/portfolioData.js`

The current product cards use original SVG treasure scenes rather than logo images. Existing public logo files and data fields remain available but are not card artwork. Reintroducing a meaningful logo requires an explicit layout decision, root-relative paths such as `/product-logos/name.png`, accurate alt text, and a safe failure state.

### To Change Resume Files

Inspect:

- `public/resume/`
- `src/data/portfolioData.js`
- `src/components/ResumeCard.jsx`

Preserve matching `href` and `downloadName` values.

### To Change Search Indexing

Inspect:

- `index.html`
- `public/robots.txt`
- `public/_headers`
- `docs/SETUP.md`
- `README.md`

Only change this with explicit user approval.

### To Change Browser Extension, Native, Backend, AI, or Auth Behavior

Those implementations are not in this repo. Only public portfolio descriptions exist here. If asked to modify actual extension/native/backend/AI behavior, ask for the relevant project repository or files.

### To Change Tests

Inspect:

- `tests/portfolio-integrity.test.mjs`
- the `test` script in `package.json`

Keep the suite dependency-free unless a broader test strategy is explicitly approved. These tests verify static repository contracts, including required hero/About art and navigation/touch/contrast/motion accessibility hooks; they do not render the site or replace visual-regression, axe, screen-reader, or device-emulation checks.

### To Change Release or Package Behavior

Inspect:

- `package.json`
- `package-lock.json`
- `vite.config.js`
- `public/_headers`
- `public/robots.txt`

Do not modify package/build settings unless explicitly requested.

## 8. Testing and Validation

Existing commands:

```bash
npm install
npm run dev
npm test
npm run build
npm run preview
```

`npm test` runs ten integrity tests with Node's built-in test runner.

Required validation after most changes:

```bash
npm test
npm run build
```

Manual testing checklist:

- Home, About, Products, Resume, GitHub, and Contact anchors work.
- Product cards render correctly.
- The hero renders its meteor, developer T-Rex, chest, ferns, and flowers, and the About section renders its calm Brachiosaurus scene.
- All dinosaur, chest, and reward SVG references resolve to registered sprite symbols.
- Unknown artwork IDs use the documented generic visual fallback without affecting product content.
- Product case-study links jump to the right sections.
- Resume buttons download PDFs.
- External links open correctly.
- Mobile layout remains readable.
- Every stable project ID selects the intended dinosaur, environment, chest, and reward.
- Meteor motion stays behind content, never impacts the ground, and becomes a complete static frame under reduced motion.
- Chest behavior works through pointer hover and keyboard focus, while touch retains normal one-tap navigation.
- Decorative scenes remain hidden from assistive technology without hiding meaningful card content.
- `dist/robots.txt` and `dist/_headers` exist after build.
- `dist/index.html` preserves noindex meta tags.

Areas needing extra caution:

- `src/data/portfolioData.js` copy changes.
- `src/styles.css` layout changes.
- Resume files and links.
- Public assets.
- Noindex deployment files.

What could not be validated from the repo:

- Cloudflare Pages project settings.
- Deployed URL.
- Search engine indexing status.
- Private product repository implementation details.
- Automated rendered visual-regression, axe, screen-reader, and device-emulation coverage.

## 9. Known Unknowns

| Unknown | What information is needed |
| --- | --- |
| Exact Node.js version | `.nvmrc`, `.node-version`, or `package.json` `engines` field. |
| License | A `LICENSE` file or package license field. |
| Deployment URL | Cloudflare Pages or hosting project settings. |
| CI setup | `.github/workflows` or another CI config. |
| CI enforcement | A workflow or hosting build configuration that runs `npm test` and `npm run build`. |
| Actual product implementations | Separate private repositories. |
| Screenshot plan | Final screenshot assets or naming convention. |
| Release process | Deployment/release documentation or hosting config. |

## 10. Suggested First Prompt for Future AI Work

"Before making changes, read AI_CONTEXT.md, README.md, docs/ARCHITECTURE.md, and the files directly involved in my request. Then explain the relevant current behavior, identify the safest files to edit, make the smallest correct patch, and update documentation if behavior changes."

## Reference Links

- [README.md](README.md)
- [Project Overview](docs/PROJECT_OVERVIEW.md)
- [Architecture](docs/ARCHITECTURE.md)
- [Setup](docs/SETUP.md)
- [Development Guide](docs/DEVELOPMENT_GUIDE.md)
- [Features](docs/FEATURES.md)
- [File Map](docs/FILE_MAP.md)
- [Troubleshooting](docs/TROUBLESHOOTING.md)
- [Changelog Starter](docs/CHANGELOG_STARTER.md)
- [Prehistoric Pixel Art Bible](docs/PREHISTORIC_PIXEL_ART_BIBLE.md)
