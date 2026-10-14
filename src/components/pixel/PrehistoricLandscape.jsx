import { PixelSprite } from './PixelSpriteLibrary.jsx';

export default function PrehistoricLandscape() {
  return (
    <figure className="prehistoric-landscape" aria-hidden="true">
      <svg
        className="prehistoric-landscape__canvas"
        viewBox="0 0 720 520"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
        shapeRendering="crispEdges"
      >
        <rect width="720" height="520" className="world-sky" />
        <rect y="118" width="720" height="118" className="world-haze" />

        <g className="world-sun">
          <rect x="548" y="54" width="88" height="88" />
          <rect x="532" y="70" width="120" height="56" />
          <rect x="564" y="38" width="56" height="120" />
        </g>

        <g className="world-cloud world-cloud--one">
          <rect x="70" y="88" width="92" height="16" />
          <rect x="90" y="72" width="52" height="16" />
          <rect x="54" y="104" width="128" height="12" />
        </g>
        <g className="world-cloud world-cloud--two">
          <rect x="368" y="112" width="78" height="14" />
          <rect x="384" y="98" width="42" height="14" />
          <rect x="350" y="126" width="116" height="10" />
        </g>

        {/* The meteor is painted before every ridge, so its descent is naturally occluded. */}
        <g className="world-meteor">
          <rect x="14" y="78" width="48" height="8" className="meteor-tail meteor-tail--far" />
          <rect x="38" y="86" width="40" height="8" className="meteor-tail" />
          <rect x="62" y="94" width="24" height="8" className="meteor-core" />
          <rect x="78" y="102" width="16" height="16" className="meteor-rock" />
          <rect x="86" y="110" width="16" height="8" className="meteor-rock" />
        </g>

        <g className="world-ridge world-ridge--far">
          <path d="M0 250H32V230H72V210H112V232H150V190H182V168H214V192H244V222H278V204H310V174H340V154H372V184H402V220H438V196H470V174H506V204H540V228H580V198H616V176H650V206H684V226H720V320H0Z" />
        </g>

        <g className="world-volcano">
          <path d="M442 274H470V250H494V222H518V196H542V220H566V250H594V274Z" className="volcano-body" />
          <path d="M500 222H536V238H552V250H482V238H500Z" className="volcano-rim" />
          <rect x="514" y="224" width="12" height="30" className="volcano-glow" />
          <g className="volcano-smoke">
            <rect x="504" y="178" width="20" height="20" />
            <rect x="520" y="164" width="28" height="24" />
            <rect x="540" y="146" width="34" height="26" />
          </g>
        </g>

        <g className="world-ridge world-ridge--near">
          <path d="M0 312H26V286H62V260H100V238H132V256H168V278H204V246H236V220H268V242H300V270H340V286H378V252H410V230H442V252H478V282H516V262H550V240H584V258H622V282H660V264H690V282H720V360H0Z" />
          <path d="M0 316H94V294H180V312H274V286H360V316H452V294H548V314H634V292H720V370H0Z" className="ridge-light" />
        </g>

        <g className="world-ground">
          <path d="M0 350H58V334H126V346H196V328H260V344H338V330H402V348H482V326H552V342H628V330H720V520H0Z" className="ground-top" />
          <rect y="370" width="720" height="150" className="ground-body" />
          <path d="M0 434H74V418H144V442H224V422H302V448H390V426H478V446H558V420H634V438H720V520H0Z" className="ground-shadow" />
          <path d="M278 520H488V484H460V452H432V424H390V396H354V414H330V448H306V482H278Z" className="world-path" />
        </g>

        <g className="world-flora world-flora--left">
          <rect x="38" y="306" width="10" height="74" />
          <rect x="20" y="324" width="28" height="10" />
          <rect x="48" y="342" width="30" height="10" />
          <rect x="28" y="300" width="28" height="18" />
        </g>
        <g className="world-flora world-flora--right">
          <rect x="650" y="294" width="10" height="88" />
          <rect x="622" y="314" width="28" height="10" />
          <rect x="660" y="334" width="34" height="10" />
          <rect x="638" y="286" width="32" height="20" />
        </g>

        <g className="world-ferns">
          <path d="M190 382H198V342H206V350H218V358H204V366H222V374H200V390H192V374H174V366H190V358H178V350H190Z" />
          <path d="M520 390H528V350H536V358H550V366H534V374H554V382H530V398H522V382H504V374H520V366H508V358H520Z" />
        </g>

        <g className="world-flowers">
          <rect x="238" y="390" width="10" height="10" />
          <rect x="230" y="398" width="26" height="10" />
          <rect x="238" y="408" width="10" height="10" />
          <rect x="610" y="382" width="10" height="10" />
          <rect x="602" y="390" width="26" height="10" />
          <rect x="610" y="400" width="10" height="10" />
        </g>
        <g className="world-flower-centers">
          <rect x="238" y="398" width="10" height="10" />
          <rect x="610" y="390" width="10" height="10" />
        </g>

        <g className="world-rocks">
          <path d="M104 408H126V394H154V408H168V426H92V416H104Z" />
          <path d="M574 434H594V416H622V426H638V448H562V440H574Z" />
        </g>
      </svg>

      <div className="hero-mascot">
        <PixelSprite name="t-rex" className="hero-mascot__dinosaur" />
        <PixelSprite name="backpack" className="hero-mascot__backpack" />
        <PixelSprite name="laptop" className="hero-mascot__laptop" />
      </div>

      <div className="hero-cache">
        <PixelSprite name="chest" className="hero-cache__chest" />
        <span className="hero-cache__sparkle" />
      </div>

      <div className="hero-field-marker">
        <span>FIELD LOG</span>
        <strong>BUILD · TEST · SHIP</strong>
      </div>
    </figure>
  );
}
