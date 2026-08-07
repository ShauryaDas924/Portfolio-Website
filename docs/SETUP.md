# Setup Guide

## Prerequisites

Required:

- Node.js and npm.

Exact Node version is unknown from current repo. There is no `.nvmrc`, `.node-version`, or `engines` field in `package.json`.

## Installation

Install dependencies:

```bash
npm install
```

This uses `package-lock.json` and installs:

- React.
- React DOM.
- Vite.
- Vite React plugin.
- `lucide-react`.

## Environment Variables

No environment variables are required by the current repo.

`.gitignore` excludes `.env` and `.env.*`. Do not commit environment files.

## Running Locally

Start Vite development mode:

```bash
npm run dev
```

The script is:

```bash
vite --host 127.0.0.1
```

## Production Build

Create a production build:

```bash
npm run build
```

Output goes to:

```text
dist/
```

`dist/` is ignored by `.gitignore` and should be treated as generated output.

## Previewing the Production Build

Run:

```bash
npm run preview
```

The script is:

```bash
vite preview --host 127.0.0.1
```

## Running Tests

No test script is defined in `package.json`.

Use this validation command:

```bash
npm run build
```

Manual validation should include:

- Hero CTA anchor navigation.
- Top nav anchor navigation.
- Product card logo rendering and fallback behavior.
- Case-study anchor links.
- Resume PDF downloads.
- GitHub, LinkedIn, and email links.
- Responsive desktop and mobile layouts.
- Noindex files copied into `dist/` after build.

## Resume Setup

Resume PDFs should be placed in:

```text
public/resume/
```

Current resume paths used by the app:

- `public/resume/Shaurya_Das_Resume_A_Product_Builder.pdf`
- `public/resume/Shaurya_Das_AI_Software_Engineer_Resume.pdf`
- `public/resume/Shaurya_Das_Swift_Apple_Resume.pdf`

The resume cards use normal anchor links with the `download` attribute.

## Product Logos and Screenshots

Product logos live in:

```text
public/product-logos/
```

Screenshot placeholders are supported conceptually by:

```text
public/screenshots/
```

No screenshot image files are present in the current repo.

## Search Indexing Setup

The noindex setup depends on:

- `index.html`
- `public/robots.txt`
- `public/_headers`

After running `npm run build`, confirm:

```text
dist/robots.txt
dist/_headers
dist/index.html
```

## Common Setup Mistakes

| Issue | Likely Cause | Fix |
| --- | --- | --- |
| `npm run dev` command missing | Dependencies not installed | Run `npm install`. |
| Resume link opens missing file | Expected PDF not present in `public/resume/` | Add the matching PDF file. |
| Product logo not shown | `logo` path missing or asset absent | Check `src/data/portfolioData.js` and `public/product-logos/`. |
| Noindex headers missing in deployment | `_headers` not copied or unsupported host | Confirm `public/_headers` exists and deployment target supports it. |
| Build output edited manually | `dist/` is generated | Edit source files or `public/`, then rebuild. |

## Platform-Specific Notes

The repo itself is platform-neutral static web code. Some product case studies describe macOS, iOS, browser extension, AI, or backend systems, but those codebases are not included here.
