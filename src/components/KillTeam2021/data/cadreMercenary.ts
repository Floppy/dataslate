import { Archetype, FireteamArchetypes, Ploy } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  fireteams: { 'Cadre Mercenary Kill Team': [Archetype.SEEK_AND_DESTROY, Archetype.INFILTRATION, Archetype.RECON] }
}

const strategicPloys: Ploy[] = [
  {
    name: 'Hunting call',
    cost: 1,
    description: 'Until the end of the Turning Point, each time a friendly CADRE MERCENARY💀 operative performs a **Fight** action, in the Roll Attack Dice step of that combat, you can re-roll one of your attack dice.'
  }, {
    name: 'Patient stalkers',
    cost: 1,
    description: 'Until the end of the Turning Point, friendly CADRE MERCENARY💀 operatives can perform a **Charge** action while they have a Conceal order.'
  }, {
    name: 'Fieldcraft',
    cost: 1,
    description: 'Until the end of the Turning Point, friendly KROOT CARNIVORE operatives can perform the following action:',
    action: {
      id: '01b86b94-ef5f-4b45-99fb-79bb06ae13c1',
      name: 'Fieldcraft',
      cost: 1,
      description: 'Change this operative\'s order.'
    }
  }, {
    name: 'Perfect Ambush',
    cost: 1,
    description: 'Use this Strategic Ploy in the first Turning Point. Until the end of the Turning Point, each time a friendly CADRE MERCENARY💀 operative is activated, you can change its order.'
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'A gory feast',
    cost: 1,
    description: 'Use this Tactical Ploy when a friendly CADRE MERCENARY💀 operative incapacitates an enemy operative in combat. Add 1 to that friendly operative\'s APL and it regains up to D6 lost wounds.'
  }, {
    name: 'Brute Strength',
    cost: 1,
    description: `Use this Tactical Ploy in the Firefight phase, when a friendly KROOTOX operative performs a **Normal Move**, **Dash**, **Fall Back** or **Charge** action. Until the end of that activation:
  - That operative can move through Light parts of a terrain feature as if they were not there.
  - That operative can move around, across and over other operatives (and their bases) as if they were not there,
     but must finish the move following all requirements specified by that move, and cannot finish its move on top of other operatives (or their bases).`
  }
]

const data = {
  name: 'Cadre Mercenary' as const,
  strategicPloys,
  tacticalPloys,
  archetypes
}

export default data
