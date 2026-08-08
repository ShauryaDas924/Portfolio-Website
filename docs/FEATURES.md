# Features

## Hero Section

**What it does:** Introduces Shaurya as a software engineer and product builder.

**User-facing behavior:** Shows a headline, subheadline, student/supporting line, and CTA links for featured products, resume, GitHub, and LinkedIn.

**Important files:**

- `src/components/Hero.jsx`
- `src/styles.css`

**Internal logic summary:** Static JSX renders text and anchors. Icons come from `lucide-react`.

**Configuration options:** None outside editing the component.

**Edge cases:** External links depend on GitHub/LinkedIn URLs staying current.

**Known limitations:** Hero copy is hard-coded in `Hero.jsx`, not centralized in data.

## Navigation

**What it does:** Provides sticky top navigation for site sections and profile links.

**User-facing behavior:** Users can jump to Home, About, Products, Resume, GitHub, and Contact. GitHub and LinkedIn icon links open external profiles.

**Important files:**

- `src/components/Navbar.jsx`
- `src/data/portfolioData.js`
- `src/styles.css`

**Internal logic summary:** `Navbar.jsx` maps `navItems` from `portfolioData.js` and renders external social links.

**Configuration options:** Update `navItems` for internal labels and anchors.

**Edge cases:** Anchor links must match section IDs in `src/App.jsx`.

**Known limitations:** No active-section highlighting exists.

## About and Build Cards

**What it does:** Explains Shaurya's product-builder positioning and areas of work.

**User-facing behavior:** Shows an About section plus "What I build" cards.

**Important files:**

- `src/App.jsx`
- `src/data/portfolioData.js`
- `src/styles.css`

**Internal logic summary:** About text is in `App.jsx`; build cards map from `buildCards`.

**Configuration options:** Update `buildCards` for card labels.

**Edge cases:** Long card labels could affect mobile wrapping.

**Known limitations:** About copy is not data-driven.

## Featured Product Cards

**What it does:** Presents compact summaries for each featured product.

**User-facing behavior:** Each card shows artwork or a logo, product name, status, short description, tech chips, source note, and a case-study anchor. When a product has a public destination, its image area is a labeled external link with a small `Click me` badge and opens in a new tab.

**Important files:**

- `src/data/portfolioData.js`
- `src/components/ProductCard.jsx`
- `src/styles.css`
- `public/product-logos/`

**Internal logic summary:** `ProductCard.jsx` maps product props. If `product.logo` exists, it renders an image. If the image fails, it hides the image and shows the preview label fallback. An optional `productUrl` changes only the preview wrapper into a keyboard-accessible external link; products without it keep the non-interactive preview.

**Configuration options:** Product fields include `name`, `description`, `shortDescription`, `techStack`, `status`, `accent`, `previewLabel`, optional `logo`, optional `logoAlt`, optional `productUrl`, optional `sourceNote`, `highlights`, and `caseStudy`.

**Edge cases:** Missing logo files trigger fallback display. Missing `logoAlt` would reduce accessibility. Very long status text can wrap in the pill.

**Known limitations:** Cards show only the first five tech stack chips.

## Product Case Studies

**What it does:** Gives recruiter-friendly detail for each product.

**User-facing behavior:** Each case study includes Problem, What I built, Technical architecture, Hardest engineering challenge, Privacy/security/product boundaries, Highlights, Tech stack, and Source code note.

**Important files:**

- `src/data/portfolioData.js`
- `src/components/ProductDetail.jsx`
- `src/styles.css`

**Internal logic summary:** `ProductDetail.jsx` uses a fixed `caseRows` mapping and renders each product's `caseStudy` object.

**Configuration options:** Update product `caseStudy`, `highlights`, `techStack`, and `sourceNote`.

**Edge cases:** Missing `caseStudy` keys would render empty or undefined text. Long highlight bullets can make the aside visually heavy.

**Known limitations:** Case study headings are fixed in the component.

## Resume Downloads

**What it does:** Offers three role-focused resume PDFs.

**User-facing behavior:** Each card has a `Download PDF` button that downloads the configured file.

**Important files:**

- `src/data/portfolioData.js`
- `src/components/ResumeCard.jsx`
- `public/resume/`

**Internal logic summary:** `ResumeCard.jsx` renders a normal anchor with `href={resume.href}` and `download={resume.downloadName}`.

**Configuration options:** Resume objects include `title`, `description`, `href`, and `downloadName`.

**Edge cases:** Missing PDF files cause broken downloads. File names in `href` and `downloadName` should match intended public names.

**Known limitations:** No runtime check confirms PDFs exist.

## GitHub Section

**What it does:** Explains why many flagship repositories are private and provides a GitHub profile link.

**User-facing behavior:** Users see a private-repo note and cards for public samples, private architecture availability, and demo walkthroughs.

**Important files:**

- `src/App.jsx`
- `src/data/portfolioData.js`

**Internal logic summary:** `githubCards` are mapped into cards; the profile link is hard-coded in `App.jsx`.

**Configuration options:** Update `githubCards` for card copy.

**Edge cases:** Do not add public source links for private products.

**Known limitations:** No embedded GitHub repository list exists.

## Contact Section

**What it does:** Provides direct contact options.

**User-facing behavior:** Shows email, LinkedIn, GitHub, and location cards. Link cards are anchors; location is a non-link card.

**Important files:**

- `src/data/portfolioData.js`
- `src/components/ContactCard.jsx`

**Internal logic summary:** `ContactCard.jsx` selects an icon based on label and conditionally renders an anchor when `href` exists.

**Configuration options:** Update `contactItems`.

**Edge cases:** External contact URLs should include protocol. Email uses `mailto:`.

**Known limitations:** No contact form exists.

## Search Indexing Controls

**What it does:** Discourages normal search indexing while keeping the site viewable by direct link.

**User-facing behavior:** No visible UI impact.

**Important files:**

- `index.html`
- `public/robots.txt`
- `public/_headers`

**Internal logic summary:** Meta tags and static files are included in source and copied into `dist/` during Vite build.

**Configuration options:** Edit the meta tags, robots file, and Cloudflare headers only when changing indexing policy.

**Edge cases:** Noindex is not authentication. A direct link can still be shared and viewed.

**Known limitations:** Search engines may not obey directives instantly or universally.
