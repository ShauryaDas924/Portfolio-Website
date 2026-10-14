import { MaterialTexture } from './MaterialTextures.jsx';

/**
 * A small, deterministic SVG mosaic system. The published sprite names and
 * viewBoxes stay stable so the hero and project scenes can reuse their existing
 * layout and interaction code. Every cell is placed for the silhouette it
 * belongs to; the dark underlay prevents antialiasing gaps between facets.
 */
const SPRITE_VIEW_BOXES = Object.freeze({
  't-rex': '0 0 64 48',
  triceratops: '0 0 64 48',
  stegosaurus: '0 0 64 48',
  brachiosaurus: '0 0 64 48',
  ankylosaurus: '0 0 64 48',
  pterodactyl: '0 0 64 40',
  raptor: '0 0 64 48',
  chest: '0 0 40 36',
  'chest-open': '0 0 40 36',
  backpack: '0 0 32 36',
  laptop: '0 0 40 32',
  'reward-shield': '0 0 32 32',
  'reward-clock': '0 0 32 32',
  'reward-flower': '0 0 32 32',
  'reward-compass': '0 0 32 32',
  'reward-rune': '0 0 32 32',
  'reward-leaf': '0 0 32 32',
  'reward-map': '0 0 32 32',
});

export const PIXEL_SPRITE_NAMES = Object.freeze(Object.keys(SPRITE_VIEW_BOXES));
export const PIXEL_SPRITE_VIEW_BOXES = SPRITE_VIEW_BOXES;

const spriteStyles = [
  '.pixel-ink{fill:var(--pixel-ink,var(--navy,#101827))}',
  '.pixel-shadow{fill:var(--pixel-shadow,var(--pixel-terracotta-shadow,#9C4B3C))}',
  '.pixel-mid{fill:var(--pixel-mid,var(--terracotta,#E27E5A))}',
  '.pixel-light{fill:var(--pixel-light,var(--pixel-terracotta-light,#F1A174))}',
  '.pixel-highlight{fill:var(--pixel-highlight,var(--pixel-sun-glow,#FFF0BD))}',
  '.pixel-accent{fill:var(--pixel-accent,var(--periwinkle,#6570D7))}',
  '.pixel-gold{fill:var(--pixel-gold,var(--gold,#D7CC65))}',
  '.pixel-cream{fill:var(--pixel-cream,var(--cream,#FFF9ED))}',
  '.mosaic-base{fill:var(--pixel-ink,var(--navy,#101827))}',
  '.mosaic-cell{stroke:var(--pixel-ink,var(--navy,#101827));stroke-opacity:.28;stroke-width:.42;stroke-linejoin:round}',
  '.mosaic-outline{fill:none;stroke:var(--pixel-ink,var(--navy,#101827));stroke-width:1.25;stroke-linejoin:round;stroke-linecap:round}',
  '.mosaic-detail{fill:none;stroke:var(--pixel-ink,var(--navy,#101827));stroke-width:.82;stroke-linecap:round;stroke-linejoin:round}',
].join('');

function MosaicFigure({ id, silhouette, cells, texture, children, strokeWidth }) {
  const clipId = 'sd-mosaic-clip-' + id;

  return (
    <>
      <clipPath id={clipId}>
        <path d={silhouette} />
      </clipPath>
      <path className="mosaic-base" d={silhouette} />
      <path className="pixel-mid" d={silhouette} />
      <g clipPath={'url(#' + clipId + ')'}>
        {cells.map(([tone, d], index) => (
          <path key={index} className={'mosaic-cell pixel-' + tone} d={d} style={texture ? { stroke: 'none' } : undefined} />
        ))}
      </g>
      {texture}
      {texture && (
        <g clipPath={'url(#' + clipId + ')'}>
          {cells.map(([, d], index) => (
            <path key={index} className="mosaic-cell" d={d} fill="none" />
          ))}
        </g>
      )}
      <path
        className="mosaic-outline"
        d={silhouette}
        strokeWidth={strokeWidth}
      />
      {children}
    </>
  );
}

