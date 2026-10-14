# Material-Infused Geometric Art

This guide extends [Organic Geometric Mosaic Design System](ORGANIC_GEOMETRIC_MOSAIC_DESIGN.md). The portfolio's authored silhouettes, interconnected cells, palette, placements, and interactions remain the foundation. Material marks are optional, restrained surface detail *inside* illustrated objects. At normal viewing distance, the mosaic shape must still lead.

## Reference and provenance

Four photographs supplied by Shaurya provided structural observations, not production assets. No photograph, crop, traced outline, image-derived texture, or photographic CSS background belongs in `src/`, `public/`, or the production bundle. The rendered material geometry is original SVG artwork. Keep the portfolio's prehistoric mosaic identity separate from Petalwind Developers' pixel-RPG identity.

| Reference | Observed structure | Illustrated family | Primary use |
| --- | --- | --- | --- |
| `IMG_1030.JPG` | Uneven small raised marks and sparse clusters | `grain` | Dinosaur skin, selected rock and ground planes |
| `IMG_1031.JPG` | Closely spaced directional, connected ridges | `woven` | Treasure-chest lining and small fabric details; a much looser directional treatment can suggest bark |
| `IMG_1032.JPG` | Larger irregular patches, layered edges, and short cracks | `weathered` | Meteor core, mountains, rocks, selected chest panels |
| `IMG_1033.JPG` | Overlapping soft strands with uneven density | `fiber` | Grass, ferns, moss, and selected foliage |

These photographs do not set the website's color palette. Keep golden yellow `#D7CC65`, periwinkle `#6570D7`, and terracotta `#E27E5A` exact. Material marks use controlled light/dark variants of their host surfaces; they should never look like opaque gray or blue photo overlays.

## Visual hierarchy and material choices

1. **Structural geometry:** Original silhouettes and shared mosaic-cell boundaries communicate the object.
2. **Plane shading:** Warm/cool cell colors establish volume and the scene's light direction.
3. **Material detail:** Small marks identify skin, stone, wood, cloth, and plants at closer inspection.

| Object or region | Material approach | Avoid |
| --- | --- | --- |
| T-Rex and other dinosaurs | Fine, curated `grain` within body regions. Use less on faces and bellies; vary species and plate/frill density without changing silhouettes. | Uniform dot fields, dirty/diseased appearance, marks over facial details or cell outlines. |
| Meteor core | `weathered` patches and a few short fractures within the existing angular core. The trail remains simpler. | Copying a peeling-wall shape, excessive glow, independently animated scratches. |
| Chest wood and lid | Low-density weathering and directionally appropriate marks that travel with each chest group. | Making panels look damaged or placing marks across fittings. |
| Chest lining | Fine `woven` ridges clipped to the visible interior. | Blue cloth color, stripes across wood or metal, detached texture during opening. |
| Mountains and rocks | Restrained `weathered` planes; `grain` where scale supports it. | Replacing facets with photographic stone or hiding mountain depth. |
| Bark | Sparse directional marks derived from the woven family's rhythm, adapted to a woody surface. | Cloth-like crosshatching on trunks. |
| Ground | Sparse grain inside the existing ground geometry. | Replacing the large connected mosaic background with page-wide noise. |
| Foliage, grass, moss | Small `fiber` clusters following each leaf or plant group. | Full carpet density or marks extending into the sky. |
| Clouds, sky, tiny reward icons, metal | Leave clean or nearly clean. | Texture for its own sake. |

Case-study paragraphs, technology badges, links, and other reading surfaces stay clean. The sitewide `src/assets/mosaic-network.svg` motif remains a faint structural layer, not a material texture.

## Construction and component contract

The shared source of material geometry is `src/components/pixel/MaterialTextures.jsx`. Its `MaterialTexture` component accepts `material` (`grain`, `weathered`, `woven`, or `fiber`), `x`, `y`, `width`, `height`, `density`, `tone`, `opacity`, `clipPath`, and `className`. It renders deterministic, authored SVG marks in the coordinate space of the existing illustration. Scenes choose the host region, material, density, tone, and clipping; the shared component owns the four families' visual grammar. Do not scatter unrelated procedural dots across scene files or use runtime randomness.

- **Grain:** short uneven flecks and small irregular clusters, with quiet gaps and varied orientation. Preserve facial contours and mosaic seams.
- **Weathered:** a few asymmetric filled patches, stepped edges, and short crack-like strokes. Keep them inside a geological or wood plane; avoid long strokes over cell boundaries.
- **Woven:** paired or staggered directional ridges and short connective marks. Match the host material's orientation and use less detail when the lining is small.
- **Fiber:** short overlapping curved strands in loose clusters, following plant direction. Let the underlying leaf or grass contour remain visible.

