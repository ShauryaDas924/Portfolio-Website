# Organic Geometric Mosaic Design System

## Identity and provenance

The personal portfolio is a warm prehistoric sunset built from original, irregular, interconnected geometry. A photograph of quilted fabric supplied by Shaurya inspired the uneven cell sizes, shared borders, rounded polygons, and occasional elongated forms. The photograph is a conceptual reference only: it is not copied, traced, or deployed as a site asset.

The portfolio and Petalwind Developers have separate visual identities. Do not import Petalwind artwork, CSS, coordinates, palette, characters, animations, or layouts into this repository. Portfolio artwork is authored in React/SVG/CSS and contains no external dinosaur pack or stock illustrations.

Professional content has priority. Project facts, technical case studies, resume access, navigation, and contact links remain semantic HTML outside decorative scenes. Art supports recognition and atmosphere without becoming a required interaction.

## Palette

| Role | Exact base color | Use |
| --- | --- | --- |
| Golden yellow | `#D7CC65` | Treasure, warm light, selected markings and interface accents |
| Periwinkle | `#6570D7` | Sky, mountains, atmospheric depth and cool facets |
| Terracotta | `#E27E5A` | Main T-Rex, meteor and warm facets |
| Deep navy | `#101827` | Text, outlines and structural boundaries |
| Warm cream | `#FFF9ED` | Reading surfaces and bright highlights |

Lighter and darker variants are allowed for shading and contrast, but the first three colors must remain exact. The site uses a sunset atmosphere and readable warm cream case-study panels.

## Geometric grammar

Every major illustrated object starts with a recognizable outer silhouette. Internal cells are then curated to follow its anatomy or planes. Repeated geometry must be deterministic across renders; do not introduce runtime randomness or a rendering engine for decorative art.

### Soft organic mosaic

Use soft irregular cells for dinosaurs, foliage, clouds, rolling terrain, and some background networks. Mix small, medium, and elongated cells. Prefer gently curved boundaries and varied vertex counts rather than a square grid, regular hexagons, or triangle-only facets. Concentrate detail around expressive features and simplify small or distant objects. A dinosaur must remain recognizable when the cell boundaries are hidden.

### Angular geometric mosaic

Use straighter facets and directional shading for treasure chests, reward symbols, meteor fragments, rocks, and mountain planes. Angular facets still sit within clear silhouettes: a chest needs a lid, body, metal bands and lock; a meteor needs a compact core and directional trail. The chest and meteor should look like part of the same world as the dinosaurs through shared outline weight, light direction and palette.

### Boundaries and shading

Prefer a dark underlay, shared boundary paths, or clipped facets so adjacent cells meet cleanly without white antialiasing seams. Interior lines should be lighter than the silhouette outline. Avoid thick independent borders around every cell. Light generally arrives from above and the warm side of the scene; darker facets settle toward lower or receding planes. Preserve color contrast for small expressions and reward icons at their rendered sizes.

## Component architecture

- `src/components/pixel/PixelSpriteLibrary.jsx` registers reusable deterministic SVG symbols for the existing dinosaur family, chest states, backpack, laptop and seven reward symbols. The `pixel` path and exported names are retained as compatibility interfaces; the rendered geometry is mosaic art.
- `src/components/pixel/PrehistoricLandscape.jsx` composes the hero with sky, clouds, faceted mountains, vegetation, interconnected ground, the developer T-Rex, chest and meteor.
- `src/components/pixel/AboutPrehistoricScene.jsx` composes a quieter Brachiosaurus vignette.
- `src/components/pixel/ProjectTreasureScene.jsx` selects a decorative environment, dinosaur, chest treatment and reward by stable product ID through `src/data/projectArtwork.js`.
- `src/components/pixel/MosaicEnvironmentPrimitives.jsx` provides reusable authored cloud, tree, fern, rock, flower and ground geometry across scenes.
- `src/assets/mosaic-network.svg` is the original, low-contrast shared-border network reused as a CSS mask around selected site regions.
- `src/pixel-art.css` owns illustration placement, palette variants, CSS motion, interaction states, responsive recomposition and reduced-motion states. `src/styles.css` owns the page layout, reading surfaces and restrained mosaic accents.

