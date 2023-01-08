import * as XPath from 'xpath-ts'

// useNamespaces is NOT a React hook, so:
// eslint-disable-next-line
export const xpSelect = XPath.useNamespaces({ bs: 'http://www.battlescribe.net/schema/rosterSchema' })

export const stringAttr = (attribute: string, node: Node) : string => (
	xpSelect(`string(${attribute})`, node).toString()
)
