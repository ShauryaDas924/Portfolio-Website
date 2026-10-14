# Prehistoric Pixel Art Bible

This document is the source of truth for the original prehistoric visual system in Shaurya Das's portfolio. It governs the decorative artwork, project scenes, motion, responsive recomposition, and accessibility behavior implemented through:

- `src/pixel-art.css`
- `src/components/pixel/PixelSpriteLibrary.jsx`
- `src/components/pixel/PrehistoricLandscape.jsx`
- `src/components/pixel/AboutPrehistoricScene.jsx`
- `src/components/pixel/ProjectTreasureScene.jsx`
- `src/data/projectArtwork.js`

The portfolio remains a professional engineering document first. The target balance is approximately 65% modern portfolio UX and 35% expressive pixel-world language. Artwork supplies atmosphere and recognition; it never replaces project names, technical facts, metrics, disclosures, navigation, resume access, or case-study copy.

## 1. Originality and Reference Boundary

All prehistoric artwork in this repository is original portfolio work built from repository-owned React markup, grid-aligned inline SVG geometry, and CSS. No external dinosaur sprite pack, game asset, generated illustration, traced character, or copied scene is part of the system.

Petalwind Developers was reviewed read-only for general engineering lessons: keep decorative art separate from semantic content, use a consistent grid, prefer deterministic CSS motion, recompose scenes at breakpoints, and provide complete reduced-motion behavior. Its implementation remains outside this repository.

Never copy from Petalwind:

- artwork, silhouettes, characters, scenes, layouts, or object proportions;
- CSS rules, class names, `clip-path` coordinates, keyframes, durations, or delays;
- midnight-blue moonlit palette, lighting direction, product metaphors, or RPG-world branding;
- logo, favicon, social card, screenshots, product data, or written brand language;
- components or stylesheets with colors swapped.

The portfolio's warm prehistoric sunset, dinosaur family, developer backpack, treasure system, reward symbols, meteor, and project mappings must remain independently authored.

If a future raster, SVG, font, texture, or third-party asset is proposed, record its source, author, license, modification history, and public-use permission before adding it. Unknown provenance means the asset is not used. Do not describe an asset as original when its provenance is uncertain.

## 2. Ownership and Separation of Concerns

| File | Responsibility |
| --- | --- |
| `src/pixel-art.css` | Pixel geometry, scene layers, chest states, CSS keyframes, responsive art rules, and reduced-motion fallbacks. |
| `src/components/pixel/PixelSpriteLibrary.jsx` | Reusable original dinosaurs, chest pieces, and rewards defined once as SVG symbols and rendered through safe `<use>` references. |
| `src/components/pixel/PrehistoricLandscape.jsx` | Hero landscape composition, developer T-Rex, chest, ferns, flowers, environmental layers, and the signature meteor. |
| `src/components/pixel/AboutPrehistoricScene.jsx` | Calm Brachiosaurus landscape that supports, but never contains, the About copy. |
| `src/components/pixel/ProjectTreasureScene.jsx` | Decorative project-card composition that selects a configured dinosaur, environment, chest treatment, and reward. |
| `src/data/projectArtwork.js` | Stable project-ID-to-artwork mapping only. It must not duplicate authoritative project claims or metrics. |
| `src/data/portfolioData.js` | Authoritative product names, descriptions, stacks, metrics, links, and public-source boundaries. Artwork code must not override these facts. |
| `src/styles.css` | Foundation and derived art tokens, modern page layout, readable typography, semantic component styling, and integration between content and decorative scenes. |

Do not turn the sprite library into a generalized game engine. The system needs deterministic presentation components, not collision, physics, a scene graph, a canvas loop, global state, or a second application architecture.

## 3. Palette and Accessible Ink

The five foundation colors are exact and intentional:

