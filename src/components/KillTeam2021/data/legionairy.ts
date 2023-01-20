import { Archetype, FireteamArchetypes, Ploy, TacOp } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  fireteams: {
    'Legionary Kill Team': [Archetype.SECURITY, Archetype.SEEK_AND_DESTROY]
  }
}

const strategicPloys: Ploy[] = [
  {
    name: 'Hateful Assault',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly **LEGIONARY💀** operative is 
    activated, if it does not perform a **Shoot** action during that activation, it can perform two 
    **Fight** actions during that activation.`
  },
  {
    name: 'Malicious Volleys',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly **LEGIONARY💀** operative is
    activated, if it does not perform a **Fight** action during that activation, it can perform two
    **Shoot** actions during that activation if a bolt weapon is selected for each of the shooting attacks.
    A bolt weapon is a ranged weapon that includes the word 'bolt' in its name, e.g. boltgun, heavy bolter etc.`
  },
  {
    name: 'Blood for the Blood God',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly **KHORNE** operative fights in combat,
    in the Resolve Successful Hits step of that combat, if it performed a **Charge** action during that activation,
    the first time it strikes, inflict one additional damage.`
  },
  {
    name: 'Perpetual Aggression',
    cost: 1,
    description: `Until the end of the Turning Point, each time after a friendly **KHORNE** operative fights
    in combat, if it is not within Engagement Range of an enemy operative, it can make a move following the 
    same rules as a **Normal Move** action, with the following exceptions:
* It can only move up to ■.
* It can move within Engagement Range of enemy operatives.
* If it can, it must finish the move within Engagement Range of the closest Visible enemy operative.
* It can do so even if it's performed a **Normal Move** or **Charge** action during the activation, and vice versa, doing so doesn't
prevent it from subsequently performing a **Normal Move** or **Charge** action during that activation in the normal manner.`
  },
  {
    name: 'Mutagenic Flesh',
    cost: 1,
    description: `Until the end of the Turning Point, each time Normal Damage would be inflicted upon a friendly
    **NURGLE** operative from an attack dice, subtract 1 from the damage inflicted from that attack dice (to a 
    minimum of 2).`
  },
  {
    name: 'Implacable',
    cost: 1,
    description: `Until the end of the Turning Point, friendly **NURGLE** operatives:
* Are not treated as being injured.
* Ignore all negative modifiers to their APL.
* Ignore the worsening of their Ballistic Skill when performing an **OVERWATCH** action.`
  },
  {
    name: 'Graceful Killer',
    cost: 1,
    description: `Until the end of the Turning Point, add 1 to the Critical Damage characteristic of friendly **SLAANESH**
    operatives' melee weapons.`
  },
  {
    name: 'Delicious Agony',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly **SLAANESH** operative fights in combat, in the 
    Resolve Successful Hits step of that combat, when you would resolve your first successful hit, if the target is injured, 
    you can resolve two of your successful hits (instead of one).`
  },
  {
    name: 'Protected by Fate',
    cost: 1,
    description: `Until the end of the Turning Point, each time a shooting attack is made against a friendly **TZEENTCH**
    operative, in the Roll Defence Dice step of that shooting attack, if you retain any critical saves, you can select
    one of your failed saves to be retained as a successful normal save.`
  },
  {
    name: 'Aetheric Ward',
    cost: 1,
    description: 'Until the end of the Turning Point, friendly **TZEENTCH** operatives have a 4+ invulnerable save.'
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Veteran of the Long War',
    cost: 1,
    description: `Use this Tactical Ploy during a friendly **LEGIONARY💀** operative's actiation, after it
    fights in combat or makes a shooting attack. If the target did not lose any wounds as a result of that
    combat or shooting attack, repeat that combat or shooting attack.`
  },
  {
    name: 'Unending Bloodshed',
    cost: 1,
    description: `Use this Tactical Ploy when a ready friendly **KHORN** operative is incapacitated in combat
    by an enemy operative. Before that friendly operative is removed from the killzone, select one melee 
    weapon it is equipped with and roll one attack dice as if it is the attacker fighting in combat. If the
    result is a successful hit, you can immediately strike an enemy operative within Engagement Range of it.
    Then remove that friendly operative from the killzone as normal.`
  },
  {
    name: 'Mutability and Change',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly **TZEENTCH** operative is activated. Add 1 to
    that operative's APL.`
  },
  {
    name: 'Malignant Aura',
    cost: 1,
    description: `Use this Tactical Ploy during a friendly **NURGLE** operative's activation. Until the end
    of the Turning Point, while and enemy operative is within ■ of that **NURGLE** operative, subtract 1 from 
    the Defence characteristic of that enemy operative.`
  },
  {
    name: 'Sickening Captivation',
    cost: 1,
    description: `use this Tactical Ploy during a friendly **SLAANESH** operative's activation. Select one
    enemy operative Visible to and within ■ of that **SLAANESH** operative. Subtract 1 from that enemy 
    operative's APL.`
  }
]

const tacOps: TacOp[] = [
  {
    id: 1,
    name: 'Sacrilegious Mutilation',
    description: `Reveal this Tac Op the first time an enemy operative is incapacitated. Each time
    an enemy operative is incapacitated, before it is removed from the killzone, place one of your
    Enemy Corpse tokens underneath the operative as close as possible to the centre of its base.
    
* The second time a friendly operative performs the **Defiled For the Dark Gods** action, you score 1VP.
* The fourth time a friendly operative performs the **Defiled For the Dark Gods** action, you score 1VP.

    Friendly operatives can perform the following mission actions.`,
    action: {
      id: '1',
      name: 'Defiled for the Dark Gods',
      cost: 1,
      intro: '',
      description: `An operative can perform this action while within ▲ of one of your Enemy Corpse tokens.
      An operative cannot perform this action while within ⬤ of an enemy operative. Remove that Enemy 
      Corpse Token from the killzone.`
    }
  },
  {
    id: 2,
    name: 'Dark Desecration',
    description: `Reveal this Tac Op in the Target Reveal stage of the first Turning Point. Select one terrain
    feature that includes any parts with the Heavy trait.

* If two or more enemy operatives are incapacitated while within ▲ of that terrain feature, you score 1VP.
* If you achieve the first condition and at the end of the battle the total APL of friendly operatives
within ▲ of that terrain feature is greater than that of enemy operatives, you score 1VP.

This Tac Op is not in use when the Close Quarters rules are in effect.`
  },
  {
    id: 3,
    name: 'Savage Butcher',
    description: `You can reveal this Tac Op in the Target Reveal step of any Turning Point. Select one
    friendly operative.
* If two or more enemy operatives are incapacitated in combat by that friendly operative, you score 1VP.
* If three or more enemy operatives are incapacitated in combat by that friendly operative, you score 1VP.`
  }
]

const data = {
  name: 'Legionary' as const,
  strategicPloys,
  tacticalPloys,
  archetypes,
  tacOps
}

export default data
