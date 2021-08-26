import * as XPath from 'xpath-ts'
import hash from 'node-object-hash'
import { Roster, Model } from '../../components/KillTeam2021/types';

// useNamespaces is NOT a React hook, so:
// eslint-disable-next-line
const xpSelect = XPath.useNamespaces({ bs: 'http://www.battlescribe.net/schema/rosterSchema' })

const stat = (name: string, model: Element) : number | null => {
  const node = xpSelect(`bs:profiles/bs:profile[@typeName='Operative']//bs:characteristic[@name='M']/text()`, model, true)
  if (node) {
    return parseInt(node.toString())
  } else { return null }
}


const parseModel = (model : Element) : Model => {
  const details = {
    name: xpSelect('string(@customName)', model, true).toString(),
    type: xpSelect('string(@name)', model, true).toString(),
    stats: {
      movement: stat("M", model) + "⬤",
      actionPointLimit: parseInt(xpSelect(`bs:profiles/bs:profile[@typeName='Operative']//bs:characteristic[@name='APL']/ text()`, model, true).toString()),
      groupActivation: parseInt(xpSelect(`bs:profiles/bs:profile[@typeName='Operative']//bs:characteristic[@name='GA']/ text()`, model, true).toString()),
      defence: parseInt(xpSelect(`bs:profiles/bs:profile[@typeName='Operative']//bs:characteristic[@name='DF']/ text()`, model, true).toString()),
      save: parseInt(xpSelect(`bs:profiles/bs:profile[@typeName='Operative']//bs:characteristic[@name='SV']/ text()`, model, true).toString()),
      invulnerable_save: null,
      wounds: parseInt(xpSelect(`bs:profiles/bs:profile[@typeName='Operative']//bs:characteristic[@name='W']/ text()`, model, true).toString()),
    },
    keywords: (xpSelect("bs:categories/bs:category[@primary='false']/@name", model) as Node[]).map((x) => x.toString()),
    uuid: xpSelect('string(@id)', model, true).toString(),
    count: parseInt(xpSelect('string(@number)', model, true).toString()),
    selected: 1,
  };
  return { ...details, hash: hash().hash(details) }
}

export const parseBattlescribeXML = (doc : Document) : Roster => {
  const models = []
  const name = xpSelect('string(/bs:roster/@name)', doc, true).toString()
  for (const model of xpSelect('//bs:selection[@type=\'model\']', doc) as Element[]) {
    models.push(parseModel(model))
  }
  return {
    system: "KillTeam2021",
    name,
    models
  }
}
