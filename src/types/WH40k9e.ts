import { Ability } from './Ability'

export interface Roster {
  system: string
  faction: string
  name: string
  units: Unit[]
}

export interface Profile {
  name: string
  id: string
  profileStats: ProfileStats
  weapons: Weapon[]
}

export interface ProfileStats {
  movement: number
  weapon_skill: number
  ballistic_skill: number
  strength: number
  toughness: number
  wounds: number
  attacks: number
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
  strength: number
  armourPiercing: number
  damage: number
  abilities: string
}

export interface Unit {
  id: string
  datasheet: string
  name: string
  profiles: Profile[]
  abilities: Ability[]
  psychicPowers: PsychicPower[]
}
