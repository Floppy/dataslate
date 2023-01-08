import * as XPath from 'xpath-ts'
import { Roster, Unit, Profile, PsychicPower } from '../../types/WH40k9e'
import { Ability } from '../../types/Ability'
import { calculatePhases } from './Abilities'

// useNamespaces is NOT a React hook, so:
// eslint-disable-next-line
const xpSelect = XPath.useNamespaces({ bs: 'http://www.battlescribe.net/schema/rosterSchema' })

const stat = (name: string, node: Node): number => {
  const nodes = xpSelect(`.//bs:characteristic[@name='${name}']`, node) as Node[]
  if (nodes.length > 0) {
    return parseInt(nodes[0].childNodes[0].nodeValue ?? '-2')
  } else { return -1 }
}

const parseProfile = (node: Node): Profile => {
  return {
    name: xpSelect('string(@name)', node, true).toString(),
    id: xpSelect('string(@id)', node, true).toString(),
    profileStats: {
      movement: stat('M', node),
      weapon_skill: stat('WS', node),
      ballistic_skill: stat('BS', node),
      strength: stat('S', node),
      toughness: stat('T', node),
      wounds: stat('W', node),
      attacks: stat('A', node),
      leadership: stat('Ld', node),
      save: stat('Save', node),
      invulnerable_save: 0
    }
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

const parseUnit = (node: Node): Unit => {
  return {
    datasheet: xpSelect('string(@name)', node, true).toString(),
    name: xpSelect('string(@customName)', node, true).toString(),
    id: xpSelect('string(@id)', node, true).toString(),
    profiles: (xpSelect('.//bs:profiles/bs:profile[@typeName=\'Unit\']', node, false) as Node[]).map((node: Node) => parseProfile(node)),
    abilities: (xpSelect('.//bs:profiles/bs:profile[@typeName=\'Abilities\']', node, false) as Node[]).map((node: Node) => parseAbility(node)),
    psychicPowers: (xpSelect('.//bs:profiles/bs:profile[@typeName=\'Psychic Power\']', node, false) as Node[]).map((node: Node) => parsePsychicPower(node))
  }
}

export const parseBattlescribeXML = (doc: Document): Roster => {
  return {
    system: 'WH40k9e',
    name: xpSelect('string(/bs:roster/@name)', doc, true).toString(),
    faction: xpSelect('string(/bs:roster/bs:forces/bs:force/@catalogueName)', doc, true).toString(),
    units: (xpSelect('/bs:roster/bs:forces/bs:force/bs:selections/bs:selection[@type=\'unit\' or @type=\'model\']', doc, false) as Node[]).map((node: Node) => parseUnit(node))
  }
}
