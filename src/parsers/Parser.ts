import * as XPath from 'xpath-ts'

// useNamespaces is NOT a React hook, so:
// eslint-disable-next-line
export const xpSelect = XPath.useNamespaces({ bs: 'http://www.battlescribe.net/schema/rosterSchema' })

export const stringAttr = (attribute: string, node: Node): string => (
  xpSelect(`string(${attribute})`, node).toString()
)

export const stringContent = (xpath: string, node: Node): string => (
  xpSelect(`${xpath}/text()`, node).toString()
)

export const numericContent = (xpath: string, node: Node): number => parseInt(stringContent(xpath, node))

export const nodeMap = <Type>(xpath: string, root: Node, func: (node: Node) => Type): Type[] => (
  (xpSelect(xpath, root, false) as Node[]).map(func)
)
