import _ from 'lodash'
import hasher from 'node-object-hash'
import { stringAttr, nodeMap, stringContent, numericContent } from '../Parser'
import { Roster, Unit, Profile, PsychicPower, Weapon } from '../../types/WH40k9e'
import { Ability } from '../../types/Ability'
import { calculatePhases } from './Abilities'
import { stratagems } from './Stratagems'
import slugify from 'slugify'

const stat = (name: string, node: Node): number => (
  numericContent(`.//bs:characteristic[@name='${name}']`, node)
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
      attacks: stat('A', unitProfileNode),
      leadership: stat('Ld', unitProfileNode),
      save: stat('Save', unitProfileNode),
      invulnerable_save: 0
    }
  }
  return {
    ...details,
    hash: hasher({}).hash(details),
    id: stringAttr('@id', unitProfileNode)
  }
}

const parseAbility = (node: Node): Ability => {
  const description = stringContent(".//bs:characteristic[@name='Description']", node)
  return {
    id: stringAttr('@id', node),
    name: stringAttr('@name', node),
    description: description ?? '',
    phases: description !== '' ? calculatePhases(description) : []
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
    strength: strength,
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

const parseUnitSelection = (unitSelectionNode: Node): Unit => {
  return {
    id: stringAttr('@id', unitSelectionNode),
    datasheet: stringAttr('@name', unitSelectionNode),
    name: stringAttr('@customName', unitSelectionNode),
    profiles: _.uniqBy([
      ...nodeMap("bs:profiles/bs:profile[@typeName='Unit']", unitSelectionNode, parseUnitProfile),
      ...nodeMap("bs:selections/bs:selection/bs:profiles/bs:profile[@typeName='Unit']", unitSelectionNode, parseUnitProfile)
    ], (p) => p.hash),
    abilities: [
      ...nodeMap("bs:profiles/bs:profile[@typeName='Abilities']", unitSelectionNode, parseAbility),
      ...nodeMap("bs:selections/bs:selection/bs:profiles/bs:profile[@typeName='Abilities']", unitSelectionNode, parseAbility)
    ],
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
    }
  }
}

export const parseBattlescribeXML = (doc: Document): Roster => {
  const units = nodeMap("/bs:roster/bs:forces/bs:force/bs:selections/bs:selection[@type='unit' or @type='model']", doc, parseUnitSelection)
  const datasheetNames = units.map((u) => slugify(u.datasheet, { lower: true, strict: true }))
  const faction = stringAttr('/bs:roster/bs:forces/bs:force/@catalogueName', doc).split(' - ').pop() ?? 'Unknown'
  return {
    system: 'WH40k9e',
    name: stringAttr('/bs:roster/@name', doc),
    faction,
    units,
    stratagems: stratagems.filter((s) => (
      (s.faction === null || s.faction === faction) &&
      (s.datasheets.length === 0 || _.intersection(s.datasheets, datasheetNames).length > 0)
    ))
  }
}
