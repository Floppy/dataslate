import { data } from './data'

const keywords = ['Dash', 'Fight', 'Charge', 'Shoot', 'Overwatch', 'Normal Move', 'Fall Back']

describe('faction data', () => {
  it('has all the keywords bold', () => {
    for (const factionData of data) {
      for (const ployData of factionData.strategicPloys) {
        for (const keyword of keywords) {
          if (ployData.description.includes(keyword)) {
            expect(ployData.description).toContain(`**${keyword}**`)
          }
        }
      }

      for (const ployData of factionData.tacticalPloys) {
        for (const keyword of keywords) {
          if (ployData.description.includes(keyword)) {
            expect(ployData.description).toContain(`**${keyword}**`)
          }
        }
      }

      // @ts-expect-error
      if (factionData.tacOps !== undefined) {
        // @ts-expect-error
        for (const opsData of factionData.tacOps) {
          for (const keyword of keywords) {
            if (opsData.description.includes(keyword) === true) {
              expect(opsData.description).toContain(`**${keyword}**`)
            }
          }
        }
      }
    }
  })
})
