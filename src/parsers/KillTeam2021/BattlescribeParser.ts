import * as XPath from 'xpath-ts'
import hash from 'node-object-hash'
import { Roster, Model, Weapon } from '../../components/KillTeam2021/types';

// useNamespaces is NOT a React hook, so:
// eslint-disable-next-line
const xpSelect = XPath.useNamespaces({ bs: 'http://www.battlescribe.net/schema/rosterSchema' })

const stat = (name: string, model: Element) : number => {
  const node = xpSelect(`bs:profiles/bs:profile[@typeName='Operative']//bs:characteristic[@name='${name}']/text()`, model, true)
  if (node) {
    return parseInt(node.toString())
  } else { return 0 }
}

const parseWeapon = (weapon : Node) : Weapon => {
  return {
    name: xpSelect('string(@name)', weapon, true).toString(),
    melee: true,
    attacks: parseInt(xpSelect(".//bs:characteristic[@name='A']/text()", weapon, true).toString()),
    hit: parseInt(xpSelect(".//bs:characteristic[@name='WS/BS']/text()", weapon, true).toString()),
    damage: parseInt(xpSelect(".//bs:characteristic[@name='D']/text()", weapon, true).toString().split('/')[0]),
    specialRules: xpSelect(".//bs:characteristic[@name='SR']/text()", weapon, true).toString(),
    criticalDamage: parseInt(xpSelect(".//bs:characteristic[@name='D']/text()", weapon, true).toString().split('/')[1]),
    criticalRules: xpSelect(".//bs:characteristic[@name='!']/text()", weapon, true).toString(),
  }
}

const parseModel = (model : Element) : Model => {
  const details = {
    name: xpSelect('string(@customName)', model, true).toString(),
    type: xpSelect('string(@name)', model, true).toString(),
    stats: {
      movement: stat("M", model) + "⬤",
      actionPointLimit: stat("APL", model),
      groupActivation: stat("GA", model),
      defence: stat("DF", model),
      save: stat("SV", model),
      invulnerable_save: null,
      wounds: stat("W", model),
    },
    weapons: (xpSelect(".//bs:profile[@typeName='Weapons']", model) as Node[]).map(parseWeapon),
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
