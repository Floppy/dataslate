import { v4 as uuidv4 } from 'uuid'
import _ from 'lodash'
import hash from 'node-object-hash'
import * as XPath from 'xpath-ts'
import { Roster, Model, Weapon, Equipment, Action } from '../../types/KillTeam2021';
import { Ability } from '../../types/Ability';

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
    melee: xpSelect('string(@name)', weapon, true).toString().startsWith("⚔"),
    attacks: parseInt(xpSelect(".//bs:characteristic[@name='A']/text()", weapon, true).toString()),
    hit: parseInt(xpSelect(".//bs:characteristic[@name='WS/BS']/text()", weapon, true).toString()),
    damage: parseInt(xpSelect(".//bs:characteristic[@name='D']/text()", weapon, true).toString().split('/')[0]),
    specialRules: (xpSelect(".//bs:characteristic[@name='SR']/text()", weapon, true) || "-").toString(),
    criticalDamage: parseInt(xpSelect(".//bs:characteristic[@name='D']/text()", weapon, true).toString().split('/')[1]),
    criticalRules: (xpSelect(".//bs:characteristic[@name='!']/text()", weapon, true) || "-").toString(),
  }
}

const parseAbility = (ability : Node) : Ability => {
  return {
    name: xpSelect('string(@name)', ability, true).toString(),
    description: (xpSelect(".//bs:characteristic[@name='Ability']/text()", ability, true) || "-").toString(),
    phases: []
  }
}

const parseAction = (action : Node) : Action => {
  return {
    name: xpSelect('string(@name)', action, true).toString(),
    description: (xpSelect(".//bs:characteristic[@name='Unique Action']/text()", action, true) || "-").toString(),
    cost: 1,
  }
}

const parseEquipment = (equipment : Node) : Equipment => {
  return {
    name: xpSelect('string(@name)', equipment, true).toString(),
    cost: parseInt(xpSelect("string(.//bs:cost/@value)", equipment, true).toString()),
    description: (xpSelect(".//bs:characteristic[@name='Equipment']/text()", equipment, true) || "-").toString(),
  }
}

const parseRule = (rule : Node) : Ability => {
  return {
    name: xpSelect('string(@name)', rule, true).toString(),
    description: (xpSelect(".//bs:description/text()", rule, true) || "-").toString(),
    phases: []
  }
}

const factionKeywords = [
  "Brood Coven",
  "Cadre Mercenary",
  "Chaos Daemons",
  "Commorrite",
  "Craftworld",
  "Death Guard",
  "Ecclesiarchy",
  "Forge World",
  "Greenskin",
  "Grey Knight",
  "Hive Fleet",
  "Hunter Cadre",
  "Hunter Clade",
  "Imperial Guard",
  "Kommando",
  "Space Marine",
  "Talons of the Emperor",
  "Thousand Sons",
  "Tomb World",
  "Traitor Space Marine",
  "Troupe",
  "Veteran Guardsmen",
];

const parseModel = (model : Element) : Model => {
  const allKeywords = (xpSelect("bs:categories/bs:category[@primary='false']/@name", model) as Node[]).map((x) => (x.textContent || '').replace("💀",""));
  const faction = _.intersection(allKeywords, factionKeywords).pop() || null;
  const keywords = _.remove(allKeywords, (x) => (x !== faction));
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
    equipment: (xpSelect(".//bs:selection[(@type='upgrade') and (//bs:cost/@value!='0.0')]", model) as Node[]).map(parseEquipment),
    abilities: (xpSelect(".//bs:profile[@typeName='Abilities']", model) as Node[]).map(parseAbility),
    actions: (xpSelect(".//bs:profile[@typeName='Unique Actions']", model) as Node[]).map(parseAction),
    rules: (xpSelect(".//bs:rules/bs:rule", model) as Node[]).map(parseRule),
    keywords,
    faction,
    uuid: "",
    count: 0,
    selected: 0,
  };
  return { ...details, hash: hash().hash(details) }
}

export const parseBattlescribeXML = (doc : Document) : Roster => {
  const models = []
  const name = xpSelect('string(/bs:roster/@name)', doc, true).toString()
  for (const model of xpSelect('//bs:selection[@type=\'model\']', doc) as Element[]) {
    models.push(parseModel(model))
  }
  const uniqueModels = _.groupBy(models, (m) => m.hash)
  return {
    system: "KillTeam2021",
    name,
    models: _.map(uniqueModels, (model) => ({
      ...model[0],
      uuid: uuidv4(),
      count: model.length,
      selected: model.length
    }))
  }
}
