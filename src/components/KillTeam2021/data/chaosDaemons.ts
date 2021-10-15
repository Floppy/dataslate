import { Archetype, FireteamArchetypes, Ploy } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  'Bloodletter Fire Team': [Archetype.SEEK_AND_DESTROY],
  'Daemonette Fire Team': [Archetype.SEEK_AND_DESTROY, Archetype.RECON],
  'Plaguebearer Fire Team': [Archetype.SECURITY],
  'Pink Horror Fire Team': [Archetype.SECURITY],
  'Blue Horror Fire Team': [Archetype.SECURITY, Archetype.RECON]
}

const strategicPloys: Ploy[] = [
  {
    name: 'Unstoppable Ferocity',
    cost: 1,
    description: 'Until the end of the Turning Point, add 1 to the Attacks characteristic of melee weapons friendly KHORNE operatives are equipped with.'
  }, {
    name: 'Quicksilver Swiftness',
    cost: 1,
    description: 'Until the end of the Turning Point, each time a friendly SLAANESH operative is activated, it can perform a free Dash action during that activation.'
  }, {
    name: 'Glistening Barrage',
    cost: 1,
    description: 'Until the end of the Turning Point, ranged weapons friendly TZEENTCH operatives are equipped with gain the Ceaseless special rule.'
  }, {
    name: 'Contagion',
    cost: 1,
    description: `Until the end of the Turning Point, while an enemy operative is Visible to and within ⬤ of a friendly NURGLE operative, that enemy operative is treated as being injured
                  (only subtract ⬤ from its Movement characteristic as a result of being injured if it is activated within ⬤ of a friendly NURGLE operative).`
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Warp Surge',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly CHAOS DAEMON💀 operative is selected as the target of a ranged attack. Until the end of the Turning Point, each time a shooting attack is
                  made against that friendly operative, in the Roll Defence Dice step of that shooting attack, you can re-roll any or all of your defence dice.`
  }, {
    name: 'Ephemeral Regeneration',
    cost: 1,
    description: 'Use this Tactical Ploy when a friendly CHAOS DAEMON💀 operative is activated. That friendly operative regains 2D3 lost wounds.'
  }, {
    name: 'Split',
    cost: 0,
    description: 'Use this Tactical Ploy when a friendly PINK HORROR operative is incapacitated for 2CP, or when a friendly BLUE HORROR operative is incapacitated for 1CP.',
    options: [
      'Before that PINK HORROR operative is removed from the killzone, set up two BLUE HORROR operatives as close as possible to that operative and not within Engagement Range of enemy operatives',
      `Before that BLUE HORROR operative is removed from the killzone, set up one BRIMESTONE HORRORS operative as close as possible to that operative and not within Engagement Range of enemy
       operatives.`
    ],
    postOptionText: `In either case, set up those operatives with the same order as the previous operative (including if it was ready or activated). In narrative play, any operatives set up as a
                      result of this Tactical Ploy are no longer part of your kill team after the game.`
  }
]

const data = {
  name: 'Chaos Daemons' as const,
  strategicPloys,
  tacticalPloys,
  archetypes
}

export default data
