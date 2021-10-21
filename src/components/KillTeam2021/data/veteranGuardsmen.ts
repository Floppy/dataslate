import { Archetype, FireteamArchetypes, Ploy, TacOp } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  'Veteran Guardsman Kill Team': [Archetype.SECURITY]
}

const strategicPloys: Ploy[] = [
  {
    name: 'Overcharge lasguns',
    cost: 1,
    description: `Until the end of the Turning Point, change the profile of lasguns that friendly VETERAN GUARDSMAN💀 operatives are equipped with to include the following:
  | A | WS | D   | SR       | ! |
  | - | -  | -   | -        | - |
  | 4 | 4+ | 2/3 | AP1, Hot |   |`
  }, {
    name: 'Take cover',
    cost: 1,
    description: 'Until the end of the Turning Point, each time a shooting attack is made against a friendly VETERAN GUARDSMAN💀 operative, if it is in Cover, improve it\'s Save characteristic by 1 for that shooting attack.'
  }, {
    name: 'Into the breach',
    cost: 1,
    description: 'Each friendly VETERAN GUARDSMAN💀 operative within your drop zone can perform a free **Dash** action, but must finish that move closer to the enemy\'s drop zone.'
  }, {
    name: 'Clear the line',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly VETERAN GUARDSMAN💀 operative fights in combat,
                  before rolling your attack dice for that combat, you can retain one as a successfull normal hit withour rolling it.`
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Inspirational leadership',
    cost: 1,
    description: `Use this Tactical Ploy during a VETERAN GUARDSMAN💀 LEADER operative's operation. That operative issues a
                  Guardsman Order to all friendly VETERAN GUARDSMAN💀 operatives within ⬟ of and visible to it.`
  }, {
    name: 'In death, atonement',
    cost: 1,
    description: `Use this Tactical Ploy when a ready friendly VETERAN GUARDSMAN💀 operative is incapacitated. That operative is not removed from the killzone until the end of
                  your next activation or the end of the battle (whichever comes first) and does not count as being injured.`
  }, {
    name: 'Combined arms',
    cost: 1,
    description: `Use this Tactical Ploy after rolling your attack dice for a shooting attack made by a friendly VETERAN GUARDSMAN💀 operative.
                  If the target of that attack is an enemy operative that was targeted by another friendly VETERAN GUARDSMAN💀 operative with a
                  shooting attack during that Turning point, you can re-roll any or all of your attack dice for that shooting attack.`
  }
]

const tacOps: TacOp[] = [{
  id: 1,
  name: 'Boots on the ground',
  description: `You can reveal this Tac Op at the end of any Turning Point.
  - At the end of that Turning Point, if there are more friendly operatives than enemy operatives within ⬟ of your drop zone, and there are more friendly
     operatives than enemy operatives within ⬟ of your opponent's drop zone, you score 1VP.
  - If you achieve the first condition at the end of any subsequent Turning Points, you score 1VP.`
}, {
  id: 2,
  name: 'Stand fast',
  description: `You can reveal this Tac Op in the Reveal Tac Ops step of any Turning Point
  - At the end of any Turning Point, if friendly operatives control two or more objective markers, and frierndly operatives control more objective markers than enemy operatives, you score 1VP.
  - If you achieve the first condition at the end of any subsequent Turning Point, you score an additional 1VP.`
}, {
  id: 3,
  name: 'Glory in death',
  description: `Reveal this Tac Op at the end of the battle
  - If more friendly operatives were incapacitated than enemy operatives, but you scored more victory points from the mission objective, you score 2 VPs.`
}]

const guardsmenOrders = [{
  name: 'Move! Move! Move!',
  description: 'Add ▲ to the Movement Characteristic of each friendly operative that was issued this order.'
}, {
  name: 'Take Aim!',
  description: `Each time a friendly operative that was issued this order makes a shooting attack, in the Roll Attack Dice step of that shooting attack,
you can re-roll any or all of your attack dice results of 1. This order has no effect on shooting attacks made with the mortar barrage and remote mine ranged weapons,
or attacks made with tactical assets.`
}, {
  name: 'Hold Position!',
  description: `Each time a shooting attack is made against a friendly operative that was issued this order, in the Roll Defense Dice step of that shooting attack,
if that operative is in Cover, you can re-roll any or all of your defense dice results of 1. Friendly operatives that were issued this order cannot perform **Dash** or **Charge** actions.`
}, {
  name: 'Fix Bayonets!',
  description: 'Each time a friendly operative that was issued this order fights in combat, in the Roll Attack Dice step of that combat, you can re-roll any or all of your attack dice results of 1.'
}]

const tacticalAssets = [{
  name: 'Artillery Barrage',
  description: `Pick one VETERAN GUARDSMAN💀 operative and perform **Shoot** action using the ranged weapon below, as if that operative performed it.

| A | BS | D   | SR                          |
| - | -  | -   | -                           |
| 6 | 5+ | 2/3 | Barrage, Blast ⬤, Indirect |`
}, {
  name: 'Marked Air Strike',
  description: `Pick one VETERAN GUARDSMAN💀 operative and perform **Shoot** action using the ranged weapon below, as if that operative performed it.

| A | BS | D   | SR                |
| - | -  | -   | -                 |
| 5 | 4+ | 3/4 | Barrage, Blast ⬤ |`
}, {
  name: 'Guided Missile',
  description: `Pick one VETERAN GUARDSMAN💀 operative and perform **Shoot** action using the ranged weapon below, as if that operative performed it.

| A | BS | D   | SR  |
| - | -  | -   | -   |
| 4 | 3+ | 4/6 | AP1 |`
}, {
  name: 'Strafing Run',
  description: `Select one enemy operative in a friendly VETERAN GUARDSMAN💀 operative's Line of Sight to be the mark. Then place a Strafing Run token anywhere in the killzone, further from your edge than the mark.
Draw an imaginary line, 1mm wide, between mark and the centre of that Strafing Run token. Using the ranged weapon below, make a shooting attack against the mark and each other operative that has a base crossed by that line.
For those shooting attacks, for purpose of Cover, draw Visibility and Cover lines from the mark, and if they are in Cover provided by Light terrain or another operative, they are treated as having an Engage order for
that attack instead.

| A | BS | D   | SR |
| - | -  | -   | -  |
| 6 | 4+ | 2/3 | -  |`
}]

const data = {
  name: 'Veteran Guardsmen' as const,
  strategicPloys,
  tacticalPloys,
  archetypes,
  tacOps,
  guardsmenOrders,
  tacticalAssets
}

export default data
