import { Ploy } from '../../../types/KillTeam2021';

const strategicPloys: Ploy[] = [
  {
    name: `Malicious Volleys`,
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly ARCANA ASTARTES operative is activated, if it does not perform a Fight action during that activation, it
                  can perform two Shoot actions during that activation if a bolt weapon is selected for each of those shooting attacks. A bolt weapon is a ranged weapon that includes
                  'bolt' in its name, e.g. inferno boltgun.`
  }, {
    name: 'Sorcerous Automata',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly ARCANA ASTARTES operative (excluding an ASPIRING SORCERER operative) is activated while Visible to and within
                  ■ of a ready friendly ARCANA ASTARTES ASPIRING SORCERER operative, add 1 to its APL.`
  }, {
    name: 'Inhuman Savagery',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly TZAANGOR operative fights in combat, if it performed a Charge action during that activation, in the Roll Attack
                  Dice step of that combat, if you retain two or more successful hits, you can retain one failed hit as a successful normal hit.`,

  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Treasure Hunter',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly TAZAANGOR operative is activated. During that activation, that operative can perform a mission action or the Pick Up action
                  for one less AP (to a minimum of 0AP).`
  },{
    name: 'Sorcerous Focus',
    cost: 1,
    description: `Use this Tactical Ploy after rolling one D6 to resolve a second psychic power with a friendly ASPIRING SORCERER operative that is not within Engagement Range of
                  enemy operatives. Treat the result of that D6 as a 6.`
  },{
    name: 'Infernal Fusillade',
    cost: 1,
    description: `Use this Tactical Ploy after making a shooting attack with a friendly ARCANA ASTARTES operative (excluding an ASPIRING SORCERER operative) in which the target did 
                  not lose any wounds. Repeat that shooting attack.`,
  }
]

const data = { strategicPloys, tacticalPloys, fireteamArchetypeMap: null, tacOps: null }

export default data
