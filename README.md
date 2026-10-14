# Shaurya Das Portfolio Website

Personal software engineering portfolio for Shaurya Das, built as a static React/Vite site. It presents recruiter-friendly product cards, concise case studies, resume downloads, GitHub/LinkedIn links, and contact information without exposing private or commercial source code. An original warm prehistoric React/SVG/CSS pixel-art system gives the site a distinctive visual identity while keeping the engineering content and actions conventional and readable.

## What This Project Does

This site helps recruiters, mentors, collaborators, and technical reviewers understand Shaurya's work as a student product builder across macOS, AI/full-stack software, browser extensions, iOS, productivity tools, and buyer-support websites.

The portfolio focuses on:

- Product descriptions and technical summaries.
- Case studies for private or portfolio-ready products.
- Clear source-code boundaries for private projects.
- A download path for the current master software engineering resume.
- Direct contact and profile links.
- Static hosting on a privacy-conscious, noindex configuration.

## Intended Audience

- Software engineering recruiters.
- Internship interviewers.
- Technical reviewers.
- Collaborators requesting product demos or architecture walkthroughs.
- Future maintainers and AI coding agents working on this repo.

## Featured Products

The product content is defined in [`src/data/portfolioData.js`](src/data/portfolioData.js).

- FocusLock DNS Guard: native macOS app with background system coordination, browser integration, scheduling, diagnostics, and local privacy.
- MacAppTimeGuard: local-only macOS menu-bar app for app limits, schedules, Pomodoro-only access, temporary blocks, and admin-protected rule changes.
- Evrana: cross-platform AI habit-support and reflection product spanning React, FastAPI, PostgreSQL, OpenAI workflows, and SwiftUI iOS.
- Personal Keyword Blocker: privacy-first Chrome MV3 extension for local keyword blocking across URLs, search queries, page titles, typed text, forms, and optional page text.
- Browser Manager: published Chrome MV3 extension for direct website access, saved sites, search-route limits, and privacy-conscious location controls.
- Discipline Feed Guard: local-only Chrome MV3 extension for reducing distracting Reddit, YouTube, and LinkedIn surfaces while preserving useful routes.
- Whoopberry: live student-focused directory of 61 curated external internship and early-career resources, organized across 13 broad career paths with search and filtering.

## Archived Public Code Exception

