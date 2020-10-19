const DOMParser = require('xmldom').DOMParser
const xpath = require('xpath-ts').useNamespaces({ roster: 'http://www.battlescribe.net/schema/rosterSchema' })

const _ = require('lodash')
const hash = require('node-object-hash')([])

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

export const calculatePhases = (description) => {
  const minDesc = ' ' + description.toLowerCase().replace(/[.,]/g, '') + ' '
  const phases = []
  const phasePatterns = {
    scouting: [
      / scouting /
    ],
    deployment: [
      / before the first battle round /,
      / set up /,
      / cult ambush /
    ],
    initiative: [
      / start of each battle round /,
      / beginning of each battle round /
    ],
    movement: [
      / movement phase /,
      / climbs? /,
      / normal move /,
      / advances? /,
      / charges? /,
      / falls? back /,
      / reacts? /,
      / overwatch /,
      / retreats? /,
      / fly /,
      / after this model has charged /,
      / from reserves? /,
      / can move across /,
      / setup within /
    ],
    psychic: [
      / psychic /,
      / deny the witch /,
      / perils of the warp /,
      / psychich / // handle typo
    ],
    shooting: [
      / shooting phase /,
      / shots? /,
      / ballistic skill /,
      / ranged /,
      / range characteristic /,
      / half range /,
      / long range /,
      / short range /,
      / grenades? /,
      / shoots? /,
      / shooting /,
      / fire[sd]+ /,
      / firing /,
      / obscured /,
      / order(ed)? /,
      / voice of command /,
      / invulnerable save /,
      / demolition charges? /,
      / liberator autostubs /,
      / obscurred /, // handle typo
      / look out sir! /,
      / pistol /,
      / heavy weapons?/,
      / add [0-9] to saving throws /
    ],
    fight: [
      / fight phase /,
      / fights? /,
      / weapon skill /,
      / attacks characteristics? /,
      / strength characteristics? /,
      / piles? in /,
      / consolidates? /,
      / melee /,
      / close combat /,
      / death to the false emperor /,
      / additional attacks? /,
      / invulnerable save /,
      / look out sir! /,
      / intervening terrain /,
      / damage characteristic is [0-9] in a battle round in which this model charged /,
      / add [0-9] to saving throws /
    ],
    morale: [
      / nerve /,
      / leadership /
    ]
  }
  _.forIn(phasePatterns, (patterns, phase) => {
    if (_.some(patterns, (re) => (re.test(minDesc)))) {
      phases.push(phase)
    }
  })
  // If there's no fight or shoot yet, test some generic patterns that could be either
  if (!phases.includes('fight') && !phases.includes('shooting')) {
    const genericPatterns = [
      / weapon /,
      / hit rolls? /,
      / attack(s|ing)? /,
      / saves? /,
      / saving throws? /,
      / injury rolls? /,
      / wound rolls? /,
      / loses? a wound /,
      / fall(ing)? damage /,
      / the bearer is taken out of action /,
      / toughness characteristic /,
      / suffers? a mortal wound /,
      / taken out of action /,
      / this weapon/
    ]
    if (_.some(genericPatterns, (re) => (re.test(minDesc)))) {
      phases.push('fight', 'shooting')
    }
  }
  // Remove phases for some patterns that get picked up incorrectly
  const antiPatterns = {
    deployment: [
      / from reserve /
    ],
    movement: [
      / previous movement phase /,
      / preceding movement phase /,
      / if the firing model moved /,
      / moved during the movement phase /,
      / round in which it charges or is charged /,
      / in which it made a successful charge /,
      / even if it fell back in the movement phase /,
      / model that can fly /,
      / as if it were the movement phase /,
      / stunned /,
      / penalty for moving /,
      / as if the model had remained stationary /,
      / demolition charge /
    ],
    psychic: [
      / after all of this weapon's attacks have been resolved /
    ],
    shooting: [
      / when (it|this model) fires overwatch /,
      / invulnerable save (against attacks made )?in the fight phase /,
      / as if it were your shooting phase /,
      / tactical support turret /
    ],
    fight: [
      / as if it were the fight phase /,
      / shots equal to its attacks characteristic /,
      / stunned /,
      / target enemies at [0-9]{1,2}" or less /,
      / within half range /,
      / tactical support turret /
    ],
    morale: [
      / target model's leadership /,
      / weapon against a model which has a leadership /,
      / subtract 1 from its leadership / // phantasm grenade effect
    ]
  }
  _.forIn(antiPatterns, (patterns, phase) => {
    if (_.some(patterns, (re) => (re.test(minDesc)))) {
      _.remove(phases, (p) => (p === phase))
    }
  })
  // OK, done
  return phases
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
  let weaponType = weaponStat('Type', weapon, false);
  if (weaponType !== "Melee")
    weaponType = weaponType.split(' ').slice(0,-1).join(' ')
  return {
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

export const parseAdditionalAttacks = (description) => {
  const patterns = [
    /Add ([1-9]{1}) to this model's Attacks characteristic/,
    / ([1-9]|an|one|two) additional attack/,
    /(one) \(and only one\) attack with this weapon./
  ]
  const antiPatterns = [
    /if a model/,
    /if the bearer/,
    /unless/
  ]
  return _.sum(_.map(patterns, (pattern) => {
    const match = description.match(pattern)
    if (match) {
      if (_.some(antiPatterns, (re) => (re.test(description)))) {
        return 0
      }
      if (match[1] === 'an' || match[1] === 'one') return 1
      if (match[1] === 'two') return 2
      return parseInt(match[1] || match[2])
    }
    return 0
  }))
}

export const invulnerableSave = (abilities) => {
  const patterns = [
    /models with this ability have a ([1-6]{1})\+ invulnerable save/,
    /has a ([1-6]{1})\+ invulnerable save($|\.|,| and| instead of)/,
    /has an invulnerable save of ([1-6]{1})\+/
  ]
  const saves = _.map(abilities, (a) => {
    return _.min(_.map(patterns, (pattern) => {
      const match = a.description.match(pattern)
      if (match) {
        return parseInt(match[1])
      }
      return null
    }))
  })
  return _.min(saves)
}

const parseModel = (model) => {
  const forceRules = xpath('//roster:force/roster:rules/roster:rule', model).map(parseForceRule)
  const wargear = xpath(".//roster:profile[@typeName='Wargear']", model).map(parseWargear)
  const specialismSelection = xpath("roster:selections/roster:selection[roster:selections/roster:selection/roster:profiles/roster:profile/@typeName='Ability']", model)
  const abilities = xpath(".//roster:profile[@typeName='Ability']", model).map(parseAbility).concat(forceRules).concat(wargear)
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
    name: model.getAttribute('customName'),
    type: model.getAttribute('name'),
    category: category === 'Non-specialist' ? null : category,
    stats,
    abilities,
    weapons,
    psychicPowers,
    specialism: specialismSelection.length > 0 ? specialismSelection[0].getAttribute('name') : null,
    faction: faction.length > 0 ? faction[0].getAttribute('name').split(': ', 2)[1] : null,
    keywords,
    points: points(model)
  }
  return { ...details, hash: hash.hash(details) }
}

export const parseBattlescribeXML = (xml) => {
  var models = []
  var doc = new DOMParser().parseFromString(xml)
  const name = xpath('/roster:roster', doc)[0].getAttribute('name')
  for (const category of xpath('//roster:force/roster:categories/roster:category', doc)) {
    const categoryId = category.getAttribute('entryId')
    for (const model of xpath(`//roster:selection[@type='model' and roster:categories/roster:category/@entryId='${categoryId}']`, doc)) {
      models.push(parseModel(model))
    }
  }
  const points = _.sumBy(models, (x) => (x.points))
  const uniqueModels = _.groupBy(models, (m) => m.hash)
  return {
    name,
    points,
    models: _.map(uniqueModels, (m) => (
      { ...m[0], count: m.length }
    ))
  }
}
