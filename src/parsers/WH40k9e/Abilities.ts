import _ from 'lodash'
import { Ability } from '../../types/Ability'

const phasePatterns = {
  before_battle: [
    / before the battle/,
    / without taking up a battlefield role slot/
  ],
  deployment: [
    / deployment/,
    / first set up/
  ],
  battle_round_start: [
    / start of each battle round /,
    / beginning of each battle round /,
    / at the beginning of the battle round /
  ],
  command: [
    / command phase /
  ],
  movement: [
    / movement phase /,
    / climbs? /,
    / normal move /,
    / advances? /,
    / falls? back /,
    / reacts? /,
    / overwatch /,
    / retreats? /,
    / fly /,
    / from reserves? /,
    / can move across /,
    / setup within /
  ],
  psychic: [
    / psychic /,
    / deny the witch /,
    / perils of the warp /
  ],
  shooting: [
    / shooting phase /,
    / shots? /,
    / ballistic skill /,
    / ranged /,
    / range characteristic /,
    / half range /,
    / long range /,
    / short range /,
    / grenades? /,
    / shoots? /,
    / shooting /,
    / fire[sd]+ /,
    / firing /,
    / obscured /,
    / pistol /,
    / heavy weapons?/,
    / look out sir/
  ],
  charge: [
    / charge[sd]? /,
    / heroic intervention/
  ],
  fight: [
    / fight phase /,
    / fights? /,
    / weapon skill /,
    / attacks characteristics? /,
    / strength characteristics? /,
    / piles? in /,
    / pile-in /,
    / consolidates? /,
    / melee /,
    / close combat /
  ],
  morale: [
    / nerve /,
    / leadership /,
    / morale /,
    / attrition /
  ]
}

const genericPatterns = [
  / loses? a wound /,
  / model is destroyed/,
  / attack is allocated/,
  / as a result of an attack/,
  / an attack is made against this (model|unit)/,
  / invulnera.le save/ // the dot is to handle a typo
]

const antiPatterns = {
  deployment: [
  ],
  battle_round_start: [
  ],
  command: [
  ],
  movement: [
  ],
  psychic: [
  ],
  shooting: [
    /not equipped with any ranged weapons/
  ],
  charge: [
  ],
  fight: [
  ],
  morale: [
  ]
}

export const calculatePhases = (description: string): string[] => {
  const minDesc = ' ' + description.toLowerCase().replace(/[.,)(]/g, '') + ' '
  const phases: string[] = []
  _.forIn(phasePatterns, (patterns, phase) => {
    if (_.some(patterns, (re) => (re.test(minDesc)))) {
      phases.push(phase)
    }
  })
  // If there's no fight or shoot yet, test some generic patterns that could be either
  if (!phases.includes('fight') && !phases.includes('shooting')) {
    if (_.some(genericPatterns, (re) => (re.test(minDesc)))) {
      phases.push('fight', 'shooting')
    }
  }
  // Remove phases for some patterns that get picked up incorrectly
  _.forIn(antiPatterns, (patterns, phase) => {
    if (_.some(patterns, (re) => (re.test(minDesc)))) {
      _.remove(phases, (p) => (p === phase))
    }
  })
  // OK, done
  return phases
}

export const invulnerableSave = (abilities: Ability[]): number | null | undefined => {
  const patterns = [
    /models with this ability have a ([1-6]{1})\+ invulnerable save/,
    /has a ([1-6]{1})\+ invulnerable save($|\.|,| and| instead of)/,
    /has an invulnerable save of ([1-6]{1})\+/
  ]
  const saves = _.map(abilities, (a) => {
    return _.min(_.map(patterns, (pattern) => {
      const match = a.description.match(pattern)
      if (match != null) {
        return parseInt(match[1])
      }
      return null
    }))
  })
  return _.min(saves)
}
