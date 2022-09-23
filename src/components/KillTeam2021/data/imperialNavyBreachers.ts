import {Archetype, FireteamArchetypes, Ploy, TacOp} from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  fireteams: {
    'Imperial Navy Breacher Kill Team': [Archetype.SECURITY, Archetype.SEEK_AND_DESTROY]
  }
}

// **IMPERIAL NAVY BREACHER💀**  ⬟ ⬤ ■ ▲

const strategicPloys: Ploy[] = [
  {
    name: 'Attack Order',
    cost: 1,
    description: `Place one of your Attack Order tokens anywhere in the killzone. Each time a friendly
    **IMPERIAL NAVY BREACHER💀** operative fights in combat or makes a shooting attack while within ■ of that token,
    in the Roll Attack Dice step of that combat or shooting attack, you can re-roll any or all of your attack dice 
    results of one result (e.g. results of 2). At the end of the Turning Point, remove that Attack Order token. You
    cannot use this Strategic Ploy in the same Turning Point in which you use the Defence Order Strategic Ploy.`
  },
  {
    name: 'Defence Order',
    cost: 1,
    description: `Place one of your Defence Order tokens anywhere in the killzone. Each time a shooting attack is made 
    against a friendly **IMPERIAL NAVY BREACHER💀** operative that is within ■ of that token, in the Roll Defence Dice 
    step of that shooting attack, you can re-roll any or all of your defence dice results of one result (e.g. results 
    of 2). A the end of the Turning Point, remove that Defence Order token. You cannot use this Strategic Ploy in 
    the same Turning Point in which you use the Attack Order Strategic Ploy.`
  },
  {
    name: 'Close Assault',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly **IMPERIAL NAVY BREACHER💀** operative fights
    in combat or makes a shooting attack against a target within ■ of it, in the Roll Attack Dice step of that combat or 
    shooting attack, if you retain two or more successful hits, you can retain one of your failed hits as a successful 
    normal hit instead.`
  },
  {
    name: 'Brace for Counter-Attack',
    cost: 1,
    description: `Until the end of the Turning Point, each time an enemy operative fights in combat or makes a shooting
    attack against a friendly **IMPERIAL NAVY BREACHER💀** operative that has not performed a **Charge**, **Fall Back**,
    or **Normal Move** action during this Turning Point, subtract 1 from both Damage characteristics of weapons that 
    enemy operative is equipped with for that combat or shooting attack (to a minimum of 2).`
  }

]


const tacticalPloys: Ploy[] = [
  {
    name: 'Overwhelm Target',
    cost: 1,
    description: `Use this Tactical Ploy when you use the Breach and Clear ability (pg 37). Select one of those 
    friendly **IMPERIAL NAVY BREACHER💀** operatives. Add 1 to its APL.`
  },
  {
    name: 'Blitz',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly **IMPERIAL NAVY BREACHER💀** operative performs a **Fight** 
    or **Shoot** action against a target within ⬟ of it. In the Roll Attack Dice step of that combat or shooting 
    attack, before rolling your attack dice:
* If it is the first friendly operative to be activated this Turning Point, you can retain one attack dice as a critical
hit without rolling it.
* If it is the first friendly operative to perform either of those actions this Turning Point, you can retain one attack
dice as a successful normal hit without rolling it.`
  },
  {
    name: 'Lock It Down',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly **IMPERIAL NAVY BREACHER💀** operative is activated. Select 
    one objective marker. Until the end of the battle, when determining control of that objective marker, treat that
    operative's APL as being 1 higher. Note that this is not a modifier. In narrative play, this is cumulative with
    the Focused Battle Honor (see the Kill Team Core Book). You can use this Tactical Ploy for each friendly operative
    once.`
  },
  {
    name: 'Calm Head',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly **IMPERIAL NAVY BREACHER💀** operative is activated. Until 
    the end of the battle, you can ignore any or all modifiers to that operative's Movement characteristic and to the
    Ballistic Skill and Weapon Skill characteristics of the weapons it is equipped with.`
  }
]

const tacOps: TacOp[] = [
  {
    id: 1,
    name: 'Storm Target',
    description: `Reveal this Tac Op in the Target Reveal step of the first Turning Point. Your opponent selects
    one objective marker. It cannot be an objective marker that can be permanently removed from the killzone, but
    it can be an objective marker that can be carried.
* At the end of any Turning Point, if friendly operatives are controlling that objective marker, you score 1VP.
* At the end of the battle, if friendly operatives are controlling that objective marker, you score 1VP.`
  },
  {
    id: 2,
    name: 'Into the Beach',
    description: `You can reveal this Tac Op at the end of the fourth Turning Point.
* If one or more friendly **IMPERIAL NAVY BREACHER💀** operatives (excluding **NAVIS GHEISTSKULL** and **NAVIS C.A.T. UNIT**
  operatives) are within ⬟ of your opponent's killzone edge, you can 1VP.
* If two or more friendly **IMPERIAL NAVY BREACHER💀** operatives (excluding **NAVIS GHEISTSKULL** and **NAVIS C.A.T. UNIT**
  operatives) are within ⬟ of your opponent's killzone edge, you can 1VP.`
  },
  {
    id: 3,
    name: 'Counteract',
    description: `You can reveal this Tac Op in the Target Reveal step of any Turning Point.
* If you use the Breach and Clear ability (pg 37), and during that Group Activation, one friendly operative incapacitates
an enemy operative, and the other friendly operative incapacitates an enemy operative or controls an objective marker
at the end of that Group Activation that friendly operatives did not control at the start of it, you score 1VP.
* If you achieve the first condition in any subsequent Turning Points, you score 1VP.`
  }
]

const data = {
  name: 'Imperial Navy Breacher' as const,
  strategicPloys,
  tacticalPloys,
  archetypes,
  tacOps
}

export default data