The SVG symbol registry keeps repeated characters and rewards in one place. CSS animations operate on logical objects or groups, never on dozens of individual cells. Decorative wrappers use `aria-hidden="true"` and cannot create focus stops.

## Project mapping

| Product | Dinosaur | Environment | Chest | Reward |
| --- | --- | --- | --- | --- |
| FocusLock DNS Guard | Triceratops | Forest | Reinforced | Faceted shield |
| MacAppTimeGuard | Stegosaurus | Rocky | Timed | Geometric clock |
| Evrana | Brachiosaurus | Meadow | Vine | Organic flower |
| Browser Manager | T-Rex | Trail | Explorer | Angular compass |
| Personal Keyword Blocker | Ankylosaurus | Canyon | Sealed | Rune |
| Discipline Feed Guard | Pterodactyl | Ridge | Guard | Leaf |
| Whoopberry | Raptor | Sunrise | Archive | Map |

`portfolioData.js` remains the only authority for product facts. `projectArtwork.js` contains decorative choices only. Unknown IDs use its generic art fallback without changing text or destinations.

## Environment and background pattern

The hero uses broad periwinkle mountain facets, lower-density organic ground cells, recognizable trees and ferns, and a restrained warm sky. The ground is the most direct interpretation of the fabric's connected cell network. Other website regions reuse a much lighter irregular network as a supporting motif in the hero, project illustration panels, occasional section transitions, case-study header margins and footer. Do not place high-contrast cells beneath long technical paragraphs.

Use a curated SVG network or a deterministic equivalent. Mix cell sizes and directions; avoid obvious repeat seams, regular honeycomb grids and noisy shattered-glass effects. Buttons and cards stay conventional interactive shapes with small geometric accents and at least 44px targets where interactive.

## Motion and interaction

The meteor has an angular core, a small directional fragment trail and subtle ambient light. Its CSS animation travels diagonally for approximately 45–70 seconds per cycle. It is painted behind the distant mountain plane so it disappears and resets under occlusion. It never strikes the ground or covers text and actions.

Project chests retain the existing CSS-driven state model: resting, dinosaur reaction, opened lid, illuminated facets and visible reward. Hover-capable pointers and keyboard `:focus-within` reveal equivalent states in approximately 400–800ms. Touch visitors can follow the product or case-study link in one tap without waiting for hover. No decorative piece is itself a separate interactive control.

Under `prefers-reduced-motion: reduce`, stop meteor travel, dinosaur idle motion, chest movement, particles and other decorative transitions while leaving a complete static scene. Motion never carries product information or changes link behavior.

## Responsive and performance rules

Desktop can show the full landscape and more background detail. Tablet removes secondary details and adjusts spacing. Mobile prioritizes name, headline, primary actions and project information, then recomposes the artwork so the T-Rex, chest and reward remain legible. Do not uniformly shrink the desktop scene until cells become visual noise. Keep decorative objects away from copy and avoid horizontal overflow.

Prefer SVG `<use>` symbols, authored paths and CSS transforms/opacity. Avoid layout animation, expensive continuous filters, animation libraries, canvases, recurring React state updates and large repeated inline SVGs. Keep the site static and dependency-light.

## Extending the system

To add a dinosaur, draw and review its silhouette first, fit organic cells to anatomical regions, add expression and relevant accessories, register one deterministic symbol, then check it at actual hero and card sizes. To add a project illustration, choose a meaningful existing or newly authored dinosaur/environment/chest/reward combination, update the exact project-ID mapping, and verify the symbol references and touch/focus states. Never infer project capabilities from the art.

Review the result in a browser at desktop, tablet and narrow mobile widths. Check object recognition, shared cell edges, text contrast, keyboard focus, one-tap links, reduced motion, and any horizontal overflow. Run `npm test` and `npm run build` after changes.
