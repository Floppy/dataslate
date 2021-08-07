import * as XPath from 'xpath-ts'

import hash from 'node-object-hash'

// useNamespaces is NOT a React hook, so:
// eslint-disable-next-line
const xpath = XPath.useNamespaces({ roster: 'http://www.battlescribe.net/schema/rosterSchema' })

const parseModel = (model) => {
  const details = {
    name: model.getAttribute('customName'),
    type: model.getAttribute('name'),
    category: null,
    stats: null,
    abilities: [],
    weapons: [],
    wargear: [],
    psychicPowers: [],
    specialism: null,
    faction: null,
    keywords: [],
    points: 0
  }
  return { ...details, hash: hash([]).hash(details) }
}

export const parseBattlescribeXML = (doc) => {
  console.log('KT2021 roster detected! Support coming soon, but nothing yet, sorry!')
  const models = []
  const name = xpath('/roster:roster', doc)[0].getAttribute('name')
  for (const model of xpath('//roster:selection[@type=\'model\']', doc)) {
    models.push(parseModel(model))
  }
  return {
    name,
    forceRules: [],
    models
  }
}
