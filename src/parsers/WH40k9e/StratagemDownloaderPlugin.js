const _ = require('lodash')
const axios = require('axios').default
const fs = require('fs')
const parse = require('csv-parse/sync').parse

class StratagemDownloaderPlugin {
  apply (compiler) {
    compiler.hooks.afterResolvers.tap('StratagemDownloaderPlugin', async () => {
      const csvOptions = {
        columns: true,
        delimiter: '|',
        quote: null,
        skip_empty_lines: true
      }
      const phaseMapping = {
        'Any of your phases': [],
        'Any phase': [],
        'Any time': [],
        'At the start of battle round': ['battle_round_start'],
        'At the start of enemy turn': ['battle_round_start'],
        'At the start of your turn': ['battle_round_start'],
        'Before battle': [],
        'Being targeted': ['fight', 'shooting'],
        'Charge phase': ['charge'],
        'Command phase': ['command'],
        'During deployment': ['deployment'],
        'End of your turn': [''],
        'Enemy Charge phase': ['charge'],
        'Enemy Command phase': ['command'],
        'Enemy Fight phase': ['fight'],
        'Enemy Morale phase': ['morale'],
        'Enemy Movement phase': ['movement'],
        'Enemy Psychic phase': ['psychic'],
        'Enemy Shooting phase': ['shooting'],
        'Enemy taking casualties': ['fight', 'shooting'],
        'Fight phase': ['fight'],
        'Morale phase': ['morale'],
        'Movement phase': ['movement'],
        'Psychic phase': ['psychic'],
        'Shooting phase': ['shooting'],
        'Taking casualties': ['fight', 'shooting']
      }
      try {
        console.log('Downloading stratagem data')
        const stratagemFile = await axios.get('https://wahapedia.ru/wh40k9ed/Stratagems.csv')
        const stratagemData = parse(stratagemFile.data, csvOptions)
        console.log('Downloading phase data')
        const stratagemPhaseFile = await axios.get('https://wahapedia.ru/wh40k9ed/StratagemPhases.csv')
        const stratagemPhaseData = parse(stratagemPhaseFile.data, csvOptions)
        console.log('Building stratagems')
        const stratagems = stratagemData.map((data) => ({
          id: data.id,
          name: data.name,
          cp_cost: data.cp_cost,
          type: data.type,
          description: data.description,
          datasheets: [],
          phases: _.uniq(_.flatten(stratagemPhaseData.filter((p) => (p.stratagem_id === data.id)).map((p) => phaseMapping[p.phase])))
        }))
        console.log('Writing stratagem code')
        await fs.writeFile('src/parsers/WH40k9e/Stratagems.ts', `import { Stratagem } from '../../types/WH40k9e'
          export const stratagems: Stratagem[] = ${JSON.stringify(stratagems, null, 2)}`, () => true)
      } catch (error) {
        console.error(error)
      }
    })
  }
}

module.exports = StratagemDownloaderPlugin
