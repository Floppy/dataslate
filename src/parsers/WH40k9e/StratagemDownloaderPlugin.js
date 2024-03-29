const _ = require('lodash')
const axios = require('axios').default
const fs = require('fs')
const parse = require('csv-parse/sync').parse
const slugify = require('slugify')

const getFile = async (filename) => {
  const csvOptions = {
    columns: true,
    delimiter: '|',
    quote: null,
    skip_empty_lines: true
  }
  console.log(`Downloading ${filename}`)
  const file = await axios.get(`https://wahapedia.ru/wh40k9ed/${filename}.csv`)
  return parse(file.data, csvOptions)
}

class StratagemDownloaderPlugin {
  apply (compiler) {
    compiler.hooks.afterResolvers.tap('StratagemDownloaderPlugin', async () => {
      const phaseMapping = {
        'Any of your phases': [],
        'Any phase': [],
        'Any time': [],
        'At the start of battle round': ['battle_round_start'],
        'At the start of enemy turn': ['command'],
        'At the start of your turn': ['command'],
        'Before battle': ['before_battle'],
        'Being targeted': ['fight', 'shooting'],
        'Charge phase': ['charge'],
        'Command phase': ['command'],
        'During deployment': ['deployment'],
        'End of your turn': ['end_of_turn'],
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
        // Fetch all the data
        const stratagemData = await getFile('Stratagems')
        const stratagemPhaseData = await getFile('StratagemPhases')
        const datasheetData = await getFile('Datasheets')
        const datasheetStratagemData = await getFile('Datasheets_stratagems')
        const factionData = await getFile('Factions')
        const sourceData = await getFile('Source')
        // Convert into our structures
        console.log('Building stratagems')
        const stratagems = stratagemData.map((data) => ({
          id: data.id,
          name: data.name,
          cp_cost: data.cp_cost,
          type: data.type,
          description: data.description,
          datasheets: _.uniq(_.flatten(
            datasheetStratagemData.filter((p) => (
              p.stratagem_id === data.id)).map((p) => p.datasheet_id
            ).map((p) => (
              slugify(datasheetData.find((d) => (p === d.id))?.name, {
                lower: true,
                strict: true
              })
            ))
          )),
          phases: _.uniq(_.flatten(
            stratagemPhaseData.filter((p) => (p.stratagem_id === data.id)).map((p) => phaseMapping[p.phase])
          )),
          faction: data.faction_id ? factionData.find((x) => (x.id === data.faction_id))?.name : null,
          subfaction: data.subfaction_id !== data.faction_id ? factionData.find((x) => (x.id === data.subfaction_id))?.name : null,
          sourceType: data.source_id ? sourceData.find((x) => x.id === data.source_id)?.type : null
        })).filter((strat) => {
          let reject = false
          // Dump anything that's not from a rulebook or codex (or if we can't tell)
          reject ||= !(strat.sourceType === null || ['Rulebook', 'Codex', 'Codex Supplement'].includes(strat.sourceType))
          // Remove non-faction strats that aren't from the core rules, they're just clutter
          reject ||= (strat.faction === null && strat.type !== 'Core Stratagem')
          // Also remove specialist detachment strats - they're pretty rarely used I think
          reject ||= (strat.type === 'Specialist Detachment Stratagem')
          // Dump crusade strats too
          reject ||= (strat.type.includes('Crusade'))
          // Keep the rest!
          return !reject
        })
        console.log(`Writing stratagem code for ${stratagems.length} strats.`)
        fs.writeFile('src/parsers/WH40k9e/Stratagems.ts', `import { Stratagem } from '../../types/WH40k9e'
          export const stratagems: Stratagem[] = ${JSON.stringify(stratagems, null, 2)}`, () => true)
        console.log('Stratagems complete!')
      } catch (error) {
        console.error(error)
      }
    })
  }
}

module.exports = StratagemDownloaderPlugin
