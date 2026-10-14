import { getProjectArtwork } from '../../data/projectArtwork.js';
import { PixelSprite } from './PixelSpriteLibrary.jsx';

function EnvironmentDetails({ environment }) {
  switch (environment) {
    case 'forest':
      return (
        <g className="scene-detail scene-detail--forest">
          <path d="M36 166H50V132H62V98H76V132H88V166Z" />
          <path d="M312 166H326V126H338V88H352V126H364V166Z" />
          <rect x="54" y="158" width="10" height="42" />
          <rect x="336" y="156" width="10" height="44" />
        </g>
      );
    case 'rocky':
      return (
        <g className="scene-detail scene-detail--rocky">
          <path d="M22 190H48V166H72V178H88V204H18Z" />
          <path d="M290 194H310V170H344V158H364V204H282Z" />
          <path d="M178 88H194V72H210V88H226V102H178Z" />
        </g>
      );
    case 'meadow':
      return (
        <g className="scene-detail scene-detail--meadow">
          <rect x="48" y="164" width="8" height="32" />
          <rect x="42" y="158" width="20" height="10" />
          <rect x="104" y="178" width="8" height="24" />
          <rect x="98" y="172" width="20" height="10" />
          <rect x="314" y="168" width="8" height="30" />
          <rect x="308" y="162" width="20" height="10" />
        </g>
      );
    case 'trail':
      return (
        <g className="scene-detail scene-detail--trail">
          <path d="M0 126H34V112H68V128H104V114H140V142H0Z" />
          <path d="M254 130H286V106H318V120H350V98H390V144H254Z" />
          <path d="M172 220H240V200H226V180H206V164H192V180H180V202H172Z" className="scene-trail" />
        </g>
      );
    case 'canyon':
      return (
        <g className="scene-detail scene-detail--canyon">
          <path d="M0 82H52V100H76V126H98V210H0Z" />
          <path d="M390 76H344V96H320V124H298V210H390Z" />
          <rect x="42" y="116" width="16" height="14" />
          <rect x="330" y="106" width="18" height="12" />
        </g>
      );
    case 'ridge':
      return (
        <g className="scene-detail scene-detail--ridge">
          <path d="M0 152H54V128H108V148H156V120H204V150H254V126H304V146H350V118H390V212H0Z" />
          <path d="M270 74H292V58H310V74H330V88H270Z" className="scene-cloud-mark" />
        </g>
      );
    case 'sunrise':
      return (
        <g className="scene-detail scene-detail--sunrise">
          <rect x="286" y="42" width="52" height="52" />
          <rect x="276" y="52" width="72" height="32" />
          <path d="M0 152H46V128H88V150H132V116H176V146H218V126H262V150H308V118H350V140H390V212H0Z" />
          <path d="M180 210H234V190H222V170H210V156H198V174H188V194H180Z" className="scene-trail" />
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
        shapeRendering="crispEdges"
      >
        <rect width="390" height="240" className="scene-sky" />
        <rect y="86" width="390" height="70" className="scene-haze" />
        <path d="M0 150H40V132H78V112H112V134H148V104H184V128H222V114H258V136H296V110H334V132H390V210H0Z" className="scene-hills" />
        <EnvironmentDetails environment={artwork.environment} />
        <path d="M0 190H44V178H94V188H146V174H204V188H258V176H314V188H356V178H390V240H0Z" className="scene-ground" />
        <rect y="214" width="390" height="26" className="scene-ground-shadow" />
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
