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
    description: 'Until the end of the Turning Point, friendly **DEATHMARK** operative can perform the following action:',
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
    description: `Reveal this Tac Op in the Target Reveal step of the first Turning Point.

* At the end of the battle, if three or more friendly **HIEROTEK CIRCLE💀** operatives (excluding **PLASMACYTE** 
operatives) are within ⬟ of the centre of the killzone and/or your opponent's drop zone, you score 1VP.
* If you achieved the first condition and one of those **HIEROTEK CIRCLE💀** operatives is a friendly **CRYPTEK** or
**APPRENTEK** operative, you score 1VP.`
  },
  {
    id: 2,
    name: 'Unearth Artifice',
    description: `Reveal this Tac Op in the Target Reveal step of the first Turning Point. Place one of your Artifice
    tokens anywhere in the killzone that is more than ⬟ from your drop zone and not on a terrain feature (unless it
    has the insignificant trait). That token is earthed.
* At the end of any Turning Point before the fourth, if you control your unearthed Artifice token, you score 1VP.
* At the end of the battle, if you control your unearthed Artifice token, you score 1VP.`,
    action: {
      id: '1234',
      name: 'Unearth Artifice',
      cost: 2,
      intro: 'Friendly operatives can perform the following mission action:',
      description: `An operative can perform this action while it controls your earthed Artifice token. That Artifice
      token is unearthed. An operative cannot perform this action while within Engagement Range of an enemy operative.`
    }
  },
  {
    id: 3,
    name: 'Worthy of Study',
    description: `Reveal this Tac Op in the Target Reveal step of the first or second Turning Point. Select two of your 
    opponent's operatives; your opponent then selects one of them to be worthy of study. If that enemy operative is
    incapacitated, before it is removed from the killzone, place one of your Study tokens as close as possible to the 
    centre of its base.

* At the end of any Turning Point, if friendly operatives control your Study token and a friendly **CRYPTEK** or 
**APPRENTEK** operative is within ⬟ of at least one of those friendly operatives, you score 1VP.
* If you achieve the first condition at the end of the any subsequent Turning Points, you score 1VP.`
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
