const freezeArtwork = (artwork) => Object.freeze(artwork);

export const projectArtwork = Object.freeze({
  'native-macos-website-restriction-platform': freezeArtwork({
    dinosaur: 'triceratops',
    environment: 'forest',
    chest: 'reinforced',
    reward: 'shield',
    accent: 'gold',
  }),
  'native-macos-application-management-platform': freezeArtwork({
    dinosaur: 'stegosaurus',
    environment: 'rocky',
    chest: 'timed',
    reward: 'clock',
    accent: 'terracotta',
  }),
  evrana: freezeArtwork({
    dinosaur: 'brachiosaurus',
    environment: 'meadow',
    chest: 'vine',
    reward: 'flower',
    accent: 'periwinkle',
  }),
  'browser-manager': freezeArtwork({
    dinosaur: 't-rex',
    environment: 'trail',
    chest: 'explorer',
    reward: 'compass',
    accent: 'gold',
  }),
  'personal-keyword-blocker': freezeArtwork({
    dinosaur: 'ankylosaurus',
    environment: 'canyon',
    chest: 'sealed',
    reward: 'rune',
    accent: 'periwinkle',
  }),
  'discipline-feed-guard': freezeArtwork({
    dinosaur: 'pterodactyl',
    environment: 'ridge',
    chest: 'guard',
    reward: 'leaf',
    accent: 'terracotta',
  }),
  whoopberry: freezeArtwork({
    dinosaur: 'raptor',
    environment: 'sunrise',
    chest: 'archive',
    reward: 'map',
    accent: 'gold',
  }),
});

export const fallbackProjectArtwork = freezeArtwork({
  dinosaur: 't-rex',
  environment: 'trail',
  chest: 'explorer',
  reward: 'compass',
  accent: 'gold',
});

export function getProjectArtwork(projectId) {
  return projectArtwork[projectId] ?? fallbackProjectArtwork;
}
