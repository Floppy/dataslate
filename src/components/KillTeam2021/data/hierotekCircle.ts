import { Archetype, FireteamArchetypes, Ploy, TacOp } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  fireteams: {
    'Hierotek Circle Kill Team': [Archetype.RECON, Archetype.SECURITY]
  }
}
// **HIEROTEK CIRCLE💀** ⬟ ⬤ ■ ▲

const strategicPloys: Ploy[] = [
  {
    name: 'Relentless Onslaught',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly **HIEROTEK CIRCLE💀** operative makes a 
    shooting attack against a target within ⬟ of it, in the Roll Attack Dice step of that shooting attack, you can 
    re-roll one of your attack dice. This Strategic Ploy has no effect on shooting attacks made using the 
    Magnification Conduit ability (e.g. on page 55).`
  },
  {
    name: 'Intractable March',
    cost: 1,
    description: `Until the end of the Turning Point, while a friendly **DEATHMARK** or **IMMORTAL** operative has an
    Engage order, add ⬤ to its Movement characteristic.`
  },
  {
    name: 'Undying Androids',
    cost: 1,
    description: `Until the end of the Turning Point, each time a shooting attack is made against a friendly 
    **HIEROTEK CIRCLE💀** operative that is not in Cover, in the Roll Defence Dice step of that shooting attack, before
    rolling your defence dice, you can retain one as a successful normal save without rolling it.`
  },
  {
    name: 'Dimensional Concealment',
    cost: 1,
    description: `Until the end of the Turning Point, friendly **DEATHMARK** operative can perform the following action:`,
    action: {
      id: '1234',
      name: 'Dimensional Concealment',
      description: `Change this operative's order.
You can only use this Strategic Ploy once.`,
      cost: 1
    }
  }

]

const tacticalPloys: Ploy[] = [
  {
    name: 'Dimensional Translocation',
    cost: 1,
    description: `Use this Tactical Ploy in the Set Up Operatives step, when you would set up operatives. Select one
    friendly **DEATHMARK** operative to be set up in a hyperspace dimension instead. In the Firefight phase of the first
    Turning Point, that operative is considered to be within the killzone for activation purposes and must be activated
    as normal. When it is, set it up with an order of your choice anywhere in the killzone that is more than ⬟ from
    the enemy drop zone and enemy operatives. That operative is treated as having performed a **Normal Move** action
    (subtract action points accordingly), then continue its activation as normal. You can only use this Tactical Ploy
    once.`
  },
  {
    name: 'Leech Power',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly **CRYPTEK** operative is activated. Select one other friendly
    **HIEROTEK CIRCLE💀** operative within 2⬤ of that **CRYPTEK** operative. If that other friendly's APL is not 
    negatively modified (in total after applying all modifiers), subtract 1 from its APL and add 1 to that **CRYPTEK**
    operative's APL.`
  },
  {
    name: 'Cortical Subjugation',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly **CRYPTEK** operative is selected as the target of a shooting
    attack. Select one other friendly **HIEROTEK CIRCLE💀** operative that is Visible to and within ⬤ of that friendly 
    **CRYPTEK** operative and is not within Engagement Range of an enemy operative. Resolve that shooting attack against
    that other friendly operative instead (it is treated as a valid target).`
  },
  {
    name: 'Commence Reanimation',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly **HIEROTEK CIRCLE💀** operative is incapacitated for the first
    time during the battle. That operative attempts reanimation (pg 53).`
  }
]

const tacOps: TacOp[] = [
  {
    id: 1,
    name: 'Unyielding Ancients',
    description: ``
  },
  {
    id: 2,
    name: 'Unearth Artifice',
    description: ``
  },
  {
    id: 3,
    name: 'Worthy of Study',
    description: ``
  }
]

const data = {
  name: 'Hierotek Circle' as const,
  strategicPloys,
  tacticalPloys,
  archetypes,
  tacOps
}

export default data
