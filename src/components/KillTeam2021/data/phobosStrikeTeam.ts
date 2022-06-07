import {Archetype, FireteamArchetypes, Ploy, TacOp} from '../../../types/KillTeam2021'

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
    description: `Until the end of the Turning Point, each time a friendly SPACE MARINE💀 operative (excluding a SCOUT operative) is activated, if it does not perform a **Fight** action
                  during that activation, it can perform two **Shoot** actions during that activation if a bolt weapon is selected for each of those shooting attacks. A bolt weapon is a
                  ranged weapon that includes 'bolt' in its name, e.g. boltgun, heavy bolter etc. In the case of the infernus heavy bolter, it must be the heavy bolter profile that
                  is selected.`
  }, {
    name: 'Shock Assault',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly SPACE MARINE💀 operative (excluding a SCOUT operative) is activated, if it does not perform a **Shoot** action
                  during that activation, it can perform two **Fight** actions during that activation.`
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
  }, {
    name: 'Only in death does duty end',
    cost: 1,
    description: `Use this Tactical Ploy when a ready friendly SPACE MARINE💀 operative is incapacitated. That operative is not removed from the killzone until the end of your next 
                activation or the end of the battle (whichever comes first) and does not count as being injured.`
  }, {
    name: 'And they shall know no fear',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly SPACE MARINE💀 operative is activated. Until the end of that operative's activation, you can ignore any or all modifiers to
                its APL characteristic and it is not injured.`
  }, {
    name: 'Omni-Scrambler',
    cost: 1,
    description: `Use this Tactical Ploy at the start of the Firefight phase. Select one enemy operative Visible to and within ⬟ of a friendly INFILTRATOR operative. Until the end
                  of the Turning Point that enemy operative cannot be activated until another enemy operative has been activated (unless it is the only remaining enemy operative).`
  }, {
    name: 'Multi-Spectrum Array',
    cost: 1,
    description: 'Use this Tactical Ploy when a friendly INCURSOR operative performs a **Shoot** action. For that action\'s shooting attack, enemy operatives are not Obscured.'
  }, {
    name: 'Terror Troop',
    cost: 1,
    description: `Use this Tactical Ploy during a friendly REIVER operative's activation. Until the start of the next Turning Point:
  - Each time an enemy operative would perform a mission action or the Pick Up action, if this friendly REIVER operative is within SQUARE of that enemy operative, one additional
        action point must be subtracted to perform that action.
  - When determining control of an objective marker that friendly REIVER operative is within range of, treat enemy operatives total APL as being 1 less. Note that this is not a modifier.`
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
