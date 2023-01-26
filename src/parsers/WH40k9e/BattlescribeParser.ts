import _ from 'lodash'
import hasher from 'node-object-hash'
import { stringAttr, nodeMap, stringContent, numericContent } from '../Parser'
import { Roster, Unit, Profile, PsychicPower, Weapon } from '../../types/WH40k9e'
import { Ability } from '../../types/Ability'
import { calculatePhases } from './Abilities'
import { stratagems } from './Stratagems'
import slugify from 'slugify'

const subfactionChoiceNames: string[] = [
  'Craftworld Selection', // Aeldari
  'Obsession', // Drukhari
  'Dread Household', // Chaos Knights
  'Legion', // Chaos Space Marines
  'Chaos Allegiance', // Chaos Daemons
  'Plague Company', // Death Guard
  'Cults of the Legion', // Thousand Sons
  'Order Convictions', // Adepta Sororitas
  'Shield Host', // Adeptus Custodes
  'Forge World Choice', // Adeptus Mechanicus
  'Brotherhood', // Grey Knights
  'Chapter Selection', // Space Marines
  '**Chapter Selector**', // Space Marines
  'League', // Votann
  'Dynasty Choice', // Necrons
  'Clan Kultur', // Orks
  'Sept Choice', // T'au
  'Cult Creed', // Genestealer Cults
  'Hive Fleet' // Tyranids
]

const stat = (name: string, node: Node): number => (
  numericContent(`.//bs:characteristic[@name='${name}']`, node)
)

const stringStat = (name: string, node: Node): string => (
  stringContent(`.//bs:characteristic[@name='${name}']`, node)
)

const parseUnitProfile = (unitProfileNode: Node): Profile => {
  const details = {
    name: stringAttr('@name', unitProfileNode),
    profileStats: {
      movement: stat('M', unitProfileNode),
      weapon_skill: stat('WS', unitProfileNode),
      ballistic_skill: stat('BS', unitProfileNode),
      strength: stat('S', unitProfileNode),
      toughness: stat('T', unitProfileNode),
      wounds: stat('W', unitProfileNode),
      attacks: stringStat('A', unitProfileNode),
      leadership: stat('Ld', unitProfileNode),
      save: stat('Save', unitProfileNode),
      invulnerable_save: NaN
    },
    degradedProfiles: [] // Handled later on
  }
  return {
    ...details,
    hash: hasher({}).hash(details),
    id: stringAttr('@id', unitProfileNode)
  }
}

const parseAbility = (node: Node): Ability => {
  const description = stringContent(".//bs:characteristic[@name='Description']", node)
  const details = {
    name: stringAttr('@name', node),
    description: description ?? '',
    phases: description !== '' ? calculatePhases(description) : []
  }
  return {
    ...details,
    hash: hasher({}).hash(details),
    id: stringAttr('@id', node)
  }
}

const parseWeaponProfile = (node: Node): Weapon => {
  let weaponType = stringContent('.//bs:characteristic[@name=\'Type\']', node)
  if (weaponType !== 'Melee') { weaponType = weaponType.split(' ').slice(0, -1).join(' ') }
  const strength = stringContent('.//bs:characteristic[@name=\'S\']', node)
  const details = {
    name: stringAttr('@name', node),
    range: numericContent('.//bs:characteristic[@name=\'Range\']', node),
    type: weaponType,
    shots: stringContent('.//bs:characteristic[@name=\'Type\']', node).split(' ').slice(-1)[0],
    strength,
    armourPiercing: numericContent('.//bs:characteristic[@name=\'AP\']', node),
    damage: stringContent('.//bs:characteristic[@name=\'D\']', node),
    abilities: stringContent('.//bs:characteristic[@name=\'Abilities\']', node)
  }
  return {
    ...details,
    hash: hasher({}).hash(details),
    id: stringAttr('@id', node)
  }
}

const parsePsychicPower = (node: Node): PsychicPower => {
  return {
    id: stringAttr('@id', node),
    name: stringAttr('@name', node),
    charge: numericContent('.//bs:characteristic[@name=\'Warp Charge\']', node),
    range: stringContent('.//bs:characteristic[@name=\'Range\']', node),
    description: stringContent('.//bs:characteristic[@name=\'Details\']', node)
  }
}

