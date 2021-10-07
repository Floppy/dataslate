import { Archetype, FireteamArchetypes, Ploy } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  'Troupe Kill Team': [Archetype.SEEK_AND_DESTROY, Archetype.INFILTRATION, Archetype.RECON]
}

const strategicPloys: Ploy[] = [
  {
    name: 'Rising Crescendo',
    cost: 1,
    description: 'Until the end of the Turning Point, each time a friendly TROUPE💀 operative is activated:',
    options: [
      'It can perform Dash and Charge actions while within Engagement Range of enemy operatives.',
      'Each time it performs a Normal Move, Fall Back, Dash or Charge action during that activation, it can move an additional ▲'
    ]
  }, {
    name: 'Domino field',
    cost: 1,
    description: `Until the end of the Turning Point, while a friendly TROUPE💀 operative that has not made a shooting attack during the Turning Point is within ▲ of a terrain feature that provides Cover,
                  enemy operatives always treat it as having a Conceal order, regardless of any other rules (e.g. Vantage Point).`
  }, {
    name: 'Prismatic Blur',
    cost: 1,
    description: 'Until the end of the Turning Point, each time a friendly TROUPE💀 operative performs a Normal Move, Fall Back or Charge action, it is a prismatic blur. While it is a prismatic blur:',
    options: [
      'Each time a shooting attack is made against that operative, in the Roll Defence Dice step of that shooting attack, you can re-roll one of your defence dice.',
      'Each time that operative fights in combat, in the Resolve Successful Hits step of that combat, each time your opponent strikes with a normal hit, you can roll one D6: on a 4+, treat that strike as a parry instead.'
    ]
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Murderous entrance',
    cost: 1,
    description: `Use this Tactical Ploy in the Resolve Successful Hits step of a combat, after a friendly TROUPE💀 operative that performed a Charge action during this activation strikes with a critical hit.
                  You can immediately select one of your remaining attack dice and strike with it.`
  }, {
    name: 'The curtain falls',
    cost: 1,
    description: `Use this Tactical Ploy in the Resolve Successful Hits step of a combat, after an active friendly TROUPE💀 operative strikes. Immediately end that combat and that friendly operative can
                  perform a Fall Back action for 1 AP even if it has performed an action during that activation that prevents it from performing a Fall Back action (e.g. a Charge action).`
  }, {
    name: 'Hero\'s Path',
    cost: 1,
    description: 'Use this Tactical Ploy when a friendly TROUPEI operative is activated. Until the end of its activation, it can perform the following action:',
    action: {
      name: 'Hero\'s path',
      cost: 3,
      description: 'Move this operative anywhere in the killzone that is more than ⬟ from enemy operatives.'
    }
  }
]

const data = {
  name: 'Troupe' as const,
  strategicPloys,
  tacticalPloys,
  archetypes
}

export default data
