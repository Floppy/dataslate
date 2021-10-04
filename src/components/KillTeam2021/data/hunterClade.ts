import { Ploy } from '../../../types/KillTeam2021';

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

const data = { strategicPloys, tacticalPloys, tacOps: null }

export default data
