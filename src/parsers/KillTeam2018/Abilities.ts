import _ from 'lodash'
import { Ability } from '../../types/Ability'

const phasePatterns = {
  scouting: [
    / scouting /
  ],
  deployment: [
    / before the first battle round /,
    / set up /,
    / cult ambush /
  ],
  initiative: [
    / start of each battle round /,
    / beginning of each battle round /,
    / at the beginning of the battle round /
  ],
  movement: [
    / movement phase /,
    / climbs? /,
    / normal move /,
    / advances? /,
    / charges? /,
    / falls? back /,
    / reacts? /,
    / overwatch /,
    / retreats? /,
    / fly /,
    / after this model has charged /,
    / from reserves? /,
    / can move across /,
    / setup within /
  ],
  psychic: [
    / psychic /,
    / deny the witch /,
    / perils of the warp /,
    / psychich / // handle typo
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
    / obcured /, // handle typo
    / order(ed)? /,
    / voice of command /,
    / invulnerable save /,
    / demolition charges? /,
    / liberator autostubs /,
    / obscurred /, // handle typo
    / look out sir! /,
    / pistol /,
    / heavy weapons?/,
    / add [0-9] to saving throws /
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
    / death to the false emperor /,
    / additional attacks? /,
    / invulnerable save /,
    / look out sir! /,
    / intervening terrain /,
    / terrain that is between the two models /,
    / damage characteristic is [0-9] in a battle round in which this model charged /,
    / add [0-9] to saving throws /
  ],
  morale: [
    / nerve /,
    / leadership /
  ]
}

const genericPatterns = [
  / weapon /,
  / hit rolls? /,
  / attack(s|ing)? /,
  / saves? /,
  / saving throws? /,
  / injury rolls? /,
  / wound rolls? /,
  / loses? a wound /,
  / fall(ing)? damage /,
  / the bearer is taken out of action /,
  / toughness characteristic /,
  / suffers? a mortal wound /,
  / taken out of action /,
  / this weapon/,
  / reduced to 0 wounds /
]

const antiPatterns = {
  deployment: [
    / from reserve /
  ],
  movement: [
    / previous movement phase /,
    / preceding movement phase /,
    / if the firing model moved /,
    / moved during the movement phase /,
    / round in which it charges or is charged /,
    / in which it made a successful charge /,
    / even if it fell back in the movement phase /,
    / model that can fly /,
    / as if it were the movement phase /,
    / stunned /,
    / penalty for moving /,
    / as if the model had remained stationary /,
    / demolition charge /
  ],
  psychic: [
    / after all of this weapon's attacks have been resolved /
  ],
  shooting: [
    / when (it|this model) fires overwatch /,
    / invulnerable save (against attacks made )?in the fight phase /,
    / as if it were your shooting phase /,
    / tactical support turret /,
    / out of action in the shooting phase /,
    / mordian /
  ],
  fight: [
    / the ordered model immediately fights /,
    / shots equal to its attacks characteristic /,
    / stunned /,
    / target enemies at [0-9]{1,2}" or less /,
    / within half range /,
    / tactical support turret /
  ],
  morale: [
    / target model's leadership /,
    / weapon against a model which has a leadership /,
    / subtract 1 from its leadership / // phantasm grenade effect
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

export const parseAdditionalAttacks = (description: string): number => {
  const patterns = [
    /Add ([1-9]{1}) to this model's Attacks characteristic/,
    / ([1-9]|an|one|two) additional attack/,
    /(one) \(and only one\) attack with this weapon./
  ]
  const antiPatterns = [
    /if a model/,
    /if the bearer/,
    /unless/
  ]
  return _.sum(_.map(patterns, (pattern) => {
    const match = description.match(pattern)
    if (match != null) {
      if (_.some(antiPatterns, (re) => (re.test(description)))) {
        return 0
      }
      if (match[1] === 'an' || match[1] === 'one') return 1
      if (match[1] === 'two') return 2
      return parseInt(match[1] ?? match[2])
    }
    return 0
  }))
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