/* The paths in each set follow the dinosaur's anatomy instead of a grid. */
const dinosaurs = {
  't-rex': {
    silhouette: 'M3 18 Q9 18 15 22 L19 24 Q23 19 31 19 Q35 19 37 15 L39 11 Q42 5 49 5 L55 5 Q61 6 61 11 L61 18 Q61 21 57 22 L53 23 L51 27 L44 28 L42 33 L39 34 L39 43 L32 43 L30 36 L26 35 L22 36 L20 43 L13 43 L15 35 Q11 32 10 29 Q5 27 3 18Z',
    cells: [
      ['light', 'M2 17 Q9 17 15 22 L13 26 Q7 23 2 23Z'],
      ['gold', 'M13 20 L20 23 L17 29 L12 27Z'],
      ['shadow', 'M3 23 L13 26 L11 30 L5 28Z'],
      ['light', 'M18 23 Q22 19 27 19 L26 26 L20 29 L16 26Z'],
      ['gold', 'M27 19 L33 19 L32 25 L26 26Z'],
      ['shadow', 'M33 18 L39 17 L39 24 L32 25Z'],
      ['light', 'M20 29 L26 26 L29 30 L23 34 L16 32Z'],
      ['mid', 'M26 26 L32 25 L34 30 L29 30Z'],
      ['light', 'M32 25 L39 24 L40 28 L34 30Z'],
      ['shadow', 'M16 32 L23 34 L21 37 L14 36Z'],
      ['gold', 'M23 34 L29 30 L31 36 L26 37 L21 37Z'],
      ['shadow', 'M29 30 L34 30 L37 35 L31 36Z'],
      ['light', 'M34 30 L40 28 L43 31 L39 35 L37 35Z'],
      ['light', 'M18 34 L22 36 L20 42 L14 42Z'],
      ['shadow', 'M22 36 L26 37 L24 43 L19 44Z'],
      ['gold', 'M30 36 L34 34 L36 42 L32 44Z'],
      ['shadow', 'M35 34 L39 34 L40 44 L36 44Z'],
      ['gold', 'M38 14 L42 9 L45 13 L42 18 L37 19Z'],
      ['light', 'M42 9 Q46 5 51 5 L50 12 L45 13Z'],
      ['mid', 'M51 5 L57 5 L56 12 L50 12Z'],
      ['light', 'M57 5 Q62 7 62 12 L56 12Z'],
      ['shadow', 'M42 18 L45 13 L50 12 L51 19 L45 21Z'],
      ['gold', 'M50 12 L56 12 L58 17 L51 19Z'],
      ['light', 'M56 12 L62 12 L62 18 L58 17Z'],
      ['shadow', 'M37 19 L42 18 L45 21 L41 26 L36 25Z'],
      ['mid', 'M45 21 L51 19 L53 24 L48 28 L41 26Z'],
      ['light', 'M51 19 L58 17 L61 20 L53 24Z'],
      ['gold', 'M41 26 L48 28 L44 32 L40 30Z'],
      ['shadow', 'M48 28 L53 24 L52 28 L45 31Z'],
      ['light', 'M14 27 L18 29 L16 33 L10 30Z'],
      ['shadow', 'M26 19 L29 17 L34 19 L32 23Z'],
      ['gold', 'M45 8 L49 6 L50 10 L47 12Z'],
      ['shadow', 'M55 20 L61 18 L59 22 L53 24Z'],
      ['mid', 'M26 37 L30 36 L32 42 L24 42Z'],
      ['gold', 'M36 25 L41 26 L40 30 L35 29Z'],
      ['light', 'M15 22 L20 23 L19 28 L14 26Z'],
      ['mid', 'M30 30 L34 30 L35 34 L31 36Z'],
      ['shadow', 'M39 11 L42 9 L42 18 L37 18Z'],
    ],
  },
  triceratops: {
    silhouette: 'M2 26 L9 23 Q13 18 22 18 L36 18 L40 13 L44 8 L49 12 L51 15 L56 14 L60 17 L63 18 L57 21 L61 25 L63 27 L58 29 L53 29 Q50 33 44 34 L40 35 L39 43 L32 43 L31 36 L23 36 L21 43 L14 43 L15 36 Q9 33 6 30 L2 29Z',
    cells: [
      ['shadow', 'M1 24 L11 22 L13 28 L5 32Z'],
      ['light', 'M11 22 Q17 18 23 18 L22 24 L15 29Z'],
      ['gold', 'M23 18 L30 18 L28 25 L22 24Z'],
      ['light', 'M30 18 L38 18 L37 25 L28 25Z'],
      ['shadow', 'M15 29 L22 24 L25 30 L20 35 L11 33Z'],
      ['mid', 'M22 24 L28 25 L31 30 L25 30Z'],
      ['light', 'M28 25 L37 25 L39 31 L31 30Z'],
      ['shadow', 'M20 35 L25 30 L31 35 L24 38 L16 37Z'],
      ['gold', 'M31 30 L39 31 L43 35 L32 37 L25 35Z'],
      ['shadow', 'M17 36 L23 37 L21 44 L14 44Z'],
      ['light', 'M31 36 L37 35 L40 43 L32 44Z'],
      ['accent', 'M40 13 L44 8 L49 12 L48 18 L43 20Z'],
      ['light', 'M43 20 L48 18 L52 21 L49 28 L42 27Z'],
      ['gold', 'M49 12 L54 14 L57 20 L52 21 L48 18Z'],
      ['mid', 'M52 21 L59 20 L58 28 L49 28Z'],
      ['shadow', 'M39 26 L43 20 L49 28 L44 34 L38 31Z'],
      ['light', 'M7 25 L13 28 L11 32 L4 29Z'],
      ['gold', 'M34 18 L40 13 L43 20 L37 25Z'],
      ['accent', 'M39 31 L44 34 L40 38 L36 35Z'],
    ],
  },
  stegosaurus: {
    silhouette: 'M3 27 Q8 25 12 23 L17 19 L19 10 L26 16 L30 8 L36 16 L42 10 L47 19 Q54 20 59 24 L62 28 Q61 32 55 33 L46 34 L43 43 L36 43 L35 36 L25 36 L21 43 L14 43 L15 36 Q9 33 5 31Z',
    cells: [
      ['shadow', 'M3 26 L13 23 L14 30 L5 32Z'],
      ['light', 'M13 23 L21 19 L23 26 L14 30Z'],
      ['gold', 'M21 19 L29 19 L29 26 L23 26Z'],
      ['light', 'M29 19 L37 18 L36 26 L29 26Z'],
      ['shadow', 'M37 18 L45 19 L46 27 L36 26Z'],
      ['light', 'M14 30 L23 26 L27 32 L19 36 L12 34Z'],
      ['mid', 'M23 26 L29 26 L33 33 L27 32Z'],
      ['gold', 'M29 26 L36 26 L39 32 L33 33Z'],
      ['light', 'M36 26 L46 27 L48 32 L39 32Z'],
      ['shadow', 'M19 36 L27 32 L30 36 L24 39 L15 37Z'],
      ['mid', 'M30 36 L39 32 L45 35 L37 39Z'],
      ['shadow', 'M15 36 L22 38 L21 44 L14 44Z'],
      ['light', 'M36 37 L44 34 L44 43 L36 44Z'],
      ['gold', 'M46 20 L54 21 L52 27 L46 27Z'],
      ['mid', 'M54 21 L62 27 L59 32 L52 27Z'],
      ['accent', 'M17 19 L19 10 L26 16 L24 21Z'],
      ['accent', 'M27 19 L30 8 L36 16 L35 20Z'],
      ['accent', 'M38 18 L42 10 L47 19 L45 23Z'],
      ['shadow', 'M24 20 L26 16 L30 20 L29 24Z'],
      ['gold', 'M35 18 L36 16 L42 19 L38 22Z'],
    ],
  },
  brachiosaurus: {
    silhouette: 'M3 28 Q8 25 14 23 Q22 20 31 22 L39 24 L41 21 L43 9 Q44 5 49 4 L55 4 Q60 5 61 9 L60 14 L54 16 L51 14 L49 29 L47 35 L46 43 L39 43 L38 36 L27 36 L25 43 L17 43 L18 36 Q11 34 7 31 L3 30Z',
    cells: [
      ['shadow', 'M3 27 L14 23 L15 30 L7 32Z'],
      ['light', 'M14 23 Q20 20 25 21 L24 27 L15 30Z'],
      ['gold', 'M25 21 L31 22 L32 28 L24 27Z'],
      ['light', 'M31 22 L39 24 L39 30 L32 28Z'],
      ['shadow', 'M15 30 L24 27 L28 33 L20 36 L10 33Z'],
      ['mid', 'M24 27 L32 28 L35 34 L28 33Z'],
      ['light', 'M32 28 L39 30 L42 35 L35 34Z'],
      ['gold', 'M39 24 L44 21 L48 27 L43 34 L39 30Z'],
      ['shadow', 'M20 36 L28 33 L30 37 L25 43 L17 43Z'],
      ['light', 'M38 35 L44 34 L46 43 L39 43Z'],
      ['accent', 'M43 9 L47 6 L50 10 L49 17 L42 18Z'],
      ['light', 'M47 6 L53 4 L54 10 L50 10Z'],
      ['gold', 'M54 4 L61 8 L60 13 L54 10Z'],
      ['shadow', 'M42 18 L49 17 L48 26 L41 24Z'],
      ['light', 'M49 17 L54 15 L52 26 L48 29Z'],
      ['gold', 'M44 10 L47 6 L48 14 L43 16Z'],
      ['mid', 'M7 31 L15 30 L18 35 L11 35Z'],
      ['shadow', 'M42 34 L48 29 L47 36 L43 38Z'],
    ],
  },
  ankylosaurus: {
    silhouette: 'M3 26 L8 23 L13 26 Q17 19 23 18 L25 13 L30 17 L36 12 L41 18 Q49 18 53 23 L58 24 L62 22 L63 29 L58 32 L53 31 Q49 35 42 36 L42 43 L35 43 L34 37 L24 37 L22 43 L15 43 L16 36 Q11 33 9 30 L3 31Z',
    cells: [
      ['gold', 'M2 24 L9 23 L12 28 L8 32 L2 30Z'],
      ['shadow', 'M12 27 L18 21 L22 26 L18 33 L10 31Z'],
      ['light', 'M18 21 L25 18 L28 25 L22 26Z'],
      ['accent', 'M25 18 L30 17 L34 24 L28 25Z'],
      ['light', 'M30 17 L37 17 L39 25 L34 24Z'],
      ['gold', 'M37 17 L44 19 L46 26 L39 25Z'],
      ['shadow', 'M18 33 L22 26 L28 31 L25 37 L16 36Z'],
      ['mid', 'M22 26 L28 25 L33 31 L28 31Z'],
      ['light', 'M28 25 L34 24 L39 31 L33 31Z'],
      ['shadow', 'M34 24 L39 25 L45 31 L39 31Z'],
      ['gold', 'M39 25 L46 26 L51 31 L45 34Z'],
      ['light', 'M45 20 L53 23 L52 29 L46 26Z'],
      ['mid', 'M52 29 L58 24 L63 27 L58 32Z'],
      ['shadow', 'M25 37 L34 36 L36 43 L22 43Z'],
      ['light', 'M35 36 L42 35 L43 43 L35 43Z'],
      ['accent', 'M22 18 L25 13 L30 17 L28 21Z'],
      ['accent', 'M32 17 L36 12 L41 18 L38 22Z'],
      ['gold', 'M10 28 L14 26 L18 30 L14 34Z'],
      ['shadow', 'M46 29 L52 29 L50 34 L43 36Z'],
    ],
  },
  pterodactyl: {
    silhouette: 'M2 7 Q13 10 23 15 L30 14 L34 9 L38 12 L43 13 L47 10 L53 12 L62 14 L54 18 L58 23 L49 22 L42 20 L39 26 L35 33 L31 27 L26 21 L18 24 L10 22 L5 17Z',
    cells: [
      ['light', 'M2 7 L13 10 L12 16 L5 17Z'],
      ['gold', 'M13 10 L23 15 L20 20 L12 16Z'],
      ['shadow', 'M5 17 L12 16 L18 24 L10 22Z'],
      ['light', 'M20 20 L26 17 L30 21 L26 22 L18 24Z'],
      ['shadow', 'M23 15 L30 14 L30 21 L26 17Z'],
      ['accent', 'M30 14 L34 9 L38 12 L36 19 L30 21Z'],
      ['light', 'M36 19 L38 12 L43 13 L44 19 L39 26Z'],
      ['gold', 'M39 26 L44 19 L49 22 L42 23 L35 33Z'],
      ['shadow', 'M31 21 L36 19 L39 26 L35 33Z'],
      ['light', 'M43 13 L47 10 L53 12 L51 17 L44 19Z'],
      ['gold', 'M51 17 L62 14 L54 18 L58 23 L49 22Z'],
      ['mid', 'M12 16 L20 20 L18 24 L10 22Z'],
      ['accent', 'M26 17 L30 14 L34 17 L30 21Z'],
      ['shadow', 'M44 19 L51 17 L49 22 L42 20Z'],
    ],
  },
  raptor: {
    silhouette: 'M2 16 Q10 19 18 22 L26 23 Q31 20 35 17 L39 11 Q42 8 48 8 L55 9 Q60 10 61 15 L61 20 L55 22 L49 23 L45 27 L40 29 L39 33 L43 38 L41 42 L35 42 L34 39 L36 35 L31 32 L26 32 L22 35 L21 43 L14 43 L16 35 L12 31 L8 27 L3 25Z',
    cells: [
      ['light', 'M2 16 L11 19 L13 25 L3 25Z'],
      ['gold', 'M11 19 L19 22 L18 28 L13 25Z'],
      ['shadow', 'M18 22 L26 23 L25 29 L18 28Z'],
      ['light', 'M26 23 L35 17 L34 25 L25 29Z'],
      ['shadow', 'M13 25 L18 28 L17 33 L8 27Z'],
      ['mid', 'M18 28 L25 29 L27 33 L22 35 L17 33Z'],
      ['gold', 'M25 29 L34 25 L35 30 L27 33Z'],
      ['light', 'M34 25 L40 22 L43 28 L35 30Z'],
      ['shadow', 'M15 34 L22 35 L21 43 L14 43Z'],
      ['light', 'M34 33 L39 32 L43 38 L41 42 L35 41Z'],
      ['gold', 'M35 17 L40 11 L44 15 L40 22 L34 25Z'],
      ['light', 'M40 11 Q44 8 49 8 L49 14 L44 15Z'],
      ['mid', 'M49 8 L56 9 L55 15 L49 14Z'],
      ['light', 'M56 9 L62 14 L61 20 L55 15Z'],
      ['shadow', 'M40 22 L44 15 L49 14 L50 21 L45 27Z'],
      ['gold', 'M49 14 L55 15 L57 21 L50 21Z'],
      ['light', 'M50 21 L57 21 L55 24 L45 27Z'],
      ['accent', 'M31 31 L36 29 L41 33 L39 36 L35 34Z'],
      ['shadow', 'M22 35 L27 33 L25 39 L21 42Z'],
      ['gold', 'M36 35 L40 36 L44 38 L41 42 L38 40Z'],
    ],
  },
};

