/**
 * Authored SVG surface marks in a normalized 100 × 100 field. A caller places
 * the field in its own SVG coordinates and clips it to the host material.
 * The marks are deliberately sparse: the mosaic facets remain the primary art.
 */
const textureMarks = {
  grain: {
    base: (
      <>
        <path d="M8 18l5-2 3 2-2 2-5 1-2-1Zm19-7 4-2 3 1-1 3-4 1-2-1Zm23 8 5-2 3 2-2 2-4 1-3-1Zm27-8 5-1 2 2-2 2-4 1-2-2ZM15 47l5-2 3 2-2 2-5 1-2-1Zm27-10 4-2 4 2-2 3-5 1-2-2Zm30 7 5-2 4 2-3 3-4 1-3-2ZM8 75l5-2 3 2-2 3-5 1-2-2Zm29-9 5-2 3 1-1 3-5 1-3-1Zm26 12 4-2 4 1-1 3-5 1-3-1Zm20-14 4-2 3 2-2 2-4 1-2-1Z" />
        <path d="M18 30l4-1m32-1 4-1m29 3 3-1M28 54l4-1m55-3 4-1M15 91l4-1m37-3 4-1m19 3 4-1" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      </>
    ),
    medium: (
      <>
        <path d="M5 39l3-1 2 1-1 2-3 1Zm29-17 3-1 2 2-2 2-3-1Zm32 7 4-2 3 1-1 2-4 2-2-1Zm24-12 3-1 2 2-2 2-3-1ZM5 58l4-1 2 2-2 2-4 1-2-2Zm17 10 3-1 3 1-1 3-4 1-2-2Zm31-17 4-1 2 2-2 2-4 1-1-2Zm35 26 4-2 2 2-2 2-4 1-1-1ZM28 89l3-2 3 1-1 3-3 1-2-1Zm31-23 4-1 2 2-2 2-4 1-1-2Z" />
        <path d="M11 8l3-1M44 8l3-1M79 34l3-1M13 56l3-1m30 3 3-1M73 57l3-1M46 82l3-1m45 9 2-1" fill="none" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
      </>
    ),
    high: (
      <path d="M20 9l2-1m20 8 2-1m19-5 2-1m19 11 2-1M11 27l2-1m18 6 2-1m24 6 2-1m23 0 2-1M19 55l2-1m18-7 2-1m30 12 2-1M6 86l2-1m47-14 2-1m28 11 2-1m-49 12 2-1" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    ),
  },
  weathered: {
    base: (
      <>
        <path d="M8 16l13-7 9 3 5-3 9 6-4 7-10 1-5 5-13-4-7-5Zm50-5 11-3 7 5 10-1 6 7-5 8-10-2-5 4-12-5-6-8ZM10 58l8-6 13 2 5-5 8 4-1 9-11 4-5-2-11 5-9-5Zm55-2 11-6 12 5 4 8-7 7-12-2-6 4-10-6 1-7ZM28 82l11-5 11 3 5-2 7 6-4 8-12 1-8-3-8 2-6-5Z" fillOpacity=".56" />
        <path d="M7 19l10 3 7-2 7 3m31-10 7 3 8-1 7 5M10 62l11-2 6 3 9-4m28 5 9-3 8 4m-47 20 10-2 6 4 7-1" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    medium: (
      <>
        <path d="M4 39l8-4 7 2 4 5-6 5-9-1-5-3Zm36-4 7-4 8 3 2 6-6 4-11-3Zm43 1 8-3 6 5-2 6-8 1-6-4ZM9 85l7-3 8 2 2 6-10 3-8-4Zm65-3 8-4 10 3 3 6-8 6-10-3Z" fillOpacity=".42" />
        <path d="M19 13l5 2 6-1m17 24 5-2m31 3 7 1M16 84l5 3m55-3 6 2M39 58l7-4 5 1m18-7 5-2" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </>
    ),
    high: (
      <path d="M5 8l5-2m34 12 4-3m-15 16 7-3m48-19 5-2M6 73l4-2m38 1 6-3m33 3 4-2M28 94l4-2m41 2 5-2" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
    ),
  },
  woven: {
    base: (
      <>
        <path d="M-7 14Q12 7 27 13T60 13t40 0m-107 19Q10 25 27 31t34 0 39 0m-107 19Q10 43 27 49t34 0 39 0m-107 19Q10 61 27 67t34 0 39 0m-107 19Q10 79 27 85t34 0 39 0" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" />
        <path d="M3 13l8 7 7-8m9 1 8 7 7-8m9 1 8 7 7-8m9 1 8 7 7-8M4 49l7 7 7-7m9 0 8 7 7-7m9 0 8 7 7-7m9 0 8 7 7-7" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    medium: (
      <path d="M4 31l7 7 7-7m9 0 8 7 7-7m9 0 8 7 7-7m9 0 8 7 7-7M4 67l7 7 7-7m9 0 8 7 7-7m9 0 8 7 7-7m9 0 8 7 7-7M4 85l7 7 7-7m26 0 8 7 7-7m9 0 8 7 7-7" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" />
    ),
    high: (
      <path d="M3 23l5 3 5-3m8 0 5 3 5-3m8 0 5 3 5-3m8 0 5 3 5-3m8 0 5 3 5-3M3 59l5 3 5-3m8 0 5 3 5-3m8 0 5 3 5-3m8 0 5 3 5-3m8 0 5 3 5-3M3 94l5 3 5-3m17 0 5 3 5-3m17 0 5 3 5-3" fill="none" stroke="currentColor" strokeWidth=".95" strokeLinecap="round" />
    ),
  },
  fiber: {
    base: (
      <>
        <path d="M6 24q2-9 6-13m-1 16q7-9 9-15m-2 15q2-9 7-11m8 17q-1-10 3-19m3 18q5-8 7-16m-2 19q6-8 10-11m12 2q-1-10 3-17m3 18q6-8 10-13m-2 15q7-5 12-8M4 64q3-11 7-16m-2 19q6-10 11-14m-2 17q2-8 8-13m8 14q-2-9 3-18m3 19q4-11 8-16m-1 19q7-8 11-12m10 4q-1-10 3-17m2 20q5-9 9-13m-1 18q7-7 13-9" fill="none" stroke="currentColor" strokeWidth="2.05" strokeLinecap="round" />
        <path d="M13 29q3-4 8-5m24 9q4-5 9-6m26-1q3-4 8-5M18 72q3-4 9-5m22 8q5-4 10-5m23 8q4-5 9-5" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </>
    ),
    medium: (
      <path d="M2 40q4-7 7-11m7 12q2-8 7-12m9 11q4-7 8-9m10 13q-1-8 3-13m8 14q4-6 7-11m7 10q4-8 9-10m10 11q2-8 6-11M6 88q3-7 7-10m8 11q3-7 7-10m10 11q2-8 7-12m8 12q3-7 7-10m8 11q4-8 9-10m8 11q2-6 6-10" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
    ),
    high: (
      <path d="M4 8l3-5m18 6 4-6m17 7 3-6m18 6 3-6m18 8 3-6M6 52l3-6m21 8 3-6m19 7 3-5m18 8 3-6M7 98l3-5m23 5 3-5m19 5 3-5m23 5 3-5" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    ),
  },
};

/**
 * Paints deterministic material detail in an existing SVG coordinate system.
 * `clipPath` takes a URL reference (for example `url(#stone-face)`) so callers
 * keep the exact silhouette, facet, or lining boundaries they already own.
 */
export function MaterialTexture({
  material,
  x = 0,
  y = 0,
  width = 100,
  height = 100,
  density = 'medium',
  tone = 'currentColor',
  opacity = 0.2,
  clipPath,
  className = '',
}) {
  const marks = textureMarks[material];
  if (!marks || width <= 0 || height <= 0) return null;

  const level = density === 'low' || density === 'high' ? density : 'medium';

  return (
    <g
      className={['material-texture', `material-texture--${material}`, `material-texture--${level}`, className].filter(Boolean).join(' ')}
      clipPath={clipPath}
      color={tone}
      opacity={opacity}
      pointerEvents="none"
      aria-hidden="true"
    >
      <svg x={x} y={y} width={width} height={height} viewBox="0 0 100 100" preserveAspectRatio="none" overflow="hidden" fill="currentColor">
        <g className="material-texture__detail material-texture__detail--base">{marks.base}</g>
        {level !== 'low' && <g className="material-texture__detail material-texture__detail--medium">{marks.medium}</g>}
        {level === 'high' && <g className="material-texture__detail material-texture__detail--high">{marks.high}</g>}
      </svg>
    </g>
  );
}
