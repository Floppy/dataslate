import { Archetype, FireteamArchetypes, Ploy } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  'Fire Warrior Fire Team': [Archetype.SECURITY],
  'Pathfinder Fire Team': [Archetype.RECON],
  'Stealth Battlesuit Fire Team': [Archetype.INFILTRATION, Archetype.RECON]
}

const strategicPloys: Ploy[] = [
  {
    name: 'Aimed Pulse Volley',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly FIRE WARRIOR operative makes a shooting attack with a pulse rifle as a result of a Shoot action, in the
                  Roll Attack Dice step of that shooting attack, if it has not moved during that activation, you can re-roll one of your attack dice.`
  }, {
    name: 'Breach and Clear',
    cost: 1,
    description: 'Until the end of the Turning Point, each time a friendly FIRE WARRIOR operative makes a shooting attack with a pulse blaster as a result of a Shoot action:',
    options: [
      'For that shooting attack, enemy operatives within ■ of it are not in Cover.',
      'In the Roll Attack Dice step of that shooting attack, if the target is within ■ of it, you can re-roll one of your attack dice.'
    ]
  }, {
    name: 'Camouflage Field Engagement',
    cost: 1,
    description: 'Until the end of the Turning Point, friendly STEALTH BATTLESUIT operatives can perform the following action:',
    action: {
      name: 'Camouflage Field Engagement',
      cost: 1,
      description: 'Change this operative\'s order.'
    }
  }, {
    name: 'Recon Sweep',
    cost: 1,
    description: `Friendly PATHFINDER operatives that are wholly within ⬟ of any killzone edge can immediately perform a free Dash action, but only if they can finish that move
                  wholly within ⬟ of a killzone edge that is not your own killzone edge.`
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Supporting Fire',
    cost: 1,
    description: `Use this Tactical Ploy in the Firefight phase, when a Shoot action is declared for a friendly HUNTER CADRE💀 operative.In the Select Valid Target step of that
                  shooting attack, you must select an enemy operative that is within Engagement Range of one or more other friendly operatives and within ⬟ of the active operative,
                  and that enemy operative cannot be in Cover as a result of friendly operative's bases. Note, however that in the Roll Defence Dice step of that shooting attack,
                  the enemy operative can be in Cover as a result of friendly operatives' bases.`
  }, {
    name: 'Stand and Fire',
    cost: 1,
    description: 'Use this Tactical Ploy when a friendly HUNTER CADRE💀 operative (excluding a DRONE operative) is selected as the target for combat. For that combat:',
    options: [
      'Select a ranged weapon to fight with.',
      'Treat that weapon\'s Ballistic Skill characteristic as a Weapon Skill characteristic.',
      'Ignore any special rules that weapon has.'
    ]
  }
]

const data = {
  name: 'Hunter Cadre' as const,
  strategicPloys,
  tacticalPloys,
  archetypes
}

export default data
