import { Archetype, FireteamArchetypes, Ploy } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  'Kabalite Fire Team': [Archetype.SECURITY, Archetype.RECON],
  'Wych Fire Team': [Archetype.SEEK_AND_DESTROY, Archetype.RECON]
}

const strategicPloys: Ploy[] = [
  {
    name: 'Fleet',
    cost: 1,
    description: 'Until the end of the Turning Point, each time a friendly COMMORRITE💀 operative performs a Fall Back or Normal Move action, it can perform a free Dash action with that action.'
  }, {
    name: 'Agile Gladiators',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly WYCH operative fights in combat, in the Resolve Successful Hits step of that combat, each time your opponent strikes
                  with a normal hit, you can roll one D6: on a 4+, treat that strike as a parry instead. In addition, each time a friendly WYCH operative performs any kind of move:`,
    options: [
        `It can move around, across and over other operatives (and their bases) as if they were not there, but must finish the move following all requirements specified by that move, and 
        cannot finish its move on top of other operatives (or their bases).`,
        'It can ignore the first ⬤ distance it travels when climbing, traversing and dropping.',
        'It automatically passes jump tests.'
    ]
  }, {
    name: 'Prey On The Weak',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly COMMORRITE💀 operative fights in combat or makes a shooting attack, in the Roll Attack Dice step of that combat or
                  shooting attack, if the target has half or fewer of its wounds remaining, you can re-roll up to two of your attack dice.`
  }, {
    name: 'Inured to Suffering',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly COMMORRITE💀 operative would lose a wound, roll one D6: on a 6+, that wound is not lost. You can only use this 
                  Strategic Ploy if one or more operatives have been incapacitated.`
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Power From Pain',
    cost: 1,
    description: `Use this Tactical Ploy when an enemy operative is incapacitated. Before it is removed from the killzone, select on ready friendly COMMORRITE💀 operative that enemy operative
                  is within ⬟ of and Visible to. After the current activation:`,
    options: [
      'You can activate that ready friendly operative.',
      'Add 1 to its APL',
      'During its next activation, it can perform Shoot or Fight actions twice, instead of once.'
    ]
  }, {
    name: 'No Escape',
    cost: 1,
    description: `Use this Tactical Ploy when a Fall Back action is declared for an enemy operative within Engagement Range of a friendly WYCH operative. Roll one D6, subtracting 1 if that enemy
                  operative has a higher Wounds characteristic than that WYCH operative, and adding 1 if that enemy operative is injured. On a 3+, that enemy operative cannot Fall Back, but the
                  action points subtracted are not refunded.`
  }
]

const data = { strategicPloys, tacticalPloys, archetypes, tacOps: null }

export default data
