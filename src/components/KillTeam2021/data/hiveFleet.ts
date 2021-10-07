import { Archetype, FireteamArchetypes, Ploy } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  'Tyranid Warrior Fire Team': [Archetype.SEEK_AND_DESTROY, Archetype.SECURITY],
  'Genestealer Fire Team': [Archetype.SEEK_AND_DESTROY, Archetype.INFILTRATION],
  'Tyranid Swarm Fire Team': [Archetype.SEEK_AND_DESTROY, Archetype.SECURITY, Archetype.RECON]
}

const strategicPloys: Ploy[] = [
  {
    name: 'Stalk',
    cost: 1,
    description: 'One friendly HIVE FLEET💀 operative that has a Conceal order and is more than ■ from enemy operatives can perform a free Normal Move action.'
  }, {
    name: 'Lurk',
    cost: 1,
    description: `Until the end of the Turning Point, each time a shooting attack is made against a friendly HIVE FLEET💀 operative, in the Roll Defence Dice step of that shooting attack, before
                  rolling your defence dice, if it is in Cover and either has a Conceal order or is ready, one additional dice can be retained as a successful normal save as a result of Cover.`
  }, {
    name: 'Feed',
    cost: 1,
    description: 'Until the end of the Turning Point, each time a friendly HIVE FLEET💀 operative fights in combat, the first time you strike with a critical hit in that combat, inflict one additional damage.'
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Unseen hunter',
    cost: 1,
    description: 'Use this Tactical Ploy at the start or end of any activation. Select one friendly HIVE FLEET💀 operative that has not performed a shooting attack during this Turning Point. You can change its order.'
  }, {
    name: 'Will of the hive mind',
    cost: 1,
    description: 'Use this Tactical Ploy when a friendly HIVE FLEET💀 operative within ⬟ of a friendly HIVE FLEET💀 SYNAPSE operative is activated. Add 1 to the activated operative\'s APL.'
  }, {
    name: 'Aggresive biostrain',
    cost: 1,
    description: 'Use this Tactical Ploy after making a shooting attack with a friendly HIVE FLEET💀 operative in which the target did not lose any wounds. Repeat that shooting attack.'
  }
]

const data = {
  name: 'Hive Fleet' as const,
  strategicPloys,
  tacticalPloys,
  archetypes
}

export default data
