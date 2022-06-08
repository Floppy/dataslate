import {Archetype, FireteamArchetypes, Ploy, TacOp} from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  fireteams: {
    'Blooded Kill Team': [Archetype.SEEK_AND_DESTROY]
  }
}

const strategicPloys: Ploy[] = [
  {
    name: 'A',
    cost: 1,
    description: `**PHOBOS STRIKE TEAM💀**`
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'A',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly **PHOBOS STRIKE TEAM💀** operative with a Conceal order that is not within Engagement Range of an
    enemy is activated.
  * That operative cannot make a shooting attack during that activation.
  * The first time that operative performs a **Fight** action during that activation, in the Resolve Successful Hits step of that combat, the first time
  you resolve one of your successful hits, you can immediately resolve another of your successful hits.
   
  **Designer's Note:** Unless the operative can perform a **Charge** action while it has a Conceal order (e.g. The Assassin Battle Honour), when it is activated,
  you will need to change its order to Engage to use this Tactical Ploy.`
  }
]

const tacOps: TacOp[] = [
  {
    id: 1,
    name: 'Worthy Champion',
    description: `You can reveal this Tac Op in the Target Reveal step of any Turning Point.
  * If a friendly **BLOODED💀** operative that is under the gaze of the gods incapacitates one or more enemy operatives during the Turning Point, and is within 
  ⬟ of the centre of the killzone or your opponent's drop zone at the end of the Turning Point, you score 1VP.
  * If you achieve the first condition in any subsequent Turning Points, you score 1VP.`
  },
  {
    id: 2,
    name: 'Malign Command',
    description: `You can reveal this Tac op in the Target Reveal step of any Turning Point.
  * At the end of any Turning Point, if friendly **BLOODED💀** operatives control half or more of the objective markers, and each of those objective markers is
  controlled by one or more friendly **BLOODED💀** operatives that have a Blooded token, you score 1VP.
  * If you achieve the first condition in any subsequent Turning Points, you score 1VP.`
  },
  {
    id: 3,
    name: 'Bloodbath',
    description: `Reveal this Tac Op at the end of the battle.
  * If more than half of the enemy kill team has been incapacitated at the end of the battle, you score 1VP.
  * If more than three quarters of the enemy kill team has been incapacitated at the end of the battle, you score 1VP.`
  }
]

const data = {
  name: 'Blooded' as const,
  strategicPloys,
  tacticalPloys,
  archetypes,
  tacOps
}

export default data
