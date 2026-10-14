import { useId } from 'react';
import { MaterialTexture } from './MaterialTextures.jsx';

/** A material layer clipped to an existing authored silhouette in local SVG coordinates. */
export function MosaicSurfaceTexture({
  path,
  material,
  x,
  y,
  width,
  height,
  density = 'low',
  tone = 'var(--navy)',
  opacity = 0.14,
  className = '',
}) {
  const clipId = `mosaic-surface-${useId().replace(/:/g, '')}`;

  return (
    <>
      <defs>
        <clipPath id={clipId}>
          <path d={path} />
        </clipPath>
      </defs>
      <MaterialTexture
        material={material}
        x={x}
        y={y}
        width={width}
        height={height}
        density={density}
        tone={tone}
        opacity={opacity}
        clipPath={`url(#${clipId})`}
        className={className}
      />
    </>
  );
}

/** Curated environmental cells shared by the hero, About, and project scenes. */
export function MosaicCloud({ x, y, scale = 1, className = '' }) {
  return (
    <g className={`mosaic-cloud ${className}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <g className="mosaic-cloud__drift">
        <path
          d="M13 43C4 40 5 29 14 25C18 23 23 23 28 25C28 14 39 8 51 12C56 4 65 2 75 5C85 8 90 15 89 21C99 16 111 20 115 29C123 28 130 35 125 43C122 48 116 49 108 49H23C18 49 15 47 13 43Z"
          fill="var(--cream)"
        />
        <path d="M14 43C8 38 12 30 20 29C28 28 34 33 36 40L31 49H23C18 49 15 47 14 43Z" fill="var(--mosaic-cloud-shade, var(--pixel-haze))" opacity="0.42" />
        <path d="M28 25C30 14 40 10 51 13C58 17 61 25 57 34L44 42L36 40C34 33 31 28 28 25Z" fill="var(--mosaic-cloud-light, var(--cream))" />
        <path d="M51 13C57 4 66 3 75 6C85 10 89 16 88 22L74 31L57 34C61 25 58 17 51 13Z" fill="var(--mosaic-cloud-shade, var(--pixel-haze))" opacity="0.32" />
        <path d="M88 22C98 17 110 21 114 30C117 35 114 41 108 49H83L74 31Z" fill="var(--mosaic-cloud-light, var(--cream))" opacity="0.9" />
        <path d="M36 40L44 42L57 34L74 31L83 49M88 22L74 31M57 34L63 49" fill="none" stroke="var(--mosaic-cloud-seam, var(--periwinkle))" strokeOpacity="0.18" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </g>
  );
}

export function MosaicTree({ x, y, scale = 1, className = '' }) {
  return (
    <g className={`mosaic-tree ${className}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M35 143L37 86L31 65L39 61L46 87L53 143Z" fill="var(--mosaic-trunk-dark, var(--pixel-ground-shadow))" />
      <path d="M39 67L45 84L43 141H36L38 88Z" fill="var(--mosaic-trunk-light, var(--pixel-ground))" />
      <path d="M45 88L53 143H44L43 117Z" fill="var(--mosaic-trunk-mid, var(--pixel-path))" />
      <path d="M38 77L39 91L37 112M43 79L44 96L45 113M39 117L38 133M47 112L49 134" fill="none" stroke="var(--mosaic-trunk-dark, var(--pixel-ground-shadow))" strokeOpacity="0.31" strokeWidth="1" strokeLinecap="round" />
      <g className="mosaic-tree__canopy">
        <path d="M12 80C5 75 7 62 14 56C12 43 20 36 30 37C30 25 39 17 50 20C57 8 73 10 77 21C88 24 92 37 86 45C96 55 93 69 84 74C82 86 68 92 58 87C45 98 30 95 24 86C19 88 15 85 12 80Z" fill="var(--mosaic-leaf-deep, var(--pixel-flora))" />
        <path d="M14 57C20 50 29 51 34 57L39 73L25 86C17 88 8 77 10 68Z" fill="var(--mosaic-leaf-mid, var(--pixel-vine))" />
        <path d="M30 38C34 26 43 19 52 21L62 33L55 51L35 57C29 52 27 45 30 38Z" fill="var(--mosaic-leaf-light, var(--pixel-scene-flora))" />
        <path d="M52 21C59 10 74 12 77 23C86 25 90 35 86 45L71 53L55 51L62 33Z" fill="var(--mosaic-leaf-mid, var(--pixel-vine))" />
        <path d="M35 57L55 51L71 53L80 68L58 86L39 73Z" fill="var(--mosaic-leaf-mid, var(--pixel-flora))" />
        <path d="M71 53L86 45C96 54 93 68 84 74C82 86 68 91 58 86L80 68Z" fill="var(--mosaic-leaf-deep, var(--pixel-flora))" />
        <MosaicSurfaceTexture
          path="M12 80C5 75 7 62 14 56C12 43 20 36 30 37C30 25 39 17 50 20C57 8 73 10 77 21C88 24 92 37 86 45C96 55 93 69 84 74C82 86 68 92 58 87C45 98 30 95 24 86C19 88 15 85 12 80Z"
          material="fiber"
          x={8} y={10} width={86} height={87}
          density="low" tone="var(--cream)" opacity={0.13}
        />
        <path d="M35 57L39 73L25 86M55 51L58 86M71 53L80 68M62 33L55 51" fill="none" stroke="var(--mosaic-leaf-seam, var(--navy))" strokeOpacity="0.25" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </g>
  );
}

export function MosaicFern({ x, y, scale = 1, className = '' }) {
  return (
    <g className={`mosaic-fern ${className}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M29 71C27 51 29 30 32 7" fill="none" stroke="var(--mosaic-fern-stem, var(--pixel-flora))" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M31 18C18 14 9 17 4 27C14 27 23 27 30 25Z" fill="var(--mosaic-leaf-mid, var(--pixel-flora))" />
      <path d="M30 29C17 26 6 31 1 43C14 40 23 39 29 36Z" fill="var(--mosaic-leaf-deep, var(--pixel-flora))" />
      <path d="M29 42C18 41 9 48 7 57C17 54 24 52 29 49Z" fill="var(--mosaic-leaf-light, var(--pixel-vine))" />
      <path d="M32 16C41 10 53 13 59 22C47 24 39 26 31 25Z" fill="var(--mosaic-leaf-light, var(--pixel-vine))" />
      <path d="M31 30C45 25 56 30 63 40C50 39 41 40 30 37Z" fill="var(--mosaic-leaf-mid, var(--pixel-flora))" />
      <path d="M30 43C43 40 52 46 56 54C45 53 36 52 29 50Z" fill="var(--mosaic-leaf-deep, var(--pixel-flora))" />
      <MosaicSurfaceTexture
        path="M31 18C18 14 9 17 4 27C14 27 23 27 30 25ZM30 29C17 26 6 31 1 43C14 40 23 39 29 36ZM29 42C18 41 9 48 7 57C17 54 24 52 29 49ZM32 16C41 10 53 13 59 22C47 24 39 26 31 25ZM31 30C45 25 56 30 63 40C50 39 41 40 30 37ZM30 43C43 40 52 46 56 54C45 53 36 52 29 50Z"
        material="fiber"
        x={1} y={12} width={62} height={45}
        density="low" tone="var(--cream)" opacity={0.15}
      />
      <path d="M4 27L30 25M1 43L29 36M59 22L31 25M63 40L30 37" stroke="var(--mosaic-leaf-seam, var(--navy))" strokeOpacity="0.22" strokeWidth="1" />
    </g>
  );
}

export function MosaicRock({ x, y, scale = 1, className = '' }) {
  return (
    <g className={`mosaic-rock ${className}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M1 46L10 29L27 25L37 9L63 8L76 20L89 28L94 47Z" fill="var(--mosaic-rock-dark, var(--pixel-rock))" />
      <path d="M10 29L27 25L37 9L53 12L43 30L22 38L1 46Z" fill="var(--mosaic-rock-light, var(--pixel-ridge-light))" />
      <path d="M53 12L63 8L76 20L70 38L43 30Z" fill="var(--mosaic-rock-mid, var(--pixel-rock))" />
      <path d="M22 38L43 30L70 38L94 47H1Z" fill="var(--mosaic-rock-shadow, var(--pixel-ground-shadow))" />
      <MosaicSurfaceTexture
        path="M1 46L10 29L27 25L37 9L63 8L76 20L89 28L94 47Z"
        material="weathered"
        x={1} y={8} width={93} height={39}
        density="low" tone="var(--cream)" opacity={0.17}
      />
      <MosaicSurfaceTexture
        path="M1 46L10 29L27 25L37 9L63 8L76 20L89 28L94 47Z"
        material="grain"
        x={1} y={8} width={93} height={39}
        density="low" tone="var(--navy)" opacity={0.1}
      />
      <path d="M43 30L53 12M43 30L22 38M70 38L76 20" fill="none" stroke="var(--mosaic-rock-seam, var(--navy))" strokeOpacity="0.36" strokeWidth="1.4" />
    </g>
  );
}

export function MosaicFlower({ x, y, scale = 1, className = '' }) {
  return (
    <g className={`mosaic-flower ${className}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <g className="mosaic-flower__sway">
        <path d="M20 47L21 24" fill="none" stroke="var(--mosaic-fern-stem, var(--pixel-flora))" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M21 37C15 31 9 32 7 37C11 42 16 43 21 42ZM21 40C26 34 32 33 35 36C33 42 29 44 22 45Z" fill="var(--mosaic-leaf-mid, var(--pixel-flora))" />
        <path d="M18 5Q22 1 26 6L27 13L21 18L16 12Z" fill="var(--mosaic-flower-light, var(--pixel-terracotta-light))" />
        <path d="M7 13Q9 9 15 11L21 18L17 24L9 23Q5 19 7 13Z" fill="var(--mosaic-flower-mid, var(--terracotta))" />
        <path d="M27 11Q34 8 37 15L33 23L24 23L21 18Z" fill="var(--mosaic-flower-mid, var(--terracotta))" />
        <path d="M12 24L18 19L23 24L19 31Q12 32 12 24Z" fill="var(--mosaic-flower-dark, var(--pixel-terracotta-shadow))" />
        <path d="M23 22L32 22L32 29Q27 33 21 29Z" fill="var(--mosaic-flower-light, var(--pixel-terracotta-light))" />
        <path d="M17 17L23 15L28 20L25 26L18 26L15 22Z" fill="var(--gold)" stroke="var(--mosaic-flower-seam, var(--navy))" strokeOpacity="0.3" strokeWidth="1" />
      </g>
    </g>
  );
}

/** A single small tuft, animated as one rooted group rather than separate blades. */
export function MosaicGrass({ x, y, scale = 1, className = '' }) {
  return (
    <g className={`mosaic-grass ${className}`} transform={`translate(${x} ${y}) scale(${scale})`}>
      <g className="mosaic-grass__sway">
        <path d="M18 25C12 21 7 16 4 9C12 10 18 15 22 24Z" fill="var(--mosaic-leaf-mid, var(--pixel-vine))" />
        <path d="M16 25C17 15 19 7 23 2C27 9 28 17 27 25Z" fill="var(--mosaic-leaf-light, var(--pixel-scene-flora))" />
        <path d="M24 24C28 16 33 11 40 9C38 17 34 22 30 25Z" fill="var(--mosaic-leaf-deep, var(--pixel-flora))" />
        <path d="M23 6L22 23M8 12L19 23M36 12L27 23" fill="none" stroke="var(--mosaic-leaf-seam, var(--navy))" strokeOpacity="0.2" strokeWidth="0.8" strokeLinecap="round" />
      </g>
    </g>
  );
}

export function MosaicGroundNetwork({ x = 0, y = 0, scaleX = 1, scaleY = 1 }) {
  return (
    <g className="mosaic-ground-network" transform={`translate(${x} ${y}) scale(${scaleX} ${scaleY})`}>
      <path d="M0 0H68Q64 17 55 29Q29 32 0 44Z" fill="var(--mosaic-ground-light, var(--gold))" />
      <path d="M68 0H140Q131 13 121 25Q87 21 55 29Q64 17 68 0Z" fill="var(--mosaic-ground-mid, var(--pixel-ground))" />
      <path d="M140 0H218Q219 20 192 41Q159 30 121 25Q131 13 140 0Z" fill="var(--mosaic-ground-light, var(--gold))" />
      <path d="M218 0H294Q283 18 263 28Q229 26 192 41Q219 20 218 0Z" fill="var(--mosaic-ground-deep, var(--pixel-ground-shadow))" />
      <path d="M294 0H390V31Q367 41 340 37Q302 30 263 28Q283 18 294 0Z" fill="var(--mosaic-ground-mid, var(--pixel-ground))" />
      <path d="M0 44Q29 32 55 29Q65 50 76 68Q44 73 0 83Z" fill="var(--mosaic-ground-mid, var(--pixel-ground))" />
      <path d="M55 29Q87 21 121 25Q128 44 148 59Q112 70 76 68Q65 50 55 29Z" fill="var(--mosaic-ground-deep, var(--pixel-ground-shadow))" />
      <path d="M121 25Q159 30 192 41Q191 60 207 76Q178 79 148 59Q128 44 121 25Z" fill="var(--mosaic-ground-mid, var(--pixel-ground))" />
      <path d="M192 41Q229 26 263 28Q273 49 274 71Q244 82 207 76Q191 60 192 41Z" fill="var(--mosaic-ground-light, var(--gold))" />
      <path d="M263 28Q302 30 340 37Q325 56 319 72Q298 72 274 71Q273 49 263 28Z" fill="var(--mosaic-ground-deep, var(--pixel-ground-shadow))" />
      <path d="M340 37Q367 41 390 31V82Q353 76 319 72Q325 56 340 37Z" fill="var(--mosaic-ground-mid, var(--pixel-ground))" />
      <path d="M0 83Q44 73 76 68Q65 94 52 120H0Z" fill="var(--mosaic-ground-deep, var(--pixel-ground-shadow))" />
      <path d="M76 68Q112 70 148 59Q161 83 170 120H52Q65 94 76 68Z" fill="var(--mosaic-ground-light, var(--gold))" />
      <path d="M148 59Q178 79 207 76Q244 82 274 71Q269 96 265 120H170Q161 83 148 59Z" fill="var(--mosaic-ground-mid, var(--pixel-ground))" />
      <path d="M274 71Q298 72 319 72Q329 92 350 120H265Q269 96 274 71Z" fill="var(--mosaic-ground-deep, var(--pixel-ground-shadow))" />
      <path d="M319 72Q353 76 390 82V120H350Q329 92 319 72Z" fill="var(--mosaic-ground-light, var(--gold))" />
      <MaterialTexture material="grain" x={0} y={0} width={390} height={120} density="low" tone="var(--navy)" opacity={0.08} />
      <path d="M0 44Q29 32 55 29Q87 21 121 25Q159 30 192 41Q229 26 263 28Q302 30 340 37Q367 41 390 31M0 83Q44 73 76 68Q112 70 148 59Q178 79 207 76Q244 82 274 71Q298 72 319 72Q353 76 390 82M68 0Q64 17 55 29Q65 50 76 68Q65 94 52 120M140 0Q131 13 121 25Q128 44 148 59Q161 83 170 120M218 0Q219 20 192 41Q191 60 207 76M294 0Q283 18 263 28Q273 49 274 71Q269 96 265 120M340 37Q325 56 319 72Q329 92 350 120" fill="none" stroke="var(--mosaic-ground-seam, var(--navy))" strokeOpacity="0.2" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}
