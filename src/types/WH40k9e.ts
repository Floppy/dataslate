export interface Roster {
  system: string
  faction: string
  name: string
  units: Unit[]
}

export interface Profile {
  name: string
  profileStats: ProfileStats
}

export interface ProfileStats {
  movement: number
  // weapon_skill: number
  // ballistic_skill: number
  // strength: number
  // toughness: number
  // wounds: number
  // attacks: number
  // leadership: number
  // save: number
}

export interface Unit {
  id: string
  datasheet: string
  name: string
  profiles: Profile[]
}
