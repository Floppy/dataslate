import _ from 'lodash'
import * as XPath from 'xpath-ts'
import { Roster, Operative, Weapon, Equipment, Action, PsychicPower } from '../../types/KillTeam2021'
import { Ability } from '../../types/Ability'

// useNamespaces is NOT a React hook, so:
// eslint-disable-next-line
const xpSelect = XPath.useNamespaces({ bs: 'http://www.battlescribe.net/schema/rosterSchema' })

const stat = (name: string, model: Element): number => {
  const node = xpSelect(`bs:profiles/bs:profile[@typeName='Operative']//bs:characteristic[@name='${name}']/text()`, model, true)
  if (node !== null) {
    return parseInt(node.toString())
  } else { return 0 }
}

const parseWeapon = (weapon: Node): Weapon => {
  return {
    id: xpSelect('string(@id)', weapon, true).toString(),
    name: xpSelect('string(@name)', weapon, true).toString(),
    melee: xpSelect('string(@name)', weapon, true).toString().startsWith('⚔'),
    attacks: parseInt(xpSelect(".//bs:characteristic[@name='A']/text()", weapon, true).toString()),
    hit: parseInt(xpSelect(".//bs:characteristic[@name='WS/BS']/text()", weapon, true).toString()),
    damage: parseInt(xpSelect(".//bs:characteristic[@name='D']/text()", weapon, true).toString().split('/')[0]),
    specialRules: (xpSelect(".//bs:characteristic[@name='SR']/text()", weapon, true) ?? '-').toString(),
    criticalDamage: parseInt(xpSelect(".//bs:characteristic[@name='D']/text()", weapon, true).toString().split('/')[1]),
    criticalRules: (xpSelect(".//bs:characteristic[@name='!']/text()", weapon, true) ?? '-').toString()
  }
}

const parseAbility = (ability: Node): Ability => {
  return {
    id: xpSelect('string(@id)', ability, true).toString(),
    name: xpSelect('string(@name)', ability, true).toString(),
    description: (xpSelect(".//bs:characteristic[@name='Ability']/text()", ability, true) ?? '-').toString(),
    phases: []
  }
}

const parseBoonOfTzeentch = (boon: Node): Ability => {
  return {
    id: xpSelect('string(@id)', boon, true).toString(),
    name: xpSelect('string(@name)', boon).toString(),
    description: xpSelect('string(.//bs:profiles/bs:profile/bs:characteristics/bs:characteristic)', boon).toString(),
    phases: []
  }
}

const parsePsychicPower = (power: Node): PsychicPower => {
  const name = xpSelect('string(@name)', power, true).toString()
  const weapons = (xpSelect("..//bs:profile[@typeName='Weapons']", power) as Node[]).map(parseWeapon)
    .filter(weapon => weapon.name.toUpperCase().includes(name.toUpperCase()))

  const weapon = weapons.length > 0 ? weapons[0] : null

  return {
    id: xpSelect('string(@id)', power, true).toString(),
    name,
    description: (xpSelect(".//bs:characteristic[@name='Effect']/text()", power, true) ?? '-').toString(),
    weapon: weapon
  }
}

const parseAction = (action: Node, psychicDiscipline: string|null, psychicPowers: string|null): Action => {
  const name = xpSelect('string(@name)', action, true).toString() ?? ''
  let description = (xpSelect(".//bs:characteristic[@name='Unique Action']/text()", action, true) ?? '-').toString()

  if (psychicDiscipline !== null && name.toLowerCase().includes('psychic power')) {
    description += `
    
**Psychic Discipline**:` + psychicDiscipline
  }

  if (psychicPowers !== null && name.toLowerCase().includes('psychic power')) {
    description += `   

**Available Powers**: ` + psychicPowers
  }

  return {
    id: xpSelect('string(@id)', action, true).toString(),
    name: name,
    description: description,
    cost: 1
  }
}

const parseEquipment = (equipment: Node): Equipment => {
  const description = xpSelect(".//bs:characteristic[@name='Equipment']/text()", equipment, true)
  return {
    id: xpSelect('string(@entryId)', equipment, true).toString(),
    name: xpSelect('string(@name)', equipment, true).toString(),
    cost: parseInt(xpSelect('string(.//bs:cost/@value)', equipment, true).toString()),
    description: description?.toString()
  }
}

const parseRule = (rule: Node): Ability => {
  return {
    id: xpSelect('string(@id)', rule, true).toString(),
    name: xpSelect('string(@name)', rule, true).toString(),
    description: (xpSelect('.//bs:description/text()', rule, true) ?? '-').toString(),
    phases: []
  }
}

