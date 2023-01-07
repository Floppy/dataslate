import * as XPath from 'xpath-ts'
import { Roster, Unit, Profile } from '../../types/WH40k9e'

// useNamespaces is NOT a React hook, so:
// eslint-disable-next-line
const xpSelect = XPath.useNamespaces({ bs: 'http://www.battlescribe.net/schema/rosterSchema' })

const stat = (name: string, node: Node): number => {
  const nodes = xpSelect(`.//bs:characteristic[@name='${name}']`, node) as Node[]
  if (nodes.length > 0) {
    return parseInt(nodes[0].childNodes[0].nodeValue || "-2")
  } else { return -1 }
}


const parseProfile = (node: Node): Profile => {
  return {
    name: xpSelect('string(@name)', node, true).toString(),
    profileStats: {
      movement: stat('M', node)
    }
  }
}

const parseUnit = (node: Node): Unit => {
  return {
    datasheet: xpSelect('string(@name)', node, true).toString(),
    name: xpSelect('string(@customName)', node, true).toString(),
    id: xpSelect('string(@id)', node, true).toString(),
    profiles: (xpSelect(`.//bs:profiles/bs:profile[@typeName='Unit']`, node, false) as Node[]).map((node: Node) => parseProfile(node))
  }
}

export const parseBattlescribeXML = (doc: Document): Roster => {
  return {
    system: 'WH40k9e',
    name: xpSelect('string(/bs:roster/@name)', doc, true).toString(),
    faction: xpSelect('string(/bs:roster/bs:forces/bs:force/@catalogueName)', doc, true).toString(),
    units: (xpSelect(`/bs:roster/bs:forces/bs:force/bs:selections/bs:selection[@type='unit' or @type='model']`, doc, false) as Node[]).map((node: Node) => parseUnit(node))
  }
}
