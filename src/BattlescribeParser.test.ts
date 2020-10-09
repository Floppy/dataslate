import { calculatePhases } from './BattlescribeParser'
import _ from 'lodash'
import parse from 'csv-parse/lib/sync'
import fs from 'fs'

const abilities = parse(fs.readFileSync("abilities.csv"), {
  columns: true,
  skip_empty_lines: true
})
_.forEach(abilities, (a) => {
  describe(`for the ability "${a.ability}"`, () => {
    it('works out correct phases', () => {
      const phases = calculatePhases(a.ability)
      const expectedPhases = []
      _.forIn({
        scouting: a.scouting === 'Y',
        deployment: a.deployment === 'Y',
        initiative: a.initiative === 'Y',
        movement: a.movement === 'Y',
        psychic: a.psychic === 'Y',
        shooting: a.shooting === 'Y',
        fight: a.fight === 'Y',
        morale: a.morale === 'Y'
      },(value, key) => {
        if (value)
          expectedPhases.push(key)
      });
      expect(phases.sort()).toEqual(expectedPhases.sort());
    });
  });
});