const factionKeywords = [
  'Brood Coven',
  'Cadre Mercenary',
  'Chaos Daemons',
  'Commorrite',
  'Corsair Voidscarred',
  'Craftworld',
  'Death Guard',
  'Ecclesiarchy',
  'Forge World',
  'Greenskin',
  'Grey Knight',
  'Hive Fleet',
  'Hunter Cadre',
  'Hunter Clade',
  'Imperial Guard',
  'Kommando',
  'Legionary',
  'Novitiate',
  'Pathfinder',
  'Space Marine',
  'Talons of the Emperor',
  'Thousand Sons',
  'Tomb World',
  'Traitor Space Marine',
  'Troupe',
  'Veteran Guardsman',
  'Voiddancer Troupe',
  'Warpcoven',
  'Wyrmblade'
]

const parseOperative = (model: Element): Operative => {
  const allKeywords = (xpSelect(".//bs:categories/bs:category[@primary='false']/@name", model) as Node[]).map((x) => (x.textContent ?? '').replace('💀', ''))
  const faction = _.intersection(allKeywords, factionKeywords).pop() ?? allKeywords.find((k) => (k === k.toUpperCase())) ?? null
  const keywords = _.remove(allKeywords, (x) => (x !== faction))

  const psychicDiscipline = xpSelect("string(.//bs:selection[./bs:selections/bs:selection/bs:profiles/bs:profile/@typeName='Psychic Power']/@name)", model, true).toString()
  const psychicPowers = (xpSelect(".//bs:profile[@typeName='Psychic Power']/@name", model) as Node[]).map((x) => x.nodeValue).join(', ')

  const actions = (xpSelect(".//bs:profile[@typeName='Unique Actions']", model) as Node[]).map((x) => parseAction(x, psychicDiscipline, psychicPowers))
  const abilities = (xpSelect(".//bs:profile[@typeName='Abilities']", model) as Node[]).map(parseAbility)

  const boonOfTzeentch = xpSelect(".//bs:selection[./bs:profiles/bs:profile/@typeName='Boon of Tzeentch']", model, true) as Node

  if (boonOfTzeentch !== undefined) {
    abilities.push(parseBoonOfTzeentch(boonOfTzeentch))
  }

  const details = {
    id: xpSelect('string(@id)', model, true).toString(),
    datacard: xpSelect('string(@name)', model, true).toString(),
    name: xpSelect('string(@customName)', model, true).toString(),
    stats: {
      movement: stat('M', model),
      actionPointLimit: stat('APL', model),
      groupActivation: stat('GA', model),
      defence: stat('DF', model),
      save: stat('SV', model),
      invulnerable_save: null,
      wounds: stat('W', model)
    },
    weapons: (xpSelect(".//bs:profile[@typeName='Weapons']", model) as Node[]).map(parseWeapon),
    equipment: (xpSelect(".//bs:selection[(@type='upgrade') and (.//bs:cost/@value!=\"0.0\")]", model) as Node[]).map(parseEquipment),
    abilities: abilities,
    actions: actions,
    rules: (xpSelect('.//bs:rules/bs:rule', model) as Node[]).map(parseRule),
    leader: (xpSelect("string(.//bs:categories/bs:category[@primary='true']/@name)", model, true).toString() === 'Leader'),
    psychicDiscipline: psychicDiscipline,
    psychicPowers: psychicPowers,
    keywords,
    faction
  }
  return details
}

export const parseBattlescribeXML = (doc: Document): Roster => {
  const operatives = []
  const name = xpSelect('string(/bs:roster/@name)', doc, true).toString()
  const faction = xpSelect('string(//bs:force/@catalogueName)', doc, true).toString()
  for (const model of xpSelect('//bs:selection[@type=\'model\']', doc) as Element[]) {
    operatives.push(parseOperative(model))
  }

  const fireteams = (xpSelect('//bs:force/@name', doc) as Node[]).map((node) => { return node.nodeValue }) as string[]

  const psychicPowers = [] as PsychicPower[]

  (xpSelect(".//bs:profile[@typeName='Psychic Power']", doc) as Node[]).map(parsePsychicPower).forEach((power: PsychicPower) => {
    if (psychicPowers.find(p => p.name === power.name) === undefined) {
      psychicPowers.push(power)
    }
  })

  // Assign unique operative names if they don't have them
  const romanNumerals = [
    '', 'Ⅱ', 'Ⅲ', 'Ⅳ', 'Ⅴ',
    'Ⅵ', 'Ⅶ', 'Ⅷ', 'Ⅸ', 'Ⅹ',
    'ⅩⅠ', 'ⅩⅡ', 'ⅩⅢ', 'ⅩⅣ', 'ⅩⅤ',
    'ⅩⅥ', 'ⅩⅦ', 'ⅩⅧ', 'ⅩⅨ', 'ⅩⅩ'
  ]
  const counts: { [key: string]: number } = {}
  for (const o of operatives) {
    if (o.name === '') {
      if (counts[o.datacard] === undefined) {
        counts[o.datacard] = 0
      }
      o.name = o.datacard + ' ' + romanNumerals[counts[o.datacard]++]
    }
  }
  return {
    system: 'KillTeam2021',
    name,
    faction,
    operatives,
    psychicPowers,
    fireteams
  }
}
