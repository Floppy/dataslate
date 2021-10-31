import { Archetype, FireteamArchetypes, Ploy } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  fireteams: {
    'Custodian Guard Fire Team': [Archetype.SEEK_AND_DESTROY, Archetype.SECURITY],
    'Sister of Silence Fire Team': [Archetype.SEEK_AND_DESTROY, Archetype.SECURITY, Archetype.RECON]
  }
}

const strategicPloys: Ploy[] = [
  {
    name: 'Aegis of the Emperor',
    cost: 1,
    description: `Until the end of the Turning Point, each time Critical Damage would be inflicted upon a friendly TALONS OF THE EMPEROR💀 operative from an attack dice, you can choose
                  for that attack dice to inflict Normal Damage instead.`
  }, {
    name: 'Creeping Dread',
    cost: 1,
    description: `Until the end of the Turning Point, while an enemy operative is within ■ of a friendly ANATHEMA PSYKANA operative, worsen the Ballistic Skill and Weapon Skill
                  characteristics of ranged and melee weapons respectively that enemy operative is equipped with as if it is injured.`
  }, {
    name: 'Peerless Warriors',
    cost: 1,
    description: 'Until the end of the Turning Point, each time a friendly ADEPTUS CUSTODES operative is activated, it can perform up to two **Shoot** and **Fight** actions during that activation.'
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Arcane Genetic Alchemy',
    cost: 1,
    description: `Use this Tactical Ploy in the Roll Defence Dice step of a shooting attack, after rolling defence dice for a friendly ADEPTUS CUSTODES operative. You can change one of
                  your retained normal saves to a critical save.`
  }, {
    name: 'Brotherhood of Demigods',
    cost: 1,
    description: `Use this Tactical Ploy at the end of the Firefight phase. Select one friendly ADEPTUS CUSTODES operative to perform one free **Fight** or **Overwatch** action (this does not
                  count as an activation).`
  }, {
    name: 'Talons',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly TALONS OF THE EMPEROR💀 operative within ⬟ of enemy operatives or within ⬤ of the centre of an objective marker is activated:
  - If that operative is an ANATHEMA PSYKANA operative, select one ready friendly ADEPTUS CUSTODES operative Visible to and within ■ of it
  - If that operative is an ADEPTUS CUSTODES operative, select one ready friendly ANATHEMA PSYKANA operative Visible to and within ■ of it

  Both operatives are activated at the same time and you can perform their actions in any order.`
  }
]

const data = {
  name: 'Talons of the Emperor' as const,
  strategicPloys,
  tacticalPloys,
  archetypes
}

export default data
