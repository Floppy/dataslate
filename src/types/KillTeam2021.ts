import { Ability } from './Ability';

export type Action = {
  name: string,
  cost: number,
  description: string,
}

export type ModelStats = {
  movement: number,
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

export type Equipment = {
  name: string,
  cost: number,
  description: string | null,
}

export type Model = {
  uuid: string,
  type: string,
  name: string,
  stats: ModelStats,
  weapons: Weapon[],
  equipment: Equipment[],
  abilities: Ability[],
  actions: Action[],
  rules: Ability[],
  keywords: string[],
  faction: string | null,
  hash: string,
  count: number,
  selected: number,
};

export type Roster = {
  system: string,
  name: string,
  models: Model[],
};
