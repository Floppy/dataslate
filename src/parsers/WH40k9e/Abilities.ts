import _ from 'lodash'
import { Ability } from '../../types/Ability'

const phasePatterns = {
  deployment: [
    / before the first battle round /,
    / set up /,
    / cult ambush /
  ],
  battle_round_start: [
    / start of each battle round /,
    / beginning of each battle round /,
    / at the beginning of the battle round /
  ],
  command: [
    / command phase /,
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
    / perils of the warp /,
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
  ],
  charge: [
    / charge[sd]? /
  ],
  fight: [
    / fight phase /,
    / fights? /,
    / weapon skill /,
    / attacks characteristics? /,
    / strength characteristics? /,
    / piles? in /,
    / consolidates? /,
    / melee /,
    / close combat /,
  ],
  morale: [
    / nerve /,
    / leadership /,
    / morale /,
    / attrition /,
  ]
}

const genericPatterns = [
  / loses? a wound /,
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
