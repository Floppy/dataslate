import {Archetype, FireteamArchetypes, Ploy} from '../../../types/KillTeam2021';

const fireteamArchetypeMap: FireteamArchetypes = {
  "Grey Knight Kill Team": [Archetype.SEEK_AND_DESTROY, Archetype.SECURITY],
}

const strategicPloys: Ploy[] = [
  {
    name: 'Bolter Discipline',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly GREY KNIGHT💀 operative is activated, if it does not perform a Fight action during that activation, it 
                  can perform two Shoot actions during that activation if a storm bolter is selected for each of those shooting attacks`
  }, {
    name: 'Shock Assault',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly GREY KNIGHT💀 operative is activated, if it does not perform a Shoot action during that activation, it 
                  can perform two Fight actions during that activation`
  }, {
    name: 'Tide of Shadows',
    cost: 1,
    description: `Until the end of the Turning Point, each time an enemy operative on a Vantage Point makes a shooting attack, each friendly GREY KNIGHT💀 operative that has a Conceal
                  order, is in Cover provided by Light terrain and is more than ⬟ from that enemy operative cannot be treated as being on an Engage order for that shooting attack as 
                  a result of that Vantage Point.`
  }, {
    name: 'Tide of Celerity',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly GREY KNIGHT💀 operative performs a Charge action, it can move an additional ▲ for that action.`
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Only in death does duty end',
    cost: 1,
    description: `Use this Tactical Ploy when a ready friendly GREY KNIGHT💀 operative is incapacitated. That operative is not removed from the killzone until the end of your next
                  activation and does not count as being injured.`
  },{
    name: 'And they shall know no fear',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly GREY KNIGHT💀 operative is activated. Until the end of that operative's activation, you can ignore any or all modifiers to 
                its APL characteristic and it is not injured.`
  }

]

const data = { strategicPloys, tacticalPloys, fireteamArchetypeMap, tacOps: null }

export default data
