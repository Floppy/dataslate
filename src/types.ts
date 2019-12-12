export type Model = {
  type: string,
  name: string,
  category: string,
  specialism: string,
  stats: {
    movement: number,
    weapon_skill: number,
    ballistic_skill: number,
    strength: number,
    toughness: number,
    wounds: number,
    attacks: number,
    leadership: number,
    save: number,
  },
  abilities: [{
    name: string,
    description: string,
    phases: [string],
  }],
  weapons: [{
    name: string,
    range: number,
    strength: number,
  }],
  faction: string,
  keywords: [string]
};
