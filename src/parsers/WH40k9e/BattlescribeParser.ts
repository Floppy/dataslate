import { xpSelect } from '../Parser'
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
    name: xpSelect('string(@name)', unitProfileNode, true).toString(),
    id: xpSelect('string(@id)', unitProfileNode, true).toString(),
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
  const description = xpSelect(". //bs:characteristic[@name='Description']/text()", node, true).toString()
  return {
    id: xpSelect('string(@id)', node, true).toString(),
    name: xpSelect('string(@name)', node, true).toString(),
    description: description ?? "",
    phases: description ? calculatePhases(description) : []
  }
}

const parsePsychicPower = (node: Node): PsychicPower => {
  return {
    id: xpSelect('string(@id)', node, true).toString(),
    name: xpSelect('string(@name)', node, true).toString(),
    charge: parseInt(xpSelect('.//bs:characteristic[@name=\'Warp Charge\']/text()', node, true).toString()),
    range: xpSelect('.//bs:characteristic[@name=\'Range\']/text()', node, true).toString(),
    description: xpSelect('.//bs:characteristic[@name=\'Details\']/text()', node, true).toString()
  }
}

const parseUnitSelection = (unitSelectionNode: Node): Unit => {
  return {
    datasheet: xpSelect('string(@name)', unitSelectionNode).toString(),
    name: xpSelect('string(@customName)', unitSelectionNode).toString(),
    id: xpSelect('string(@id)', unitSelectionNode).toString(),
    profiles: (xpSelect('bs:profiles/bs:profile[@typeName=\'Unit\']', unitSelectionNode, false) as Node[]).map((node: Node) => parseUnitProfile(node)),
    abilities: (xpSelect('bs:profiles/bs:profile[@typeName=\'Abilities\']', unitSelectionNode, false) as Node[]).map((node: Node) => parseAbility(node)),
    psychicPowers: (xpSelect('bs:selections/bs:selection/bs:profiles/bs:profile[@typeName=\'Psychic Power\']', unitSelectionNode, false) as Node[]).map((node: Node) => parsePsychicPower(node))
  }
}

export const parseBattlescribeXML = (doc: Document): Roster => {
  return {
    system: 'WH40k9e',
    name: xpSelect('string(/bs:roster/@name)', doc, true).toString(),
    faction: xpSelect('string(/bs:roster/bs:forces/bs:force/@catalogueName)', doc, true).toString(),
    units: (xpSelect('/bs:roster/bs:forces/bs:force/bs:selections/bs:selection[@type=\'unit\' or @type=\'model\']', doc, false) as Node[]).map((node: Node) => parseUnitSelection(node))
  }
}
