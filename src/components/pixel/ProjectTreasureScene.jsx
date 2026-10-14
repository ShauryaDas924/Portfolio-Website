import { getProjectArtwork } from '../../data/projectArtwork.js';
import { PixelSprite } from './PixelSpriteLibrary.jsx';
import {
  MosaicCloud,
  MosaicFern,
  MosaicFlower,
  MosaicGroundNetwork,
  MosaicRock,
  MosaicTree,
} from './MosaicEnvironmentPrimitives.jsx';

function EnvironmentDetails({ environment }) {
  switch (environment) {
    case 'forest':
      return (
        <g className="scene-detail scene-detail--forest">
          <MosaicTree x={-3} y={64} scale={0.99} />
          <MosaicTree x={308} y={53} scale={1.08} />
          <MosaicFern x={102} y={157} scale={0.57} />
          <MosaicFern x={270} y={161} scale={0.52} />
        </g>
      );
    case 'rocky':
      return (
        <g className="scene-detail scene-detail--rocky">
          <path d="M153 123L179 89L202 72L230 106L251 126Z" fill="var(--mosaic-rock-dark, var(--mosaic-scene-rock))" />
          <path d="M179 89L202 72L206 105L186 121L153 123Z" fill="var(--mosaic-rock-light, var(--pixel-ridge-light))" opacity="0.68" />
          <path d="M206 105L202 72L230 106L251 126H186Z" fill="var(--mosaic-rock-mid, var(--mosaic-scene-rock))" />
          <MosaicRock x={14} y={158} scale={0.8} />
          <MosaicRock x={285} y={145} scale={1.05} />
          <MosaicRock x={262} y={181} scale={0.52} />
        </g>
      );
    case 'meadow':
      return (
        <g className="scene-detail scene-detail--meadow">
          <MosaicFern x={22} y={155} scale={0.58} />
          <MosaicFlower x={62} y={160} scale={0.6} />
          <MosaicFlower x={108} y={168} scale={0.48} />
          <MosaicFlower x={304} y={159} scale={0.61} />
          <MosaicFern x={338} y={151} scale={0.64} />
        </g>
      );
    case 'trail':
      return (
        <g className="scene-detail scene-detail--trail">
          <g>
            <path d="M0 157L34 132L69 137L104 120L140 147L151 178H0Z" fill="var(--mosaic-ridge-far-shade, var(--mosaic-scene-shadow))" />
            <path d="M267 154L301 116L331 126L359 99L390 126V179H256Z" fill="var(--mosaic-ridge-far-shade, var(--mosaic-scene-shadow))" />
            <path d="M34 132L69 137L51 160L0 169V157ZM301 116L331 126L313 156L267 154Z" fill="var(--mosaic-ridge-far-light, var(--pixel-ridge-light))" opacity="0.62" />
          </g>
          <path d="M167 240C171 217 183 198 197 185C206 176 216 165 226 157C240 164 249 176 254 190C266 212 269 226 273 240Z" className="scene-trail" />
          <g>
            <path d="M197 185C206 176 216 165 226 157C232 160 237 164 241 169L224 184L208 205L197 240H167C171 217 183 198 197 185Z" fill="var(--mosaic-path-light, var(--pixel-path))" opacity="0.54" />
          </g>
        </g>
      );
    case 'canyon':
      return (
        <g className="scene-detail scene-detail--canyon">
          <path d="M0 89L51 88L67 109L81 135L105 152L110 240H0Z" fill="var(--mosaic-canyon-dark, var(--mosaic-scene-canyon))" />
          <path d="M0 89L51 88L43 127L69 156L59 240H0Z" fill="var(--mosaic-canyon-light, var(--mosaic-scene-canyon-light))" opacity="0.64" />
          <path d="M390 78L346 84L330 106L312 129L289 158L282 240H390Z" fill="var(--mosaic-canyon-dark, var(--mosaic-scene-canyon))" />
          <path d="M390 78L346 84L356 120L328 152L339 240H390Z" fill="var(--mosaic-canyon-light, var(--mosaic-scene-canyon-light))" opacity="0.61" />
          <path d="M51 88L43 127L69 156M346 84L356 120L328 152" fill="none" stroke="var(--mosaic-rock-seam, var(--navy))" strokeOpacity="0.27" strokeWidth="1.5" />
          <MosaicRock x={111} y={181} scale={0.53} />
        </g>
      );
    case 'ridge':
      return (
        <g className="scene-detail scene-detail--ridge">
          <path d="M0 176L53 137L91 155L146 115L203 164L250 124L304 151L350 112L390 145V210H0Z" fill="var(--mosaic-ridge-near, var(--mosaic-scene-ridge-dark))" />
          <path d="M0 176L53 137L73 165L41 196H0ZM91 155L146 115L163 154L133 184ZM203 164L250 124L274 159L236 189ZM304 151L350 112L369 149L339 182Z" fill="var(--mosaic-ridge-near-light, var(--pixel-ridge-light))" opacity="0.59" />
          <MosaicCloud x={249} y={42} scale={0.5} className="scene-cloud-mark" />
        </g>
      );
    case 'sunrise':
      return (
        <g className="scene-detail scene-detail--sunrise">
          <g>
            <path d="M287 57L300 39L323 35L343 48L352 71L343 93L321 103L299 94L283 77Z" fill="var(--gold)" />
            <path d="M300 39L323 35L322 67L299 94L283 77L287 57Z" fill="var(--mosaic-sun-light, var(--cream))" opacity="0.38" />
            <path d="M322 67L343 48L352 71L343 93L321 103Z" fill="var(--mosaic-sun-shadow, var(--pixel-gold-shadow))" opacity="0.42" />
            <path d="M0 159L44 132L88 155L131 116L177 149L220 126L268 151L311 119L352 143L390 129V207H0Z" fill="var(--mosaic-sunrise-hill, var(--mosaic-scene-sunrise))" />
            <path d="M44 132L88 155L59 183L13 184ZM131 116L177 149L151 177L106 169ZM220 126L268 151L244 181L201 177ZM311 119L352 143L333 172L288 169Z" fill="var(--mosaic-sunrise-light, var(--pixel-ridge-light))" opacity="0.47" />
          </g>
          <path d="M168 240C178 215 186 199 197 184C208 171 215 161 224 153C238 166 250 182 257 199C263 217 268 229 273 240Z" className="scene-trail" />
          <g>
            <path d="M197 184C208 171 215 161 224 153L235 165L217 190L198 240H168C178 215 186 199 197 184Z" fill="var(--mosaic-path-light, var(--pixel-path))" opacity="0.49" />
          </g>
          <MosaicFlower x={311} y={172} scale={0.45} />
        </g>
      );
    default:
      return null;
  }
}

