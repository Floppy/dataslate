import { Archetype, FireteamArchetypes, Ploy, TacOp } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  fireteams: {
    'Kasrkin Kill Team': [Archetype.RECON, Archetype.SECURITY, Archetype.SEEK_AND_DESTROY]
  }
}
// **KASRKIN💀** ⬟ ⬤ ■ ▲

const strategicPloys: Ploy[] = [
  {
    name: 'Strat Ploy 1',
    cost: 1,
    description: ''
  },
  {
    name: 'Strat Ploy 2',
    cost: 1,
    description: ''
  },
  {
    name: 'Strat Ploy 3',
    cost: 1,
    description: ''
  },
  {
    name: 'Strat Ploy 4',
    cost: 1,
    description: ''
  }

]

const tacticalPloys: Ploy[] = [
  {
    name: 'Tac Ploy 1',
    cost: 1,
    description: ''
  },
  {
    name: 'Tac Ploy 2',
    cost: 1,
    description: ''
  },
  {
    name: 'Tac Ploy 3',
    cost: 1,
    description: ''
  },
  {
    name: 'Tac Ploy 4',
    cost: 1,
    description: ''
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
