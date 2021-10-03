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

export type PsychicPower = {
  name: string;
  description: string;
  weapon: Weapon | null;
}

export type Ploy = {
  name: string;
  cost: number;
  description: any;
  weapon?: Weapon
  options?: string[]
  postOptionText?: string
}

export type TacOp = {
  id: number;
  name: string;
  revealTime: string;
  description: string[];
  action?: Action;
}

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
  faction: string,
  operatives: Operative[],
  psychicPowers: PsychicPower[],
};
