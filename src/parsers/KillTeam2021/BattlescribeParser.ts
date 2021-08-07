import * as XPath from 'xpath-ts'

import hash from 'node-object-hash'
import { Roster, Model } from '../../components/KillTeam2018/types';

// useNamespaces is NOT a React hook, so:
// eslint-disable-next-line
const xpSelect = XPath.useNamespaces({ bs: 'http://www.battlescribe.net/schema/rosterSchema' })

const parseModel = (model : Element) : Model => {
  const details = {
    name: model.getAttribute('customName') as string,
    type: model.getAttribute('name') as string,
    category: '',
    stats: {
      movement: 0,
      weapon_skill: 0,
      ballistic_skill: 0,
      strength: 0,
      toughness: 0,
      wounds: 0,
      attacks: 0,
      leadership: 0,
      save: 0,
      invulnerable_save: 0,
      additional_attacks: 0
    },
    abilities: [],
    weapons: [],
    wargear: [],
    psychicPowers: [],
    specialism: '',
    faction: '',
    keywords: [],
    points: 0,
    additional_attacks: 0,
    uuid: '',
    count: 1,
    selected: 1,
  };
  return { ...details, hash: hash().hash(details) }
}

export const parseBattlescribeXML = (doc : Document) : Roster => {
  console.log('KT2021 roster detected! Support coming soon, but nothing yet, sorry!')
  const models = []
  const name = xpSelect('/bs:roster/@name', doc, true) as string
  for (const model of xpSelect('//bs:selection[@type=\'model\']', doc) as Element[]) {
    models.push(parseModel(model))
  }
  return {
    name,
    forceRules: [],
    models
  }
}