| Role | Color | Required use |
| --- | --- | --- |
| Golden yellow | `#D7CC65` | Treasure, selected highlights, reward light, and restrained interactive emphasis. |
| Periwinkle | `#6570D7` | Prehistoric sky, distant mountains, cool environmental depth, and limited interface accents. |
| Terracotta | `#E27E5A` | Dinosaurs, meteor body, warm vegetation/rock accents, and interactive details. |
| Deep navy ink | `#101827` | Primary text, sprite outlines, hard shadows, and the darkest structural surfaces. |
| Warm cream | `#FFF9ED` | Long-form reading surfaces, light environmental highlights, and high-contrast text on navy. |

The three supplied primary colors must remain present at their exact values. Derived tints and shades may support depth, but they must be centralized as tokens in `src/styles.css`, trace back to one of these roles, and be contrast-tested in their actual pairing. Do not scatter near-duplicate color literals through art components.

### Contrast contract

The deep navy is the accessible ink, not merely another background color. Measured WCAG contrast ratios for the foundation pairs are:

| Pair | Contrast | Rule |
| --- | ---: | --- |
| Deep navy / warm cream | 16.94:1 | Preferred body-text pair; passes AAA. |
| Deep navy / golden yellow | 10.76:1 | Safe for text, buttons, badges, and focus detail. |
| Deep navy / terracotta | 6.23:1 | Passes AA for normal text; still test the real component state. |
| Deep navy / periwinkle | 4.11:1 | Use for large/bold text or decoration, not small normal copy. |
| Warm cream / periwinkle | 4.13:1 | Use for large/bold text only unless a darker derived surface is provided. |
| Warm cream / terracotta | 2.72:1 | Not a normal-text pair. |
| Warm cream / golden yellow | 1.57:1 | Not a text pair. |

Accordingly:

- Use deep navy text on golden-yellow and terracotta controls.
- Use deep navy on warm-cream documentation panels.
- Use warm cream for body text on deep navy.
- Keep periwinkle primarily environmental. Small text needs deep navy or warm cream on a separately verified darker surface, not directly on the exact periwinkle.
- Never pair the three accent colors with one another for essential text.
- Focus, selection, error, open, and active states need a shape, outline, label, or positional cue in addition to color.

## 4. Typography and Reading Surfaces

- Professional display headings remain modern and immediately readable.
- Body and case-study text use the portfolio's normal body type at comfortable line height and bounded measure.
- Monospace or pixel-inspired styling is reserved for eyebrows, compact labels, status chips, metrics, and small decorative captions.
- Long technical paragraphs never use a pixel font.
- Case studies use warm-cream reading panels, restrained pixel borders, and generous spacing. They are technical documents inside the world, not game dialogue boxes.
- Existing engineering terms remain exact. Do not rename “Technical architecture,” “Hardest engineering challenge,” or other professional headings with fantasy terminology.

## 5. Pixel Grid and Hard-Edge Construction

The base authored unit is 4 CSS pixels. CSS scenery should normally use whole multiples of 4px, and SVG geometry uses integer coordinates on the declared sprite view boxes. A 2px rule is allowed for a compact UI border or interior seam when 4px would dominate the component; do not mix arbitrary fractional sprite coordinates.

Construction rules:

1. Establish the readable silhouette before interior detail.
2. Use stepped polygons, rectangular clusters, or grid-aligned pseudo-elements.
3. Keep primary outlines in deep navy and visually consistent within one scale family.
4. Build hard depth with zero-blur offset shadows and inset highlight bands.
5. Use one repeated stair-step slope inside an object rather than several incompatible diagonal rhythms.
6. Avoid blurred sprite edges, feathering, photographic noise, soft vector curves, and gradients inside character bodies.
7. Gradients are acceptable on large atmospheric planes when the visible sprite and terrain edges remain crisp.
8. Use one dominant silhouette, two or three supporting clusters, and a small highlight group. Decorative confetti is not detail.
9. Preserve empty space around headlines, controls, and technical copy.
10. If a raster sprite is ever approved, render it at integer scale with `image-rendering: pixelated`; do not pixelate logos, resume previews, or genuine product UI.

