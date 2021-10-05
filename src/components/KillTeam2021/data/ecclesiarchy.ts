import {Archetype, FireteamArchetypes, Ploy} from '../../../types/KillTeam2021';

const fireteamArchetypeMap: FireteamArchetypes = {
  "Battle Sister Fire Team": [Archetype.SECURITY],
  "Repentia Fire Team" : [Archetype.SEEK_AND_DESTROY],
  "Arco-Flagellant Fire Team" : [Archetype.SEEK_AND_DESTROY],
}

const strategicPloys: Ploy[] = [
  {
    name: `Emporer's Guidance`,
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly ADEPTA SORORITAS operative fights in combat or makes a shooting attack, in the Roll Attack Dice step of that
                  combat or shooting attack, if you retain any critical hits, you can re-roll one of your attack dice.`
  }, {
    name: 'Divine Shield',
    cost: 1,
    description: `Until the end of the Turning Point, each time a shooting attack is made against a friendly ADEPTA SORORITAS operative, in the Roll Defence Dice step of that shooting
                  attack, if you retain any critical saves, you can re-roll one of your failed saves.`
  }, {
    name: 'Extremis Trigger Word',
    cost: 1,
    description: `Until the end of the Turning Point:`,
    options: [
      `Each time a friendly ARCO-FLAGELLANT operative performs a Dash or Charge action, it can move an additional ▲ for that action`,
      `Arco-flails that friendly ARCO-FLAGELLANT operatives are equipped with gain the Lethal 5+ special rule.`,
    ],
    postOptionText: `You can use this Strategic Ploy once`
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Penance Through Death',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly SISTER REPENTIA or ARCO-FLAGELLANT operative is incapacitated in combat by an enemy operative. Before that friendly operative is
                  removed from the killzone, select one melee weapon it is equipped with and roll one attack dice as if it is fighting in combat. If the result is a successful hit, you
                  can immediately strike an enemy operative within Engagement Range of it. Then remove that friendly operative from the killzone as normal.`
  }, {
    name: 'Storm of Retribution',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly BATTLE SISTER GUNNER or friendly BATTLE SISTER HEAVY GUNNER operative is activated. Until the end of that operative's activation,
                  ranged weapons it is equipped with lose the Heavy special rule (if they have it) and gain the No Cover special rule.`
  }, {
    name: 'Divine Intervention',
    cost: 1,
    description: `Use this Tactical Ploy in the Resolve Successful Hits step of a combat or shooting attack, when an attack dice would inflict damage on a friendly ADEPTA SORORITAS
                  operative. Ignore the damage inflicted from that attack dice.`
  }
]

const data = { strategicPloys, tacticalPloys, fireteamArchetypeMap, tacOps: null }

export default data
