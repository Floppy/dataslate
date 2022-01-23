import { Archetype, FireteamArchetypes, Ploy, TacOp } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  fireteams: {
    'Wyrmblade Kill Team': [Archetype.INFILTRATION, Archetype.SEEK_AND_DESTROY]
  }
}

const strategicPloys: Ploy[] = [
  {
    name: 'Meticulous Plan',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly **NEOPHYTE** operative is activated, if it has a Conceal order,
          it can perform a mission action or the **Pick Up** action for one less action point (to a minimum of 0AP). You can only use this Strategic Ploy once.`
  },
  {
    name: 'One With the Shadows',
    cost: 1,
    description: `Until the end of the Turning Point, when determining Line of Sight from an enemy operative to a friendly WYRMBLADE💀 operative,
          if that friendly WYRMBLADE💀 operative has a Conceal order, Light terrain is Obscurring.`
  },
  {
    name: 'Writhing Ingress',
    cost: 1,
    description: `Place one of your Ingress tokens within ▲ of a terrain feature no more than ▲ thick. Until the end of the battle, friendly WYRMBLADE💀
          operatives can move through that terrain feature as if it were not there, so long as they do so within ▲ of that token. You can only use this Strategic Ploy once.`
  },
  {
    name: 'Crossfire',
    cost: 1,
    description: `Until the end of the Turning Point:
- Each time after a friendly WYRMBLADE💀 operative makes a shooting attack, if the target has not been incapacitated and does not have a Crossfire token, the target
gains a Crossfire token until the end of the Turning Point.
- Each time a friendly WYRMBLADE💀 operative makes a shooting attack, if the target has a Crossfire token, in the Roll Attack Dice step of that shooting attack, before 
rolling your attack dice, you can retain one as a successful normal hit without rolling it`
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Slink into Darkness',
    cost: 1,
    description: `Use this Tactical Ploy at the end of a friendly WYRMBLADE💀 operative's activation. If that operative has an Engage order, change it to a Conceal order.
    You can use this Tactical Ploy for each friendly operative once.`
  },
  {
    name: 'Coiled Serpent',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly WYRMBLADE💀 operative is activated and its order is changed from Conceal to Engage. The first time that operative
    performs either a **Fight** or **Shoot** action during that activation, in the Roll Attack Dice step of that combat or shooting attack, you can retain one of your
    successful normal hits as a critical hit instead.`
  },
  {
    name: 'Unquestioning Loyalty',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly WYRMBLADE💀 **LEADER** or **CULT AGENT** operative is selected as the target for combat. Select one other friendly
    **LOCUS** or **NEOPHYTE** operative (excluding a **LEADER** operative) within ■ of that friendly operative to intervene.
- If that intervening friendly operative is not within Engagement Range of an enemy operative, you can interrupt that combat to perform a free **Charge** action with it, but
it must finish that move within Engagement Range of the enemy operative fighting in that combat.
- If that intervening friendly operative is within Engagement Range of that enemy operative, it becomes the target for that combat.`
  },
  {
    name: 'Hiding',
    cost: 1,
    description: `Use this Tactical Ploy in the Set Up Operatives step of the mission sequence, when you would set up operatives. Select
up to two friendly **NEOPHYTE** operatives to be set up hiding
instead. In the Firefight phase of the first Turning Point:
- Friendly operatives hiding have a Group Activation characteristic of 1, are considered to be within the killzone for activation purposes and can be activated as normal.
- When a friendly operative hiding is activated for the first time, set it up with an order of your choice anywhere in the killzone
within ⬟ of your drop zone and more than ■ from enemy operatives. That operative is treated as having performed a **Normal Move** action (subtract action points accordingly), 
then continue its activation as normal.
- Any hiding operatives not activated by the end of the first Turning Point are incapacitated.
You can only use this Tactical Ploy once.`
  }
]

const tacOps: TacOp[] = [
  {
    id: 1,
    name: 'Nowhere Unreachable',
    description: `Reveal this Tac Op in the Target Reveal step of the first Turning Point. Your opponent places one of your Location tokens anywhere in the killzone that 
    is more than ⬟ from their drop zone.
- At the end of any Turning Point, if a friendly operative is within ▲ of that location token, you score IVP.
- If you achieve the first condition at the end of any subsequent Turning Points, you score 1VP.`
  }, {
    id: 2,
    name: 'Perfect Ambush',
    description: `Reveal this Tac Op in the Target Reveal step of any Turning Point before the fourth. Keep a tally of wounds lost by each player's operatives during
     that Turning Point. At the end of that Turning Point:
- If the total wounds lost by enemy operatives during that Turning Point is greater than that lost by friendly operatives during that Turning Point, you score 1VP.
- If the total wounds lost by enemy operatives during that Turning Point as a result of friendly **CULT AGENT** operatives (shooting attacks they make or combats 
they fight in) is greater than the total number of wounds lost by friendly operatives during that Turning Point, you score 1 VP.`
  }, {
    id: 3,
    name: 'Mark for Assassination',
    description: `Reveal this Tac Op in the Target Reveal step of any Turning Point.
- If an enemy operative with a Marked token is incapacitated, you score 1VP
- If another enemy operative with a Marked token is incapacitated, you score 1VP

Friendly **NEOPHYTE** operatives can perform the following mission action:`,
    action: {
      id: '1',
      name: 'Mark for Assassination',
      cost: 1,
      description: `An operative can perform this action while an enemy operative with a Group Activation characteristic of 1 is Visible to and within ■ of it. 
      That enemy operative gains a Marked token. An operative cannot perform this action while within Engagement Range of an enemy operative, or if another
      friendly operative has performed this action during this Turning Point.`
    }
  }
]

const data = {
  name: 'Wyrmblade' as const,
  strategicPloys,
  tacticalPloys,
  archetypes,
  tacOps
}

export default data
