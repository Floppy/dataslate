import { Archetype, FireteamArchetypes, Ploy, TacOp } from '../../../types/KillTeam2021'

const factionLabel = '**HAND OF THE ARCHON💀**'

const archetypes: FireteamArchetypes = {
  fireteams: {
    'Hand of the Archon Kill Team': [Archetype.RECON, Archetype.SECURITY, Archetype.SEEK_AND_DESTROY]
  }
}

const strategicPloys: Ploy[] = [
  {
    name: 'Blade Artists',
    cost: 1,
    description: `Until the end of the Turning Point, melee weapons friendly ${factionLabel} operatives are equipped with
gain the Rending critical hit rule.`
  },
  {
    name: 'Fleet of Foot',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly ${factionLabel} operative performs a Fall Back
or Normal Move action, it can immediately perform a free Dash action after that action, or vice versa.`
  },
  {
    name: 'From Darkness, Death',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly ${factionLabel} operative is activated, you can 
    select one enemy operative that friendly operative is not in Line of Sight of. Until the end of the activation, the first
    time that friendly operative fights in combat or makes a shooting attack against that enemy operative, in the Roll Attack 
    Dice step of that combat or shooting attack, you can retain one successful normal hit as a critical hit instead.`
  },
  {
    name: 'Denizens of Night',
    cost: 1,
    description: `Until the end of the Turning Point, while a friendly ${factionLabel} operative has a Conceal order, is within ■
of your drop zone and is more than ⬟ from the active operative, it's always treated as having a Conceal order, regardless of any 
other rules (e.g. Vantage Point).`
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Cruel Deception',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly ${factionLabel} operative is activated. Until the end of its 
    activation, that operative can perform the **Fall Back** action for one less action point (to a minimum of OAP).`
  },
  {
    name: 'Devious Scheme',
    cost: 1,
    description: `Use this Tactical Ploy after an opponent uses a Tactical Ploy or Strategic Ploy. The next time they 
    would use that play, they must spend 1 additional Command point to do so (at which point this effect ends). You 
    cannot use this Tactical Ploy again during the battle until its effect has ended.`
  },
  {
    name: 'Heinous Arrogance',
    cost: 1,
    description: 'Use this Tactical Ploy when it is your turn to activate a ready friendly operative. You can skip on that activation.'
  },
  {
    name: 'Prey on the Wounded',
    cost: 1,
    description: `Use this Tactical Ploy after rolling attack dice for a combat or shooting attack made by a friendly ${factionLabel}
    operative. If the target of that attack has half or fewer of its wounds remaining, in the Roll Attack Dice step of that combat or 
    shooting attack, you can re-roll any or all of your attack dice.`
  }
]

const tacOps: TacOp[] = [
  {
    id: 1,
    name: 'Pay the Soul Debt',
    description: `Reveal this Tac Op the first time a friendly ${factionLabel} operative gains a Pain token. Start a Soul Debt tally, 
    adding one to the tally each time a friendly ${factionLabel} operative gains a Pain token (including the first time).
    
* If your Soul Debt tally is seven or more, you score 1VP.
* If your Soul Debt tally is nine or more, you score 1VP.`
  },
  {
    id: 2,
    name: 'Slave Run',
    description: `Reveal this Tac Op the first time an enemy operative is incapacitated. Each time an enemy operative is 
    incapacitated, before it is removed from the killzone, place one of your Slave tokens underneath the operative as close 
    as possible to the centre of its base. Friendly ${factionLabel} operatives can perform the Pick Up action on that token 
    while not within Engagement Range of an enemy operative. Subtract ⬤ from their Movement characteristic while they are 
    carrying it. At the end of the battle:
    
* If two or more of your Slave tokens are being carried by friendly ${factionLabel} operatives, you Score 1VP
* If four or more of your Slave tokens are being carried by friendly ${factionLabel}, you Score 1VP`
  },
  {
    id: 3,
    name: 'Contemptuous Slaughter',
    description: `You can reveal this Tac Op at the end of any Turning Point.
    
* At the end of any Turning Point, if one or more enemy operatives were incapacitated during that Turning Point and no 
friendly ${factionLabel} operatives were, you score 1VP.
* If you achieve the first condition at the end of any subsequent Turning Points, you score 1VP.

You cannot score these conditions in a Turning Point in which no friendly ${factionLabel} operatives are in the killzone.`
  }
]

const data = {
  name: 'Hand of the Archon' as const,
  strategicPloys,
  tacticalPloys,
  archetypes,
  tacOps
}

export default data
