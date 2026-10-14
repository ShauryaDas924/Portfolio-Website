import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import {
  githubCards,
  products,
  resumes,
} from '../src/data/portfolioData.js';
import {
  fallbackProjectArtwork,
  getProjectArtwork,
  projectArtwork,
} from '../src/data/projectArtwork.js';

const root = fileURLToPath(new URL('../', import.meta.url));

const expectedProductIds = [
  'native-macos-website-restriction-platform',
  'native-macos-application-management-platform',
  'evrana',
  'browser-manager',
  'personal-keyword-blocker',
  'discipline-feed-guard',
  'whoopberry',
];

const requiredCaseStudyKeys = [
  'problem',
  'built',
  'architecture',
  'challenge',
  'boundaries',
];

const artworkFields = ['accent', 'chest', 'dinosaur', 'environment', 'reward'];

const expectedArtwork = {
  'native-macos-website-restriction-platform': {
    dinosaur: 'triceratops',
    environment: 'forest',
    chest: 'reinforced',
    reward: 'shield',
    accent: 'gold',
  },
  'native-macos-application-management-platform': {
    dinosaur: 'stegosaurus',
    environment: 'rocky',
    chest: 'timed',
    reward: 'clock',
    accent: 'terracotta',
  },
  evrana: {
    dinosaur: 'brachiosaurus',
    environment: 'meadow',
    chest: 'vine',
    reward: 'flower',
    accent: 'periwinkle',
  },
  'browser-manager': {
    dinosaur: 't-rex',
    environment: 'trail',
    chest: 'explorer',
    reward: 'compass',
    accent: 'gold',
  },
  'personal-keyword-blocker': {
    dinosaur: 'ankylosaurus',
    environment: 'canyon',
    chest: 'sealed',
    reward: 'rune',
    accent: 'periwinkle',
  },
  'discipline-feed-guard': {
    dinosaur: 'pterodactyl',
    environment: 'ridge',
    chest: 'guard',
    reward: 'leaf',
    accent: 'terracotta',
  },
  whoopberry: {
    dinosaur: 'raptor',
    environment: 'sunrise',
    chest: 'archive',
    reward: 'map',
    accent: 'gold',
  },
};

async function read(relativePath) {
  return readFile(path.join(root, relativePath), 'utf8');
}

async function readIfPresent(relativePath) {
  const absolutePath = path.join(root, relativePath);
  return existsSync(absolutePath) ? readFile(absolutePath, 'utf8') : null;
}

async function sourceFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);

      if (entry.isDirectory()) return sourceFiles(entryPath);
      return /\.(?:cjs|js|jsx|mjs)$/.test(entry.name) ? [entryPath] : [];
    }),
  );

  return files.flat();
}

function metaContent(html, name) {
  const tag = html.match(new RegExp(`<meta\\s+[^>]*name=["']${name}["'][^>]*>`, 'i'))?.[0];
  return tag?.match(/content=["']([^"']*)["']/i)?.[1] ?? null;
}

function contrastRatio(firstHex, secondHex) {
  const luminance = (hex) => {
    const channels = hex
      .replace('#', '')
      .match(/.{2}/g)
      .map((channel) => Number.parseInt(channel, 16) / 255)
      .map((channel) =>
        channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4,
      );

    return (0.2126 * channels[0]) + (0.7152 * channels[1]) + (0.0722 * channels[2]);
  };

  const first = luminance(firstHex);
  const second = luminance(secondHex);
  return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05);
}

test('featured product IDs and case-study anchors remain stable and unique', async () => {
  const productIds = products.map(({ id }) => id);
  const caseAnchors = productIds.map((id) => `case-${id}`);

  assert.deepEqual(productIds, expectedProductIds);
  assert.equal(new Set(productIds).size, expectedProductIds.length);
  assert.equal(new Set(caseAnchors).size, expectedProductIds.length);

  const productCardSource = await read('src/components/ProductCard.jsx');
  const productDetailSource = await read('src/components/ProductDetail.jsx');
  assert.ok(productCardSource.includes('href={`#case-${product.id}`}'));
  assert.ok(productDetailSource.includes('id={`case-${product.id}`}'));
});

