export type ModelStats = {
  movement: string,
  actionPointLimit: number,
  groupActivation: number,
  defence: number,
  save: number,
  invulnerable_save: number | null,
  wounds: number,
}

export type Model = {
  uuid: string,
  type: string,
  name: string,
  stats: ModelStats,
  faction: string,
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