// Regions use each dinosaur's existing SVG coordinates. They vary the surface
// density by anatomy while the original silhouette and cell paths stay intact.
const dinosaurMaterialRegions = {
  't-rex': [
    ['grain', 2, 17, 19, 15, 'low', .13],       // tail
    ['grain', 17, 18, 25, 18, 'high', .15],     // back and torso
    ['grain', 13, 34, 29, 10, 'medium', .17],   // feet
    ['grain', 40, 5, 23, 19, 'low', .075],      // expressive face
  ],
  triceratops: [
    ['grain', 7, 19, 36, 18, 'medium', .13],
    ['grain', 39, 8, 15, 19, 'high', .17],      // rougher frill
    ['grain', 50, 17, 13, 13, 'low', .07],
  ],
  stegosaurus: [
    ['grain', 7, 20, 48, 18, 'medium', .12],
    ['weathered', 16, 8, 33, 15, 'low', .09],  // restrained angular plate marks
  ],
  brachiosaurus: [
    ['grain', 6, 21, 41, 17, 'low', .11],
    ['grain', 40, 5, 22, 28, 'low', .08],       // smoother neck and face
  ],
  ankylosaurus: [
    ['grain', 11, 15, 42, 24, 'high', .16],
    ['grain', 2, 22, 15, 13, 'medium', .12],
  ],
  pterodactyl: [
    ['grain', 3, 8, 28, 17, 'low', .1],
    ['grain', 33, 11, 29, 17, 'low', .1],
  ],
  raptor: [
    ['grain', 3, 17, 40, 20, 'medium', .13],
    ['grain', 38, 9, 24, 18, 'low', .075],
    ['grain', 14, 33, 28, 10, 'low', .14],
  ],
};

