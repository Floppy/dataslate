import {Archetype, FireteamArchetypes, Ploy, TacOp} from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  fireteams: {
    'Blooded Kill Team': [Archetype.SEEK_AND_DESTROY]
  }
}

const strategicPloys: Ploy[] = [
  {
    name: 'Overcharge Lasguns',
    cost: 1,
    description: `Until the end of the Turning Point, each time a las weapon is selected for a friendly **BLOODED💀** operative to shoot with
    (excluding a Sharpshooter's long-las), you can choose to overcharge it. If you do so, that weapon gains the AP1 and Hot special rules for 
    that shooting attack. A las weapon is a ranged weapon that includes 'las' in its name, e.g. lasgun, laspistol etc.`
  },
  {
    name: 'Glory Kill',
    cost: 1,
    description: `Select one enemy operative Visible to a friendly **BLOODED💀** operative. Until the end of the Turning Point, each time a friendly
    **BLOODED💀** operative fights in combat with or makes a shooting attack against that enemy operative, in the Roll Attack Dice step of that
    combat or shooting attack, you can re-roll one of your attack dice.`
  },
  {
    name: 'Reckless Aspirants',
    cost: 1,
    description: `In the next Firefight phase, while a friendly **BLOODED💀** operative that does not have a Blooded token is within ⬟ of your
    opponent's drop zone, treat it as if it has a Blooded token.`
  },
  {
    name: 'Dirty Fighters',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly **BLOODED💀** operative fights in combat, in the Roll Attack Dice step
    of that combat, if another friendly operative is supporting them, you can retain one of your successful normal hits as a critical hit (excluding
    a normal hit retained as a result of a Blooded token).`
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Callous Disregard',
    cost: 1,
    description: `Use this Tactical Ploy when a **Shoot** action is declared for a friendly **BLOODED💀** operative. For that shooting attack:
  * Having other friendly operatives within Engagement Range of an enemy operative does not prevent that enemy operative from being selected as a valid target.
  * When determining Line of Sight, enemy operatives cannot use friendly operatives' bases as Cover.
  * In the Roll Attack Dice step of that shooting attack, failed hits are instead retained separately as successful normal hits.
  * In the Resolve Successful Hits step of that shooting attack, those retained hits inflict damage on one friendly operative within Engagement Range of the 
  target operative.`
  },
  {
    name: 'Moment of Repute',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly **BLOODED💀** operative that is under the gaze of the gods is activated. Add 1 to its APL.`
  },
  {
    name: 'Reward Earned',
    cost: 1,
    description: `Use this Tactical Ploy when an enemy operative is incapacitated by a friendly **BLOODED💀** operative within ■ of it. Add 1 Blooded 
    token to your pool.`
  },
  {
    name: 'Dark Favour',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly **BLOODED💀** operative that has a Blooded token is slected as the target of a shooting attack.
    Select one other friendly **BLOODED💀** operative that:
  * Does not have a Blooded token.
  * Is within ⬤ of that friendly operative.
  * Is Visible to the active operative.
  
  Resolve that shooting attack against that other friendly operative instead (it is treated as a valid target).`
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

const blooded = {
  // TODO: Replace with a Wahapedia link when available
  name: 'Blooded',
  wahapediaUrl: '#',
  description: `
  A link to Wahapedia with a full description of the Blooded ability will be added once available
  
  Keep a pool of Blooded tokens. Add a Blooded token to your pool as follows:
* At the start of each Initiative phase.
* The first time an enemy operative is incapacitated in each Turning Point.
* The first time a friendly operative is incapacitated within ⬟ of an enemy operative in each Turning Point.
`
}

const data = {
  name: 'Blooded' as const,
  strategicPloys,
  tacticalPloys,
  archetypes,
  tacOps,
  blooded
}

export default data
