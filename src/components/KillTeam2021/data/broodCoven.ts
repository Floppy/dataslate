import { Archetype, FireteamArchetypes, Ploy } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  'Neophyte Hybrid Fire Team': [Archetype.SECURITY, Archetype.RECON, Archetype.INFILTRATION],
  'Acolyte Hybrid Fire Team': [Archetype.SEEK_AND_DESTROY, Archetype.INFILTRATION],
  'Hybrid Metamorph Fire Team': [Archetype.SEEK_AND_DESTROY]
}

const strategicPloys: Ploy[] = [
  {
    name: 'Cult Ambush',
    cost: 1,
    description: 'Use this Strategic Ploy in the first Turning Point. Until the end of the Turning Point, each time a friendly BROOD COVEN💀 operative is activated, you can change its order.'
  }, {
    name: 'Lurk in the shadows',
    cost: 1,
    description: `Until the end of the Turning Point, each time a shooting attack is made against a friendly BROOD COVEN💀 operative, in the Roll Defence Dice step of that shooting attack,
  before rolling your defence dice, if it is in Cover and either has a Conceal order or is ready, you can do one of the following:
  - One additional dice can be retained as a successful normal save as a result of Cover.
  - Retain one dice as a successful critical save as a result of Cover instead of a normal save.`
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Underground',
    cost: 1,
    description: `Use this Tactical Ploy in the Set Up Operatives step of the mission sequence. Select one friendly BROOD COVEN💀 operative. That operative can be set up with a Conceal order
                  anywhere on the killzone that is within ▲. of Heavy terrain and more than ⬟ from enemy operatives and the enemy drop zone.`
  }, {
    name: 'Into the shadows',
    cost: 1,
    description: 'Use this Tactical Ploy at the end of a friendly BROOD COVEN💀 operative\'s activation. If that operative has an Engage order, change it to a Conceal order.'
  }, {
    name: 'Crossfire',
    cost: 1,
    description: `Use this Tactical Ploy after making a shooting attack against an enemy operative. Until the end of the Turning Point, each time another friendly BROOD COVEN💀 operative makes a
                  shooting attack against that enemy operative, in the Roll Attack Dice step of that shooting attack, you can re-roll one of your Attack dice.`
  }, {
    name: 'Lying in the wait',
    cost: 1,
    description: `Use this Tactical Ploy when you activate a friendly BROOD COVEN💀 operative that has a Conceal order and is more than ■ from enemy operatives. Select one other ready
                  friendly BROOD COVEN💀 operative that has a Conceal order, is more than ■ from enemy operatives, and is Visible to and within ■ of this operative. Ignore those operatives' Group
                  Activation characteristics. Instead, after activating the first operative, you can activate the other before your opponent activates any operatives.`
  }
]

const data = {
  name: 'Brood Coven' as const,
  strategicPloys,
  tacticalPloys,
  archetypes
}

export default data
