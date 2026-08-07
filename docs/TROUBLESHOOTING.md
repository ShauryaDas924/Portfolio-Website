# Troubleshooting

## Quick Checklist

When something breaks, check:

1. Did dependencies install with `npm install`?
2. Does `npm run build` pass?
3. Is the affected content in `src/data/portfolioData.js` or hard-coded in a component?
4. Does the referenced public asset exist under `public/`?
5. Did Vite copy the expected public file into `dist/`?
6. Did a change accidentally remove noindex files or metadata?

## Install Issues

### `npm` command not found

Node.js/npm is not installed or not available in the shell.

Fix: install Node.js and npm, then run:

```bash
npm install
```

### Dependency install fails

Unknown from current repo. The repo does not include custom install scripts or documented install caveats.

Useful checks:

- Confirm Node/npm versions.
- Delete `node_modules/` only if intentionally reinstalling dependencies.
- Use `package-lock.json` with `npm install`.

## Build Issues

### `npm run build` fails

The build script is:

```bash
vite build
```

Likely areas to inspect:

- JSX syntax in `src/components/`.
- Data syntax in `src/data/portfolioData.js`.
- Imports in `src/App.jsx`, `src/main.jsx`, or component files.
- Missing npm dependencies in `package.json`.

### Public files missing from `dist/`

Vite copies files from `public/` into `dist/`.

Check:

```text
public/robots.txt
public/_headers
public/product-logos/
public/resume/
public/screenshots/
```

Then rebuild:

```bash
npm run build
```

## Runtime/UI Issues

### Product card logo does not appear

Check:

1. `product.logo` in `src/data/portfolioData.js`.
2. `product.logoAlt` for accessibility.
3. Matching file under `public/product-logos/`.
4. Browser console/network panel for missing asset requests.

`ProductCard.jsx` hides failed logo images and shows the preview label fallback.

### Product card or case study shows wrong text

Most product content comes from:

```text
src/data/portfolioData.js
```

Check both:

- Card fields such as `shortDescription`, `status`, `previewLabel`, `techStack`, `highlights`.
- Detail fields under `caseStudy`.

### Case-study link does not jump to the right place

`ProductCard.jsx` links to:

```text
#case-${product.id}
```

`ProductDetail.jsx` renders:

```text
id={`case-${product.id}`}
```

Check that each `product.id` is unique and stable.

### Resume download does not work

Check:

1. Resume object in `src/data/portfolioData.js`.
2. PDF file exists in `public/resume/`.
3. `href` starts with `/resume/`.
4. `downloadName` is present.
5. `ResumeCard.jsx` still renders the `download` attribute.

### Navigation anchor does not work

Check that `navItems` in `src/data/portfolioData.js` match section IDs in `src/App.jsx`.

## Search Indexing Issues

### Site appears searchable

This repo discourages indexing but does not authenticate the site.

Check:

- `index.html` includes `noindex` meta tags.
- `public/robots.txt` contains `Disallow: /`.
- `public/_headers` includes `X-Robots-Tag: noindex, nofollow, noarchive, nosnippet`.
- Deployment provider supports `_headers` if using Cloudflare Pages.

Unknown from current repo: deployment URL, Cloudflare Pages project settings, and whether search engines have previously indexed the URL.

### Need to make the site searchable later

Only do this with explicit approval. Required changes would include:

- Remove noindex meta tags from `index.html`.
- Update `public/robots.txt`.
- Remove noindex `X-Robots-Tag` entries from `public/_headers`.
- Optionally add a sitemap.

## Privacy and Security Issues

### Sensitive file accidentally added

Do not put secrets or private implementation files in `public/` or source files.

Check for:

- `.env`
- API keys or tokens.
- Certificates or private keys.
- Logs.
- Database dumps.
- Private source code.
- Private local file paths.

The `.gitignore` excludes `.env`, `.env.*`, debug logs, `dist`, `node_modules`, and `.DS_Store`.

### A private project is described too specifically

Review the affected product entry in `src/data/portfolioData.js`. Keep high-level architecture and recruiter-friendly case study wording, but avoid source code, secrets, private prompts, private database schemas, and proprietary implementation details.

## Deployment Issues

### Cloudflare Pages noindex headers do not apply

Check:

- `public/_headers` exists.
- `npm run build` copies `_headers` into `dist/_headers`.
- Cloudflare Pages is deploying from the Vite build output.

Unknown from current repo: actual Cloudflare Pages build settings.

### Direct link access does not work

The current repo contains no auth or access-control files. If a deployed site is blocked, the cause is likely hosting configuration outside this repo.

Unknown from current repo: external hosting settings.

## Log Locations

Unknown from current repo. The app is static and does not define application log files.

If Vite errors occur, they appear in terminal output during `npm run dev`, `npm run build`, or `npm run preview`.
