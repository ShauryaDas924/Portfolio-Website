# Project Overview

## What This Project Is

Shaurya Das Portfolio Website is a static React/Vite portfolio site. It presents Shaurya's software engineering work through product cards, concise case studies, resume downloads, GitHub/LinkedIn links, and contact information.

The project is not a product backend, SaaS app, browser extension, native app, or database-backed system. It is a public-facing presentation layer for describing those projects without exposing their private repositories.

## Why It Exists

The site exists to support internship applications and technical conversations. A traditional resume can list technologies, but this portfolio explains:

- What products were built.
- Why each product exists.
- What technical architecture each project used.
- What engineering challenges were encountered.
- What privacy, security, and product boundaries apply.

## Core Problem It Solves

Shaurya's flagship projects are private or commercially sensitive. This site gives reviewers enough context to understand the work while keeping private source code, prompts, database contents, implementation details, and local user data out of the public website.

## Main Users

- Recruiters evaluating software engineering internship fit.
- Interviewers who want product and architecture context.
- Collaborators requesting demos or implementation walkthroughs.
- Shaurya revisiting the site later for updates.
- AI coding agents that need safe project context before editing.

## Core Workflows

1. A visitor lands on the hero section and sees Shaurya's role, product-builder positioning, and primary links.
2. The visitor reads the About section to understand the range of work.
3. The visitor scans Featured Products cards.
4. The visitor jumps from a card to its case study.
5. The visitor downloads a role-specific resume PDF.
6. The visitor uses the GitHub, LinkedIn, email, or contact cards for follow-up.

## Product Behavior

The website is a single-page static app using hash anchors for navigation. All visible product, resume, GitHub, and contact data is defined in `src/data/portfolioData.js`. React components render that data into sections in `src/App.jsx`.

There is no backend, form submission, account system, analytics script, database, server-side rendering, or client-side routing library in the current repo.

## Important Concepts

| Concept | Meaning in this repo |
| --- | --- |
| Featured product | A product entry in `products` inside `src/data/portfolioData.js`. |
| Product card | The compact card rendered by `src/components/ProductCard.jsx`. |
| Case study | The detailed product section rendered by `src/components/ProductDetail.jsx`. |
| Source code note | Copy explaining private repository boundaries. |
| Resume card | A downloadable resume link rendered by `src/components/ResumeCard.jsx`. |
| Noindex setup | Meta tags, `robots.txt`, and Cloudflare `_headers` that discourage indexing. |
| Public assets | Files under `public/` copied into `dist/` by Vite. |

## In Scope

- Static portfolio UI.
- Product summaries and case studies.
- Resume PDF download links.
- Public product logo assets.
- Screenshot placeholder support.
- Contact and profile links.
- Cloudflare Pages noindex/static header files.
- Documentation for safe maintenance.

## Out of Scope

- Backend APIs.
- Authentication or login.
- Database schemas.
- User accounts.
- Analytics or tracking.
- Public source code links for private products.
- Store submission automation.
- Native app, extension, or AI product source code.

## Current Limitations

- No automated test script exists in `package.json`.
- No `LICENSE` file exists.
- The site does not include a sitemap.
- The noindex configuration discourages search indexing but is not authentication.
- Product claims are limited to portfolio descriptions in `src/data/portfolioData.js`; the private product repositories are not present in this repo.
- Screenshot support is represented by `public/screenshots/.gitkeep`, but no screenshot images are present in the current repo.

## High-Level Understanding

Understand this project as a carefully bounded static portfolio. The most important maintenance rule is to improve presentation without accidentally exposing private product implementation details or weakening the privacy-conscious deployment posture.
