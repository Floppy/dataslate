import { stringAttr, nodeMap, xpSelect } from '../Parser'
import { Roster, Unit, Profile, PsychicPower } from '../../types/WH40k9e'
import { Ability } from '../../types/Ability'
import { calculatePhases } from './Abilities'

const stat = (name: string, node: Node): number => {
  const nodes = xpSelect(`.//bs:characteristic[@name='${name}']`, node) as Node[]
  if (nodes.length > 0) {
    return parseInt(nodes[0].childNodes[0].nodeValue ?? '-2')
  } else { return -1 }
}

const parseUnitProfile = (unitProfileNode: Node): Profile => {
  return {
    id: stringAttr("@id", unitProfileNode),
    name: stringAttr("@name", unitProfileNode),
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
    },
    weapons: []
  }
}

const parseAbility = (node: Node): Ability => {
  const description = xpSelect(".//bs:characteristic[@name='Description']/text()", node, true).toString()
  return {
    id: stringAttr("@id", node),
    name: stringAttr("@name", node),
    description: description ?? "",
    phases: description ? calculatePhases(description) : []
  }
}

const parsePsychicPower = (node: Node): PsychicPower => {
  return {
    id: stringAttr("@id", node),
    name: stringAttr("@name", node),
    charge: parseInt(xpSelect('.//bs:characteristic[@name=\'Warp Charge\']/text()', node, true).toString()),
    range: xpSelect('.//bs:characteristic[@name=\'Range\']/text()', node, true).toString(),
    description: xpSelect('.//bs:characteristic[@name=\'Details\']/text()', node, true).toString()
  }
}

const parseUnitSelection = (unitSelectionNode: Node): Unit => {
  return {
    id: stringAttr("@id", unitSelectionNode),
    datasheet: stringAttr("@name", unitSelectionNode),
    name: stringAttr("@customName", unitSelectionNode),
    profiles: nodeMap("bs:profiles/bs:profile[@typeName='Unit']", unitSelectionNode, parseUnitProfile),
    abilities: nodeMap("bs:profiles/bs:profile[@typeName='Abilities']", unitSelectionNode, parseAbility),
    psychicPowers: nodeMap("bs:selections/bs:selection/bs:profiles/bs:profile[@typeName='Psychic Power']", unitSelectionNode, parsePsychicPower)
  }
}

export const parseBattlescribeXML = (doc: Document): Roster => {
  return {
    system: 'WH40k9e',
    name: stringAttr("/bs:roster/@name", doc),
    faction: stringAttr('/bs:roster/bs:forces/bs:force/@catalogueName', doc),
    units: nodeMap("/bs:roster/bs:forces/bs:force/bs:selections/bs:selection[@type='unit' or @type='model']", doc, parseUnitSelection)
  }
}