const handleDegradingProfiles = (profiles: Profile[]): Profile[] => {
  if (profiles.some((x) => x.name.includes('wounds'))) {
    const profile = profiles[0]
    profile.name = profile.name.split(/[[0-9]/)[0].trimEnd()
    profile.degradedProfiles = profiles.slice(1).map((p) => ({
      name: p.name.split('(').pop()?.replace(')', '') ?? '?',
      profileStats: {
        movement: p.profileStats.movement === profile.profileStats.movement ? NaN : p.profileStats.movement,
        weapon_skill: p.profileStats.weapon_skill === profile.profileStats.weapon_skill ? NaN : p.profileStats.weapon_skill,
        ballistic_skill: p.profileStats.ballistic_skill === profile.profileStats.ballistic_skill ? NaN : p.profileStats.ballistic_skill,
        strength: p.profileStats.strength === profile.profileStats.strength ? NaN : p.profileStats.strength,
        toughness: p.profileStats.toughness === profile.profileStats.toughness ? NaN : p.profileStats.toughness,
        wounds: p.profileStats.wounds === profile.profileStats.wounds ? NaN : p.profileStats.wounds,
        attacks: p.profileStats.attacks === profile.profileStats.attacks ? '-' : p.profileStats.attacks,
        leadership: p.profileStats.leadership === profile.profileStats.leadership ? NaN : p.profileStats.leadership,
        save: p.profileStats.save === profile.profileStats.save ? NaN : p.profileStats.save,
        invulnerable_save: p.profileStats.invulnerable_save === profile.profileStats.invulnerable_save ? NaN : p.profileStats.invulnerable_save
      }
    }))
    return [profile]
  } else {
    return profiles
  }
}

const handleInvulnerableSaves = (profiles: Profile[], abilities: Ability[]): Profile[] => {
  const patterns = [
    /has a ([1-6]{1})\+ invulnera.le save/ // dot handles a common typo
  ]
  const saves = _.map(abilities, (a) => {
    return _.min(_.map(patterns, (pattern) => {
      const match = a.description.match(pattern)
      if (match != null) {
        return parseInt(match[1])
      }
      return NaN
    }))
  })
  const invuln = _.min(saves) ?? NaN
  return profiles.map((p) => {
    p.profileStats.invulnerable_save = invuln
    return p
  })
}

const parseUnitSelection = (unitSelectionNode: Node): Unit => {
  let profiles = _.uniqBy([
    ...nodeMap("bs:profiles/bs:profile[@typeName='Unit']", unitSelectionNode, parseUnitProfile),
    ...nodeMap("bs:selections/bs:selection/bs:profiles/bs:profile[@typeName='Unit']", unitSelectionNode, parseUnitProfile)
  ], (p) => p.hash).sort((a: Profile, b: Profile) => (a.name.localeCompare(b.name)))
  const abilities = _.uniqBy([
    ...nodeMap("bs:profiles/bs:profile[@typeName='Abilities']", unitSelectionNode, parseAbility),
    ...nodeMap("bs:selections/bs:selection/bs:profiles/bs:profile[@typeName='Abilities']", unitSelectionNode, parseAbility),
    ...nodeMap("bs:selections/bs:selection/bs:selections/bs:selection/bs:profiles/bs:profile[@typeName='Abilities']", unitSelectionNode, parseAbility)
  ], (p) => p.hash)
  profiles = handleDegradingProfiles(profiles)
  profiles = handleInvulnerableSaves(profiles, abilities)
  return {
    id: stringAttr('@id', unitSelectionNode),
    datasheet: stringAttr('@name', unitSelectionNode),
    name: stringAttr('@customName', unitSelectionNode),
    profiles,
    abilities,
    weapons: _.uniqBy([
      ...nodeMap(".//bs:profiles/bs:profile[@typeName='Weapon']", unitSelectionNode, parseWeaponProfile),
      {
        id: 'generic-ccw',
        name: 'Close Combat Weapon',
        range: 0,
        type: 'Melee',
        strength: 'User',
        armourPiercing: 0,
        damage: '1',
        shots: '0',
        abilities: '',
        hash: ''
      }
    ], (p) => p.hash),
    psychic: {
      cast: numericContent("bs:profiles/bs:profile[@typeName='Psyker']//bs:characteristic[@name='Cast']", unitSelectionNode),
      deny: numericContent("bs:profiles/bs:profile[@typeName='Psyker']//bs:characteristic[@name='Deny']", unitSelectionNode),
      powers: nodeMap("bs:selections/bs:selection/bs:profiles/bs:profile[@typeName='Psychic Power']", unitSelectionNode, parsePsychicPower)
    },
    keywords: _.compact(
      nodeMap("bs:categories/bs:category[@primary='false']/@name", unitSelectionNode, (n) => n.textContent)
    ).filter((x) => !x.toLowerCase().startsWith('faction:')),
    role: stringAttr("bs:categories/bs:category[@primary='true']/@name", unitSelectionNode)
  }
}

export const parseBattlescribeXML = (doc: Document): Roster => {
  const units = nodeMap("/bs:roster/bs:forces/bs:force/bs:selections/bs:selection[@type='unit' or @type='model']", doc, parseUnitSelection)
  const datasheetNames = units.map((u) => slugify(u.datasheet, { lower: true, strict: true }))
  const faction = stringAttr('/bs:roster/bs:forces/bs:force/@catalogueName', doc).split(' - ').pop() ?? 'Unknown'
  const subfaction = stringAttr(`/bs:roster/bs:forces/bs:force/bs:selections/bs:selection[
    ${subfactionChoiceNames.map((x) => (`@name='${x}'`)).join(' or ')}
  ]//bs:selections/bs:selection/@name`, doc)
  return {
    system: 'WH40k9e',
    name: stringAttr('/bs:roster/@name', doc),
    faction,
    subfaction,
    units,
    stratagems: stratagems.filter((s) => (
      (s.faction === null || s.faction === faction) &&
      (s.subfaction === null || s.subfaction === subfaction) &&
      (s.datasheets.length === 0 || _.intersection(s.datasheets, datasheetNames).length > 0)
    )),
    abilities: [
      ...nodeMap("/bs:roster/bs:forces/bs:force/bs:selections/bs:selection[@type='upgrade']/bs:profiles/bs:profile[@typeName='Abilities']", doc, parseAbility),
      ...nodeMap("/bs:roster/bs:forces/bs:force/bs:selections/bs:selection[@type='upgrade']/bs:selections/bs:selection[@type='upgrade']/bs:profiles/bs:profile[@typeName='Abilities']", doc, parseAbility)
    ]
  }
}
