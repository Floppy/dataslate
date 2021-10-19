import { Ability } from './Ability'

export interface Action {
  id: string
  name: string
  cost: number
  description: string
}

export interface Stats {
  movement: number
  actionPointLimit: number
  groupActivation: number
  defence: number
  save: number
  invulnerable_save: number | null
  wounds: number
}

export interface Weapon {
  id: string
  name: string
  melee: boolean
  attacks: number
  hit: number
  damage: number
  specialRules: string
  criticalDamage: number
  criticalRules: string
}

export interface PsychicPower {
  id: string
  name: string
  description: string
  weapon: Weapon | null
}

export interface Ploy {
  name: string
  cost: number
  description: string
  action?: Action
}

export interface TacOp {
  id: number
  name: string
  description: string
  action?: Action
}

export interface Equipment {
  id: string
  name: string
  cost: number
  description: string | null
}

export interface Operative {
  id: string
  datacard: string
  name: string
  stats: Stats
  weapons: Weapon[]
  equipment: Equipment[]
  abilities: Ability[]
  actions: Action[]
  rules: Ability[]
  leader: boolean
  keywords: string[]
  faction: string | null
}

// Datacards are a collection of grouped Operatives
export interface Datacard {
  name: string
  operativeNames: string[]
  stats: Stats
  weapons: Weapon[]
  equipment: Equipment[]
  abilities: Ability[]
  actions: Action[]
  rules: Ability[]
  leader: boolean
  keywords: string[]
  faction: string | null
}

export interface Roster {
  system: string
  name: string
  faction: string
  operatives: Operative[]
  psychicPowers: PsychicPower[]
  fireteams: string[]
  isRoster?: boolean
}

export enum Archetype {
  SEEK_AND_DESTROY = 'SEEK AND DESTROY',
  SECURITY = 'SECURITY',
  INFILTRATION = 'INFILTRATION',
  RECON = 'RECON'
}

export interface FireteamArchetypes {
  [key: string]: Archetype[]
}

export interface FactionSpecificData {
  name: string
  strategicPloys: Ploy[]
  tacticalPloys: Ploy[]
  archetypes: FireteamArchetypes
}