Current dinosaur, chest, and reward sprites live in a zero-sized SVG definition library. Each symbol has a fixed integer `viewBox`; visible instances use `<use>`, `shapeRendering="crispEdges"`, and `preserveAspectRatio="xMidYMid meet"`. Unknown sprite names render nothing rather than becoming arbitrary fragment references. Landscapes use the same crisp, integer-coordinate SVG technique for larger scenery. CSS owns palette variables, placement, motion, interaction states, and responsive composition.

Reusable primitives should expose deliberate variants rather than arbitrary inline styling. Project scenes select stable named variants through `src/data/projectArtwork.js`; they never infer visual identity from an array index.

## 6. Lighting and Value Hierarchy

The world is a warm prehistoric sunset, not a moonlit night.

- The principal light comes from the upper left, like low warm sunlight.
- Lit edges appear on the top and left of dinosaurs, chests, rocks, and vegetation.
- Cast shadows step down and right by 4px or 8px.
- Periwinkle supplies cool atmospheric depth in the sky and distant terrain.
- Terracotta anchors characters, the meteor, and warm foreground details.
- Golden yellow is reserved for treasure, reward, sunrise, and selected interface emphasis.
- Warm cream marks the brightest readable highlight.
- Deep navy defines silhouettes and preserves separation.

Each scene should choose one focal light and one supporting accent. Do not use all five colors at equal strength. Reward glow may brighten through stepped opacity, but it must not wash out the chest silhouette or become the sole sign that the chest is open.

## 7. Scene Layer Order

Desktop landscape compositions follow this back-to-front order:

1. warm-cream/periwinkle sky field;
2. atmospheric particles and the meteor travel plane;
3. distant volcanoes and mountain silhouettes;
4. the mountain occlusion plane that hides the meteor reset;
5. midground trees, ferns, and rock formations;
6. ground strata, trail, flowers, and foreground vegetation;
7. T-Rex, project dinosaur, chest, and reward;
8. restrained foreground accents;
9. semantic copy, navigation, and controls above and outside the decorative scene.

Decorative planes use `pointer-events: none` and are hidden from assistive technology at a safe boundary. Do not put `aria-hidden="true"` on a parent that contains a project link, label, metric, or any other meaningful content.

## 8. Dinosaur Character Family

All characters share the same grid, outline weight, light direction, eye scale, limb rhythm, and value hierarchy. They need readable silhouettes at mobile size and should remain recognizable with minor details removed.

### Developer T-Rex

The hero mascot is a curious, energetic, friendly T-Rex with a slightly mischievous expression. It carries a small developer backpack. A small laptop-shaped detail may be included when it remains legible, but it is decorative and must not imply a different product capability.

The T-Rex may use a restrained two-state idle, blink, tail nudge, or backpack bounce. Keep the baseline stable so the character does not jitter against the terrain.

### Project silhouettes

- **Triceratops:** broad, dependable silhouette for protection and systems reliability.
- **Stegosaurus:** clockwork-feeling plate rhythm for native time-control work.
- **Brachiosaurus:** calm vertical silhouette for reflection and growth.
- **T-Rex:** compact explorer silhouette for intentional browser navigation.
- **Ankylosaurus:** grounded guarded silhouette for keyword boundaries.
- **Pterodactyl:** light airborne silhouette for clearing distracting feeds.
- **Raptor:** alert pathfinder silhouette for resource discovery.

Do not animate every character at once. A static pose is a complete pose. Optional motion is limited to one or two small features such as an eye, head, tail, wing, or two-frame reaction.

## 9. Authoritative Project Artwork Mapping

`src/data/projectArtwork.js` maps the exact stable project ID to its decorative configuration. The mapping must remain aligned with `src/data/portfolioData.js` and must never introduce product claims.

