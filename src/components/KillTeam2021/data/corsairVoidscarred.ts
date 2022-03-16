import { Archetype, FireteamArchetypes, Ploy, TacOp } from '../../../types/KillTeam2021'

const factionLabel = '**CORSAIR VOIDSCARRED💀**'

const archetypes: FireteamArchetypes = {
  fireteams: {
    'Corsair Voidscarred Kill Team': [Archetype.RECON, Archetype.SEEK_AND_DESTROY]
  }
}

const strategicPloys: Ploy[] = [
  {
    name: 'Plunderers',
    cost: 1,
    description: `Select up to three friendly ${factionLabel} operatives. Each of those operatives can 
    immediately perform a free **Dash** action. When doing so, if the mission you are playing has any objective markers 
    that are not being carried by operatives, each selected operative must end their **Dash** action closer to the
    nearest objecive marker.`
  },
  {
    name: 'Rapid Strike',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly ${factionLabel} operative fights
    in combat, in the Roll Attack Dice step of that combat, if you are the Attacker and the target is not ready, you 
    can select one of your normal hits to be retained as a critical hit.`
  },
  {
    name: 'Outcasts',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly ${factionLabel} operative fights in
    combat or makes a shooting attack, in the Roll Attack Dice step of that combat or shooting attack, if it is more than
    ⬟ from friendly operatives, if you retain any critical hits, you can select one of your failed hits to be retained
    as a successful normal hit.`
  },
  {
    name: 'Aeldari Agility',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly ${factionLabel} operative is activated,
    it can use its Aeldari agility. If it does so, it cannot perform **Fight** or **Shoot** actions during that activation,
    but each time it performs a **Dash**, **Fall Back** or **Normal Move** action during this activation, it can move an
    additional ▲ for that action.`
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Opportunistic Fighters',
    cost: 1,
    description: `Use this Tactical Ploy when an enemy operative performs a **Fall Back** action. Before it moves, that enemy
    operative suffers D3 mortal wounds for each friendly ${factionLabel} operative within Engagement Range of it.`
  },
  {
    name: 'Light Fingers',
    cost: 1,
    description: `Use this Tactical Ploy during a friendly ${factionLabel} operative's activation. Until the end of that
    activation, that operative can perform for free either one mission action or the **Pick Up** action, even if itis within
    Engagement Range of an enemy operative.`
  },
  {
    name: 'Deadly Ambush',
    cost: 1,
    description: `Use this Tactical Ploy after an enemy operative finishes an action in which it moved. Select one friendly 
    ${factionLabel} operative that is not within Engagement Range of an enemy operative. That friendly operative can
    immediately perform a free **Charge** action, but can only move up to ■ and must finish that move within Engagement Range
    of that enemy operative (otherwise it cannot move).`
  },
  {
    name: 'One Step Ahead',
    cost: 1,
    description: `Use this Tactical Ploy at the end of the Initiative phase of the first Turning Point. You can redeploy up to 
    two friendly ${factionLabel}. They must be set up wholly within your deployment zone and you can change their order.`
  }
]

const tacOps: TacOp[] = [
  {
    id: 1,
    name: 'Flawless Raid',
    description: `You can reveal this Tac Op in the Target Reveal step of any Turning Point after the second.
* If you had more victory points than your opponent at the start of the turning Point, you score 1VP.
* If you achieve the first condition at the start of the subsequent Turning Point, you score 1VP.`
  },
  {
    id: 2,
    name: 'Soul Guard',
    description: `Reveal this Tac Op in the Target Reveal step of the first Turning Point. Each time a friendly
${factionLabel} operative is incapacitated, before it is removed from the killzone, place one of your
Spirit Stone tokens underneath the operative as close as possible to the centre of its base.

The **Pick Up** action can be performed upon your Spirit Stone tokens by friendly ${factionLabel}
operatives. Operatives can carry any number of Spirit Stone tokens and your Spirit Stone tokens can be picked up
by friendly ${factionLabel} operatives while within Engagement Range of an enemy operative.
    
* At the end of the battle, if no friendly operatives have been incapacitated, you score 2VP.
* Otherwise:
  * At the end of the battle, if friendly operatives are carrying at least half of your Spirit Stone tokens, you score 1VP.
  * At the end of the battle, if friendly operatives are carrying all of your Spirit Stone tokens, you score 1VP.`
  },
  {
    id: 3,
    name: 'Opportunists',
    description: `Reveal this Tac Op in the Target Reveal step of the first Turning Point. Select three enemy operatives.
    Each time one of those operatives is incapacitated, before it is removed from the killzone, place one of your Loot
    tokens underneath the operative as close as possible to the centre of its base. The **Pick Up** action can be performed
    upon your Loot tokens by friendly operatives. Operatives can carry any number of Loot tokens.
* At the end of the battle, if friendly operatives are carrying one or more of your Loot tokens, you score 1VP.
* At the end of the battle, if friendly operatives are carrying three of your Loot tokens, you score 1VP.`
  }
]

const data = {
  name: 'Corsair Voidscarred' as const,
  strategicPloys,
  tacticalPloys,
  archetypes,
  tacOps
}

export default data
