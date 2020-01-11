import { calculatePhases } from './BattlescribeParser'

it('works out right phases for Relentless (heavy)', () => {
  const description = "This model does not suffer the -1 penalty for shooting with a Heavy weapon after moving in the preceding Movement phase, or for shooting an Assault weapon after Advancing."
  expect(calculatePhases(description)).toEqual(["shooting"]);
})

it('works out right phases for Swift (scout)', () => {
  const description = "You can re-roll Advance rolls for this model."
  expect(calculatePhases(description)).toEqual(["movement"]);
})

it('works out right phases for Marksman (sniper)', () => {
  const description = "You can re-roll hit rolls of 1 for this model when it makes a shooting attack."
  expect(calculatePhases(description)).toEqual(["shooting"]);
})

it('works out right phases for Grizzled (veteran)', () => {
  const description = "This model ignores penalties to its Leadership characteristic and Nerve tests."
  expect(calculatePhases(description)).toEqual(["morale"]);
})

it('works out right phases for Expert Fighter (combat)', () => {
  const description = "Add 1 to this model’s Attacks characteristic"
  expect(calculatePhases(description)).toEqual(["fight"]);
})

it('works out right phases for Breacher (demolitions)', () => {
  const description = "You can add 1 to this model’s wound rolls against targets that are obscured."
  expect(calculatePhases(description)).toEqual(["shooting"]);
})