| Project ID | Product | Dinosaur | Environment | Chest/reward | Meaning |
| --- | --- | --- | --- | --- | --- |
| `native-macos-website-restriction-platform` | FocusLock DNS Guard | Triceratops | Ancient forest and layered mountains | Reinforced shield chest / glowing shield | Reliability, protection, and systems engineering. |
| `native-macos-application-management-platform` | MacAppTimeGuard | Stegosaurus | Rocky clearing and prehistoric plants | Clock chest / pixel clock | Time management and native application control. |
| `evrana` | Evrana | Brachiosaurus | Flower meadow | Flower-covered chest / bloom | Reflection, growth, and recovery-support presentation. |
| `browser-manager` | Browser Manager | T-Rex | Prehistoric trail | Travel chest / compass | Navigation, browser control, and intentional use. |
| `personal-keyword-blocker` | Personal Keyword Blocker | Ankylosaurus | Canyon checkpoint | Inscribed chest / abstract rune | A symbolic content boundary; the rune is decorative, not a new product feature. |
| `discipline-feed-guard` | Discipline Feed Guard | Pterodactyl | Windy ridge | Light field chest / leaf | Reducing distracting surfaces while preserving useful routes. |
| `whoopberry` | Whoopberry | Raptor | Sunrise resource trail | Pathfinder chest / map | Discovering curated career-resource starting points. |

Every mapped scene must remain visually distinct through silhouette, terrain, chest, reward, and composition while using the same construction grammar. If a future product is added, give it an explicit stable-ID mapping. Do not silently fall back based on its position in the array.

## 10. Signature Meteor

The meteor is a slow atmospheric signature, not a destructive event.

### Visual contract

- The body uses terracotta `#E27E5A` prominently.
- Golden yellow supplies a small leading highlight or stepped trail accent.
- Deep navy provides the crisp outline.
- The trail uses a few separated stepped clusters, not a blurred tail.
- The meteor stays behind semantic content and never crosses a headline or button.
- It is decorative, `aria-hidden`, and unable to receive pointer events.

### Motion contract

- Default loop target: 58 seconds; any tuning must remain within 45–70 seconds.
- Start high in the sky and move diagonally downward with `transform`, not animated `top`/`left` layout properties.
- The last visible frame passes behind the designated mountain occlusion layer.
- Opacity may change only while the meteor is hidden by that layer, so resetting to the start is not visible.
- The meteor never reaches the ground, causes an impact, triggers an explosion, shakes the screen, or plays sound.
- The loop uses CSS keyframes. Do not use intervals, timers, `requestAnimationFrame`, or recurring React state updates.
- At narrow widths, shorten/reposition the path or present the static frame rather than crossing content.

Under `prefers-reduced-motion: reduce`, the keyframe is removed and a coherent static meteor remains high in the sky or partly behind distant terrain. Reduced motion must not leave a detached trail or an empty visual hole.

## 11. Treasure Chest and Reward States

`ProjectTreasureScene` owns one shared visual state machine expressed through CSS selectors and project configuration. It does not create interactive state in React.

### States

1. **Resting:** dinosaur faces the scene; chest is closed; reward is not required to be visible.
2. **Approach:** a small dinosaur head, tail, or body shift acknowledges the chest.
3. **Open:** the lid rotates or steps to a clearly open silhouette; a bounded golden interior becomes visible.
4. **Reward:** the configured symbol rises a short distance or appears above the open chest.
5. **Settled:** the reward and chest reach a stable readable endpoint.

The current shared transitions span 260–720ms: opacity changes begin at 260ms, the dinosaur reaction uses 420–580ms, the chest transform uses 620ms, and the reward/glow/pixel transforms use 680–720ms. Keep future tuning within the intended 400–800ms interaction envelope for the main visible motion. Pointer exit returns to rest consistently without a long delay.

### Input behavior

- `:hover` may activate the sequence only on hover-capable devices.
- `:focus-within` provides the equivalent state when the card's real project link receives keyboard focus.
- Decorative sprite pieces never enter the tab order.
- Touch users see an intelligible static chest/reward state. The first tap must continue to activate the project link; it must not be consumed merely to play animation.
- Do not add a nested button, hidden trigger, or competing link inside the card.
- Essential product information remains visible before, during, and after the effect.

Under reduced motion, remove transitions and render a coherent static state—preferably a subtly open chest with the reward visible. The state must not depend on an animation reaching its final keyframe.

## 12. Accessibility Contract

