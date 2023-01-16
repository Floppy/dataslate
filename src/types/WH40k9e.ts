import { Ability } from './Ability'

export interface Roster {
  system: string
  faction: string
  subfaction: string
  name: string
  units: Unit[]
  stratagems: Stratagem[]
  abilities: Ability[]
}

export interface Profile {
  name: string
  id: string
  profileStats: ProfileStats
  hash: string
  degradedProfiles: Array<{
    name: string
    profileStats: ProfileStats
  }>
}

export interface ProfileStats {
  movement: number
  weapon_skill: number
  ballistic_skill: number
  strength: number
  toughness: number
  wounds: number
  attacks: string
  leadership: number
  save: number
  invulnerable_save: number
}

export interface PsychicPower {
  id: string
  name: string
  charge: number
  range: string
  description: string
}

export interface Weapon {
  id: string
  name: string
  range: number
  type: string
  shots: string
  strength: string
  armourPiercing: number
  damage: string
  abilities: string
  hash: string
}

export interface Unit {
  id: string
  datasheet: string
  name: string
  profiles: Profile[]
  abilities: Ability[]
  weapons: Weapon[]
  psychic: {
    cast: number
    deny: number
    powers: PsychicPower[]
  }
  keywords: string[]
  role: string
}

export interface Stratagem {
  id: string
  name: string
  cp_cost: string
  type: string
  description: string
  datasheets: string[]
  phases: string[]
  faction?: string | null
  subfaction?: string | null
  sourceType?: string | null
}
