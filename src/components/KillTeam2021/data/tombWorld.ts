import { Archetype, FireteamArchetypes, Ploy } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  fireteams: {
    'Necron Warrior Fire Team': [Archetype.SECURITY],
    'Deathmark Fire Team': [Archetype.SEEK_AND_DESTROY, Archetype.RECON],
    'Immortal Fire Team': [Archetype.SEEK_AND_DESTROY, Archetype.SECURITY],
    'Flayed One Fire Team': [Archetype.SEEK_AND_DESTROY, Archetype.INFILTRATION]
  }
}

const strategicPloys: Ploy[] = [
  {
    name: 'Relentless Onslaught',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly TOMB WORLD💀 operative makes a shooting attack, in the Roll Attack Dice step of
    that shooting attack, if the target is within ⬟ of it, you can re-roll one of your attack dice.`
  }, {
    name: 'Dimensional Concealment',
    cost: 1,
    description: 'Until the end of the Turning Point, friendly **DEATHMARK** operatives can perform the following action:',
    action: {
      id: '1',
      name: 'Dimensional Concealment',
      cost: 1,
      description: 'Change this operative\'s order.'
    }
  }, {
    name: 'Implacable March',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly TOMB WORLD💀 operative is activated, after determining its order, if it has an **Engage** order,
    it can perform an implacable march. If it does, for that activation:
  - Add ⬤ to its Movement characteristic.
  - It can only perform **Normal Move**, **Charge**, **Shoot** and **Fight** actions.`
  }, {
    name: 'Skulking Killer',
    cost: 1,
    description: `Until the end of the Turning Point, friendly **FLAYED ONE** operatives gain the following ability:
    **Skulking Killer**: This operative can perform a **Charge** action while it has a **Conceal** order.`
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Reanimation Protocols',
    cost: 0,
    description: `Use this Tactical Ploy when a friendly TOMB WORLD💀 operative is incapacitated. Before removing that operative from the killzone, place a Reanimation token
     under its base and leave its order token next to it. In the **Ready Operatives** step of each Turning Point, before resolving the **Living Metal** ability, roll one D6 
     for each of your Reanimation tokens. On a 3+ (or a 2+ if that operative is a NECRON WARRIOR operative):
  - Set up the operative that Reanimation token was placed for.
  - It must be as close as possible to that Reanimation token and not within Engagement Range of enemy operatives.
  - It has D3 wounds remaining.
  - It has the order of the remaining order token.
  - Remove that Reanimation token.`
  }, {
    name: 'Living Lightning',
    cost: 1,
    description: `Use this Tactical Ploy in the **Roll Attack Dice** step of a shooting attack, when one or more critical hits are retained for a shooting attack made with
    a tesla carbine that a friendly **IMMORTAL** operative is equipped with. Select one of the following for that shooting attack:
  - Treat that weapon’s Splash 1 critical hit rule as Splash 2 instead.
  - Treat the distance requirement for that weapon’s Splash 1 critical hit rule as ■ instead of ⬤.`
  }
]

const data = {
  name: 'Tomb World' as const,
  strategicPloys,
  tacticalPloys,
  archetypes
}

export default data
