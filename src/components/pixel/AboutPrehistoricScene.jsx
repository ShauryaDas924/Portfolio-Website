import { PixelSprite } from './PixelSpriteLibrary.jsx';

export default function AboutPrehistoricScene() {
  return (
    <figure className="about-prehistoric-scene" aria-hidden="true">
      <svg
        className="about-prehistoric-scene__landscape"
        viewBox="0 0 480 190"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        shapeRendering="crispEdges"
      >
        <rect width="480" height="190" className="about-scene-sky" />
        <rect x="374" y="26" width="54" height="54" className="about-scene-sun" />
        <path
          className="about-scene-ridge"
          d="M0 104H38V86H76V66H112V84H148V74H188V96H226V80H264V62H300V82H338V94H376V76H414V92H450V82H480V138H0Z"
        />
        <path
          className="about-scene-ground"
          d="M0 126H54V116H118V130H180V118H244V128H310V116H370V130H426V120H480V190H0Z"
        />
        <rect y="144" width="480" height="46" className="about-scene-ground-shadow" />

        <g className="about-scene-flora">
          <path d="M36 146H43V111H50V119H61V126H48V133H64V140H45V156H38V140H24V133H36V126H27V119H36Z" />
          <path d="M324 150H331V113H338V121H350V128H336V135H354V142H333V158H326V142H312V135H324V128H315V121H324Z" />
          <rect x="444" y="98" width="8" height="56" />
          <rect x="428" y="112" width="16" height="8" />
          <rect x="452" y="126" width="18" height="8" />
          <rect x="436" y="90" width="24" height="14" />
        </g>

        <g className="about-scene-flower">
          <rect x="278" y="136" width="8" height="8" />
          <rect x="270" y="144" width="24" height="8" />
          <rect x="278" y="152" width="8" height="8" />
          <rect x="394" y="142" width="8" height="8" />
          <rect x="386" y="150" width="24" height="8" />
          <rect x="394" y="158" width="8" height="8" />
        </g>
        <g className="about-scene-flower-center">
          <rect x="278" y="144" width="8" height="8" />
          <rect x="394" y="150" width="8" height="8" />
        </g>
      </svg>

      <PixelSprite name="brachiosaurus" className="about-prehistoric-scene__dinosaur" />
    </figure>
  );
}
