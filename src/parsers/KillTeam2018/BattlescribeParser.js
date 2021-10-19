import { v4 as uuidv4 } from 'uuid'
import _ from 'lodash'
import hash from 'node-object-hash'
import * as XPath from 'xpath-ts'
import { parseAdditionalAttacks, calculatePhases, invulnerableSave } from './Abilities'

// useNamespaces is NOT a React hook, so:
// eslint-disable-next-line
const xpath = XPath.useNamespaces({ roster: 'http://www.battlescribe.net/schema/rosterSchema' })

const stat = (name, model) => {
  const nodes = xpath(`roster:profiles/roster:profile[@typeName='Model']//roster:characteristic[@name='${name}']`, model)
  if (nodes.length > 0) {
    return parseInt(nodes[0].childNodes[0].nodeValue)
  } else { return '' }
}

const weaponStat = (name, weapon, numeric) => {
  const nodes = xpath(`roster:characteristics/roster:characteristic[@name='${name}']`, weapon)
  if (nodes.length > 0) {
    return numeric ? parseInt(nodes[0].childNodes[0].nodeValue) : nodes[0].childNodes[0].nodeValue
  } else { return '' }
}

const points = (model) => {
  const costNode = xpath('.//roster:costs/roster:cost[@name=\'pts\']', model)
  return _.sumBy(costNode, (x) => parseInt(x.getAttribute('value')))
}

const parseForceRule = (rule) => {
  const description = xpath('roster:description', rule)[0].childNodes[0].nodeValue
  return {
    name: rule.getAttribute('name'),
    description,
    phases: calculatePhases(description)
  }
}

const parseAbility = (ability) => {
  const description = xpath(".//roster:characteristic[@name='Description']", ability)[0].childNodes[0].nodeValue
  return {
    id: xpath('string(@id)', ability, true).toString(),
    name: ability.getAttribute('name'),
    description,
    phases: calculatePhases(description)
  }
}

const parseWeapon = (weapon, userStrength) => {
  let strength = weaponStat('S', weapon, false)
  if (strength === 'User') {
    strength = userStrength
  }
  let match = /x([0-9]+)/i.exec(strength)
  if (match) {
    strength = userStrength * parseInt(match[1])
  }
  match = /\+([0-9]+)/i.exec(strength)
  if (match) {
    strength = userStrength + parseInt(match[1])
  }
  let weaponType = weaponStat('Type', weapon, false)
  if (weaponType !== 'Melee') { weaponType = weaponType.split(' ').slice(0, -1).join(' ') }
  return {
    id: xpath('string(@id)', weapon, true).toString(),
    name: weapon.getAttribute('name'),
    range: weaponStat('Range', weapon, true),
    type: weaponType,
    shots: weaponStat('Type', weapon, false).split(' ').slice(-1)[0],
    strength,
    armourPiercing: weaponStat('AP', weapon, true),
    damage: weaponStat('D', weapon, false),
    abilities: weaponStat('Abilities', weapon, false)
  }
}

const parseWargear = (wargear) => {
  const description = xpath(".//roster:characteristic[@name='Ability']", wargear)[0].childNodes[0].nodeValue
  return {
    id: xpath('string(@id)', wargear, true).toString(),
    name: wargear.getAttribute('name'),
    description,
    phases: calculatePhases(description)
  }
}

const parsePsychicPower = (power) => {
  let description = xpath(".//roster:characteristic[@name='Psychic Power']", power)[0].childNodes[0].nodeValue
  const warpChargeDescription = description.match(/warp charge value of ([0-9]+)\.(.*)/)
  let charge = null
  if (warpChargeDescription.length > 2) {
    charge = parseInt(warpChargeDescription[1])
    description = warpChargeDescription[2]
  }
  return {
    id: xpath('string(@id)', power, true).toString(),
    name: power.getAttribute('name'),
    charge,
    description
  }
}

export const additionalAttacks = (weapons, abilities) => {
  const descriptions = _.map(weapons, (w) => w.abilities).concat(_.map(abilities, (a) => a.description))
  const attacks = _.map(descriptions, (d) => parseAdditionalAttacks(d))
  return _.sum(attacks)
}

const parseModel = (model) => {
  const wargear = xpath(".//roster:profile[@typeName='Wargear']", model).map(parseWargear)
  const specialismSelection = xpath("roster:selections/roster:selection[roster:selections/roster:selection/roster:profiles/roster:profile/@typeName='Ability']", model)
  const abilities = xpath(".//roster:profile[@typeName='Ability']", model).map(parseAbility).concat(wargear)
  const stats = {
    movement: stat('M', model),
    weapon_skill: stat('WS', model),
    ballistic_skill: stat('BS', model),
    strength: stat('S', model),
    toughness: stat('T', model),
    wounds: stat('W', model),
    attacks: stat('A', model),
    leadership: stat('Ld', model),
    save: stat('Sv', model),
    invulnerable_save: invulnerableSave(abilities)
  }
  const closeCombatWeapon = {
    name: 'Bare fists',
    range: '-',
    type: 'Melee',
    strength: stats.strength,
    armourPiercing: 0,
    damage: 1,
    abilities: 'Default close combat weapon available to all models'
  }
  const weapons = xpath(".//roster:profile[@typeName='Weapon']", model).map((x) => (parseWeapon(x, stats.strength))).concat([closeCombatWeapon])
  stats.additional_attacks = additionalAttacks(weapons, abilities)
  const psychicPowers = xpath("roster:selections/roster:selection/roster:profiles/roster:profile[@typeName='Psychic Power']", model).map(parsePsychicPower)
  const category = xpath("roster:categories/roster:category[@primary='true']", model)[0].getAttribute('name')
  const faction = xpath("roster:categories/roster:category[@primary='false' and starts-with(@name,'Faction: ')]", model)
  const keywords = xpath("roster:categories/roster:category[@primary='false' and not(starts-with(@name,'Faction: '))]", model).map((x) => x.getAttribute('name'))
  _.remove(keywords, (x) => (x === 'Model'))
  const details = {
    id: model.getAttribute('id'),
    name: model.getAttribute('customName'),
    type: model.getAttribute('name'),
    category: category === 'Non-specialist' ? null : category,
    stats,
    abilities,
    weapons,
    wargear,
    psychicPowers,
    specialism: specialismSelection.length > 0 ? specialismSelection[0].getAttribute('name') : null,
    faction: faction.length > 0 ? faction[0].getAttribute('name').split(': ', 2)[1] : null,
    keywords,
    points: points(model)
  }
  return { ...details, hash: hash([]).hash(details) }
}

export const parseBattlescribeXML = (doc) => {
  const models = []
  const name = xpath('/roster:roster', doc)[0].getAttribute('name')
  const forceRules = xpath('//roster:force/roster:rules/roster:rule', doc).map(parseForceRule)
  for (const category of xpath('//roster:force/roster:categories/roster:category', doc)) {
    const categoryId = category.getAttribute('entryId')
    for (const model of xpath(`//roster:selection[@type='model' and roster:categories/roster:category/@entryId='${categoryId}']`, doc)) {
      models.push(parseModel(model))
    }
  }
  const uniqueModels = _.groupBy(models, (m) => m.hash)
  return {
    system: 'KillTeam2018',
    name,
    forceRules,
    models: _.map(uniqueModels, (model) => ({
      ...model[0],
      uuid: uuidv4(),
      count: model.length,
      selected: model.length
    }))
  }
}