test('every featured product keeps the required case-study content contract', () => {
  for (const product of products) {
    assert.ok(product.caseStudy, `${product.id} must have case-study data`);

    for (const key of requiredCaseStudyKeys) {
      assert.equal(
        typeof product.caseStudy[key],
        'string',
        `${product.id}.${key} must remain a string`,
      );
      assert.ok(product.caseStudy[key].trim(), `${product.id}.${key} must not be empty`);
    }
  }
});

test('project artwork covers the product inventory with presentation-only fields', () => {
  assert.deepEqual(Object.keys(projectArtwork), expectedProductIds);
  assert.deepEqual(projectArtwork, expectedArtwork);
  assert.ok(Object.isFrozen(projectArtwork));

  const compositions = new Set();

  for (const id of expectedProductIds) {
    const artwork = projectArtwork[id];
    assert.ok(artwork, `${id} must have an artwork mapping`);
    assert.deepEqual(Object.keys(artwork).sort(), artworkFields);
    assert.ok(Object.isFrozen(artwork));

    for (const field of artworkFields) {
      assert.equal(typeof artwork[field], 'string');
      assert.ok(artwork[field].trim(), `${id}.${field} must not be empty`);
    }

    compositions.add(artworkFields.map((field) => artwork[field]).join('|'));
    assert.equal(getProjectArtwork(id), artwork);
  }

  assert.equal(compositions.size, expectedProductIds.length);
  assert.deepEqual(Object.keys(fallbackProjectArtwork).sort(), artworkFields);
  assert.equal(getProjectArtwork('unknown-project'), fallbackProjectArtwork);
});

test('the required mosaic primary colors remain exact', async (context) => {
  const coreCss = await read('src/styles.css');
  const pixelCss = await readIfPresent('src/pixel-art.css');
  const combinedCss = `${coreCss}\n${pixelCss ?? ''}`.toLowerCase();
  const requiredColors = ['#d7cc65', '#6570d7', '#e27e5a'];
  const paletteImplementationStarted =
    pixelCss !== null || requiredColors.some((color) => combinedCss.includes(color));

  if (!paletteImplementationStarted) {
    context.skip('Prehistoric palette styles have not been added yet.');
    return;
  }

  for (const color of requiredColors) {
    assert.ok(combinedCss.includes(color), `Missing required primary color ${color}`);
  }
});

test('the hero and About artwork retain the required prehistoric story details', async () => {
  const [heroScene, aboutScene] = await Promise.all([
    read('src/components/pixel/PrehistoricLandscape.jsx'),
    read('src/components/pixel/AboutPrehistoricScene.jsx'),
  ]);

  for (const requiredHeroDetail of [
    'world-meteor',
    'world-ferns',
    'world-flowers',
    'name="t-rex"',
    'name="backpack"',
    'name="laptop"',
    'name="chest"',
  ]) {
    assert.ok(heroScene.includes(requiredHeroDetail), `Hero is missing ${requiredHeroDetail}`);
  }

  assert.ok(aboutScene.includes('name="brachiosaurus"'));
  assert.ok(aboutScene.includes('about-scene-flower'));
  assert.ok(aboutScene.includes('aria-hidden="true"'));
});