function DinosaurMaterial({ name }) {
  return dinosaurMaterialRegions[name].map(([material, x, y, width, height, density, opacity], index) => (
    <MaterialTexture
      key={index}
      material={material}
      x={x}
      y={y}
      width={width}
      height={height}
      density={density}
      opacity={opacity}
      tone="var(--pixel-ink,var(--navy,#101827))"
      clipPath={'url(#sd-mosaic-clip-' + name + ')'}
      className="dinosaur-skin-texture"
    />
  ));
}

function DinosaurDetails({ name }) {
  if (name === 't-rex' || name === 'raptor') {
    return (
      <>
        <path className="pixel-light" stroke="var(--pixel-ink,var(--navy))" strokeWidth=".85" strokeLinejoin="round" d={name === 't-rex' ? 'M39 26 Q44 25 46 28 L49 30 L47 32 L44 29 L40 31Z' : 'M38 26 Q42 24 44 27 L47 29 L44 30 L41 28Z'} />
        <path className="mosaic-detail" d={name === 't-rex' ? 'M52 20 Q56 22 60 19 M58 16 L59 16' : 'M53 20 Q57 21 60 19 M58 16 L59 16'} />
        <path className="mosaic-detail" d="M15 41 L18 41 M33 41 L37 41" />
      </>
    );
  }

  if (name === 'triceratops') {
    return (
      <>
        <path className="pixel-gold" stroke="var(--pixel-ink,var(--navy))" strokeWidth=".72" strokeLinejoin="round" d="M48 17 L53 10 L55 16 L52 19Z M53 25 L63 23 L59 27 L54 28Z M39 16 L42 9 L44 15Z" />
        <path className="mosaic-detail" d="M56 28 Q59 29 61 27" />
      </>
    );
  }

  if (name === 'stegosaurus' || name === 'ankylosaurus') {
    return (
      <>
        <path className="mosaic-detail" d={name === 'stegosaurus' ? 'M58 30 Q60 30 61 28' : 'M56 29 Q59 30 61 28'} />
        {name === 'ankylosaurus' && <path className="pixel-gold" stroke="var(--pixel-ink,var(--navy))" strokeWidth=".7" d="M3 24 L7 21 L11 24 L10 31 L4 32 L1 28Z" />}
      </>
    );
  }

  if (name === 'brachiosaurus') {
    return (
      <>
        <path className="mosaic-detail" d="M55 13 Q58 14 60 12" />
      </>
    );
  }

  return (
    <>
      <path className="mosaic-detail" d="M52 16 L59 15" />
    </>
  );
}

