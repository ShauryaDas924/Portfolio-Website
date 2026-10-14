import { PixelSprite } from './PixelSpriteLibrary.jsx';
import {
  MosaicCloud,
  MosaicFern,
  MosaicFlower,
  MosaicGroundNetwork,
  MosaicRock,
  MosaicTree,
} from './MosaicEnvironmentPrimitives.jsx';

export default function PrehistoricLandscape() {
  return (
    <figure className="prehistoric-landscape" aria-hidden="true">
      <svg
        className="prehistoric-landscape__canvas"
        viewBox="0 0 720 520"
        preserveAspectRatio="xMidYMid slice"
        focusable="false"
      >
        <rect width="720" height="520" className="world-sky" />
        <g className="world-sky-network" fill="none" stroke="var(--cream)" strokeOpacity="0.12" strokeWidth="1.4">
          <path d="M0 43L84 28L145 60L232 31L305 53L382 18L471 37L556 19L635 49L720 34M84 28L74 113L145 60L181 136L267 113L305 53L340 128L419 105L471 37L514 115L607 119L635 49M0 162L74 113L181 136L267 113L340 128L419 105L514 115L607 119L720 143" />
          <path d="M0 43L74 113M232 31L181 136M382 18L419 105M556 19L607 119M720 34L720 143" />
        </g>
        <path d="M0 136C130 107 235 139 353 119C485 96 596 128 720 105V273H0Z" className="world-haze" />

        <g className="world-sun">
          <path d="M553 82L568 58L592 47L621 55L642 77L648 106L635 130L611 143L583 138L559 117Z" />
          <path d="M568 58L592 47L600 82L580 98L553 82Z" fill="var(--mosaic-sun-light, var(--cream))" opacity="0.38" />
          <path d="M600 82L621 55L642 77L648 106L620 111Z" fill="var(--mosaic-sun-mid, var(--gold))" />
          <path d="M580 98L600 82L620 111L611 143L583 138L559 117Z" fill="var(--mosaic-sun-shadow, var(--pixel-gold-shadow))" opacity="0.45" />
          <path d="M580 98L600 82L620 111M600 82L592 47" fill="none" stroke="var(--mosaic-sun-seam, var(--pixel-gold-shadow))" strokeOpacity="0.24" strokeWidth="1.5" />
        </g>

        <MosaicCloud x={54} y={75} scale={1.04} className="world-cloud world-cloud--one" />
        <MosaicCloud x={355} y={102} scale={0.78} className="world-cloud world-cloud--two" />

        {/* The meteor passes behind both mountain layers as it descends. */}
        <g className="world-meteor">
          <path className="world-meteor-glow" d="M48 76L76 75L106 94L123 117L100 137L75 112L42 98Z" fill="var(--gold)" opacity="0.16" />
          <path className="meteor-tail meteor-tail--far world-meteor-fragment" d="M15 72L26 70L31 76L25 82L13 79Z" />
          <path className="meteor-tail world-meteor-fragment" d="M34 81L46 76L53 83L48 92L35 90Z" />
          <path className="meteor-tail world-meteor-fragment" d="M54 69L64 68L69 75L62 81L52 77Z" />
          <path className="meteor-tail world-meteor-fragment" d="M60 96L71 90L79 96L74 105L62 104Z" />
          <path className="meteor-tail" d="M48 85L73 78L96 94L81 108L62 100Z" opacity="0.62" />
          <path className="meteor-rock" d="M77 91L96 83L115 93L121 111L108 128L88 124L75 108Z" />
          <path className="meteor-core meteor-facet" d="M78 92L96 84L96 101L84 107L75 108Z" />
          <path className="meteor-facet" d="M96 84L115 93L121 111L104 108L96 101Z" fill="var(--mosaic-meteor-light, var(--gold))" />
          <path className="meteor-facet" d="M84 107L96 101L104 108L108 128L88 124L75 108Z" fill="var(--mosaic-meteor-mid, var(--terracotta))" />
          <path className="meteor-facet" d="M104 108L121 111L108 128Z" fill="var(--mosaic-meteor-dark, var(--pixel-meteor-rock))" />
          <path d="M96 84V101L84 107M96 101L104 108L108 128" fill="none" stroke="var(--navy)" strokeOpacity="0.3" strokeWidth="1.5" />
        </g>

        <g className="world-ridge world-ridge--far">
          <path d="M0 286L43 263L79 231L122 256L171 201L210 175L254 224L302 195L350 154L391 213L438 188L481 161L533 220L583 184L632 205L672 180L720 229V360H0Z" />
          <path d="M79 231L122 256L171 201L210 175L193 253L149 281L89 277Z" fill="var(--mosaic-ridge-far-light, var(--pixel-ridge-light))" opacity="0.5" />
          <path d="M210 175L254 224L302 195L350 154L329 239L278 270L193 253Z" fill="var(--mosaic-ridge-far-shade, var(--pixel-ridge-far))" />
          <path d="M350 154L391 213L438 188L481 161L462 245L414 272L329 239Z" fill="var(--mosaic-ridge-far-light, var(--pixel-ridge-light))" opacity="0.42" />
          <path d="M481 161L533 220L583 184L632 205L672 180L720 229V300L597 274L531 258L462 245Z" fill="var(--mosaic-ridge-far-shade, var(--pixel-ridge-far))" />
          <path d="M210 175L193 253L149 281M350 154L329 239L278 270M481 161L462 245L414 272M583 184L597 274" fill="none" stroke="var(--mosaic-ridge-seam, var(--periwinkle))" strokeOpacity="0.23" strokeWidth="2" />
        </g>

        <g className="world-volcano">
          <path d="M446 288L476 253L495 225L507 198L536 199L550 226L579 259L608 288Z" className="volcano-body" />
          <path d="M507 198L536 199L548 222L529 232L497 223Z" className="volcano-rim" />
          <path d="M501 223L529 232L511 288H446L476 253Z" fill="var(--mosaic-volcano-light, var(--pixel-ridge-light))" opacity="0.45" />
          <path d="M529 232L548 222L579 259L608 288H511Z" fill="var(--mosaic-volcano-dark, var(--pixel-volcano-rim))" opacity="0.72" />
          <path d="M511 201L521 207L528 202L535 209L529 227L518 232Z" className="volcano-glow" />
          <g className="volcano-smoke">
            <path d="M514 185C507 178 510 170 518 168C514 159 519 151 527 151C532 142 545 140 550 148C561 147 567 155 563 163C570 169 566 179 556 180C551 189 536 190 530 184Z" />
            <path d="M527 151L537 160L531 174L518 168M550 148L548 164L563 163" fill="none" stroke="var(--mosaic-cloud-seam, var(--periwinkle))" strokeOpacity="0.2" strokeWidth="1.5" />
          </g>
        </g>

        <g className="world-ridge world-ridge--near">
          <path d="M0 328L45 293L88 245L126 267L172 302L212 258L245 221L286 264L324 303L371 269L407 234L457 290L496 312L542 258L576 231L622 285L672 269L720 304V392H0Z" />
          <path className="ridge-light" d="M0 328L45 293L88 245L110 285L80 333L39 365L0 360ZM172 302L212 258L245 221L264 264L235 316L193 352L145 349ZM324 303L371 269L407 234L431 281L394 328L354 361L309 348ZM496 312L542 258L576 231L594 280L558 327L521 352L478 346Z" />
          <path d="M88 245L110 285L145 349M245 221L264 264L309 348M407 234L431 281L478 346M576 231L594 280L672 269" fill="none" stroke="var(--mosaic-ridge-seam, var(--navy))" strokeOpacity="0.16" strokeWidth="2" />
        </g>

        <g className="world-flora world-flora--left">
          <MosaicTree x={10} y={244} scale={1.02} />
        </g>
        <g className="world-flora world-flora--right">
          <MosaicTree x={621} y={241} scale={1.05} />
        </g>

        <g className="world-ground">
          <path d="M0 358C55 345 91 346 129 354C183 339 220 341 270 354C329 337 374 341 416 353C473 334 522 338 565 352C631 336 680 344 720 355V520H0Z" className="ground-body" />
          <path d="M0 358C55 345 91 346 129 354C183 339 220 341 270 354C329 337 374 341 416 353C473 334 522 338 565 352C631 336 680 344 720 355L720 381C658 367 622 372 565 378C501 362 463 367 416 379C351 363 318 371 270 380C211 362 175 370 129 380C77 365 35 370 0 381Z" className="ground-top" />
          <MosaicGroundNetwork y={378} scaleX={720 / 390} scaleY={142 / 120} />
          <path d="M0 467C113 450 164 478 252 461C332 443 385 477 473 461C567 440 629 472 720 455V520H0Z" className="ground-shadow" opacity="0.36" />
          <path d="M280 520C294 484 306 461 330 437C346 417 361 402 390 391C420 403 439 419 452 440C472 464 485 490 494 520Z" className="world-path" />
          <path d="M330 437C346 417 361 402 390 391C408 398 420 408 432 422L398 433L372 454L345 485L326 520H280C294 484 306 461 330 437Z" fill="var(--mosaic-path-light, var(--pixel-path))" opacity="0.7" />
        </g>

        <g className="world-ferns">
          <MosaicFern x={168} y={334} scale={0.87} />
          <MosaicFern x={505} y={338} scale={0.9} />
        </g>
        <g className="world-flowers">
          <MosaicFlower x={239} y={379} scale={0.78} />
          <MosaicFlower x={611} y={375} scale={0.7} />
        </g>
        <g className="world-rocks">
          <MosaicRock x={83} y={391} scale={0.92} />
          <MosaicRock x={561} y={411} scale={0.76} />
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
