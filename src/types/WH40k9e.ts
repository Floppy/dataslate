export interface Roster {
  system: string
  faction: string
  name: string
  units: Unit[]
}

export interface ModelType {
  name: string
  modelStats: ModelStats
  count: number
}

export interface ModelStats {
  movement: number
  weapon_skill: number
  ballistic_skill: number
  strength: number
  toughness: number
  wounds: number
  attacks: number
  leadership: number
  save: number
}

export interface Unit {
  id: string
  datasheet: string
  modelTypes: ModelType[]
}
