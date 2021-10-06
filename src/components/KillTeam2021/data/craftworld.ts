import { Archetype, FireteamArchetypes, Ploy } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  'Guardian Defender Fire Team': [Archetype.SECURITY, Archetype.RECON],
  'Storm Guardian Fire Team': [Archetype.SEEK_AND_DESTROY, Archetype.RECON],
  'Ranger Fire Team': [Archetype.SEEK_AND_DESTROY, Archetype.SECURITY, Archetype.RECON],
  'Dire Avenger Fire Team': [Archetype.SEEK_AND_DESTROY, Archetype.SECURITY, Archetype.RECON]
}

const strategicPloys: Ploy[] = [
  {
    name: 'Fleet',
    cost: 1,
    description: 'Until the end of the Turning Point, each time a friendly CRAFTWORLD💀 operative performs a Fall Back or Normal Move action, it can perform a free Dash action with that action.'
  }, {
    name: 'Forewarned',
    cost: 1,
    description: `Until the end of the Turning Point, each time a shooting attack is made against a ready friendly CRAFTWORLD💀 operative,in the Roll Defence Dice step of that shooting attack,
                  you can re-roll one of your defence dice.`
  }, {
    name: 'Supreme Disdain',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly CRAFTWORLD💀 operative fights in combat, in the Roll Attack Dice step of that combat, if your opponent discards more
                  attack dice as failed hits than you do, you can change one of your retained normal hits to a critical hit.`
  }, {
    name: 'Hidden Paths',
    cost: 1,
    description: `Each friendly RANGER operative that has a Conceal order, is within ▲ of Light or Heavy terrain and is more than ⬟ from enemy operatives can immediately perform a free Dash
                  action, but must finish that move within ▲ of Light or Heavy terrain.`
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Matchless Agility',
    cost: 1,
    description: 'Use this Tactical Ploy when a friendly CRAFTWORLD💀 operative is activated. Until the end of that operative\'s activation:',
    options: [
      'It cannot perform a Shoot or Fight action.',
      'If it performs a Dash action, it can move an additional ⬤ for that action.'
    ]
  }, {
    name: 'First of the Aspects',
    cost: 1,
    description: 'Use this Tactical Ploy during a friendly DIRE AVENGER operative\'s activation. Add 1 to its APL.'
  }
]

const data = {
  name: 'Craftworld' as const,
  strategicPloys,
  tacticalPloys,
  archetypes
}

export default data
