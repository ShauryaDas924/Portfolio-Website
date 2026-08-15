# Changelog Starter

This file provides a starter changelog structure for future maintainers. It is not evidence of historical versioned releases.

## Suggested Format

```markdown
## [Version or Date] - YYYY-MM-DD

#### Added
- New features, sections, docs, or assets.

### Changed
- Updates to existing behavior, content, design, or documentation.

### Fixed
- Bug fixes and regressions.

### Removed
- Removed features, files, or behavior.

### Security
- Privacy, noindex, secret-handling, dependency, or access-control changes.

### Known Issues
- Known limitations or follow-up work.
```

## Current Repo State - 2026-07-03

### Added

- Static React/Vite portfolio website.
- Hero, About, Featured Products, Resume, GitHub, Contact, and Footer sections.
- Product card and case-study components.
- Product data for FocusLock DNS Guard, MacAppTimeGuard, Evrana, College AI, Personal Keyword Blocker, Discipline Feed Guard, and Apple Lockdown Kit Website.
- Resume PDF download cards.
- Product logo assets under `public/product-logos/`.
- Resume PDFs under `public/resume/`.
- Noindex/search-indexing controls in `index.html`, `public/robots.txt`, and `public/_headers`.
- Documentation set under `docs/` and AI-specific context in `AI_CONTEXT.md`.

### Changed

- Unknown from current repo. No prior changelog exists to verify historical changes.

### Fixed

- Unknown from current repo. No prior changelog exists to verify historical fixes.

### Removed

- Unknown from current repo. No prior changelog exists to verify historical removals.

### Security

- The current repo is configured to discourage search indexing while remaining link-accessible.
- The public portfolio avoids source code links for private products.
- `.gitignore` excludes environment files and debug logs.

### Known Issues

- No automated test script exists in `package.json`.
- No `LICENSE` file exists.
- No deployment URL or Cloudflare Pages project settings are documented in the repo.
- No screenshot assets are present beyond `public/screenshots/.gitkeep`.

## Maintenance Guidance

When updating this file:

- Record user-visible behavior changes.
- Record changes to resume paths, product assets, noindex behavior, or public/private boundaries.
- Do not invent release history.
- Keep dates concrete.
- Note whether `npm run build` passed for the change.
