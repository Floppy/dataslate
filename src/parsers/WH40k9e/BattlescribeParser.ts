import * as XPath from 'xpath-ts'
import { Roster, Unit } from '../../types/WH40k9e'

// useNamespaces is NOT a React hook, so:
// eslint-disable-next-line
const xpSelect = XPath.useNamespaces({ bs: 'http://www.battlescribe.net/schema/rosterSchema' })

const parseUnit = (node: Node): Unit => {
  return {
    datasheet: xpSelect('string(@name)', node, true).toString(),
    id: xpSelect('string(@id)', node, true).toString(),
    modelTypes: []
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