function ChestBody({ open }) {
  const woodClip = 'sd-material-chest-body-' + (open ? 'open' : 'closed');

  return (
    <>
      <clipPath id={woodClip}>
        <path d="M5 18 L35 18 L34 31 L31 33 L9 33 L6 31Z" />
      </clipPath>
      <path className="mosaic-base" d="M4 17 L36 17 L35 32 L32 34 L8 34 L5 32Z" />
      <path className="pixel-shadow" d="M5 18 L35 18 L34 31 L31 33 L9 33 L6 31Z" />
      <path className="mosaic-cell pixel-mid" d="M7 19 L17 19 L19 26 L11 29 L6 25Z" />
      <path className="mosaic-cell pixel-gold" d="M17 19 L25 19 L23 27 L19 26Z" />
      <path className="mosaic-cell pixel-light" d="M25 19 L34 19 L34 25 L23 27Z" />
      <path className="mosaic-cell pixel-shadow" d="M6 25 L11 29 L18 27 L18 33 L9 33 L6 31Z" />
      <path className="mosaic-cell pixel-mid" d="M18 27 L23 27 L28 33 L18 33Z" />
      <path className="mosaic-cell pixel-gold" d="M23 27 L34 25 L34 31 L31 33 L28 33Z" />
      <MaterialTexture material="weathered" x={6} y={18} width={29} height={15} density="medium" tone="var(--pixel-ink,var(--navy,#101827))" opacity={.105} clipPath={'url(#' + woodClip + ')'} className="chest-wood-texture" />
      <path className="mosaic-outline" d="M4 17 L36 17 L35 32 L32 34 L8 34 L5 32Z" />
      <path className="pixel-gold" stroke="var(--pixel-ink,var(--navy))" strokeWidth=".7" d="M6 17 L10 17 L10 33 L8 33 L6 31Z M30 17 L34 17 L34 31 L32 33 L30 33Z" />
      <path className="mosaic-detail" d="M10 23 L17 24 M24 28 L30 27" />
    </>
  );
}

function ChestLid({ open }) {
  if (open) {
    return (
      <>
        <clipPath id="sd-material-chest-open-lid">
          <path d="M7 15 L10 8 L15 4 L31 5 L36 10 L33 15 L29 16 L9 16Z" />
        </clipPath>
        <path className="mosaic-base" d="M5 16 L8 7 L14 2 L32 3 L38 10 L35 16 L30 18 L8 18Z" />
        <path className="pixel-gold" d="M7 15 L10 8 L15 4 L31 5 L36 10 L33 15 L29 16 L9 16Z" />
        <path className="mosaic-cell pixel-light" d="M10 8 L18 4 L21 10 L14 15 L7 15Z" />
        <path className="mosaic-cell pixel-mid" d="M18 4 L31 5 L31 11 L21 10Z" />
        <path className="mosaic-cell pixel-shadow" d="M21 10 L31 11 L36 10 L33 15 L29 16 L14 15Z" />
        <MaterialTexture material="weathered" x={7} y={4} width={29} height={12} density="low" tone="var(--pixel-ink,var(--navy,#101827))" opacity={.1} clipPath="url(#sd-material-chest-open-lid)" className="chest-wood-texture" />
        <path className="mosaic-outline" d="M5 16 L8 7 L14 2 L32 3 L38 10 L35 16 L30 18 L8 18Z" />
        <path className="mosaic-detail" d="M8 14 L34 14 M15 4 L14 14 M31 5 L31 14" />
      </>
    );
  }

  return (
    <>
      <clipPath id="sd-material-chest-closed-lid">
        <path d="M6 16 L8 10 L12 7 L29 7 L33 10 L35 16 L33 18 L8 18Z" />
      </clipPath>
      <path className="mosaic-base" d="M4 17 L6 9 L11 5 L30 5 L35 9 L37 17 L34 20 L7 20Z" />
      <path className="pixel-gold" d="M6 16 L8 10 L12 7 L29 7 L33 10 L35 16 L33 18 L8 18Z" />
      <path className="mosaic-cell pixel-light" d="M8 10 L16 7 L20 11 L14 17 L6 16Z" />
      <path className="mosaic-cell pixel-mid" d="M16 7 L25 7 L27 13 L20 11Z" />
      <path className="mosaic-cell pixel-shadow" d="M25 7 L33 10 L35 16 L27 13Z" />
      <path className="mosaic-cell pixel-gold" d="M14 17 L20 11 L27 13 L33 18 L22 19Z" />
      <MaterialTexture material="weathered" x={6} y={7} width={29} height={12} density="low" tone="var(--pixel-ink,var(--navy,#101827))" opacity={.1} clipPath="url(#sd-material-chest-closed-lid)" className="chest-wood-texture" />
      <path className="mosaic-outline" d="M4 17 L6 9 L11 5 L30 5 L35 9 L37 17 L34 20 L7 20Z" />
      <path className="mosaic-detail" d="M8 16 L34 16 M12 7 L14 16 M29 7 L27 16" />
    </>
  );
}

