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
  - If you achieve the first condition in any subsequent Turning Points, you score 1VP.`
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

const artOfWar = {
  name: 'Art of War',
  description: `Pathfinder Shas'uis are accomplished leaders. They have spent years studying the philosophies of T'au warfare, and have years of experience in implementing them.
                When a **SHAS'UI** operative uses its Art of War ability, select one Art of War below to be in effect until the end of the Turning Point.`,
  options: [{
    name: 'Mont\'ka',
    description: 'Each time a friendly PATHFINDER operative is activated, if it has an Engage order for that activation, it can perform a free Dash action during that activation.'
  }, {
    name: 'Kauyon',
    description: `Each time a shooting is made against a friendly PATHFINDER operative before rolling your defence dice, if it is in Cover additional dice can be retained as 
                  a successful normal save as a result of Cover.`
  }]
}

const markerLights = {
  name: ''
}

/*
MARKERLIGHTS
A markerlight is a device that projects a beam onto a target. Once an enemy has been 'painted' by such a beam, a torrent of targeting data is fed into the cadre tactical network, relaying ranges, triangulating optimum firing trajectories and superimposing aiming vectors to other T'au warriors, allowing them to engage the target with unerring accuracy.
MARKERLIGHT
1AP
Select one enemy operative Visible to this operative. That enemy operative gains 1 Markerlight token. An operative cannot perform this action if it is within Engagement Range of an enemy operative. If an operative would perform this action and a Shoot action in the same activation, only the target of that Shoot action's shooting attack can be selected for this action.
Operatives gain Markerlight tokens as specified by the Markerlight action above. In the Ready Operatives step of each Initiative phase, remove one Markerlight token that each operatives has.
Each time a friendly PATHFINDERS operative makes a shooting attack, it gains a number of cumulative benefits for that shooting attack depending on how many Markerlight tokens the target operative has. Operatives gain no markerlight benefits for shooting attacks made with EMP and fusion grenades.
Markerlight Tokens
1+
Benefit
In the Roll Attack Dice step of that
shooting attack, you can re-roll one of your attack dice.
For that shooting attack, the active operative's ranged weapons gain the No Cover special rule.
For that shooting attack, improve the Ballistic Skill characteristic of ranged weapons the active operative is equipped with by 1.
In the Select Valid Target step of that shooting attack, the enemy operative is not Obscured.
In the Select Valid Target step of that shooting attack, the enemy operative is treated as if it has an Engage order.
2+
3+
4+
ART OF WAR
Pathfinder Shas'uis are accomplished leaders. They have spent years studying the philosophies of T'au warfare, and have years of experience in implementing them.
When a SHAS'UI operative uses its Art of War ability, select one Art of War below to be in effect until the end of the Turning Point.
Mont'ka
Each time a friendly PATHFINDER operative is activated, if it has an Engage order for that activation, it can perform a free Dash action during that activation.
Kauyon
Each time a shooting is made against a friendly PATHFINDER operative barore rolling your defence dice, if it is in Cover additional dice can be retained as a successful normal save as a result of Cover.
56
but on
PATHFINDERS
ACTIONS
KE COVE
the end of th
d's made aga
DRON
acteristic b
DED
end of the Tu
DER operativ
Dice step of
her friendly PA
perative), you ca
TERMINED TA
SHAS UI opera
tilar ability in the p
Poy Until the E
MHFINDER opera
SMAS UN operativ
ed for your kill L
ng in effect for this
otka it can only F
of and Visible to
is declared. You
5+
Copy text
MARKERLIGHTS
A markerlight is a device that projects a beam onto a target. Once an enemy has been 'painted' by such a beam, a torrent of targeting data is fed into the cadre tactical network, relaying ranges, triangulating optimum firing trajectories and superimposing aiming vectors to other T'au warriors, allowing them to engage the target with unerring accuracy.
MARKERLIGHT
1AP
Select one enemy operative Visible to this operative. That enemy operative gains 1 Markerlight token. An operative cannot perform this action if it is within Engagement Range of an enemy operative. If an operative would perform this action and a Shoot action in the same activation, only the target of that Shoot action's shooting attack can be selected for this action.
Operatives gain Markerlight tokens as specified by the Markerlight action above. In the Ready Operatives step of each Initiative phase, remove one Markerlight token that each operatives has.
Each time a friendly PATHFINDERS operative makes a shooting attack, it gains a number of cumulative benefits for that shooting attack depending on how many Markerlight tokens the target operative has. Operatives gain no markerlight benefits for shooting attacks made with EMP and fusion grenades.
Markerlight Tokens
1+
Benefit
In the Roll Attack Dice step of that
shooting attack, you can re-roll one of your attack dice.
For that shooting attack, the active operative's ranged weapons gain the No Cover special rule.
For that shooting attack, improve the Ballistic Skill characteristic of ranged weapons the active operative is equipped with by 1.
In the Select Valid Target step of that shooting attack, the enemy operative is not Obscured.
In the Select Valid Target step of that shooting attack, the enemy operative is treated as if it has an Engage order.
2+
3+
4+
 */

const data = {
  name: 'Pathfinder' as const,
  strategicPloys,
  tacticalPloys,
  archetypes,
  tacOps,
  artOfWar,
  markerLights
}

export default data
