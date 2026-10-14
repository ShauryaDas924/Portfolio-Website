# Features

## Hero Section

**What it does:** Introduces Shaurya as a software engineer and product builder.

**User-facing behavior:** Shows the preserved professional headline, introduction, and primary actions beside an original warm prehistoric landscape with a developer T-Rex, chest, layered terrain, ferns, flowers, and a slow meteor that disappears behind distant scenery without impacting the ground.

**Important files:**

- `src/components/Hero.jsx`
- `src/components/pixel/PrehistoricLandscape.jsx`
- `src/components/pixel/PixelSpriteLibrary.jsx`
- `src/styles.css`
- `src/pixel-art.css`

**Internal logic summary:** Static JSX renders text and anchors. Decorative React markup supplies the landscape and sprites, while CSS owns geometry and motion. No recurring JavaScript animation state is used.

**Configuration options:** None outside editing the component.

**Edge cases:** External links depend on GitHub/LinkedIn URLs staying current.

**Known limitations:** Hero copy is hard-coded in `Hero.jsx`, not centralized in data. Static tests protect required scene and motion hooks, but rendered responsive, device-emulation, reduced-motion, axe, and screen-reader review remains manual.

## Navigation

**What it does:** Provides sticky top navigation for site sections and profile links.

**User-facing behavior:** Users can jump to Home, About, Products, Resume, GitHub, and Contact. GitHub and LinkedIn icon links open external profiles. At 700px and below, an accessible menu toggle exposes the same six destinations; Escape or choosing a destination closes the menu.

**Important files:**

- `src/components/Navbar.jsx`
- `src/data/portfolioData.js`
- `src/styles.css`

**Internal logic summary:** `Navbar.jsx` maps `navItems` from `portfolioData.js`, renders external social links, and uses local React state plus `matchMedia` to coordinate the mobile menu's expanded, `aria-hidden`, and `inert` states. Escape restores focus to the toggle.

**Configuration options:** Update `navItems` for internal labels and anchors.

**Edge cases:** Anchor links must match section IDs in `src/App.jsx`. The closed mobile menu must remain non-focusable, while resizing to desktop must restore the always-visible navigation.

**Known limitations:** No active-section highlighting exists.

## About and Build Cards

**What it does:** Explains Shaurya's product-builder positioning and areas of work.

**User-facing behavior:** Shows an About section with a calm decorative Brachiosaurus landscape, followed by "What I build" cards.

**Important files:**

- `src/App.jsx`
- `src/components/pixel/AboutPrehistoricScene.jsx`
- `src/data/portfolioData.js`
- `src/styles.css`
- `src/pixel-art.css`

**Internal logic summary:** About text is in `App.jsx`; `AboutPrehistoricScene.jsx` supplies the separate `aria-hidden` Brachiosaurus vignette; build cards map from `buildCards`.

**Configuration options:** Update `buildCards` for card labels.

**Edge cases:** Long card labels could affect mobile wrapping.

**Known limitations:** About copy is not data-driven.

## Featured Product Cards

**What it does:** Presents compact summaries for each featured product.

**User-facing behavior:** Each card shows an original project-specific dinosaur, environment, treasure chest, and reward alongside the product name, status, short description, optional supporting details, tech chips, source note, and case-study anchor. Hover-capable pointers and keyboard focus reveal the shared chest interaction; touch and reduced-motion layouts retain an intelligible static state. Public product destinations remain clearly labeled external links.

**Important files:**

- `src/data/portfolioData.js`
- `src/components/ProductCard.jsx`
- `src/components/pixel/ProjectTreasureScene.jsx`
- `src/components/pixel/PixelSpriteLibrary.jsx`
- `src/data/projectArtwork.js`
- `src/styles.css`
- `src/pixel-art.css`
- `public/product-logos/`

**Internal logic summary:** `ProductCard.jsx` maps product props and passes the stable product ID to `ProjectTreasureScene`. `projectArtwork.js` selects only decorative variants; the product data remains authoritative. Chest and reward behavior is CSS-driven and never replaces card content or navigation.

**Configuration options:** Product facts include `id`, `name`, `description`, `shortDescription`, `techStack`, `status`, optional supporting details, public-link fields, source notes, highlights, and case-study content. Decorative fields live separately in `projectArtwork.js`. Legacy logo metadata can remain in product data but is not rendered as the current card artwork.

**Edge cases:** Every new product needs an explicit stable-ID artwork mapping. Very long status text, metrics, and technology labels can wrap. A scene must not create horizontal overflow or place decorative content in the accessibility tree.

**Known limitations:** Cards show only the first five tech stack chips. Static tests protect interaction and contrast hooks, but rendered visual-regression, axe, screen-reader, and device-emulation checks remain manual.

## Prehistoric Artwork System

**What it does:** Gives the portfolio one original visual language without changing its factual engineering content.

**User-facing behavior:** Uses a warm sunset palette, seven distinct dinosaur silhouettes, project-specific treasure scenes, restrained environmental motion, readable cream technical panels, and static fallbacks for touch and reduced motion.

**Important files:**

- `docs/PREHISTORIC_PIXEL_ART_BIBLE.md`
- `src/pixel-art.css`
- `src/components/pixel/PixelSpriteLibrary.jsx`
- `src/components/pixel/PrehistoricLandscape.jsx`
- `src/components/pixel/AboutPrehistoricScene.jsx`
- `src/components/pixel/ProjectTreasureScene.jsx`
- `src/data/projectArtwork.js`

**Internal logic summary:** Artwork uses deterministic React markup, reusable crisp-edged inline SVG symbols, and centralized CSS. The exact foundation colors are golden yellow `#D7CC65`, periwinkle `#6570D7`, terracotta `#E27E5A`, deep navy `#101827`, and warm cream `#FFF9ED`. CSS media queries recompose scene detail, and `prefers-reduced-motion` produces complete static frames.

**Configuration options:** Add or adjust only documented sprite, environment, chest, and reward variants, then map them by stable product ID.

**Edge cases:** New colors need real contrast verification. Touch cannot rely on hover. Meteor reset must stay hidden behind the occlusion layer. Decorative wrappers must not hide meaningful content.

**Known limitations:** The repository has static contracts for required artwork and accessibility hooks, but no rendered visual-regression, axe, screen-reader, or device-emulation suite; browser QA remains required.

## Product Case Studies

**What it does:** Gives recruiter-friendly detail for each product.

**User-facing behavior:** Each case study includes Problem, What I built, Technical architecture, Hardest engineering challenge, Privacy/security/product boundaries, Highlights, Tech stack, and Source code note. A product can also opt into a labeled live-site link.

**Important files:**

- `src/data/portfolioData.js`
- `src/components/ProductDetail.jsx`
- `src/styles.css`

**Internal logic summary:** `ProductDetail.jsx` uses a fixed `caseRows` mapping and renders each product's `caseStudy` object. When both `caseStudyLinkLabel` and `productUrl` are present, it also renders a safe new-tab link to the live product.

**Configuration options:** Update product `caseStudy`, `highlights`, `techStack`, `sourceNote`, and optional live-site fields.

**Edge cases:** Missing `caseStudy` keys would render empty or undefined text. Long highlight bullets can make the aside visually heavy.

**Known limitations:** Case study headings are fixed in the component.

## Resume Downloads

**What it does:** Offers the current master software engineering resume PDF.

**User-facing behavior:** A single centered card has a `Download PDF` button that downloads the configured master resume.

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