function ChestSymbol({ open = false }) {
  return (
    <>
      {open && <ChestLid open />}
      <ChestBody open={open} />
      {open ? (
        <>
          <clipPath id="sd-material-chest-open-lining">
            <path d="M10 18 L18 16 L31 18 L28 20 L12 20Z" />
          </clipPath>
          <path className="pixel-ink" d="M7 17 Q20 13 34 17 L34 21 L7 21Z" />
          <path className="pixel-highlight" d="M10 18 L18 16 L31 18 L28 20 L12 20Z" />
          <MaterialTexture material="woven" x={10} y={16} width={21} height={4} density="medium" tone="var(--pixel-ink,var(--navy,#101827))" opacity={.27} clipPath="url(#sd-material-chest-open-lining)" className="chest-lining-texture" />
        </>
      ) : <ChestLid />}
      <path className="pixel-ink" d={open ? 'M17 21 L23 21 L23 27 L21 29 L19 29 L17 27Z' : 'M17 18 L23 18 L23 27 L21 29 L19 29 L17 27Z'} />
      <path className="pixel-highlight" d={open ? 'M19 22 L22 22 L22 25 L20 27 L19 25Z' : 'M19 20 L22 20 L22 25 L20 27 L19 25Z'} />
      <path className="mosaic-detail" d={open ? 'M18 22 L22 22 M19 27 L21 27' : 'M18 19 L22 19 M19 27 L21 27'} />
    </>
  );
}

