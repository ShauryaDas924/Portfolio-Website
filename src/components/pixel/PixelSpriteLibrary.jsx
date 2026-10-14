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

const spriteStyles = `
  .pixel-ink { fill: var(--pixel-ink, var(--navy)); }
  .pixel-shadow { fill: var(--pixel-shadow, var(--pixel-terracotta-shadow)); }
  .pixel-mid { fill: var(--pixel-mid, var(--terracotta)); }
  .pixel-light { fill: var(--pixel-light, var(--pixel-terracotta-light)); }
  .pixel-highlight { fill: var(--pixel-highlight, var(--pixel-sun-glow)); }
  .pixel-accent { fill: var(--pixel-accent, var(--periwinkle)); }
  .pixel-gold { fill: var(--pixel-gold, var(--gold)); }
  .pixel-cream { fill: var(--pixel-cream, var(--cream)); }
`;

/**
 * Registers the portfolio's reusable pixel-art symbols in the document.
 * Render this once near the application root. The zero-sized SVG remains
 * available to <use> references without entering the accessibility tree.
 */
export function PixelSpriteLibrary() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="0"
      height="0"
      shapeRendering="crispEdges"
      style={{ position: 'absolute', overflow: 'hidden', pointerEvents: 'none' }}
    >
      <defs>
        <style>{spriteStyles}</style>

        <symbol id="sd-pixel-t-rex" viewBox="0 0 64 48">
          <path
            className="pixel-ink"
            d="M4 18H12V14H20V17H36V10H42V7H56V10H60V22H56V26H43V30H37V35H33V43H25V39H27V34H20V43H12V39H14V31H10V27H4Z"
          />
          <path
            className="pixel-mid"
            d="M8 19H15V17H21V20H39V13H44V10H55V13H58V19H53V22H40V27H34V31H19V28H12V25H8Z"
          />
          <path className="pixel-shadow" d="M12 25H33V29H27V32H18V29H12ZM28 32H35V36H31V40H28Z" />
          <path className="pixel-light" d="M20 20H37V24H32V27H20ZM43 11H54V14H43Z" />
          <rect className="pixel-cream" x="50" y="12" width="4" height="4" />
          <rect className="pixel-ink" x="52" y="13" width="2" height="2" />
          <rect className="pixel-ink" x="52" y="21" width="6" height="2" />
          <path className="pixel-ink" d="M36 27H43V30H47V33H43V32H39V30H36Z" />
          <rect className="pixel-highlight" x="17" y="18" width="4" height="3" />
        </symbol>

        <symbol id="sd-pixel-triceratops" viewBox="0 0 64 48">
          <path
            className="pixel-ink"
            d="M3 24H9V20H15V17H37V14H45V10H50V13H55V16H61V20H57V24H61V27H55V32H46V35H39V43H31V36H21V43H13V39H15V35H10V32H6V28H3Z"
          />
          <path
            className="pixel-mid"
            d="M8 24H13V21H38V18H45V15H49V18H54V20H57V22H52V28H46V31H16V29H10V27H8Z"
          />
          <path className="pixel-shadow" d="M14 29H45V33H38V36H18V33H14ZM32 34H38V40H33Z" />
          <path className="pixel-light" d="M17 21H37V25H14V23H17ZM46 18H51V22H46Z" />
          <path className="pixel-gold" d="M51 15H61V18H53ZM52 24H63V27H52Z" />
          <rect className="pixel-cream" x="49" y="20" width="4" height="4" />
          <rect className="pixel-ink" x="51" y="21" width="2" height="2" />
          <path className="pixel-ink" d="M12 20H7V17H4V20H8V23H12Z" />
        </symbol>

        <symbol id="sd-pixel-stegosaurus" viewBox="0 0 64 48">
          <path className="pixel-ink" d="M8 22H13V18H20V12H27V17H31V9H38V17H42V12H49V20H54V23H61V29H56V33H48V36H43V43H35V37H24V43H16V39H18V35H12V32H7V28H3V24H8Z" />
          <path className="pixel-mid" d="M10 24H16V21H23V19H43V21H49V23H55V26H59V28H53V31H46V33H17V30H10Z" />
          <path className="pixel-shadow" d="M17 30H46V34H39V37H22V34H17ZM36 35H42V40H37Z" />
          <path className="pixel-light" d="M20 21H42V25H15V23H20Z" />
          <path className="pixel-accent" d="M21 13H26V19H21ZM32 10H37V18H32ZM43 13H48V20H43Z" />
          <rect className="pixel-cream" x="52" y="24" width="4" height="4" />
          <rect className="pixel-ink" x="54" y="25" width="2" height="2" />
        </symbol>

        <symbol id="sd-pixel-brachiosaurus" viewBox="0 0 64 48">
          <path className="pixel-ink" d="M4 27H10V23H18V20H34V22H40V14H43V6H48V3H58V6H61V13H57V17H52V23H49V34H45V43H37V36H24V43H16V39H18V34H12V32H7V30H4Z" />
          <path className="pixel-mid" d="M8 27H14V24H32V25H42V16H45V8H49V6H56V9H58V11H54V14H49V27H46V32H18V30H10V29H8Z" />
          <path className="pixel-shadow" d="M18 30H46V34H39V37H22V34H18ZM38 34H44V40H39Z" />
          <path className="pixel-light" d="M17 24H32V27H42V30H18ZM47 8H51V22H47Z" />
          <rect className="pixel-cream" x="54" y="7" width="4" height="4" />
          <rect className="pixel-ink" x="56" y="8" width="2" height="2" />
          <rect className="pixel-ink" x="56" y="12" width="5" height="2" />
        </symbol>

        <symbol id="sd-pixel-ankylosaurus" viewBox="0 0 64 48">
          <path className="pixel-ink" d="M3 26H8V22H14V18H21V14H27V18H33V13H39V18H46V20H52V23H57V21H62V29H58V32H51V35H44V42H36V36H23V42H15V38H17V35H11V32H6V30H3Z" />
          <path className="pixel-mid" d="M9 25H15V21H45V23H51V26H56V29H50V32H16V30H9Z" />
          <path className="pixel-shadow" d="M16 30H50V34H42V37H22V34H16ZM37 34H43V39H38Z" />
          <path className="pixel-light" d="M17 21H43V25H14V23H17Z" />
          <path className="pixel-accent" d="M22 16H27V21H22ZM34 15H39V21H34ZM45 19H50V24H45Z" />
          <rect className="pixel-cream" x="48" y="24" width="4" height="4" />
          <rect className="pixel-ink" x="50" y="25" width="2" height="2" />
          <rect className="pixel-gold" x="58" y="23" width="5" height="6" />
        </symbol>

        <symbol id="sd-pixel-pterodactyl" viewBox="0 0 64 40">
          <path className="pixel-ink" d="M2 9H10V12H17V15H25V12H31V9H38V12H43V15H51V12H58V9H62V15H58V20H53V24H45V21H38V25H34V32H29V26H25V22H18V25H10V21H5V16H2Z" />
          <path className="pixel-mid" d="M7 13H12V15H20V18H27V15H36V16H43V18H51V16H57V14H59V17H55V20H48V21H41V19H35V22H29V21H23V19H16V21H11V18H7Z" />
          <path className="pixel-shadow" d="M25 19H39V23H35V27H30V23H25Z" />
          <path className="pixel-light" d="M13 15H20V18H13ZM43 17H51V20H43Z" />
          <path className="pixel-accent" d="M35 13H42V16H38V18H34Z" />
          <rect className="pixel-cream" x="38" y="14" width="3" height="3" />
          <rect className="pixel-ink" x="40" y="15" width="2" height="2" />
          <path className="pixel-gold" d="M41 16H50V19H42Z" />
        </symbol>

        <symbol id="sd-pixel-raptor" viewBox="0 0 64 48">
          <path className="pixel-ink" d="M3 17H11V20H19V23H31V18H37V12H43V9H56V12H60V21H55V25H43V29H38V35H44V39H40V42H33V38H35V34H29V31H23V35H20V42H12V39H15V32H11V28H7V24H3Z" />
          <path className="pixel-mid" d="M8 19H13V22H22V25H34V21H39V15H44V12H55V15H58V18H53V21H41V26H35V29H20V27H13V24H8Z" />
          <path className="pixel-shadow" d="M18 27H35V31H29V34H22V31H18ZM34 29H39V34H36Z" />
          <path className="pixel-light" d="M24 24H34V21H39V25H34V28H24Z" />
          <rect className="pixel-cream" x="51" y="14" width="4" height="4" />
          <rect className="pixel-ink" x="53" y="15" width="2" height="2" />
          <rect className="pixel-ink" x="53" y="20" width="6" height="2" />
          <path className="pixel-accent" d="M36 26H42V29H46V32H42V31H38V29H36Z" />
          <path className="pixel-gold" d="M34 38H39V40H36V43H32V41Z" />
        </symbol>

        <symbol id="sd-pixel-chest" viewBox="0 0 40 36">
          <path className="pixel-ink" d="M4 8H8V5H32V8H36V31H32V34H8V31H4Z" />
          <path className="pixel-gold" d="M8 9H32V15H8ZM8 20H32V30H8Z" />
          <path className="pixel-shadow" d="M8 15H32V20H8ZM8 27H32V30H8Z" />
          <rect className="pixel-highlight" x="11" y="9" width="17" height="3" />
          <rect className="pixel-ink" x="18" y="15" width="5" height="10" />
          <rect className="pixel-light" x="19" y="17" width="3" height="5" />
          <rect className="pixel-accent" x="6" y="16" width="4" height="3" />
          <rect className="pixel-accent" x="30" y="16" width="4" height="3" />
        </symbol>

        <symbol id="sd-pixel-chest-open" viewBox="0 0 40 36">
          <path className="pixel-ink" d="M6 3H34V6H38V16H34V19H8V16H3V9H6ZM4 18H36V33H32V36H8V33H4Z" />
          <path className="pixel-gold" d="M8 6H32V8H35V13H32V15H8V13H6V10H8ZM8 21H32V32H8Z" />
          <path className="pixel-shadow" d="M8 28H32V32H8ZM9 13H31V16H9Z" />
          <path className="pixel-highlight" d="M12 8H29V11H12ZM11 21H29V24H11Z" />
          <rect className="pixel-ink" x="18" y="20" width="5" height="8" />
          <rect className="pixel-light" x="19" y="21" width="3" height="4" />
        </symbol>

        <symbol id="sd-pixel-backpack" viewBox="0 0 32 36">
          <path className="pixel-ink" d="M9 3H23V6H27V11H30V32H26V35H6V32H2V12H5V7H9Z" />
          <path className="pixel-mid" d="M10 6H22V9H25V13H27V30H24V32H8V30H5V13H8V9H10Z" />
          <path className="pixel-shadow" d="M6 23H26V30H23V32H9V30H6Z" />
          <path className="pixel-light" d="M10 9H22V12H10ZM9 16H23V20H9Z" />
          <rect className="pixel-ink" x="9" y="19" width="14" height="3" />
          <rect className="pixel-gold" x="14" y="20" width="5" height="5" />
          <rect className="pixel-accent" x="2" y="16" width="4" height="11" />
          <rect className="pixel-accent" x="26" y="16" width="4" height="11" />
        </symbol>

        <symbol id="sd-pixel-laptop" viewBox="0 0 40 32">
          <path className="pixel-ink" d="M7 3H33V6H36V23H32V25H38V29H35V32H5V29H2V25H8V23H4V6H7Z" />
          <rect className="pixel-accent" x="8" y="7" width="24" height="14" />
          <path className="pixel-light" d="M11 10H18V13H14V17H11ZM21 11H29V14H25V18H21Z" />
          <path className="pixel-shadow" d="M8 23H32V26H35V28H5V26H8Z" />
          <rect className="pixel-gold" x="18" y="25" width="5" height="3" />
        </symbol>

        <symbol id="sd-pixel-reward-shield" viewBox="0 0 32 32">
          <path className="pixel-ink" d="M4 4H28V20H25V25H21V28H17V31H14V28H10V25H7V20H4Z" />
          <path className="pixel-accent" d="M8 8H24V19H21V23H18V26H15V24H12V21H9V18H8Z" />
          <path className="pixel-light" d="M11 10H16V22H13V19H11Z" />
          <path className="pixel-gold" d="M16 10H21V13H19V21H16Z" />
        </symbol>

        <symbol id="sd-pixel-reward-clock" viewBox="0 0 32 32">
          <path className="pixel-ink" d="M11 2H21V5H25V8H28V12H31V21H28V25H25V28H21V31H11V28H7V25H4V21H1V12H4V8H7V5H11Z" />
          <path className="pixel-cream" d="M11 6H21V9H25V13H28V20H25V24H21V27H11V24H7V20H4V13H7V9H11Z" />
          <path className="pixel-accent" d="M14 8H18V17H24V21H14Z" />
          <rect className="pixel-gold" x="15" y="15" width="4" height="4" />
        </symbol>

        <symbol id="sd-pixel-reward-flower" viewBox="0 0 32 32">
          <path className="pixel-ink" d="M13 2H19V7H24V5H29V12H26V16H22V20H19V30H13V21H9V18H5V14H2V8H8V6H13Z" />
          <path className="pixel-mid" d="M14 5H18V10H23V8H26V12H23V16H18V19H14V17H10V15H6V11H10V9H14Z" />
          <rect className="pixel-gold" x="13" y="11" width="7" height="7" />
          <path className="pixel-accent" d="M16 20H20V25H25V28H19V30H16Z" />
          <path className="pixel-light" d="M10 10H14V14H10ZM20 9H23V13H20Z" />
        </symbol>

        <symbol id="sd-pixel-reward-compass" viewBox="0 0 32 32">
          <path className="pixel-ink" d="M11 1H21V4H25V7H28V11H31V21H28V25H25V28H21V31H11V28H7V25H4V21H1V11H4V7H7V4H11Z" />
          <path className="pixel-cream" d="M11 5H21V8H25V12H28V20H25V24H21V27H11V24H7V20H4V12H7V8H11Z" />
          <path className="pixel-mid" d="M17 7H21V15H25V19H18V25H14V18H8V14H15V7Z" />
          <path className="pixel-accent" d="M16 9H19V16H16ZM11 15H17V18H11Z" />
          <rect className="pixel-gold" x="14" y="14" width="5" height="5" />
        </symbol>

        <symbol id="sd-pixel-reward-rune" viewBox="0 0 32 32">
          <path className="pixel-ink" d="M9 2H23V5H27V9H30V23H27V27H23V30H9V27H5V23H2V9H5V5H9Z" />
          <path className="pixel-accent" d="M10 6H22V9H25V22H22V25H10V22H7V10H10Z" />
          <path className="pixel-light" d="M14 8H19V13H23V17H19V24H14V19H10V15H14Z" />
          <rect className="pixel-gold" x="15" y="14" width="4" height="4" />
        </symbol>

        <symbol id="sd-pixel-reward-leaf" viewBox="0 0 32 32">
          <path className="pixel-ink" d="M24 2H30V10H28V16H25V21H21V25H17V28H10V25H6V21H3V14H6V10H10V7H16V5H24Z" />
          <path className="pixel-mid" d="M23 6H27V11H25V16H22V20H18V23H12V21H8V18H6V14H9V11H13V9H19V7H23Z" />
          <path className="pixel-light" d="M19 9H23V13H20V16H16V19H12V22H9V19H12V16H15V13H19Z" />
          <path className="pixel-shadow" d="M15 18H19V22H16V25H12V22H15Z" />
          <path className="pixel-ink" d="M4 27H12V24H16V27H12V30H4Z" />
        </symbol>

        <symbol id="sd-pixel-reward-map" viewBox="0 0 32 32">
          <path className="pixel-ink" d="M2 5H9V3H16V6H23V4H30V27H23V29H16V26H9V29H2Z" />
          <path className="pixel-cream" d="M5 8H9V6H14V23H9V26H5ZM17 9H22V7H27V24H23V26H17Z" />
          <path className="pixel-gold" d="M14 7H18V25H14Z" />
          <path className="pixel-accent" d="M7 11H11V14H7ZM20 11H24V14H20ZM8 20H12V23H8Z" />
          <path className="pixel-mid" d="M21 18H24V21H27V24H24V22H21Z" />
        </symbol>
      </defs>
    </svg>
  );
}

/**
 * Renders one decorative sprite from PixelSpriteLibrary.
 * Unknown names intentionally render nothing so caller input cannot become an
 * arbitrary fragment reference. `title` is ignored because sprites are always
 * decorative; put equivalent meaning in adjacent visible text when needed.
 */
export function PixelSprite({ name, className = '', title: _title, ...svgProps }) {
  if (!Object.prototype.hasOwnProperty.call(SPRITE_VIEW_BOXES, name)) {
    return null;
  }

  const classes = ['pixel-sprite', `pixel-sprite--${name}`, className].filter(Boolean).join(' ');

  return (
    <svg
      {...svgProps}
      className={classes}
      viewBox={SPRITE_VIEW_BOXES[name]}
      shapeRendering="crispEdges"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
      focusable="false"
    >
      <use href={`#sd-pixel-${name}`} />
    </svg>
  );
}