test('the mosaic artwork uses smooth authored cells and a shared site motif', async () => {
  const [sprites, hero, about, projects, primitives, network, coreCss, artCss] = await Promise.all([
    read('src/components/pixel/PixelSpriteLibrary.jsx'),
    read('src/components/pixel/PrehistoricLandscape.jsx'),
    read('src/components/pixel/AboutPrehistoricScene.jsx'),
    read('src/components/pixel/ProjectTreasureScene.jsx'),
    read('src/components/pixel/MosaicEnvironmentPrimitives.jsx'),
    read('src/assets/mosaic-network.svg'),
    read('src/styles.css'),
    read('src/pixel-art.css'),
  ]);

  for (const source of [sprites, hero, about, projects, primitives, artCss]) {
    assert.doesNotMatch(source, /crispEdges|image-rendering:\s*pixelated/i);
  }

  assert.match(sprites, /<clipPath/);
  assert.match(sprites, /mosaic-cell/);
  assert.match(primitives, /MosaicGroundNetwork/);
  assert.match(network, /<path[^>]*Q\d/);
  assert.doesNotMatch(network, /<rect\b/i);
  assert.match(coreCss, /--mosaic-network:\s*url\('\.\/assets\/mosaic-network\.svg'\)/);
  assert.ok((coreCss.match(/mask-image:\s*var\(--mosaic-network\)/g) ?? []).length >= 4);

  const meteorSeconds = Number(artCss.match(/\.world-meteor\s*\{[^}]*animation:\s*meteor-crossing\s+([\d.]+)s/s)?.[1]);
  assert.ok(meteorSeconds >= 45 && meteorSeconds <= 70, 'meteor must keep its slow cycle');
});