Accessibility is part of the art architecture.

- Keep semantic landmarks, heading order, section labels, navigation, project links, resume links, and contact links as ordinary HTML.
- Hide purely decorative landscape and sprite groups from the accessibility tree.
- Do not hide meaningful product copy with a decorative wrapper.
- Keep the existing visible `:focus-visible` treatment and ensure the artwork does not obscure it.
- Chest hover and dinosaur reactions must also appear through `:focus-within` without adding tab stops.
- Keep touch targets at least 44×44 CSS pixels where the design supplies a control.
- Do not make project names, metrics, stacks, source disclosures, or case-study destinations hover-only.
- Do not change focus automatically when an animation begins or ends.
- Provide no automatic sound, flashing, rapid full-screen movement, or seizure-risk effect.
- Verify text contrast in rendered states rather than assuming token names are sufficient.
- Important content must remain complete with CSS disabled or animation unavailable.

Reduced motion applies to the whole art system, not only the meteor. Disable meteor travel, dinosaur idle/reaction, foliage drift, particles, sparkle, lid motion, reward rise, and nonessential scene transitions. Normal link and focus semantics remain unchanged.

## 13. Responsive Recomposition

Do not uniformly scale the desktop world until its sprites and text become tiny.

### Desktop, above 1080px

- Show the full hero landscape beside the professional copy.
- Retain layered mountains, developer T-Rex, chest, meteor, and richer flora where space permits.
- Product cards may use the established multi-column grid.

### Wide tablet, 861–1080px

- Stack the hero copy and landscape and move the product grid to two columns.
- Reduce secondary scene density where the stacked composition needs more breathing room.

### Tablet, 701–860px

- Keep the stacked hero and two-column product grid.
- Allow the navigation to wrap without hiding destinations.
- Reduce particles and secondary vegetation.
- Reposition the meteor and preserve its mountain occlusion.
- Keep project text and chest silhouettes at readable size.

### Mobile, 700px and below

- Prioritize name/headline, introduction, project/resume actions, navigation, then artwork.
- Use one-column project cards.
- Crop or recompose the landscape; hide distant details before shrinking the focal T-Rex or chest.
- Preserve a recognizable dinosaur, chest, and reward silhouette in every card.
- Keep the meteor away from text; a static meteor is acceptable when motion would crowd the scene.
- Make touch behavior complete without hover.

### Compact mobile, 430px and below

- Remove low-value particles, small flowers, or secondary terrain clusters.
- Check long names, metrics, status labels, tech chips, and card links for wrapping.
- Keep decorative elements inside their clipping/isolation boundary so they cannot create horizontal page overflow.

Required visual QA widths are 1440, 1280, 1024, 768, 430, 390, 375, and 360px, plus at least one intermediate width such as 900px. Also test browser zoom and enlarged text; viewport snapshots alone are insufficient.

## 14. Motion and Performance Budgets

The art system has explicit budgets:

- **Animation dependencies:** zero new animation/runtime packages.
- **JavaScript animation loops:** zero recurring timers, RAF loops, or state-update loops for decoration.
- **Layout animation:** zero; motion uses `transform` and `opacity` except for static-state style changes.
- **Hero decorative DOM:** target no more than 80 primitive elements.
- **Project scene decorative DOM:** target no more than 45 primitive elements per card.
- **Always-running motion:** the meteor plus at most five small hero/environmental actors; project-card chest sequences remain dormant until hover/focus.
- **Cumulative layout shift from artwork:** zero; scenes reserve their aspect ratio or dimensions before paint.
- **Blur budget:** no large animated blur, backdrop blur, or giant animated shadow. Hard static shadows are preferred.
- **`will-change`:** use only on the actively animated meteor or another measured hotspot; never apply it to every sprite.
- **Raster assets:** noncritical future images require intrinsic dimensions and lazy loading; authentic logos and UI images must not be pixel-filtered.

Use shared keyframes and primitives when they express the same motion. Do not force unrelated dinosaurs into the same pose solely to reduce CSS. Test mobile CPU/GPU behavior in the actual page rather than claiming performance from implementation style alone.

