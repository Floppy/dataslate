import _ from 'lodash'
import hasher from 'node-object-hash'
import { stringAttr, nodeMap, stringContent, numericContent } from '../Parser'
import { Roster, Unit, Profile, PsychicPower, Weapon } from '../../types/WH40k9e'
import { Ability } from '../../types/Ability'
import { calculatePhases } from './Abilities'

const stat = (name: string, node: Node): number => (
  numericContent(`.//bs:characteristic[@name='${name}']`, node)
)

const parseUnitProfile = (unitProfileNode: Node): Profile => {
  const details = {
    id: stringAttr('@id', unitProfileNode),
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
  return { ...details, hash: hasher({}).hash(details) }
}

const parseAbility = (node: Node): Ability => {
  const description = stringContent(".//bs:characteristic[@name='Description']", node)
  return {
    id: stringAttr('@id', node),
    name: stringAttr('@name', node),
    description: description ?? '',
    phases: description !== "" ? calculatePhases(description) : []
  }
}

const parseWeaponProfile = (node: Node): Weapon => {
  const weaponType = stringContent('.//bs:characteristic[@name=\'Type\']', node)
  const strength = stringContent('.//bs:characteristic[@name=\'S\']', node)
  const details = {
    id: stringAttr('@id', node),
    name: stringAttr('@name', node),
    range: numericContent('.//bs:characteristic[@name=\'Range\']', node),
    type: weaponType,
    shots: "",
    strength: strength,
    armourPiercing: numericContent('.//bs:characteristic[@name=\'AP\']', node),
    damage: numericContent('.//bs:characteristic[@name=\'D\']', node),
    abilities: stringContent('.//bs:characteristic[@name=\'Abilities\']', node),
  }
  return { ...details, hash: hasher({}).hash(details) }
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
    abilities: nodeMap("bs:profiles/bs:profile[@typeName='Abilities']", unitSelectionNode, parseAbility),
    weapons: _.uniqBy([
      ...nodeMap(".//bs:profiles/bs:profile[@typeName='Weapon']", unitSelectionNode, parseWeaponProfile),
    ], (p) => p.hash),
    psychic: {
      cast: numericContent("bs:profiles/bs:profile[@typeName='Psyker']//bs:characteristic[@name='Cast']", unitSelectionNode),
      deny: numericContent("bs:profiles/bs:profile[@typeName='Psyker']//bs:characteristic[@name='Deny']", unitSelectionNode),
      powers: nodeMap("bs:selections/bs:selection/bs:profiles/bs:profile[@typeName='Psychic Power']", unitSelectionNode, parsePsychicPower)
    }
  }
}

export const parseBattlescribeXML = (doc: Document): Roster => {
  return {
    system: 'WH40k9e',
    name: stringAttr('/bs:roster/@name', doc),
    faction: stringAttr('/bs:roster/bs:forces/bs:force/@catalogueName', doc),
    units: nodeMap("/bs:roster/bs:forces/bs:force/bs:selections/bs:selection[@type='unit' or @type='model']", doc, parseUnitSelection)
  }
}
