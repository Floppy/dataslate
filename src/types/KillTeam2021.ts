import { Ability } from './Ability';

export type Action = {
  name: string,
  cost: number,
  description: string,
}

export type Stats = {
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

export type Operative = {
  datacard: string,
  name: string,
  stats: Stats,
  weapons: Weapon[],
  equipment: Equipment[],
  abilities: Ability[],
  actions: Action[],
  rules: Ability[],
  leader: boolean,
  keywords: string[],
  faction: string | null
};

// Datacards are a collection of grouped Operatives
export type Datacard = {
  name: string,
  operativeNames: string[],
  stats: Stats,
  weapons: Weapon[],
  equipment: Equipment[],
  abilities: Ability[],
  actions: Action[],
  rules: Ability[],
  leader: boolean,
  keywords: string[],
  faction: string | null
};

export type Roster = {
  system: string,
  name: string,
  operatives: Operative[],
};
