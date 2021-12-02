import { Archetype, FireteamArchetypes, Ploy, TacOp } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  fireteams: {
    'Kommando Kill Team': [Archetype.SEEK_AND_DESTROY, Archetype.INFILTRATION]
  }
}

const strategicPloys: Ploy[] = [
  {
    name: 'Sssshhhh!',
    cost: 1,
    description: `Friendly KOMMANDO💀 operatives that are not within Line of Sight of enemy operatives, or have a Conceal order and are more than ⬟ from enemy operatives,
                  can immediately perform a free **Dash** action. You can only use this strategic ploy once.`
  }, {
    name: 'Dakka! Dakka! Dakka!',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly KOMMANDO💀 operative makes a shooting attack, in the Roll Attack Dice step of that shooting attack,
                  if you retain any critical hits, you can select one of your failed hits to be retained as a successfull normal hit.`
  }, {
    name: 'Waaagh!',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly KOMMANDO💀 operative fights in combat, in a Roll Attack Dice step of that combat,
                  when you would retain two or more normal hits, you can select one of those hits to be retained as a critical hit instead.`
  }, {
    name: 'Skulk about',
    cost: 1,
    description: `Until the end of the Turning Point, each time a shooting attack is made against a friendly KOMMANDO💀 operative, before rolling defence dice for that shooting attack,
                  if it has a Conceal order, you can retain one as a successfull normal save without rolling it.`
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Just a scratch',
    cost: 1,
    description: `Use this tactical Ploy in the Resolve Successfull Hits step of a shooting attack or combat, when damage would beinflicked on a friendly KOMMANDO💀 operative,
                  (excluding KOMMANDO GROT operatives), from an attack dice. Ignore the damage inflicted from that attack dice.`
  }, {
    name: 'Krump \'em!',
    cost: 1,
    description: 'Use this Tactical Ploy at the end of a Firefights phase. Select one friendly KOMMANDO💀 operative. It can perform a free **Fight** action.'
  }, {
    name: 'Sneaky git',
    cost: 1,
    description: `Use this Tactical Ploy in the Set Up Operatives step of the mission sequence. Select one friendly KOMMANDO💀 operative (excluding BOMB SQUIG operatives).
                  That operative can be set up with a Conceal order anywhere on the battlefield that is within ▲ of Heavy terrain and more than ⬟ from enemy operatives and the enemy drop zone.`
  }
]

const tacOps: TacOp[] = [
  {
    id: 1,
    name: 'Blow it up!',
    description: `You can reveal this Tac Op in the Target Reveal step of the first Turning Point.
                 Your opponent selects one terrain feature that includes any parts with the Heavy trait to be their bulwark.
  - If a friendly operative performs the **'Blow it up!'** action, you score 2VPs`,
    action: {
      id: 'c5599e16-997d-47e9-ae64-7cdc8cd6d123',
      name: 'Blow it up!',
      cost: 2,
      description: `An operative can perform this action while within ▲ of your opponent's bulwark. An operative cannot perform this action while within ⬤ of enemy operatives.
                    Other than a **Dash** action, an operative cannot perform any other action during an activation in which it would perform this action.`
    }
  }, {
    id: 2,
    name: 'Shokk taktiks',
    description: `Reveal this TacOp at the end of the first Turning Point
  - If any enemy operatives were incapacitated during the first Turning Point, you score 1 VP.
  - At the end of the second Turning Point, if friendly operatives control more objective markers than enemy operatives control, you score 1 VP`
  }, {
    id: 3,
    name: 'Get stuck in!',
    description: `You can reveal this Tac Op in the Reveal Tac Ops step of any turning Point
  - At the end of any turning Point (excluding the fourth), if three or more friendly operatives are within ⬟ of your opponents drop zone, you score 1 VP.
  - If you achieve the first condition at the end of any subsequent Turning Points (excluding the fourth), you score 1 VP.`
  }
]

const data = {
  name: 'Kommando' as const,
  strategicPloys,
  tacticalPloys,
  archetypes,
  tacOps
}

export default data
