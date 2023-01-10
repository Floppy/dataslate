const fs = require('fs');

class StratagemDownloaderPlugin {
  apply(compiler) {
    compiler.hooks.afterResolvers.tap('StratagemDownloaderPlugin', () => {
      fs.writeFile('src/parsers/WH40k9e/Stratagems.ts',`import { Stratagem } from '../../types/WH40k9e'
export const stratagems: Stratagem[] = [
  {
    id: '',
    name: 'Table Flip',
    cp_cost: '10CP',
    type: 'core',
    description: 'Instantly lose the game.',
    datasheets: [],
    phases: ['movement', 'psychic', 'shooting', 'charge', 'fight']
  },
]`, ()=> true )
    });
  }
}

module.exports = StratagemDownloaderPlugin;
