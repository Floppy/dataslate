import { Ability } from './Ability';

export type ModelStats = {
  movement: string,
  actionPointLimit: number,
  groupActivation: number,
  defence: number,
  save: number,
  invulnerable_save: number | null,
  wounds: number,
}

export type Weapon = {
  name: string,
  melee: boolean,
  attacks: number,
  hit: number,
  damage: number,
  specialRules: string,
  criticalDamage: number,
  criticalRules: string,
};

export type Model = {
  uuid: string,
  type: string,
  name: string,
  stats: ModelStats,
  weapons: Weapon[],
  abilities: Ability[],
  keywords: string[],
  hash: string,
  count: number,
  selected: number,
};

export type Roster = {
  system: string,
  name: string,
  models: Model[],
};
