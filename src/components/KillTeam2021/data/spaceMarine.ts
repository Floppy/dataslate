import {Archetype, FireteamArchetypes, Ploy} from '../../../types/KillTeam2021';

const archetypes: FireteamArchetypes = {
  "Intercessor Fire Team": [Archetype.SEEK_AND_DESTROY, Archetype.SECURITY],
  "Assault Intercessor Fire Team" : [Archetype.SEEK_AND_DESTROY, Archetype.SECURITY],
  "Incursor Fire Team" : [Archetype.SEEK_AND_DESTROY, Archetype.INFILTRATION, Archetype.RECON],
  "Infiltrator Fire Team" : [Archetype.SEEK_AND_DESTROY, Archetype.INFILTRATION, Archetype.RECON],
  "Reiver Fire Team" : [Archetype.SEEK_AND_DESTROY, Archetype.INFILTRATION, Archetype.RECON],
  "Heavy Intercessor Fire Team" : [Archetype.SEEK_AND_DESTROY, Archetype.SECURITY],
  "Tactical Marine Fire Team" : [Archetype.SEEK_AND_DESTROY, Archetype.SECURITY],
  "Scout Fire Team" : [Archetype.SEEK_AND_DESTROY, Archetype.INFILTRATION, Archetype.RECON],
  "Death Watch Fire Team" : [Archetype.SEEK_AND_DESTROY, Archetype.SECURITY],
}

const strategicPloys: Ploy[] = [
  {
    name: 'Bolter Discipline',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly SPACE MARINE💀 operative (excluding a SCOUT operative) is activated, if it does not perform a Fight action 
                  during that activation, it can perform two Shoot actions during that activation if a bolt weapon is selected for each of those shooting attacks. A bolt weapon is a 
                  ranged weapon that includes 'bolt' in its name, e.g. boltgun, heavy bolter etc. In the case of the infernus heavy bolter, it must be the heavy bolter profile that 
                  is selected.`
  }, {
    name: 'Shock Assault',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly SPACE MARINE💀 operative (excluding a SCOUT operative) is activated, if it does not perform a Shoot action 
                  during that activation, it can perform two Fight actions during that activation.`
  }, {
    name: 'Tactical Precision',
    cost: 1,
    description: `Until the end of the Turning Point, while a friendly SPACE MARINE💀 operative is within ■ of and Visible to a friendly LEADER operative, each time it fights in combat 
                  or makes a shooting attack, in the Roll Attack Dice step of that combat or shooting attack, you can re-roll one of your attack dice.`
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Transhuman Physiology',
    cost: 1,
    description: `Use this Tactical Ploy in the Roll Defence Dice step of a shooting attack, after rolling defence dice for a friendly PRIMARIS operative. You can change one of your 
                  retained normal saves to a critical save.`
  },{
    name: 'Only in death does duty end',
    cost: 1,
    description: `Use this Tactical Ploy when a ready friendly SPACE MARINE💀 operative is incapacitated. That operative is not removed from the killzone until the end of your next
                  activation and does not count as being injured.`
  },{
    name: 'And they shall know no fear',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly SPACE MARINE💀 operative is activated. Until the end of that operative's activation, you can ignore any or all modifiers to 
                its APL characteristic and it is not injured.`
  },{
    name: 'Omni-Scrambler',
    cost: 1,
    description: `Use this Tactical Ploy at the start of the Firefight phase. Select one enemy operative Visible to and within ⬟ of a friendly INFILTRATOR operative. Until the end 
                  of the Turning Point that enemy operative cannot be activated until another enemy operative has been activated (unless it is the only remaining enemy operative).`
  },{
    name: 'Multi-Spectrum Array',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly INCURSOR operative performs a Shoot action. For that action's shooting attack, enemy operatives are not Obscured.`
  },{
    name: 'Terror Troop',
    cost: 1,
    description: `Use this Tactical Ploy during a friendly REIVER operative's activation. Until the start of the next Turning Point:`,
    options: [
        `Each time an enemy operative would perform a mission action or the Pick Up action, if this friendly REIVER operative is within SQUARE of that enemy operative, one additional
        action point must be subtracted to perform that action.`,
        `When determining control of an objective marker that friendly REIVER operative is within range of, treat enemy operatives' total APL as being 1 less. Note that this is not a modifier.`
    ]
  },

]

const data = { strategicPloys, tacticalPloys, archetypes, tacOps: null, }

export default data