College AI is an archived full-stack study platform kept public as a substantial source-code example. Its Next.js and TypeScript frontend, FastAPI and PostgreSQL backend, persistent class-scoped learning workflows, and 58 deterministic backend tests can be inspected at [github.com/ShauryaDas924/study-app](https://github.com/ShauryaDas924/study-app). It is not part of the deployed/published product showcase.

## Tech Stack

| Area | Technology |
| --- | --- |
| Frontend | React 18, JSX |
| Build tool | Vite |
| Styling | Plain CSS in `src/styles.css` plus the original artwork system in `src/pixel-art.css` |
| Icons | `lucide-react` |
| Runtime | Static client-side site; no backend in this repo |
| Static assets | Vite `public/` directory |
| Deployment target | Static hosting such as Cloudflare Pages |

## Quick Start

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Development Commands

These scripts are defined in [`package.json`](package.json).

| Command | Purpose |
| --- | --- |
| `npm run dev` | Starts Vite on `127.0.0.1` for local development. |
| `npm test` | Runs the ten Node integrity tests in `tests/portfolio-integrity.test.mjs`. |
| `npm run build` | Creates a production build in `dist/`. |
| `npm run preview` | Serves the production build locally through Vite preview. |

## Testing Commands

Run the ten repository integrity tests:

```bash
npm test
```

The suite protects stable product IDs and case-study fields, project-art mappings and required colors, required hero/About scene details, navigation/touch/contrast/motion accessibility contracts, the resume path, public/private link boundaries, noindex controls, and the absence of runtime data collection or persistence. These are static source contracts; they do not replace rendered visual-regression, axe, screen-reader, or device-emulation testing.

Also validate the production bundle:

```bash
npm run build
```

Manual checks should cover navigation anchors, hero and calm Brachiosaurus About-scene rendering, project treasure-scene interaction, resume download behavior, responsive desktop/mobile layout, reduced motion, and noindex deployment files.

## Project Structure Summary

```text
.
├── AI_CONTEXT.md
├── docs/
├── public/
│   ├── _headers
│   ├── product-logos/
│   ├── resume/
│   ├── robots.txt
│   └── screenshots/
├── src/
│   ├── components/
│   │   └── pixel/
│   ├── data/
│   │   └── projectArtwork.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── pixel-art.css
│   └── styles.css
├── tests/
│   └── portfolio-integrity.test.mjs
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

Generated output:

- `dist/` is generated by `npm run build`.
- `node_modules/` is generated by `npm install`.
- Both are ignored by `.gitignore`.

## Environment and Configuration

No environment variables are required by the current repo.

The site is configured as link-accessible but not intentionally search-indexed:

- `index.html` includes `robots`, `googlebot`, and `bingbot` noindex meta tags.
- `public/robots.txt` disallows crawling.
- `public/_headers` sets Cloudflare Pages `X-Robots-Tag` headers.

This is not authentication. Anyone with the deployed link can still view the site.

## Static Assets

Resume PDFs live in:

```text
public/resume/
```

Product logos live in:

```text
public/product-logos/
```

Screenshots or future demo images should live in:

```text
public/screenshots/
```

Do not place secrets, private source code, private prompts, database dumps, logs, certificates, signing files, or private local paths in `public/`.

## Documentation

Start here:

- [AI_CONTEXT.md](AI_CONTEXT.md): AI-agent operating context and safety rules.
- [docs/PROJECT_OVERVIEW.md](docs/PROJECT_OVERVIEW.md): product and repo overview.
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md): static app architecture and data flow.
- [docs/SETUP.md](docs/SETUP.md): setup, run, build, and validation guide.
- [docs/DEVELOPMENT_GUIDE.md](docs/DEVELOPMENT_GUIDE.md): safe development workflow.
- [docs/FEATURES.md](docs/FEATURES.md): feature-by-feature behavior guide.
- [docs/FILE_MAP.md](docs/FILE_MAP.md): file and folder map for maintainers.
- [docs/TROUBLESHOOTING.md](docs/TROUBLESHOOTING.md): common issues and checks.
- [docs/CHANGELOG_STARTER.md](docs/CHANGELOG_STARTER.md): starter changelog format.
- [docs/PREHISTORIC_PIXEL_ART_BIBLE.md](docs/PREHISTORIC_PIXEL_ART_BIBLE.md): authoritative palette, original sprite grammar, project mappings, meteor, interaction, accessibility, responsive, and provenance rules.

## Current Status

The repo is a private static portfolio website. It is suitable for local development and static deployment after `npm test` and `npm run build`. The repository does not contain backend services, database schemas, API routes, or authentication logic. It includes ten Node integrity tests, but rendered visual-regression, axe, screen-reader, and device-emulation checks remain manual.

## Private Repository Note

Many projects shown on the site are private because they may become commercial products or contain non-public implementation details. This portfolio should not expose:

- Private source code.
- Private prompts.
- Secrets or environment variables.
- Database contents.
- Private file paths.
- API keys or tokens.
- Logs or user data.
- Proprietary implementation details.

Architecture and demo walkthroughs can be discussed separately during interviews.

## Contact

Shaurya Das  
Frisco, Texas  
Email: <shauryadas2006@gmail.com>  
LinkedIn: <https://www.linkedin.com/in/shauryadas/>  
GitHub: <https://github.com/ShauryaDas924>

## License

License: Unknown from current repo. There is no `LICENSE` file in the repository, and `package.json` marks the package as private.
