import { Archetype, FireteamArchetypes, Ploy } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  fireteams: {
    'Boy Fire Team': [Archetype.SEEK_AND_DESTROY, Archetype.SECURITY],
    'Clan Kommando Fire Team': [Archetype.SEEK_AND_DESTROY, Archetype.INFILTRATION],
    'Speshulist Fire Team': [Archetype.SEEK_AND_DESTROY]
  }
}

const strategicPloys: Ploy[] = [
  {
    name: 'Dakka! Dakka! Dakka!',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly GREENSKIN💀 operative makes a shooting attack, in the Roll Attack Dice step of that shooting attack,
                  if you retain any critical hits, you can select one of your failed hits to be retained as a successfull normal hit.`
  }, {
    name: 'Waaagh!',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly GREENSKIN💀 operative fights in combat, in a Roll Attack Dice step of that combat,
                  when you would retain two or more normal hits, you can select one of those hits to be retained as a critical hit instead.`
  }, {
    name: 'Get stuck in!',
    cost: 1,
    description: 'Until the end of the Turning Point, each time a friendly BOY operative performs a **Fight** action, in the Roll Attack Dice step of that combat, you can re-roll one of your attack dice.'
  }, {
    name: 'Skulk about',
    cost: 1,
    description: `Until the end of the Turning Point, each time a shooting attack is made against a friendly CLAN COMMANDO operative, before rolling defence dice for that shooting attack,
                  if it has a Conceal order, you can retain one as a successfull normal save without rolling it.`
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Just a scratch',
    cost: 1,
    description: `Use this tactical Ploy in the Resolve Successfull Hits step of a shooting attack or combat, when damage would beinflicked on a friendly GREENSKIN💀 operative,
                  (excluding KOMMANDO GROT operatives), from an attack dice. Ignore the damage inflicted from that attack dice.`
  }, {
    name: 'More Dakka',
    cost: 1,
    description: 'Use this Tactical Ploy after making a shooting attack with a friendly GREENSKINI operative in which the target did not lose any wounds. Repeat that shooting attack.'
  }
]

const data = {
  name: 'Greenskin' as const,
  strategicPloys,
  tacticalPloys,
  archetypes
}

export default data
