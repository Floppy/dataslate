import { Archetype, FireteamArchetypes, Ploy, TacOp } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  fireteams: {
    'Intercession Squad Kill Team': [Archetype.SECURITY, Archetype.SEEK_AND_DESTROY],
  }
}

const strategicPloys: Ploy[] = [
  {
    name: 'Devastator Doctrine',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly **INTERCESSION SQUAD💀** 
    operative makes a shooting attack against an enemy operative more than from it, in the Roll 
    Attack Dice step of that shooting attack, you can re-roll one of your attack dice. You cannot 
    use another 'Doctrine' Strategic Ploy in this Turning Point.`
  },
  {
    name: 'Tactical Doctrine',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly **INTERCESSION SQUAD💀**  
    operative makes a shooting attack against an enemy operative within of it, in the Roll Attack 
    Dice step of that shooting attack, you can re-roll one of your attack dice. You cannot use 
    another 'Doctrine' Strategic Ploy in this Turning Point.`
  },
  {
    name: 'Assault Doctrine',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly **INTERCESSION SQUAD💀** 
    operative fights in combat in an activation in which it performed a Charge action, in the Roll 
    Attack Dice step of that combat, you can re-roll one of your attack dice. You cannot use another 
    'Doctrine' Strategic Ploy in this Turning Point.`
  },
  {
    name: 'And They Shall Know No Fear',
    cost: 1,
    description: `Until the end of the Turning Point:
* You can ignore any or all modifiers to the APL of friendly **INTERCESSION SQUAD💀** operatives.
* Friendly **INTERCESSION SQUAD💀** operatives are not injured.`
  },

]

const tacticalPloys: Ploy[] = [
  {
    name: 'Adaptive Tactics',
    cost: 1,
    description: `Use this Tactical Ploy in the Select a Kill Team step, when selecting your kill 
    team. Change one of your Chapter Tactics abilities (pg 3) for the battle to another from the 
    same category. You can only use this Tactical Ploy once per battle.`
  },
  {
    name: 'Transhuman Physiology',
    cost: 1,
    description: `Use this Tactical Ploy in the Roll Defence Dice step of a shooting attack, after
    rolling defence dice for a friendly **INTERCESSION SQUAD💀** operative. You can retain one of your 
    successful normal saves as a critical save instead.`
  },
  {
    name: 'Angel of Death',
    cost: 1,
    description: `Use this Tactical Ploy at the end of the Firefight phase. Select one friendly 
    **INTERCESSION SQUAD💀** operative to perform a free Fight action.`
  },
  {
    name: 'Wrath of Vengeance',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly **INTERCESSION SQUAD💀** operative is 
    incapacitated. Before that operative is removed from the killzone, it can perform a free 
    Shoot action. Unless otherwise specified, the operative would be injured for this.`
  },
]

const tacOps: TacOp[] = [
  {
    id: 1,
    name: 'Shock and Awe',
    description: `You can reveal this Tac Op in the Target Reveal step of any Turning Point.
* At the end of any Turning Point, if friendly operatives control one or more objective markers 
that were controlled by enemy operatives at the start of the Turning Point, you score 1VP.
* If you achieve the first condition in any subsequent Turning Points, you score 1VP.`
  },
  {
    id: 2,
    name: 'Champion of Mankind',
    description: `You can reveal this Tac Op when a friendly **INTERCESSION SQUAD💀** operative 
    incapacitates an enemy operative. At the end of the battle:
* If that friendly operative has incapacitated more enemy operatives than each other friendly
 **INTERCESSION SQUAD💀** operative has during the battle, you score 1VP.
* If that friendly operative has incapacitated more enemy operatives than each other enemy operative
 has during the battle, you score 1VP.`
  },
  {
    id: 3,
    name: 'Indomitable Superiority',
    description: `Reveal this Tac Op at the end of the battle:
* If enemy operatives do not control any objective markers but an **INTERCESSION SQUAD💀** operative does, 
you score 1VP.
* If there are less enemy operatives in the killzone than there are friendly **INTERCESSION SQUAD💀** 
operatives in the killzone, you score 1VP.

If the mission objective requires operatives to be removed from the killzone to score victory 
points (but not as a result of being incapacitated), e.g. to ‘escape’, you cannot select this Tac Op.`
  }
]

const data = {
  name: 'Intercession Squad' as const,
  strategicPloys,
  tacticalPloys,
  archetypes,
  tacOps
}

export default data
