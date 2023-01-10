const axios = require('axios').default;
const fs = require('fs');
const parse = require('csv-parse/sync').parse;

class StratagemDownloaderPlugin {
  apply(compiler) {
    compiler.hooks.afterResolvers.tap('StratagemDownloaderPlugin', async () => {
      const csvOptions = {
        columns: true,
        delimiter: '|',
        quote: null,
        skip_empty_lines: true
      }
      try {
        console.log("Downloading stratagem data")
        const stratagemFile = await axios.get('https://wahapedia.ru/wh40k9ed/Stratagems.csv');
        const stratagemData = parse(stratagemFile.data, csvOptions)
        const stratagems = stratagemData.map((data) => ({
          id: data.id,
          name: data.name,
          cp_cost: data.cp_cost,
          type: data.type,
          description: data.description,
          datasheets: [],
          phases: []
        }))
        await fs.writeFile('src/parsers/WH40k9e/Stratagems.ts',`import { Stratagem } from '../../types/WH40k9e'
          export const stratagems: Stratagem[] = ${JSON.stringify(stratagems,null,2)}`, ()=> true )
      } catch (error) {
        console.error(error);
      }
    });
  }
}

module.exports = StratagemDownloaderPlugin;
