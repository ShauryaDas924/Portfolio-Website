# Development Guide

## Development Philosophy

This repository is a static portfolio. Most changes should be small, content-focused, and privacy-conscious. The main risk is not complex runtime behavior; it is accidentally changing presentation boundaries, breaking static links, or exposing private project details.

## How to Work on This Project

1. Read [AI_CONTEXT.md](../AI_CONTEXT.md), [README.md](../README.md), and [ARCHITECTURE.md](ARCHITECTURE.md).
2. Identify whether the change is content, component behavior, styling, asset, or deployment configuration.
3. Inspect the exact files involved before editing.
4. Make the smallest focused change.
5. Run `npm run build`.
6. Manually check the affected section in the browser when possible.
7. Update documentation if behavior or project structure changes.

## Coding Conventions Inferred From the Repo

- React components are simple function components.
- Shared display data lives in `src/data/portfolioData.js`.
- Styling is centralized in `src/styles.css`.
- Components are presentation-focused and receive data through props.
- Icons come from `lucide-react`.
- Anchor links are used for internal section navigation.
- Public assets are referenced with root-relative paths such as `/product-logos/name.png`.
- The code avoids comments unless behavior needs explanation.

## Where to Make Common Changes

| Change Type | Primary Files |
| --- | --- |
| Navigation labels or anchors | `src/data/portfolioData.js`, `src/App.jsx`, `src/components/Navbar.jsx` |
| Hero text or CTA links | `src/components/Hero.jsx` |
| About section text | `src/App.jsx` |
| Product content | `src/data/portfolioData.js` |
| Product card rendering | `src/components/ProductCard.jsx` |
| Case study rendering | `src/components/ProductDetail.jsx` |
| Resume cards | `src/data/portfolioData.js`, `src/components/ResumeCard.jsx`, `public/resume/` |
| Contact items | `src/data/portfolioData.js`, `src/components/ContactCard.jsx` |
| Visual styling | `src/styles.css` |
| Noindex/static hosting behavior | `index.html`, `public/robots.txt`, `public/_headers` |
| Documentation | `README.md`, `AI_CONTEXT.md`, `docs/*.md` |

## Where Not to Add Things Casually

- Do not add private source code to this repo.
- Do not add private project paths to public copy.
- Do not add API keys, tokens, `.env` files, logs, certificates, signing files, or database dumps.
- Do not add public "View Source" links for private products.
- Do not place sensitive files in `public/`.
- Do not edit `dist/` directly.
- Do not change noindex settings unless the user explicitly wants the site searchable.
- Do not add analytics or tracking without explicit approval.

## Debugging

For local UI issues:

1. Run `npm run dev`.
2. Inspect the rendered section in the browser.
3. Locate the source data in `src/data/portfolioData.js`.
4. Locate the rendering component in `src/components/`.
5. Check the class in `src/styles.css`.
6. Run `npm run build`.

For broken assets:

1. Confirm the file exists under `public/`.
2. Confirm the data path starts with `/`, for example `/product-logos/keyword-blocker-logo.png`.
3. Confirm Vite copies the file into `dist/` after `npm run build`.
4. Check `ProductCard.jsx` fallback behavior for logo failures.

For resume download issues:

1. Check the resume object in `src/data/portfolioData.js`.
2. Confirm `href` points to an existing file in `public/resume/`.
3. Confirm `downloadName` is set.
4. Confirm `ResumeCard.jsx` renders `<a download={resume.downloadName}>`.

## Testing Changes

No automated test script exists. Use:

```bash
npm run build
```

Manual regression checklist:

- Page loads without console errors.
- Header navigation anchors scroll to the correct sections.
- Hero CTAs work.
- Product cards render in desktop and mobile grids.
- Product logos load or fall back cleanly.
- Case-study links jump to the right product section.
- Resume buttons download the expected PDFs.
- External profile links open correctly.
- Noindex meta tags remain in `index.html`.
- `public/robots.txt` and `public/_headers` remain present.

## Safe Modification Notes

### Product Data

`src/data/portfolioData.js` is the highest-impact content file. Changes here can affect product cards, case studies, resume links, GitHub cards, contact cards, and navigation.

Before changing product copy, preserve:

- Private repository language.
- Honest limitations.
- Privacy/security boundaries.
- First-person engineering voice in case studies.
- No public source-code claims for private projects.

### Styling

`src/styles.css` controls the entire layout. Small style changes can affect all product cards or all case studies. Inspect responsive media queries before editing component dimensions or grid behavior.

### Deployment Controls

The noindex posture is intentional. Do not remove or weaken it without explicit approval.

### Public Assets

Files in `public/` are deployable. Treat them as public. Do not add sensitive information.

## Review Checklist Before Committing

- Only intended files changed.
- `npm run build` passes.
- No private source code or secret material added.
- No product copy claims a private repository is public.
- Resume links still use the correct file names.
- Product logo alt text remains meaningful.
- Noindex files remain intact unless intentionally changed.
- Documentation updated if structure, behavior, commands, or setup changed.

## Documentation Expectations

Update documentation when:

- Project structure changes.
- Commands change.
- New public assets or directories are added.
- Product rendering behavior changes.
- Deployment or noindex behavior changes.
- Resume handling changes.
- A new feature or section is added.

Do not document unsupported future behavior as if it exists.
