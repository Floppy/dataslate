import { calculatePhases } from './BattlescribeParser'
import _ from 'lodash'

const abilities = {
  "This model does not suffer the -1 penalty for shooting with a Heavy weapon after moving in the preceding Movement phase, or for shooting an Assault weapon after Advancing.": ['shooting'],
  "You can re-roll Advance rolls for this model.": ["movement"],
  //PENDING "You can re-roll hit rolls of 1 for this model when it makes a shooting attack.": ["shooting"],
  "This model ignores penalties to its Leadership characteristic and Nerve tests.": ["morale"],
  "Add 1 to this model’s Attacks characteristic": ["fight"],
  "You can add 1 to this model’s wound rolls against targets that are obscured.": ["shooting"],
  "Subtract 1 from any psychic tests made for enemy PSYKERS within 18\" of a model with this ability. TYRANIDS PSYKERS are not affected.": ["psychic"],
}
_.forIn(abilities, (phases, description) => {
  it(`works out right phases for ${description}`, () => {
    expect(calculatePhases(description)).toEqual(phases);
  })
});
