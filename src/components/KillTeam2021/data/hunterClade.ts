import {Ploy, TacOp} from '../../../types/KillTeam2021';

const strategicPloys: Ploy[] = [
  {
    name: 'Martial Protocol',
    cost: 1,
    description: `Until the end of the Turning Point:`,
    options: [
        `Each time a friendly HUNTER CLADE💀 VANGUARD operative that is within ⬤ of an objective marker or within ⬟ of your opponent's drop zone make a shooting attack,
        in the Roll Attack Dice step of that shooting attack, you can re-roll one of your attack dice.`,
        `Each time a friendly HUNTER CLADE💀 RANGER operative that has not moved during the Turning Point makes a shooting attack, in the Roll Attack Dice step of that shooting 
        attack, you can re-roll one of your attack dice.`
    ]
  }, {
    name: 'Accelerant Agents',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly HUNTER CLADE💀 RUSTSTALKER operative is activated:`,
    options: [
      `It can perform a free Fight action during that activation`,
      `It can perform two Fight actions during that activation`
    ]
  }, {
    name: 'Neurostatic Interference',
    cost: 1,
    description: `Until the end of the Turning Point, while an enemy operative is within ⬟ of a friendly HUNTER CLADE💀 INFILTRATOR operative, each time that enemy operative
                  fights in combat or makes a shooting attack, in the Roll Attack Dice step of that combat or shooting attack, your opponent cannot re-roll their attack dice.`,
  }, {
    name: 'Calculated Approach',
    cost: 1,
    description: `Until the end of the Turning Point, each time a shooting attack is made against a friendly HUNTER CLADE💀 operative that is more than ⬟ from enemy operatives,
                  in the Roll Defence Dice step of that shooting attack, if you retain any critical saves, you can select one of your failed saves to be retained as a successful
                  normal save.`
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Pursuers',
    cost: 1,
    description: `Use this Tactical Ploy in the Scouting step of the mission sequence, when you resolve your scouting option.`,
    options: [
        `If you selected the Recon option, you can also perform a free Dash action with up to two friendly HUNTER CLADE💀 RANGER operatives that are wholly within your drop zone`,
        `If you selected the Infiltrate option, during the first Turning Point, you can also change the order of up to two ready friendly HUNTER CLADE💀 RANGER operatives when
         each of them are activated`
        ]
  }, {
    name: 'Command Override',
    cost: 1,
    description: `Use this Tactical Ploy when a ready friendly HUNTER CLADE💀 operative is activated. Select one Doctrina Imperative that is not active for your kill team. Until
                  the end of the Turning Point, that Imperative is treated as being active for that operative instead of the current active Imperative`,
  }, {
    name: 'Concealed Position',
    cost: 1,
    description: `Use this Tactical Ploy in the Set Up Operatives step of the mission sequence. Select one friendly HUNTER CLADE💀 INFILTRATOR operative. That operative can be 
                  set up with a Conceal order anywhere in the killzone that is within ▲ of Heavy terrain and more than ⬟ from enemy operatives and the enemy drop zone. That
                  operative cannot have its order changed during the first Turning Point as a result of the Infiltrate option in the Scouting step. You can only use this Tactical
                  Ploy once.`,
  }, {
    name: 'Motive Force Vitality',
    cost: 1,
    description: `Use this Tactical Ploy when a ready friendly HUNTER CLADE💀 operative is activated. That operative regains D3 lost wounds.`,
  },
]


const tacOps: TacOp[] = [
  {
    id: 1,
    name: 'Relentless Pursuit',
    revealTime: `You can reveal this Tac Op in the Target Reveal step of any Turning Point.`,
    description: [
        'At the end of any Turning Point, if there are no enemy operatives in the killzone more than ⬟ from friendly operatives, you score 1VP.',
        'If you achieve the first condition in any subsequent Turning Points, you score 1VP.'
    ],
  }, {
    id: 2,
    name: 'Calculated Eradication',
    revealTime: 'Reveal this TacOp when a Doctrina Imperative first becomes active for your kill team.',
    description: [
      `At the end of any Turning Point, if an Imperative is active for your kill team, and the total wounds lost by enemy operatives during that Turning Point is greater than
      that lost by friendly operatives, you score 1VP`,
      `At the end of any Turning Point, if a different Imperative is active for your kill team, and the total wounds lost by enemy operatives during that Turning Point is 
      greater than that lost by friendly operatives, you score 1VP`
    ]
  }, {
    id: 3,
    name: 'Assassination Order',
    revealTime: 'Reveal this Tac Op in the Target Reveal step of the first Turning Point. Your opponent selects one of their operatives.',
    description: [
      'If that enemy operative is incapacitated before the fourth Turning Point, you score 1VP.',
      'If the first condition is achieved by a friendly HUNTER CLADE💀 operative within ■ of that enemy operative, you score 1VP.'
    ]
  }
]

const data = { strategicPloys, tacticalPloys, tacOps }

export default data