## 15. Extending the System

When adding artwork for a future project or case study:

1. Verify the project's real purpose and existing public-safe facts in `src/data/portfolioData.js`.
2. Choose a scene metaphor that explains that purpose without inventing functionality.
3. Add a stable ID mapping in `src/data/projectArtwork.js`.
4. Reuse an existing dinosaur only when its silhouette and meaning fit; otherwise add one coherent original sprite to `PixelSpriteLibrary.jsx`.
5. Reuse shared chest mechanics and add only the required chest skin/reward variant.
6. Confirm the silhouette reads at card thumbnail size before adding interior detail.
7. Use the exact palette roles, 4px grid, hard outlines, upper-left light, and down-right shadows.
8. Keep the scene decorative and keep all technical information in semantic HTML.
9. Add hover-capable, keyboard-focus, touch, and reduced-motion states together.
10. Recompose at desktop, tablet, mobile, and compact-mobile sizes.
11. Run `npm test`, run the production build, and complete the browser QA checklist below.
12. Update this mapping and any owning documentation in the same change.

Do not expand the environment by adding unrelated sprites to empty space. A new primitive must strengthen project meaning, depth, or composition. Remove it if the focal silhouette reads better without it.

## 16. Authoring and Review Checklist

### Provenance and truth

- [ ] Artwork is original or has documented approved provenance.
- [ ] No Petalwind art, code, palette, layout, timing, logo, or branding was copied.
- [ ] Project facts and metrics still come from `portfolioData.js`.
- [ ] The visual metaphor does not imply an unverified capability.

### Pixel construction

- [ ] Silhouette is clear at mobile/card size.
- [ ] Geometry follows the 4px grid, with only justified 2px UI seams.
- [ ] Outlines, step slopes, light direction, and hard shadows are consistent.
- [ ] Color use follows the defined roles and does not scatter new hex values.
- [ ] Decorative density does not compete with copy.

### Interaction and accessibility

- [ ] Project link remains the clear primary action.
- [ ] Hover and `:focus-within` states are equivalent.
- [ ] Touch does not require or consume a preliminary hover tap.
- [ ] Decorative nodes are hidden from assistive technology at a safe boundary.
- [ ] Focus remains visible and no new tab stops or focus shifts were introduced.
- [ ] Reduced motion produces a complete static scene.
- [ ] Contrast and non-color state cues were checked in the browser.

### Responsive and performance

- [ ] Art was checked at 1440, 1280, 1024, 900, 768, 430, 390, 375, and 360px.
- [ ] No decorative element causes horizontal overflow or overlaps readable text.
- [ ] Scene details are recomposed or removed rather than indiscriminately scaled.
- [ ] Meteor reset remains hidden behind the occlusion layer.
- [ ] No runtime animation dependency, recurring state loop, or layout animation was added.
- [ ] Artwork reserves space and does not cause layout shift.

### Regression validation

- [ ] `npm test` passes all ten repository integrity tests.
- [ ] `npm run build` succeeds.
- [ ] Navigation anchors, project links, resume download, GitHub, LinkedIn, email, and public product links still work.
- [ ] All seven stable project IDs select the intended artwork.
- [ ] Project names, descriptions, stacks, verified metrics, and source disclosures are unchanged unless separately verified.
- [ ] Noindex meta tags, `robots.txt`, and `_headers` remain intact.

## 17. Known Limitations

- Static integrity tests protect required artwork and navigation/touch/contrast/motion hooks, but rendered visual-regression, axe, screen-reader, device-emulation, and animation-timing checks remain manual.
- CSS artwork disappears when styles do not load, so the semantic content layer must always stand on its own.
- The meteor follows an authored presentation path, not physics, and is intentionally noninteractive.
- Touch layouts use a complete static treasure state rather than requiring a hover-equivalent animation.
- System font substitution can change wrapping and must be included in responsive review.
- The current implementation uses repository-authored React, inline SVG, and CSS geometry and does not rely on external sprite assets.
