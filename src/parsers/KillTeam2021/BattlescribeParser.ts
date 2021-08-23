import * as XPath from 'xpath-ts'

import hash from 'node-object-hash'
import { Roster, Model } from '../../components/KillTeam2021/types';

// useNamespaces is NOT a React hook, so:
// eslint-disable-next-line
const xpSelect = XPath.useNamespaces({ bs: 'http://www.battlescribe.net/schema/rosterSchema' })

const parseModel = (model : Element) : Model => {
  const details = {
    name: xpSelect('string(@customName)', model, true).toString(),
    type: xpSelect('string(@name)', model, true).toString(),
    stats: {
      movement: "3",
      actionPointLimit: 2,
      groupActivation: 1,
      defence: 3,
      save: 5,
      invulnerable_save: null,
      wounds: 6,
    },
    faction: '',
    keywords: [],
    uuid: '',
    count: 1,
    selected: 1,
  };
  return { ...details, hash: hash().hash(details) }
}

export const parseBattlescribeXML = (doc : Document) : Roster => {
  console.log('KT2021 roster detected! Support coming soon, but nothing yet, sorry!')
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
