import * as XPath from 'xpath-ts'
import { Roster } from '../../types/WH40k9e'

// useNamespaces is NOT a React hook, so:
// eslint-disable-next-line
const xpSelect = XPath.useNamespaces({ bs: 'http://www.battlescribe.net/schema/rosterSchema' })

export const parseBattlescribeXML = (doc: Document): Roster => {
  const name = xpSelect('string(/bs:roster/@name)', doc, true).toString()
  return {
    system: 'WH40k9e',
    name
  }
}
