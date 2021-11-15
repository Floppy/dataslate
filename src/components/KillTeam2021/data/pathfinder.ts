import { Archetype, FireteamArchetypes, Ploy, TacOp } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  fireteams: {
    'Pathfinder Kill Team': [Archetype.RECON]
  }
}

const strategicPloys: Ploy[] = [
  {
    name: 'Recon Sweep',
    cost: 1,
    description: `Friendly PATHFINDER💀 operatives that are wholly within ⬟ of any killzone edge can immediately perform a free **Dash** action, but only if they can finish
          that move wholly within ⬟ of a killzone edge that is not your own killzone edge.`
  }, {
    name: 'Take Cover',
    cost: 1,
    description: `Until the end of the Turning Point, each time a shooting attack is made against a friendly PATHFINDER💀 operative (excluding a **DRONE** operative), 
            if it is in Cover, improve its Save characteristic by 1 for that shooting attack.`
  }, {
    name: 'Bonded',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly PATHFINDER💀 operative makes a shooting attack, in the Roll Attack Dice step of that shooting attack,
                  if it is within ■ of another friendly PATHFINDER💀 operative (excluding a **DRONE** operative), you can re-roll one of your attack dice.`
  }, {
    name: 'Determined Tactician',
    cost: 2,
    description: `If a friendly **SHAS'UI** operative is in the killzone and it used its Art of War ability in the previous Turning Point, you can use this Strategic Ploy. Until 
                  the end of the Turning Point, while a friendly PATHFINDER💀 operative is within ⬟ of and Visible to a friendly **SHAS'UI** operative, it treats the same Art of
                  War that was in effect for your kill team in the previous Turning Point as being in effect for this Turning Point. Note that means for Mont'ka, it can only 
                  perform that free **Dash** action if it is within ⬟ of and Visible to a friendly **SHAS'UI** operative when that action is declared. You can only use this 
                  Strategic Ploy once.`
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'A Worthy Cause',
    cost: 1,
    description: `Use this tactical Ploy at the start of the Firefight phase. Select one friendly PATHFINDER💀 operative (excluding a **DRONE** operative) that is within ■ of any
                  enemy or within ⬤ of the centre of an objective marker and activate it. Once that operative has completed its activation, the player who has the Initiative
                  activates an operative as normal.`
  }, {
    name: 'Supporting Fire',
    cost: 1,
    description: `Use this Tactical Ploy in the Firefight phase, when a **Shoot** action is declared for a friendly PATHFINDER💀 operative. In the Select Valid Target step of that
                  shooting attack, you must select an enemy operative that is within Engagement Range of a friendly operative and within ⬟ of the active operative, and that enemy
                  operative cannot be in Cover as a result of friendly operatives' bases. Note, however, that in the Roll Defence Dice step of that shooting attack, the enemy
                  operative can be in Cover as a result of friendly operatives' bases.`
  }, {
    name: 'Reposition',
    cost: 1,
    description: `Use this Tactical Ploy in the Firefight phase, when a friendly PATHFINDER💀 operative is activated. Until the end of its activation, that operative can perform
                  **Dash** actions if it is within Engagement Range of an enemy operative and when performing that action, it can move within Engagement Range of enemy operatives,
                  but cannot finish that move within Engagement Range of enemy operatives (if that is not possible, it cannot perform the action).`
  }
]

const tacOps: TacOp[] = [
  {
    id: 1,
    name: 'Mark Enemy Movements',
    description: `You can reveal this Tac Op in the Target Reveal Step of any Turning Point.  
  - At the end of any Turning Point, if at least half of the enemy operatives in the killzone (rounding down and a minimum of 3 enemy operatives) have one or more markerlight
    tokens, you score 1VP.
  - If you achieve the first condition in any subsequent Turning Points, you score 1VP.`,
  }, {
    id: 2,
    name: 'Patient Hunter',
    description: `You can reveal this Tac Op in the Target Reveal step of any Turning Point.
  - At the end of any Turning Point, if you scored more victory points than your opponent for the mission objective during that Turning Point, and more 
    than half of your operatives (rounding down) have a Conceal order, you score 1VP. 
  - If you achieve the first condition in any subsequent Turning Points, you score 1VP.`
  }, {
    id: 3,
    name: 'Killing Blow',
    description: `You can reveal this Tac Op in the Target Reveal step of any Turning Point.
  - At the end of any Turning Point, if the total Wounds characteristic of enemy operatives that were incapacitated during that Turning Point is greater than the total 
  Wounds characteristic of friendly operatives that were incapacitated during that Turning Point, and more than half of your operatives (rounding down) have an Engage order, 
  you score 1VP
  - If you achieve the first condition in any subsequent Turning Points, you score IVP.`
  }
]

const data = {
  name: 'Pathfinder' as const,
  strategicPloys,
  tacticalPloys,
  archetypes,
  tacOps
}

export default data