export default function ProjectTreasureScene({ projectId, compact = false }) {
  const artwork = getProjectArtwork(projectId);
  const rewardName = `reward-${artwork.reward}`;

  return (
    <div
      className={`treasure-scene treasure-scene--${artwork.environment}${compact ? ' treasure-scene--compact' : ''}`}
      data-accent={artwork.accent}
      data-chest={artwork.chest}
      aria-hidden="true"
    >
      <svg
        className="treasure-scene__environment"
        viewBox="0 0 390 240"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <rect width="390" height="240" className="scene-sky" />
        <path d="M0 31L53 18L108 42L171 17L239 35L310 14L390 37M53 18L74 86L144 72L171 17L196 87L268 79L310 14L345 85L390 37" fill="none" stroke="var(--cream)" strokeOpacity="0.1" strokeWidth="1" />
        <path d="M0 92C75 79 135 97 194 86C263 73 323 97 390 81V176H0Z" className="scene-haze" />
        <path d="M0 166L41 144L81 117L118 145L151 112L188 137L223 121L260 149L299 111L339 139L390 119V212H0Z" className="scene-hills" />
        <path className="scene-hill-facet" d="M41 144L81 117L91 151L64 181L20 176ZM118 145L151 112L165 151L136 184ZM223 121L260 149L235 177L197 172ZM299 111L339 139L316 178L278 168Z" fill="var(--mosaic-ridge-far-light, var(--pixel-ridge-light))" opacity="0.53" />
        <path className="scene-ground" d="M0 190C37 180 68 183 98 191C143 177 175 180 207 190C254 176 281 183 316 190C350 180 372 183 390 189V240H0Z" />
        <path className="scene-ground-facet" d="M0 190C37 180 68 183 98 191C143 177 175 180 207 190C254 176 281 183 316 190C350 180 372 183 390 189V205C359 198 342 200 316 206C276 197 244 199 207 206C170 196 136 199 98 206C58 196 28 198 0 205Z" fill="var(--mosaic-ground-light, var(--gold))" />
        <MosaicGroundNetwork y={204} scaleY={36 / 120} />
        <path d="M0 228C52 220 90 231 143 223C193 217 228 232 278 224C325 217 353 230 390 220V240H0Z" className="scene-ground-shadow" opacity="0.3" />
        <EnvironmentDetails environment={artwork.environment} />
      </svg>

      <div className="treasure-dinosaur">
        <PixelSprite name={artwork.dinosaur} className="treasure-dinosaur__sprite" />
        <span className="dinosaur-reaction" />
      </div>

      <div className="treasure-cache">
        <span className="treasure-glow" />
        <PixelSprite name="chest" className="treasure-chest treasure-chest--closed" />
        <PixelSprite name="chest-open" className="treasure-chest treasure-chest--open" />
        <PixelSprite name={rewardName} className="treasure-reward" />
      </div>

      <span className="scene-pixel scene-pixel--one" />
      <span className="scene-pixel scene-pixel--two" />
      <span className="scene-pixel scene-pixel--three" />
    </div>
  );
}
