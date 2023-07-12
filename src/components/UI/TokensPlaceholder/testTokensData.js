export const levels = {
  common: 'Common',
  special: 'Special',
  rare: 'Rare',
  unique: 'Unique',
  legendary: 'Legendary',
};

export const pts = {
  Common: 56,
  Special: 147,
  Rare: 147,
  Unique: 56,
  Legendary: 56,
};

export const genId = () => Math.random() * Date.now();

export const allTokens = [
  [
    { count: 0, id: genId(), level: levels.common },
    { count: 0, id: genId(), level: levels.common },
    { count: 0, id: genId(), level: levels.common },
    { count: 0, id: genId(), level: levels.common },
    { count: 0, id: genId(), level: levels.common },
    { count: 0, id: genId(), level: levels.common },
    { count: 0, id: genId(), level: levels.common },
    { count: 0, id: genId(), level: levels.common },
  ],
  [
    { count: 0, id: genId(), level: levels.special },
    { count: 0, id: genId(), level: levels.special },
    { count: 0, id: genId(), level: levels.special },
    { count: 0, id: genId(), level: levels.special },
    { count: 0, id: genId(), level: levels.special },
    { count: 0, id: genId(), level: levels.special },
    { count: 0, id: genId(), level: levels.special },
    { count: 0, id: genId(), level: levels.special },
    { count: 0, id: genId(), level: levels.special },
    { count: 0, id: genId(), level: levels.special },
    { count: 0, id: genId(), level: levels.special },
    { count: 0, id: genId(), level: levels.special },
    { count: 0, id: genId(), level: levels.special },
    { count: 0, id: genId(), level: levels.special },
    { count: 0, id: genId(), level: levels.special },
  ],
  [
    { count: 0, id: genId(), level: levels.rare },
    { count: 0, id: genId(), level: levels.rare },
    { count: 0, id: genId(), level: levels.rare },
    { count: 0, id: genId(), level: levels.rare },
    { count: 0, id: genId(), level: levels.rare },
    { count: 0, id: genId(), level: levels.rare },
    { count: 0, id: genId(), level: levels.rare },
    { count: 0, id: genId(), level: levels.rare },
    { count: 0, id: genId(), level: levels.rare },
    { count: 0, id: genId(), level: levels.rare },
  ],
  [
    { count: 0, id: genId(), level: levels.unique },
    { count: 0, id: genId(), level: levels.unique },
    { count: 0, id: genId(), level: levels.unique },
    { count: 0, id: genId(), level: levels.unique },
  ],
  [{ count: 0, id: genId(), level: levels.legendary }],
];
