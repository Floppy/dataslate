import { Archetype, FireteamArchetypes, Ploy } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  fireteams: {
    'Skitarii Ranger Fire Team': [Archetype.RECON, Archetype.SECURITY],
    'Skitarii Vanguard Fire Team': [Archetype.SECURITY],
    'Sicarian Fire Team': [Archetype.SEEK_AND_DESTROY, Archetype.INFILTRATION, Archetype.RECON]
  }
}

const strategicPloys: Ploy[] = [
  {
    name: 'Protector Imperative',
    cost: 1,
    description: `Until the end of the Turning Point:
  - Each time a friendly FORGE WORLD💀 operative makes a shooting attack, in the Roll Attack Dice step of that shooting attack, you can re-roll one of your attack dice.
  - Each time a friendly FORGE WORLD💀 operative fights in combat, in the Roll Attack Dice step of that combat, you must re-roll one of your successful hits.

  You can only use this Strategic Ploy once.`
  }, {
    name: 'Conqueror Imperative',
    cost: 1,
    description: `Until the end of the Turning Point:
  - Each time a friendly FORGE WORLD💀 operative fights in combat, in the Roll Attack Dice step of that combat, you can re-roll one of your attack dice.
  - Each time a friendly FORGE WORLD💀 operative makes a shooting attack, in the Roll Attack Dice step of that shooting attack, you must re-roll one of your successful hits.

  You can only use this Strategic Ploy once.`
  }, {
    name: 'Bulwark Imperative',
    cost: 1,
    description: `Until the end of the Turning Point:
  - Each time a shooting attack is made against a friendly FORGE WORLD💀 operative, in the Roll Defence Dice step of that shooting attack, you can re-roll one of your defence dice.
  - Subtract ⬤ from the Movement characteristic of friendly FORGE WORLD💀 operatives.

  You can only use this Strategic Ploy once.`
  }, {
    name: 'Aggressor Imperative',
    cost: 1,
    description: `Until the end of the Turning Point:
  - Each time a friendly FORGE WORLD💀 operative performs a **Normal Move** or **Charge** action, it can move an additional ▲.
  - Each time a shooting attack is made against a friendly FORGE WORLD💀 operative, in the Roll Defence Dice step of that shooting attack, you must re-roll one of your successful saves.

  You can only use this Strategic Ploy once.`
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Neurostatic Interference',
    cost: 1,
    description: `Use this Tactical Ploy at the start of the Firefight phase. Select one enemy operative Visible to and within ⬟ of a friendly FORGE WORLD💀 operative. Until the end
                  of the Turning Point, that enemy operative cannot be activated until another enemy operative has been activated (unless it is the only remaining enemy operative).`
  }, {
    name: 'Control Edict',
    cost: 1,
    description: `Use this Tactical Ploy when you activate a friendly FORGE WORLD💀 LEADER operative. Select one other ready friendly FORGE WORLD💀 operative Visible to and within
                  ■ of that LEADER operative. At the end of that LEADER operative's activation, you can activate that other ready friendly operative.`
  }

]

const data = {
  name: 'Forge World (Legends)' as const,
  strategicPloys,
  tacticalPloys,
  archetypes
}

export default data