function RewardSymbol({ name }) {
  switch (name) {
    case 'shield':
      return (
        <MosaicFigure id="reward-shield" silhouette="M16 2 L28 6 L27 19 Q25 26 16 30 Q7 26 5 19 L4 6Z" cells={[
          ['light', 'M5 6 L16 2 L16 12 L8 15Z'],
          ['accent', 'M16 2 L28 6 L24 15 L16 12Z'],
          ['mid', 'M8 15 L16 12 L16 24 L7 21Z'],
          ['gold', 'M16 12 L24 15 L26 21 L16 24Z'],
          ['shadow', 'M7 21 L16 24 L16 30Z'],
          ['accent', 'M16 24 L26 21 L16 30Z'],
        ]}>
          <path className="pixel-cream" d="M15 9 L18 9 L18 15 L22 15 L22 18 L18 18 L18 23 L15 23 L15 18 L11 18 L11 15 L15 15Z" />
        </MosaicFigure>
      );
    case 'clock':
      return (
        <MosaicFigure id="reward-clock" silhouette="M16 2 L24 4 L29 10 L30 18 L26 26 L18 30 L10 29 L3 23 L2 15 L6 7Z" cells={[
          ['light', 'M16 2 L24 4 L21 12 L15 9Z'],
          ['gold', 'M24 4 L29 10 L24 16 L21 12Z'],
          ['cream', 'M6 7 L15 9 L13 16 L3 15Z'],
          ['light', 'M15 9 L21 12 L24 16 L16 17 L13 16Z'],
          ['accent', 'M3 15 L13 16 L16 17 L10 29 L3 23Z'],
          ['gold', 'M16 17 L24 16 L29 10 L30 18 L26 26Z'],
          ['cream', 'M10 29 L16 17 L26 26 L18 30Z'],
        ]}>
          <path className="mosaic-detail" strokeWidth="1.7" d="M16 8 L16 17 L23 20" />
          <circle className="pixel-ink" cx="16" cy="17" r="1.6" />
        </MosaicFigure>
      );
    case 'flower':
      return (
        <>
          <path className="mosaic-detail" strokeWidth="1.6" d="M16 17 Q16 24 16 30" />
          <path className="pixel-accent" stroke="var(--pixel-ink,var(--navy))" strokeWidth=".8" d="M16 25 Q10 20 6 23 Q8 29 16 28Z M16 27 Q21 21 26 22 Q24 28 16 29Z" />
          <path className="mosaic-detail" d="M9 23 L15 27 M22 23 L17 27" />
          <path className="pixel-light" stroke="var(--pixel-ink,var(--navy))" strokeWidth=".72" d="M16 13 Q8 9 11 3 Q17 3 18 10 Q23 3 28 7 Q28 14 22 16 Q27 21 22 25 Q16 23 15 19 Q9 24 5 19 Q5 13 12 13Z" />
          <path className="mosaic-cell pixel-mid" d="M11 3 Q17 3 18 10 L16 15 L12 13Z" />
          <path className="mosaic-cell pixel-gold" d="M18 10 Q23 3 28 7 L23 14 L17 16Z" />
          <path className="mosaic-cell pixel-accent" d="M23 14 L28 7 Q28 14 22 16 L23 21 L17 18Z" />
          <path className="mosaic-cell pixel-light" d="M12 13 L16 15 L15 19 Q9 24 5 19 Q5 13 12 13Z" />
          <path className="mosaic-cell pixel-mid" d="M17 18 L23 16 Q27 21 22 25 Q16 23 15 19Z" />
          <path className="pixel-gold" stroke="var(--pixel-ink,var(--navy))" strokeWidth=".7" d="M13 13 L18 12 L21 16 L18 20 L13 18Z" />
        </>
      );
    case 'compass':
      return (
        <MosaicFigure id="reward-compass" silhouette="M16 2 L24 5 L29 11 L30 19 L25 27 L17 30 L9 27 L3 20 L2 12 L8 5Z" cells={[
          ['cream', 'M16 2 L24 5 L21 12 L16 16Z'],
          ['light', 'M24 5 L29 11 L23 15 L21 12Z'],
          ['gold', 'M29 11 L30 19 L23 18 L23 15Z'],
          ['accent', 'M30 19 L25 27 L16 16 L23 18Z'],
          ['cream', 'M25 27 L17 30 L16 16Z'],
          ['light', 'M17 30 L9 27 L16 16Z'],
          ['gold', 'M9 27 L3 20 L10 17 L16 16Z'],
          ['cream', 'M3 20 L2 12 L10 17Z'],
          ['accent', 'M2 12 L8 5 L16 16 L10 17Z'],
          ['light', 'M8 5 L16 2 L16 16Z'],
        ]}>
          <path className="pixel-ink" d="M18 4 L19 14 L28 15 L19 18 L15 28 L14 18 L5 16 L14 14Z" />
          <path className="pixel-mid" d="M16 7 L18 16 L16 16 L8 16Z" />
          <circle className="pixel-gold" cx="16.5" cy="16.5" r="1.6" />
        </MosaicFigure>
      );
    case 'rune':
      return (
        <MosaicFigure id="reward-rune" silhouette="M9 2 L23 3 L29 8 L28 24 L22 30 L8 29 L3 23 L3 9Z" cells={[
          ['accent', 'M9 2 L17 3 L16 11 L5 12 L3 9Z'],
          ['light', 'M17 3 L23 3 L29 8 L23 14 L16 11Z'],
          ['mid', 'M5 12 L16 11 L15 19 L3 23Z'],
          ['gold', 'M16 11 L23 14 L28 24 L18 20 L15 19Z'],
          ['shadow', 'M3 23 L15 19 L18 20 L8 29Z'],
          ['accent', 'M18 20 L28 24 L22 30 L8 29Z'],
        ]}>
          <path className="pixel-cream" d="M14 8 L18 8 L18 13 L23 13 L23 17 L19 17 L19 23 L15 23 L15 18 L10 18 L10 14 L14 14Z" />
          <path className="pixel-gold" d="M15 14 L19 14 L19 18 L15 18Z" />
        </MosaicFigure>
      );
    case 'leaf':
      return (
        <MosaicFigure id="reward-leaf" silhouette="M28 3 Q31 18 21 26 Q14 31 7 25 Q2 20 5 13 Q10 3 28 3Z" cells={[
          ['light', 'M28 3 Q24 7 19 10 L14 5Z'],
          ['gold', 'M14 5 L19 10 L14 15 L5 13Z'],
          ['mid', 'M28 3 L29 13 L20 17 L19 10Z'],
          ['light', 'M5 13 L14 15 L11 22 L5 23Z'],
          ['accent', 'M14 15 L20 17 L21 26 L11 22Z'],
          ['shadow', 'M20 17 L29 13 Q27 22 21 26Z'],
          ['gold', 'M11 22 L21 26 Q14 31 7 25Z'],
        ]}>
          <path className="mosaic-detail" strokeWidth="1.1" d="M5 29 Q17 18 26 7 M13 21 L11 15 M19 15 L24 17" />
        </MosaicFigure>
      );
    default:
      return (
        <MosaicFigure id="reward-map" silhouette="M2 6 L11 3 L19 6 L29 3 L30 26 L21 29 L13 26 L3 29Z" cells={[
          ['cream', 'M3 8 L11 5 L12 15 L3 18Z'],
          ['gold', 'M11 5 L19 8 L20 17 L12 15Z'],
          ['light', 'M19 8 L28 5 L29 16 L20 17Z'],
          ['gold', 'M3 18 L12 15 L13 25 L3 27Z'],
          ['cream', 'M12 15 L20 17 L21 27 L13 25Z'],
          ['accent', 'M20 17 L29 16 L29 25 L21 27Z'],
        ]}>
          <path className="mosaic-detail" d="M11 5 L13 26 M19 8 L21 27 M7 11 Q11 15 16 15 Q21 15 24 21" />
          <circle className="pixel-mid" cx="7" cy="11" r="1.5" />
          <path className="pixel-mid" d="M24 19 L27 22 L24 25 L21 22Z" />
        </MosaicFigure>
      );
  }
}

