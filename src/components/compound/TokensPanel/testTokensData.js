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

const genId = () => Math.random() * Date.now();

export const allTokens = [
  [
    { count: 1, id: genId(), level: levels.common, multi: false },
    { count: 3, id: genId(), level: levels.common },
    { count: 5, id: genId(), level: levels.common },
    { count: 1, id: genId(), level: levels.common },
    { count: 2, id: genId(), level: levels.common, multi: true },
    { count: 1, id: genId(), level: levels.common },
    { count: 2, id: genId(), level: levels.common },
    { count: 3, id: genId(), level: levels.common },
  ],
  [
    { count: 1, id: genId(), level: levels.special, multi: true },
    { count: 3, id: genId(), level: levels.special },
    { count: 5, id: genId(), level: levels.special },
    { count: 1, id: genId(), level: levels.special, multi: false },
    { count: 2, id: genId(), level: levels.special },
    { count: 1, id: genId(), level: levels.special },
    { count: 2, id: genId(), level: levels.special, multi: true },
    { count: 3, id: genId(), level: levels.special },
    { count: 1, id: genId(), level: levels.special },
    { count: 3, id: genId(), level: levels.special, multi: true },
    { count: 5, id: genId(), level: levels.special },
    { count: 1, id: genId(), level: levels.special },
    { count: 2, id: genId(), level: levels.special, multi: false },
    { count: 1, id: genId(), level: levels.special },
    { count: 2, id: genId(), level: levels.special },
  ],
  [
    { count: 1, id: genId(), level: levels.rare, multi: false },
    { count: 3, id: genId(), level: levels.rare },
    { count: 5, id: genId(), level: levels.rare, multi: true },
    { count: 1, id: genId(), level: levels.rare },
    { count: 2, id: genId(), level: levels.rare, multi: true },
    { count: 1, id: genId(), level: levels.rare },
    { count: 2, id: genId(), level: levels.rare, multi: false },
    { count: 3, id: genId(), level: levels.rare },
    { count: 2, id: genId(), level: levels.rare, multi: true },
    { count: 3, id: genId(), level: levels.rare },
  ],
  [
    { count: 1, id: genId(), level: levels.unique },
    { count: 3, id: genId(), level: levels.unique },
    { count: 5, id: genId(), level: levels.unique },
    { count: 1, id: genId(), level: levels.unique },
  ],
  [{ count: 1, id: genId(), level: levels.legendary }],
];
