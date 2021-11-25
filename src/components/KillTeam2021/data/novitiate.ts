import { Archetype, FireteamArchetypes, Ploy, TacOp } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  fireteams: {
    'Novitiate Kill Team': [Archetype.RECON]
  }
}

const strategicPloys: Ploy[] = [
  {
    name: 'Eyes of the Emperor',
    cost: 1,
    description: `Until the end of the Turning Point, remove the Range special rule from autopistols, bolt pistols and plasma pistols that friendly NOVITIATE💀 operatives
                  are equipped with.`
  },
  {
    name: 'Sanctified Rounds',
    cost: 1,
    description: 'Until the end of the Turning Point, add 1 to both Damage characteristics of autoguns and autopistols that friendly NOVITIATE💀 operatives are equipped with.'
  },
  {
    name: 'Aegis of the Emperor',
    cost: 1,
    description: `Until the end of the Turning Point, each time an enemy operative within ⬟ of a friendly NOVITIATE💀 operative performs a psychic action, that enemy 
                  operative suffers 1 mortal wound.`
  },
  {
    name: 'Defenders of the Faith',
    cost: 1,
    description: `At the start of the Firefight phase, one friendly NOVITIATE💀 operative that is within ⬤ of the centre of each objective marker can:
    
- Perform a free **Shoot** action if it has an Engage order.
- Perform a free **Fight** action if it has an Engage order.`
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Glorious Martyrdom',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly NOVITIATE💀 operative is incapacitated. Each enemy operative within ⬤ of and Visible to that operative suffer 1 
                  mortal wound, and you gain D3 Faith points.`
  },
  {
    name: 'Burning Wrath',
    cost: 1,
    description: `Select one friendly **NOVITIATE PURGATUS** operative. Until the end of the turning point, that operative's Ministorum flamer has the following profile:
    
|Name|A|BS|D|
|-|-|-|-|
|Ministorum flamer|5|2+|3/4|
|Special Rules|
|Inferno 2, Rng ⬟, Torrent ⬤|`
  },
  {
    name: 'Righteous Condemnation',
    cost: 1,
    description: `Use this Tactical Ploy after rolling your attack dice for a shooting attack made by a friendly **NOVITIATE CONDEMNOR** operative. You can re-roll any 
                  or all of your attack dice for that shooting attack.`
  },
]

const tacOps: TacOp[] = [
  {
    id: 1,
    name: 'Purge With Flame',
    description: `You can reveal this Tac Op in the Target Reveal Step of any Turning Point.  
  - If two or more enemy operatives are incapacitated by attacks made by weapons with the Inferno x special rule, you score 1VP.
  - If an enemy **LEADER** operative is incapacitated by an attack made by a weapon with the Inferno x critical hit rule, you score 1VP`
  }, {
    id: 2,
    name: 'Reconsecrate Ground',
    description: `Reveal this Tac Op in the Target Reveal step of the first Turning Point. Select one objective marker that is not within ⬟ of your drop zone:
  - At the end of any Turning Point, if friendly operatives control that objective marker, you score 1VP.
  - At the end of the battle, if friendly operatives control that objective marker, you score 1VP.`
  }, {
    id: 3,
    name: 'Glory to the Martyrs',
    description: `Reveal this Tac Op when a friendly operative is incapacitated while within ⬤ of the centre of an objective marker.
  - If another friendly operative is incapacitated while within ⬤ of the centre of that objective marker, you score 1VP.
  - If you achieve the first condition in any subsequent Turning Points, you score 1VP.`
  }
]

const data = {
  name: 'Notiviate' as const,
  strategicPloys,
  tacticalPloys,
  archetypes,
  tacOps
}

export default data
