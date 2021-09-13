import { Ability } from './Ability';

export type PsychicPower = {
  name: string,
  charge: number,
  description: string,
}

export type Weapon = {
  name: string,
  range: number,
  type: string,
  shots: string,
  strength: number,
  armourPiercing: number,
  damage: number,
  abilities: string
}

export type Wargear = {
  name: string,
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
  additional_attacks: number,
  leadership: number,
  save: number,
  invulnerable_save: number,
}

export type Model = {
  uuid: string,
  type: string,
  name: string,
  category: string,
  specialism: string,
  stats: ModelStats,
  abilities: Ability[],
  weapons: Weapon[],
  wargear: Wargear[],
  psychicPowers: PsychicPower[],
  faction: string,
  keywords: string[],
  hash: string,
  points: number,
  count: number,
  selected: number,
};

export type Roster = {
  system: string,
  name: string,
  models: Model[],
  forceRules: Ability[],
};
