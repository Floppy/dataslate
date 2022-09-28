import { Archetype, FireteamArchetypes, Ploy, TacOp } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  fireteams: {
    // Initial BattleScribe release has 'Kill Team' for the force name, coding around this in case it changes while checking with Mad Spy
    'Phobos Strike Team Kill Team': [Archetype.INFILTRATION, Archetype.RECON, Archetype.SEEK_AND_DESTROY],
    'Kill Team': [Archetype.INFILTRATION, Archetype.RECON, Archetype.SEEK_AND_DESTROY]
  }
}

const strategicPloys: Ploy[] = [
  {
    name: 'Bolter Discipline',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly **PHOBOS STRIKE TEAM💀** operative is activated, if it does not perform a **Fight** action
                  during that activation, it can perform two **Shoot** actions during that activation if a bolt weapon is selected for each of those shooting attacks. A bolt weapon is a
                  ranged weapon that includes 'bolt' in its name, e.g. bolt carbine, special issue bolt pistol etc.`
  }, {
    name: 'Shock Assault',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly **PHOBOS STRIKE TEAM💀** operative is activated, if it does not perform a **Shoot** action
                  during that activation, it can perform two **Fight** actions during that activation.`
  }, {
    name: 'Vanguard',
    cost: 1,
    description: `Until the end of the Turning Point, while a friendly **PHOBOS STRIKE TEAM💀** operative is activated, during that activation:
  * It can ignore the first distance of ⬤ it travels for a climb, drop or traverse.
  * It automatically passes jump tests.
  * Add ▲ to its Movement characteristic.`
  }, {
    name: 'And They Shall Know No Fear',
    cost: 1,
    description: `Until the end of the Turning Point:
  * You can ignore any or all modifiers to the APL of friendly **PHOBOS STRIKE TEAM💀** operatives.
  * Friendly **PHOBOS STRIKE TEAM💀** operatives are not injured.`
  }, {
    name: 'Deadly Shots',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly **PHOBOS STRIKE TEAM** operative makes a 
    shooting attack, if it hasn’t yet performed a **Charge**, **Fall Back** or **Normal Move** action during this 
    Turning Point, bolt weapons it’s equipped with gain the P1 critical hit rule for that shooting attack. This has 
    no effect on weapons that already have the APx special rule or Px critical hit rule respectively.`
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Stealth Assault',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly **PHOBOS STRIKE TEAM💀** operative with a Conceal order that is not within Engagement Range of an
    enemy is activated.
  * That operative cannot make a shooting attack during that activation.
  * The first time that operative performs a **Fight** action during that activation, in the Resolve Successful Hits step of that combat, the first time
  you resolve one of your successful hits, you can immediately resolve another of your successful hits.
   
  **Designer's Note:** Unless the operative can perform a **Charge** action while it has a Conceal order (e.g. The Assassin Battle Honour), when it is activated,
  you will need to change its order to Engage to use this Tactical Ploy.`
  },
  {
    name: 'Transhuman Physiology',
    cost: 1,
    description: `Use this Tactical Ploy in the Roll Defence Dice step of a shooting attack, after rolling defence dice for a friendly **PHOBOS STRIKE TEAM💀**
     operative. You can retain one of your successful normal saves as a critical save instead.`
  }, {
    name: 'One Step Ahead',
    cost: 1,
    description: `Use this Tactical Ploy at the end of the Select a Kill Team step of the mission sequence, after kill teams have been revealed. You can 
    remove one friendly **PHOBOS STRIKE TEAM💀** operative from your kill team and add a different **PHOBOS STRIKE TEAM💀** operative to your kill team
    (adhering to the requirements of selecting your kill team). If both players have this or a similar ability, the Defender resolves this ability first.`
  }, {
    name: 'Elite Reconnaissance',
    cost: 1,
    description: `Use this Tactical Ploy at the end of the Scouting step of the mission sequence. Select one of the following (if both players have this or a
    similar ability, the Defender resolves this ability first):
  * You can redeploy up to two friendly **PHOBOS STRIKE TEAM💀** operatives that are wholly within your drop zone as if it was the Set Up Operatives step of 
  the mission sequence.
  * Select and resolve an additional scouting option. It must be a different option to your original selection, and initiative is still determined by your original
  selection.`
  }
]

const tacOps: TacOp[] = [
  {
    id: 1,
    name: 'Shock and Awe',
    description: `You can reveal this Tac Op in the Target Reveal step of any Turning Point.
* At the end of any Turning Point, if friendly operatives control one or more objective markers 
that were controlled by enemy operatives at the start of the Turning Point, you score 1VP.
* If you achieve the first condition in any subsequent Turning Points, you score 1VP.`
  },
  {
    id: 2,
    name: 'Saboteurs',
    description: `Reveal this Tac Op in the Target Reveal step of the first Turning Point. Starting with your oponent, 
    alternate placing one of your Saboteur tokens in the killzone until three have been placed. Each time a player places a 
    Saboteur token, it must be toucing a terrain feature, more than ■ from the killzone edges, more than ⬟ from your 
    drop zone and each of your other Saboteur tokens, and it must not be on a Vantage Point.
* If two or more of your Saboteur tokens are removed, you score 1VP.
* If three of your Saboteur tokens are removed, you score 1VP.

Friendly operatives perform the Saboteurs mission action.`
  },
  {
    id: 3,
    name: 'Guerrilla Tactics',
    description: `You can reveal this Tac Op in the Reveal Tac Ops step of any Turning Point.
* At the end of any Turning Point, if more enemy operatives were incapacitated than friendly operatives during that Turning Point, 
and more than half of your operatives have a Conceal order, you score 1VP.
* If you achieve the first condition in any subsequent Turning Points, you score 1VP.`
  }
]

const data = {
  name: 'Phobos Strike Team' as const,
  strategicPloys,
  tacticalPloys,
  archetypes,
  tacOps
}

export default data