test('navigation, touch, contrast, and motion accessibility contracts remain explicit', async () => {
  const [coreCss, pixelCss, navbarSource, sectionHeaderSource] = await Promise.all([
    read('src/styles.css'),
    read('src/pixel-art.css'),
    read('src/components/Navbar.jsx'),
    read('src/components/SectionHeader.jsx'),
  ]);

  const paletteEntries = [...coreCss.matchAll(/--([\w-]+):\s*(#[\dA-F]{6});/gi)].map(
    ([, name, value]) => [name, value],
  );
  const palette = Object.fromEntries(paletteEntries);

  assert.ok(contrastRatio(palette.navy, palette.cream) >= 4.5);
  assert.match(
    coreCss,
    /\.nav-links a:hover,[\s\S]*?background:\s*var\(--navy\);[\s\S]*?color:\s*var\(--cream\);/,
  );
  assert.match(coreCss, /\.contact-section\s*\{[^}]*background:\s*var\(--navy\);/s);
  assert.match(coreCss, /\.nav-links a\s*\{[^}]*min-height:\s*44px;/s);
  assert.match(coreCss, /\.nav-social a,[\s\S]*?\.nav-toggle\s*\{[^}]*width:\s*44px;[^}]*height:\s*44px;/);
  assert.match(coreCss, /\.text-link\s*\{[^}]*min-height:\s*44px;/s);
  assert.match(
    coreCss,
    /\.contact-section :focus-visible,[\s\S]*?\.footer :focus-visible\s*\{[^}]*outline-color:\s*var\(--gold\);/,
  );

  assert.ok(navbarSource.includes("destination?.querySelector('h1, h2')?.focus"));
  assert.ok(navbarSource.includes('inert={isMobile && !mobileOpen'));
  assert.ok(sectionHeaderSource.includes('tabIndex="-1"'));

  assert.match(pixelCss, /@media \(hover: none\), \(pointer: coarse\)/);
  assert.match(pixelCss, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(coreCss, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(pixelCss, /\.product-card:hover \.treasure-chest--open,[\s\S]*?\.product-card:focus-within \.treasure-chest--open/);
  assert.doesNotMatch(pixelCss, /#[\dA-F]{3,8}|rgba\(/i);
});

test('the public resume path and download name remain unchanged', async () => {
  assert.equal(resumes.length, 1);
  assert.deepEqual(resumes[0], {
    title: 'Software Engineer / Product Builder Resume',
    description:
      'One-page software engineering resume focused on native macOS systems, full-stack AI, published browser products, data engineering, and end-to-end product building.',
    href: '/resume/Shaurya_Das_Master_Resume.pdf',
    downloadName: 'Shaurya_Das_Master_Resume.pdf',
  });

  const resumeStats = await stat(
    path.join(root, 'public/resume/Shaurya_Das_Master_Resume.pdf'),
  );
  assert.ok(resumeStats.isFile());
  assert.ok(resumeStats.size > 0);
});

test('public destinations and private-source boundaries remain explicit', () => {
  const publicDestinations = new Map([
    ['evrana', 'https://reflectmind.app'],
    [
      'browser-manager',
      'https://chromewebstore.google.com/detail/bhbajnjccejpbnffiodmkgpnlgnemdaa?utm_source=item-share-cb',
    ],
    [
      'personal-keyword-blocker',
      'https://chromewebstore.google.com/detail/mkhalihbhhhbejdpbokmbmodenjlbaom?utm_source=item-share-cb',
    ],
    [
      'discipline-feed-guard',
      'https://chromewebstore.google.com/detail/lfbhmaggcghidgndclnhabgfhpnbdilp?utm_source=item-share-cb',
    ],
    ['whoopberry', 'https://whoopberry.com/'],
  ]);

  for (const product of products) {
    assert.equal(product.productUrl, publicDestinations.get(product.id));
    assert.doesNotMatch(product.sourceNote ?? '', /github\.com|view source/i);
  }

  assert.deepEqual(
    githubCards.filter(({ href }) => href).map(({ href }) => href),
    ['https://github.com/ShauryaDas924/study-app'],
  );
});

test('noindex protections remain aligned across HTML, robots, and Pages headers', async () => {
  const [html, robots, headers] = await Promise.all([
    read('index.html'),
    read('public/robots.txt'),
    read('public/_headers'),
  ]);

  for (const agent of ['robots', 'googlebot', 'bingbot']) {
    const content = metaContent(html, agent);
    assert.ok(content, `Missing ${agent} meta directive`);

    for (const directive of ['noindex', 'nofollow', 'noarchive', 'nosnippet']) {
      assert.match(content, new RegExp(`(?:^|,\\s*)${directive}(?:,|$)`, 'i'));
    }
  }

  assert.match(robots, /^User-agent:\s*\*\s*$/im);
  assert.match(robots, /^Disallow:\s*\/\s*$/im);

  for (const route of ['/*', '/resume/*', '/product-logos/*', '/screenshots/*']) {
    assert.ok(headers.includes(route), `Missing noindex header route ${route}`);
  }

  assert.ok(
    (headers.match(/X-Robots-Tag:\s*noindex,\s*nofollow,\s*noarchive,\s*nosnippet/gi) ?? [])
      .length >= 4,
  );
});

test('the static portfolio does not add runtime data collection or persistence', async () => {
  const files = await sourceFiles(path.join(root, 'src'));
  const forbiddenRuntimePatterns = [
    ['fetch', /\bfetch\s*\(/],
    ['XMLHttpRequest', /\b(?:new\s+)?XMLHttpRequest\b/],
    ['sendBeacon', /\bsendBeacon\s*\(/],
    ['localStorage', /\blocalStorage\b/],
    ['sessionStorage', /\bsessionStorage\b/],
    ['IndexedDB', /\bindexedDB\b/],
    ['document.cookie', /\bdocument\.cookie\b/],
    ['Google Analytics', /\bgtag\s*\(/],
    ['Plausible', /\bplausible\s*\(/],
    ['PostHog', /\bposthog\b/i],
    ['Mixpanel', /\bmixpanel\b/i],
  ];

  for (const file of files) {
    const source = await readFile(file, 'utf8');
    const relativePath = path.relative(root, file);

    for (const [label, pattern] of forbiddenRuntimePatterns) {
      assert.doesNotMatch(source, pattern, `${label} must not be introduced in ${relativePath}`);
    }
  }

  const packageJson = JSON.parse(await read('package.json'));
  const dependencyNames = Object.keys({
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
  });
  assert.equal(
    dependencyNames.some((name) => /analytics|mixpanel|posthog|plausible|segment/i.test(name)),
    false,
  );
});
