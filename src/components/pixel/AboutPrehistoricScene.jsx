import { PixelSprite } from './PixelSpriteLibrary.jsx';
import {
  MosaicCloud,
  MosaicFern,
  MosaicFlower,
  MosaicGroundNetwork,
  MosaicRock,
  MosaicTree,
} from './MosaicEnvironmentPrimitives.jsx';

export default function AboutPrehistoricScene() {
  return (
    <figure className="about-prehistoric-scene" aria-hidden="true">
      <svg
        className="about-prehistoric-scene__landscape"
        viewBox="0 0 480 190"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <rect width="480" height="190" className="about-scene-sky" />
        <path d="M0 49L61 34L126 49L190 25L257 42L322 23L389 42L480 27M61 34L81 92L149 71L190 25L219 81L298 67L322 23L359 87L431 79L480 27" fill="none" stroke="var(--cream)" strokeOpacity="0.1" strokeWidth="1.2" />
        <g className="about-scene-sun">
          <path d="M382 34L393 23L412 20L427 31L432 47L426 62L410 69L391 64L381 50Z" />
          <path d="M393 23L412 20L410 44L381 50L382 34Z" fill="var(--mosaic-sun-light, var(--cream))" opacity="0.42" />
          <path d="M410 44L427 31L432 47L426 62L410 69Z" fill="var(--mosaic-sun-shadow, var(--pixel-gold-shadow))" opacity="0.45" />
        </g>
        <MosaicCloud x={59} y={25} scale={0.57} className="about-scene-cloud" />
        <path className="about-scene-ridge" d="M0 116L43 93L80 68L119 96L165 83L211 101L262 61L302 90L348 74L385 99L437 83L480 106V157H0Z" />
        <path d="M43 93L80 68L95 104L68 125L20 123ZM165 83L211 101L262 61L276 99L238 124L188 124ZM302 90L348 74L385 99L374 128L327 122Z" fill="var(--mosaic-ridge-far-light, var(--pixel-ridge-light))" opacity="0.52" />
        <path d="M80 68L95 104M262 61L276 99M348 74L374 128" fill="none" stroke="var(--mosaic-ridge-seam, var(--navy))" strokeOpacity="0.16" strokeWidth="1.4" />

        <g className="about-scene-flora">
          <MosaicTree x={417} y={51} scale={0.72} />
        </g>
        <path className="about-scene-ground" d="M0 131C46 120 75 124 111 129C166 118 194 123 235 130C281 117 325 122 362 130C414 120 451 123 480 131V190H0Z" />
        <path d="M0 131C46 120 75 124 111 129C166 118 194 123 235 130C281 117 325 122 362 130C414 120 451 123 480 131V146C429 137 401 141 362 147C318 137 277 139 235 146C182 135 152 138 111 146C66 137 31 138 0 147Z" fill="var(--mosaic-ground-light, var(--gold))" />
        <MosaicGroundNetwork y={144} scaleX={480 / 390} scaleY={46 / 120} />
        <path className="about-scene-ground-shadow" d="M0 173C83 161 137 180 219 168C305 160 375 181 480 165V190H0Z" opacity="0.34" />
        <g className="about-scene-flora">
          <MosaicFern x={28} y={103} scale={0.72} />
          <MosaicFern x={322} y={108} scale={0.66} />
          <MosaicRock x={356} y={149} scale={0.55} />
        </g>
        <g className="about-scene-flower">
          <MosaicFlower x={273} y={128} scale={0.6} />
          <MosaicFlower x={393} y={132} scale={0.55} />
        </g>
      </svg>

      <PixelSprite name="brachiosaurus" className="about-prehistoric-scene__dinosaur" />
    </figure>
  );
}
