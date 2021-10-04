import { Ploy, TacOp } from '../../../types/KillTeam2021';

const strategicPloys: Ploy[] = [
  {
    name: 'Overcharge lasguns',
    cost: 1,
    description: 'Until the end of the Turning Point, change the profile of lasguns that friendly VETERAN GUARDSMAN💀 operatives are equipped with to include the following:',
    weapon: {
      name: 'Overcharged lasgun',
      melee: false,
      attacks: 4,
      hit: 4,
      damage: 2,
      criticalDamage: 3,
      specialRules: 'AP1, Hot',
      criticalRules: ''
    }
  }, {
    name: 'Take cover',
    cost: 1,
    description: 'Until the end of the Turning Point, each time a shooting attack is made against a friendly VETERAN GUARDSMAN💀 operative, if it is in Cover, improve it\'s Save characteristic by 1 for that shooting attack.',
  }, {
    name: 'Into the breach',
    cost: 1,
    description: 'Each friendly VETERAN GUARDSMAN💀 operative within your drop zone can perform a free Dash action, but must finish that move closer to the enemy\'s drop zone.',
  }, {
    name: 'Clear the line',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly VETERAN GUARDSMAN💀 operative fights in combat,
                  before rolling your attack dice for that combat, you can retain one as a successfull normal hit withour rolling it.`,
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Inspirational leadership',
    cost: 1,
    description: `Use this Tactical Ploy during a VETERAN GUARDSMAN💀 LEADER operative's operation. That operative issues a
                  Guardsman Order to all friendly VETERAN GUARDSMAN💀 operatives within ⬟ of and visible to it.`,
  }, {
    name: 'In death, atonement',
    cost: 1,
    description: `Use this Tactical Ploy when a ready friendly VETERAN GUARDSMAN💀 operative is incapacitated.
                  That operative is not removed from the killzone until the end of your next activation and does not count as being injured.`,
  }, {
    name: 'Combined arms',
    cost: 1,
    description: `Use this Tactical Ploy after rolling your attack dice for a shooting attack made by a friendly VETERAN GUARDSMAN💀 operative.
                  If the target of that attack is an enemy operative that was targeted by another friendly VETERAN GUARDSMAN💀 operative with a
                  shooting attack during that Turning point, you can re-roll any or all of your attack dice for that shooting attack.`,
  }
]

const tacOps: TacOp[] = [{
  id: 1,
  name: 'Boots on the ground',
  revealTime: 'You can reveal this Tac Op at the end of any Turning Point',
  description: [
    `At the end of that Turning Point, if there are more friendly operatives than enemy operatives within ⬟ of your drop zone, and there are more friendly
     operatives than enemy operatives within ⬟ of your opponent's drop zone, you score 1VP.`,
    'If you achieve the first condition at the end of any subsequent Turning Points, you score 1VP.'
  ],
}, {
  id: 2,
  name: 'Stand fast',
  revealTime: 'You can reveal this Tac Op in the Reveal Tac Ops step of any Turning Point',
  description: [
    'At the end of any Turning Point, if friendly operatives control two or more objective markers, and frierndly operatives control more objective markers than enemy operatives, you score 1VP.',
    'If you achieve the first condition at the end of any subsequent Turning Point, you score an additional 1VP.'
  ],
}, {
  id: 3,
  name: "Glory in death",
  revealTime: 'Reveal this Tac Op at the end of the battle',
  description: [
    'If more friendly operatives were incapacitated than enemy operatives, but you scored more victory points from the mission objective, you score 2 VPs.'
  ]
}]

const data = { strategicPloys, tacticalPloys, tacOps }

export default data
