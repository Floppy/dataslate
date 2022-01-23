import { Archetype, FireteamArchetypes, Ploy, TacOp } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  fireteams: {
    'Novitiate Kill Team': [Archetype.SECURITY, Archetype.RECON]
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
  }
]

const tacOps: TacOp[] = [
  {
    id: 1,
    name: 'Purge With Flame',
    description: `You can reveal this Tac Op in the Target Reveal Step of any Turning Point.  
  - If two or more enemy operatives are incapacitated by attacks made by weapons with the Inferno X critical hit rule, you score 1VP.
  - If an enemy **LEADER** operative is incapacitated by an attack made by a weapon with the Inferno X critical hit rule, you score 1VP`
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

const actsOfFaith = {
  name: 'Acts of Faith',
  wahapediaUrl: 'https://wahapedia.ru/kill-team2/kill-teams/novitiate/#Acts-of-Faith',
  description: `Keep a pool of Faith points. At the start of each Turning Point, if there are any friendly NOVITIATE💀 operatives in the kill zone, you gain 3 Faith points. 
In addition, you gain one Faith point at the end of an activation, if any of the following apply:
- During that activation, a friendly NOVITIATE💀 operative with the Combat specialism incapacitated an enemy operative in a combat.
- During that activation, a friendly NOVITIATE💀 operative with the Marksman specialism incapacitated an enemy operative with a shooting attack.
- During that activation, a friendly NOVITIATE💀 operative with the Staunch specialism performed a mission action.
- A friendly NOVITIATE💀 operative with the Scout specialism was activated and finished that activation within ⬟ of the enemy drop zone.

Faith points can be subtracted so that friendly NOVITIATE💀 operatives can perform Acts of Faith listed below. Each Act of Faith will specify when it can be used, 
its effect and how many Faith points you must subtract from your total to use it. If you cannot subtract the required Faith points from your total, you cannot use that Act of Faith.

Unless otherwise specified, only one Act of Faith can be used during each activation (friendly or enemy). For example, a shooting attack is made against a friendly 
NOVITIATE💀 operative. In the Roll Defence Dice step of that shooting attack, that operative's controlling player decides to subtract 2 Faith points to use Divine Shield to 
retain one failed save as a successful normal save. No other Acts of Faith can then be performed during that activation (other than Faithful Blessing).
`,
  acts: [
    {
      name: 'Faithful Blessing',
      description: `When a friendly NOVITIATE💀 operative is fighting in combat or making a shooting attack, or a shooting attack is being made against it, in the Roll 
                    Attack Dice step (for the former) or the Roll Defence Dice step (for the latter) of that combat or shooting attack, re-roll one of your attack or defence
                    dice. This Act of Faith can be used more than once in each activation, and can be used with other Acts of Faith.`,
      cost: '1 Faith Point'
    },
    {
      name: 'Guiding Light',
      description: `When a friendly NOVITIATE💀 operative fights in combat or makes a shooting attack, in the Roll Attack Dice step of that combat 
                    or shooting attack, retain one of your failed hits as a successful normal hit.`,
      cost: '2 Faith Points'
    },
    {
      name: 'Vengeful Strike',
      description: `When a friendly NOVITIATE💀 operative fights in combat or makes a shooting attack, in the Roll Attack Dice step of that combat or 
                    shooting attack, retain one of your successful normal hits as a critical hit instead.`,
      cost: '3 Faith Points'
    },
    {
      name: 'Divine Shield',
      description: `When a shooting attack is made against a friendly NOVITIATE💀 operative, in the Roll Defence Dice step of that shooting attack, 
                    retain one of your failed saves as a successful normal save.`,
      cost: '2 Faith Points'
    },
    {
      name: 'Armour of Contempt',
      description: `When a shooting attack is made against a friendly NOVITIATE💀 operative, in the Roll Defence Dice step of that shooting attack,
                    retain one of your successful normal saves as a critical save instead.`,
      cost: '2 Faith Points'
    },
    {
      name: 'Emperor\'s Protection',
      description: `When a friendly NOVITIATE💀 operative suffers a mortal wound, ignore that mortal wound. This Act of Faith can be used more than 
                    once in each activation.`,
      cost: '1 Faith Point'
    },
    {
      name: 'Blessed Rejuvenation',
      description: `When a friendly NOVITIATE💀 operative is activated, it regains D3 lost wounds. This Act of Faith can be used a maximum of two
                    times in each activation.`,
      cost: '2 Faith Points'
    },
    {
      name: 'Blinding Aura',
      description: `When an enemy operative performs a shooting attack, select one friendly NOVITIATE💀 operative. Until the end of that activation, while 
                    that friendly operative is more than ⬤ from that enemy operative:
- That friendly operative is treated as being in Cover.
- While that friendly operative has a Conceal order, it is always treated as having a Conceal order, regardless of any other rules (e.g. Vantage Point).`,
      cost: '2 Faith Points'
    }
  ]
}

const data = {
  name: 'Novitiate' as const,
  strategicPloys,
  tacticalPloys,
  archetypes,
  tacOps,
  actsOfFaith
}

export default data