/** Registers the shared symbols once, outside the accessibility tree. */
export function PixelSpriteLibrary() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="0"
      height="0"
      shapeRendering="geometricPrecision"
      style={{ position: 'absolute', overflow: 'hidden', pointerEvents: 'none' }}
    >
      <defs>
        <style>{spriteStyles}</style>
        {Object.entries(dinosaurs).map(([name, art]) => (
          <symbol key={name} id={'sd-pixel-' + name} viewBox={SPRITE_VIEW_BOXES[name]}>
            <MosaicFigure id={name} silhouette={art.silhouette} cells={art.cells} texture={<DinosaurMaterial name={name} />}>
              <DinosaurDetails name={name} />
            </MosaicFigure>
          </symbol>
        ))}

        <symbol id="sd-pixel-chest" viewBox="0 0 40 36">
          <ChestSymbol />
        </symbol>
        <symbol id="sd-pixel-chest-open" viewBox="0 0 40 36">
          <ChestSymbol open />
        </symbol>

        <symbol id="sd-pixel-backpack" viewBox="0 0 32 36">
          <MosaicFigure id="backpack" silhouette="M10 3 L22 3 L26 7 L27 12 L30 14 L30 29 L27 33 L5 33 L2 29 L2 14 L5 12 L6 7Z" cells={[
            ['accent', 'M10 4 L17 4 L16 12 L6 11 L7 7Z'],
            ['light', 'M17 4 L22 4 L26 8 L24 13 L16 12Z'],
            ['shadow', 'M5 12 L16 12 L14 21 L3 24 L3 15Z'],
            ['mid', 'M16 12 L24 13 L29 15 L28 24 L14 21Z'],
            ['light', 'M3 24 L14 21 L17 32 L5 32Z'],
            ['accent', 'M14 21 L28 24 L27 32 L17 32Z'],
          ]}>
            <path className="pixel-ink" d="M8 13 L24 13 L25 21 L22 25 L10 25 L7 21Z" />
            <path className="pixel-light" d="M9 14 L23 14 L23 21 L21 23 L11 23 L9 21Z" />
            <path className="mosaic-cell pixel-accent" d="M9 14 L17 14 L16 21 L11 23 L9 21Z" />
            <path className="mosaic-cell pixel-mid" d="M17 14 L23 14 L23 21 L16 21Z" />
            <path className="pixel-gold" stroke="var(--pixel-ink,var(--navy))" strokeWidth=".6" d="M14 20 L19 20 L19 25 L14 25Z" />
            <path className="mosaic-detail" d="M5 13 L5 28 M27 13 L27 28" />
          </MosaicFigure>
        </symbol>

        <symbol id="sd-pixel-laptop" viewBox="0 0 40 32">
          <path className="mosaic-base" d="M7 3 L33 3 L36 6 L36 23 L32 25 L39 27 L36 31 L4 31 L1 27 L8 25 L4 23 L4 6Z" />
          <path className="pixel-ink" d="M7 3 L33 3 L36 6 L36 23 L32 25 L8 25 L4 23 L4 6Z" />
          <path className="pixel-accent" d="M7 6 L33 6 L33 22 L7 22Z" />
          <path className="mosaic-cell pixel-light" d="M7 6 L19 6 L16 14 L7 17Z" />
          <path className="mosaic-cell pixel-accent" d="M19 6 L33 6 L33 16 L16 14Z" />
          <path className="mosaic-cell pixel-shadow" d="M7 17 L16 14 L33 16 L33 22 L7 22Z" />
          <path className="mosaic-detail" d="M7 6 L33 6 L33 22 L7 22Z M12 10 L9 14 L12 18 M28 10 L31 14 L28 18" />
          <path className="pixel-gold" d="M19 11 L22 11 L19 18 L16 18Z" />
          <path className="pixel-shadow" d="M8 24 L32 24 L38 28 L35 30 L5 30 L2 28Z" />
          <path className="mosaic-cell pixel-light" d="M8 24 L20 24 L17 28 L2 28Z" />
          <path className="mosaic-cell pixel-gold" d="M20 24 L32 24 L38 28 L17 28Z" />
          <path className="mosaic-outline" d="M7 3 L33 3 L36 6 L36 23 L32 25 L39 27 L36 31 L4 31 L1 27 L8 25 L4 23 L4 6Z" />
          <path className="mosaic-detail" d="M16 28 L24 28" />
        </symbol>

        {['shield', 'clock', 'flower', 'compass', 'rune', 'leaf', 'map'].map((name) => (
          <symbol key={name} id={'sd-pixel-reward-' + name} viewBox="0 0 32 32">
            <RewardSymbol name={name} />
          </symbol>
        ))}
      </defs>
    </svg>
  );
}

/**
 * Sprites are decorative; adjacent visible project text carries meaning.
 * Unknown names intentionally cannot become arbitrary fragment references.
 */
export function PixelSprite({ name, className = '', title: _title, ...svgProps }) {
  if (!Object.prototype.hasOwnProperty.call(SPRITE_VIEW_BOXES, name)) {
    return null;
  }

  const classes = ['pixel-sprite', 'pixel-sprite--' + name, className].filter(Boolean).join(' ');

  return (
    <svg
      {...svgProps}
      className={classes}
      viewBox={SPRITE_VIEW_BOXES[name]}
      shapeRendering="geometricPrecision"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <use href={'#sd-pixel-' + name} />
    </svg>
  );
}
