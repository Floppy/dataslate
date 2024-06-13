import { Archetype, FireteamArchetypes, Ploy, TacOp } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  rules: `If your kill team includes four or more **ARCANA ASTARTES** operatives, this kill team has the Security archetype. 
If your kill team includes five or more **TZAANG0R** operatives, this kill team has the Recon archetype.`,
  fireteams: {
    'Warp Coven Kill Team': [Archetype.RECON, Archetype.SECURITY]
  }
}

const strategicPloys: Ploy[] = [
  {
    name: 'Exalted Astartes',
    cost: 0,
    description: `Until the end of the Turning Point, each time a friendly SORCERER operative is activated:
- If it does not perform a **Shoot** action during that activation, it can perform two **Fight** actions during that activation
- If it does not perform a **Fight** action during that activation, it can perform two **Shoot** actions during that activation, but it must select different
    ranged weapons for those shooting attacks. Ranged weapons from a WARPCOVEN💀 psychic power are eligible weapons for this.

In addition, until the end of the Turning Point, each time a friendly **RUBRIC MARINE** operative is activated, if it does 
not perform a Fight action during that activation, it can perform two Shoot actions during that activation. If it’s a
**GUNNER** operative, one additional action point must be subtracted to perform the second Shoot action.`
  }, {
    name: 'Psychic Dominion',
    cost: 1,
    description: 'Until the end of the Turning Point, friendly SORCERER operatives can perform the **Manifest Psychic Power** action twice during their activation.'
  }, {
    name: 'Slow and Purposeful',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly **RUBRIC MARINE** operative makes a shooting attack, if it has not performed a **Charge**,
    **Fall Back** or **Normal Move** action during this Turning Point, in the Roll Attack Dice step of that shooting attack, you can re-roll any or all of your attack
    dice results of one result (e.g. results of 2).`
  }, {
    name: 'Savage Herd',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly **TZAANGOR** operative fights in combat, before rolling your attack dice for that combat, you can
    retain one as a successful normal hit without rolling it. If another friendly **TZAANGOR** operative is supporting them in that combat, you can retain one as a 
    successful critical hit instead.`
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Capricious Plan',
    cost: 1,
    description: `Use this Tactical Ploy at the end of a friendly **SORCERER** operative's activation. You can immediately perform a free **Dash** action with that
    operative and change its order.`
  },
  {
    name: 'Psychic Cabal',
    cost: 1,
    description: `Use this Tactical Ploy when you would select a psychic power to be resolved by a friendly **SORCERER** operative as a result of performing the 
    **Manifest Psychic Power** action. You can select a psychic power from a discipline another friendly **SORCERER** operative within ⬟ of this operative has studied.`
  },
  {
    name: 'Mutant Herd',
    cost: 1,
    description: `Use this Tactical Ploy at the start of a friendly **TZAANGOR** operative's activation. Select one other ready friendly **TZAANGOR** operative Visible 
    to and within ■ of that operative that is eligible to be activated. After that operative's activation, activate that other operative before your opponent activates
    any operatives or performs an **Overwatch** action.`
  },
  {
    name: 'Schemes of Change',
    cost: 1,
    description: `Use this Tactical Ploy at the start of the Target Reveal step of the Strategy phase, or when you activate a ready friendly WARPCOVEN💀 operative.
    Discard one of your Tac Ops (any victory points scored from it are lost) and randomly determine a new Tac Op from those remaining in your Tac Ops deck.`
  }
]

const tacOps: TacOp[] = [{
  id: 1,
  name: 'Scry Secret',
  description: `Reveal this Tac Op in the Target Reveal step of the first Turning Point. Your opponent selects one of their operatives to be holding a secret.
- If a friendly operative performs the **Scry Secret** action, you score 1VP.
- At the end of the battle, if a friendly operative has performed the **Scry Secret** action and has not been incapacitated, you score 1VP.`,
  action: {
    id: '1',
    name: 'Scry Secret',
    cost: 1,
    intro: 'Friendly **SORCERER** operatives can perform the following mission action:',
    description: `Psychic action. An operative can perform this action while within ⬟ of the enemy operative holding a secret. An operative cannot perform this
  action while within Engagement Range of an enemy operative. Your kill team can only perform this action once.`
  }
}, {
  id: 2,
  name: 'Sorcerous Ritual',
  description: `Reveal this Tac Op when a friendly operative performs the **Sorcerous Ritual** action.
- If a friendly operative performs the **Sorcerous Ritual** action in two or more Turning Points, you score 1VP.
- If a friendly operative performs the **Sorcerous Ritual** action in three or more Turning Points, you score 1VP.`,
  action: {
    id: '2',
    name: 'Sorcerous Ritual',
    cost: 1,
    intro: 'Friendly **SORCERER** operatives can perform the following mission action:',
    description: `** Psychic action. An operative can perform this action while within ⬤ of a ritual site. An operative cannot perform this action while 
within ⬤ of an enemy operative. A ritual site is the centre of the killzone or an objective marker that is more than ⬟ from your drop zone. Once a friendly 
operative performs this action, friendly operatives can only perform this action again at the same ritual site.`
  }
}, {
  id: 3,
  name: 'Grand Plan',
  description: `Reveal this Tac Op in the Target Reveal step of the first Turning Point. Your opponent selects one of their operatives and an objective marker that
is more than ⬟ from their killzone edge (they cannot select an objective marker that can be removed during the battle).
- If that enemy operative is incapacitated, you score 1 VP.
- If you control that objective marker at the end of any Turning Point, you score 1VP.`
}]

const data = {
  name: 'Warp Coven' as const,
  strategicPloys,
  tacticalPloys,
  archetypes,
  tacOps
}

export default data
