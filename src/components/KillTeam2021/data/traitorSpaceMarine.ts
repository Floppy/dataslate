import { Ploy } from '../../../types/KillTeam2021';

const strategicPloys: Ploy[] = [
  {
    name: `Malicious Volleys`,
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly HERETIC ASTARTES operative is activated, if it does not perform a Fight action during that activation, it
                  can perform two Shoot actions during that activation if a bolt weapon is selected for each of those shooting attacks. A bolt weapon is a ranged weapon that includes
                  'bolt' in its name, e.g. boltgun, heavy bolter etc.`
  }, {
    name: 'Hateful Assault',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly HERETIC ASTARTES operative is activated, if it does not perform a Shoot action during that activation, it can
                  perform two Fight actions during that activation.`
  }, {
    name: 'Let the Galaxy Burn!',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly HERETIC ASTARTES operative is activated, once during that activation, in the Roll Attack Dice step of a combat
                  or shooting attack, if it is targeting the closest valid target, you can retain one of your attack dice results of 5+ that is a successful hit as a critical hit (if you
                  could already retain one of your results of 5+, you can retain one of your results of 4+ instead).`,

  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Veteran of the Long War',
    cost: 1,
    description: `Use this Tactical Ploy in a friendly HERETIC ASTARTES operative's activation, after it fights in combat or makes a shooting attack. If the target did not lose any
                  wounds as a result of that combat or shooting attack, repeat that combat or shooting attack.`
  },{
    name: 'Strike from Within',
    cost: 1,
    description: `Use this Tactical Ploy in the Set Up Operatives step of the mission sequence. Select one friendly CHAOS CULTIST operative. That operative can be set up with a Conceal
                  order anywhere in the killzone that is within ▲ of Heavy terrain and more than ⬟ from enemy operatives and the enemy drop zone.`
  },{
    name: 'Warp Infused',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly HERETIC ASTARTES operative is activated. Until the end of that operative's activation, you can ignore any or all modifiers to 
                  its APL characteristic and it is not injured.`,
  }
]

const data = { strategicPloys, tacticalPloys, fireteamArchetypeMap: null, tacOps: null }

export default data