`density` is a deliberate level-of-detail choice, not random sampling. `tone` follows the host palette; `opacity` keeps the texture subordinate to its base fill. Textures should be removable without changing object shape or link behavior. The `pixel/` path and some existing class names remain for import compatibility; the rendered art is not square-pixel artwork.

## Clipping and SVG identifier safety

Clip each material layer to its host silhouette, cell, or visible lining with an SVG `clipPath` reference such as `url(#host-region-id)`. Keep the clipped marks in the same transformed group as the body part or chest lid they belong to. Draw cell boundaries and important expression/outline details above the material layer so marks cannot erase them. Texture layers must not introduce pale seams between adjoining cells.

Multiple heroes, About illustrations, and project cards may appear in one document. Any SVG `clipPath`, `mask`, or `pattern` ID must be stable and unique in the rendered page, including repeated scene instances. Prefer an existing stable symbol-scoped ID where its scope is truly singular; otherwise generate a deterministic instance-safe ID compatible with React. Do not use runtime random IDs. Check references after a production build and in the browser; an unresolved clip must not hide the base illustration.

The current `MosaicSurfaceTexture` helper in `MosaicEnvironmentPrimitives.jsx` builds host clips with React `useId`; reusable dinosaur symbols use stable symbol-scoped silhouette IDs. Keep those scopes distinct when adding another repeated illustration.

## Density and responsive behavior

| Rendered scale | Guidance |
| --- | --- |
| Large hero art | Full but restrained regional marks; inspect skin and meteor both at normal size and enlarged. |
| Medium About/project scenes | Moderate marks on the main subject and fewer marks on distant scenery. |
| Small icons or tiny rewards | Minimal texture or none; silhouette and symbol meaning take priority. |
| Narrow mobile | Reduce density where needed to prevent moiré and preserve crisp anatomy; retain readable object shapes and no horizontal overflow. |

Set density based on the *rendered size*, not only the source SVG viewBox. A pattern that looks subtle when zoomed in may disappear or alias in a project card. Check 1440, 1280, 1024, 768, 430, 390, 375, and 360px viewports when changing shared geometry. Recompose the art at breakpoints rather than uniformly shrinking all detail.

The component's `low`, `medium`, and `high` levels build progressively more authored marks. `src/pixel-art.css` hides the high tier below 700px and the medium tier inside compact treasure scenes below 430px. Keep these thresholds aligned with the rendered artwork when adding detail.

## Motion, accessibility, and performance

Material detail moves with its parent object. The meteor's weathering stays in its core while the existing slow trajectory and mountain occlusion remain intact. Chest lid marks move with the lid; lining stays with the interior. Plant detail follows the plant group. Do not animate individual flecks or regenerate them each frame. `prefers-reduced-motion: reduce` must leave a complete static scene.

All material marks are decorative, non-focusable, and unable to intercept links or pointer events. Decorative scene wrappers stay `aria-hidden="true"`; product names, facts, destinations, and case studies remain semantic HTML outside the art. If a texture does not render, the base object, navigation, and chest link still work. Contrast and visible keyboard focus remain interface responsibilities, unaffected by texture opacity.

Favor small curated SVG path sets, reused component logic, clipped groups, and CSS transform/opacity animation at object level. Avoid large bitmap overlays, generic noise filters, thousands of nodes, expensive animated SVG filters, animation packages, JavaScript loops, and repeated state updates. Compare bundle size and rendered behavior with the pre-material baseline; simplify marks that add little visual value.

## Extending and reviewing

1. Identify the object's physical material and its role at actual rendered size. Decide if it needs texture at all.
2. Preserve its current silhouette, facet geometry, expression, palette, placements, and interactions.
3. Add the appropriate `MaterialTexture` family inside an existing or uniquely identified clip region. Choose tone, opacity, and density by the host surface.
4. Place the material layer with the moving SVG group, beneath outlines and important small details.
5. Compare normal and enlarged views, desktop and mobile widths, chest resting/open/focus states, meteor motion, and reduced motion. Check no clipping leaks, seams, moiré, blocked links, or lost expression.
6. Run `npm test` and `npm run build`. Review bundle impact and update this guide if the contract changes.

The Node integrity suite protects selected source contracts; it is not a visual-regression, accessibility audit, screen-reader test, or device emulation suite. Browser inspection remains necessary for density, material appropriateness, clipping, and small-scale readability. The four supplied photos remain external references and are not deployed with the site.
