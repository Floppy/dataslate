import { Archetype, FireteamArchetypes, Ploy, TacOp } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  fireteams: {
    'Kasrkin Kill Team': [Archetype.RECON, Archetype.SECURITY, Archetype.SEEK_AND_DESTROY]
  }
}
// **KASRKIN💀** ⬟ ⬤ ■ ▲

const strategicPloys: Ploy[] = [
  {
    name: 'Elimination Pattern',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly **KASRKIN💀** operative makes a shooting
        attack with a hot-shot weapon (excluding the Snipe profile) against a target that is not in Cover, that weapon
        gains the P1 critical hit rule for that shooting attack. A hot-shot weapon is a ranged weapon that includes
        'hot-shot' in its name, e.g. hot-shot lasgun etc.`
  },
  {
    name: 'Safeguard',
    cost: 1,
    description: `Until the end of the Turning Point, each time a shooting attack is made against a friendly **KASRKIN💀**
    operative, if it is in Cover, you can re-roll any or all of your defence dice results of 1.`
  },
  {
    name: 'Clearance Sweep',
    cost: 1,
    description: `Place on of your Clearance Sweep tokens anywhere in the killzone. Each time a shooting attack is made
        by a friendly **KASRKIN💀** operative within 2⬤ horizontally of that token against a target within 2⬤
        horizontally of that token, in the Roll Attack Dice step of that shooting attack, you can spend 1 Elite point
        (pg 37) for free during that shooting attack (even if you don't have any in your pool). At the end of the Turning
        Point, remove that token.`
  },
  {
    name: 'Reposition',
    cost: 1,
    description: `Select one friendly **KASRKIN💀** operative that is more than ■ from enemy operatives. That operative,
        and all other friendly **KASRKIN💀** operatives within ■ of that operative and more than ■ from enemy operatives,
        can immediately perform a free **Dash** action. You cannot use this Strategic Ploy during the first Turning Point.`
  }

]

const tacticalPloys: Ploy[] = [
  {
    name: 'Cover Retreat',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly **KASRKIN💀** operative is activated. Until the end of that
        activation, while that operative is Visible to and within ⬟ of another friendly **KASRKIN💀** operative that
        is not within Engagement Range of an enemy operative, that activated **KASRKIN💀** operative can perform the
        **Fall Back** action for one less action point (to a minimum of 0AP).`
  },
  {
    name: 'Neutralise Target',
    cost: 1,
    description: `Use this Tactical Ploy after rolling attack dice for a shooting attack by a friendly **KASRKIN💀**
        operative. If the target of that attack is not ready and either has an Engage order or is not in Cover, you can
        re-roll any or all of your attack dice for that shooting.`
  },
  {
    name: 'Seize the Initiative',
    cost: 1,
    description: 'Use this Tactical Ploy after rolling off to determine initiative. You can re-roll your dice.'
  },
  {
    name: 'For Cadia!',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly **KASRKIN💀** operative is activated. Until the end of the
        Turning Point:
* Add 1 to both Damage characteristics of a gun butt that operative is equipped with (if any).
* Each time that operative would lose a wound, roll one D6: on a 5+, that would is not lost.`
  }
]

const tacOps: TacOp[] = [
  {
    id: 1,
    name: 'Vital Objective',
    description: `Reveal this Tac Op in the Target Reveal step of any Turning Point after the first. If this Tac Op is
    revealed, at the end of the Target Reveal step of each Turning Point, select one objective marker that friendly 
    operatives do not control to be your Vital objective marker until the start of the next Turning Point.
* At the end of any Turning Point, if friendly operatives control your Vital objective marker, you score 1VP.
* If you achieve the first condition at the end of any subsequent Turning Points, you score 1VP.`
  },
  {
    id: 2,
    name: 'Stand Fast',
    description: `You can reveal this Tac Op in the Target Reveal step of any Turning Point.
* At the end of any Turning Point, if friendly operatives control two or more objective markers, and friendly operatives
control more objective markers than enemy operatives control, you score 1VP.
* If you achieve the first condition at the end of any subsequent Turning Points, you score 1VP.`
  },
  {
    id: 3,
    name: 'Secure Zone',
    description: `You can reveal this Tac Op in the Target Reveal step of any Turning Point. If this Tac Op is revealed,
    at the end of the Target Reveal step of each Turning Point, place one of your Secure Zone tokens anywhere in the 
    killzone that is more than ⬟ from your drop zone and within 2⬤ horizontally of an enemy operative. At the start
    of the next Turning Point, remove that token.
* At the end of any Turning Point, if a friendly operative is withing 2⬤ horizontally of your Secure Zone token and
no enemy operatives are within 2⬤ horizontally of your Secure Zone token, you score 1VP.
* If you achieve the first condition at the end of any subsequent Turning Points, you score 1VP.`
  }
]

const data = {
  name: 'Kasrkin' as const,
  strategicPloys,
  tacticalPloys,
  archetypes,
  tacOps
}

export default data
