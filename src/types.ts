export type Ability = {
  name: string,
  description: string,
  phases: string[],
}

export type PsychicPower = {
  name: string,
  charge: number,
  description: string,
}

export type Weapon = {
  name: string,
  range: number,
  type: string,
  strength: number,
  armourPiercing: number,
  damage: number,
  abilities: string
}

export type ModelStats = {
  movement: number,
  weapon_skill: number,
  ballistic_skill: number,
  strength: number,
  toughness: number,
  wounds: number,
  attacks: number,
  leadership: number,
  save: number,
}

export type Model = {
  type: string,
  name: string,
  category: string,
  specialism: string,
  stats: ModelStats,
  abilities: Ability[],
  weapons: Weapon[],
  psychicPowers: PsychicPower[],
  faction: string,
  keywords: string[],
  points: number,
};
