import { Archetype, FireteamArchetypes, Ploy, TacOp } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  fireteams: {
    'Farstalker Kinband Kill Team': [Archetype.RECON, Archetype.SEEK_AND_DESTROY]
  }
}

// **FARSTALKER KINBAND💀**  ⬟ ⬤ ■ ▲

const strategicPloys: Ploy[] = [
  {
    name: 'Cut-Throats',
    cost: 1,
    description: `Until the end of the Turning Point, add 1 to the Attacks characteristic of melee weapons
    friendly **FARSTALKER KINBAND💀** operatives are equipped with (to a maximum of 5).`
  },
  {
    name: 'Farstalk',
    cost: 1,
    description: `Immediately change the order of up to three friendly **FARSTALKER KINBAND💀** operatives that 
    are more than ■ from enemy operatives`
  },
  {
    name: 'Prey',
    cost: 1,
    description: `Until the end of the Turning Point, friendly **FARSTALKER KINBAND💀** operatives gain the 
    following ability:
    
**Prey**: Each time this operative is activated, you can use this ability. If you do so, until the end of the 
    Turning Point, ranged weapons this operative is equipped with (excluding quill grenades) gain the Balanced and
    Heavy special rules.`
  },
  {
    name: 'Bound',
    cost: 1,
    description: `Until the end of the Turning Point, friendly **FARSTALKER KINBAND💀** operatives:
* Ignore the first distance of ⬤ they travel each time they climb, drop or traverse.
* Automatically pass jump tests.`
  }

]

const tacticalPloys: Ploy[] = [
  {
    name: 'Mercenary Contract',
    cost: 1,
    description: `Use this Tactical Ploy in the Select Tac Ops step, when building your Tac Ops deck. Instead of 
    adding one card to your deck from your selected archetype, you can add one from an archetype you did not
    choose (you must still have a six-card deck).`
  },
  {
    name: 'Slip Away',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly **FARSTALKER KINBAND💀** operative is activated. Until the 
    end of its activation, that operative can perform the **Fall Back** action for one less action point (to a 
    minimum of 0AP).`
  },
  {
    name: 'Poach',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly **FARSTALKER KINBAND💀** operative is activated. Until the end
    of its activation, that operative only needs to be within the required range of an objective marker or token to
    perform mission actions and the **Pick Up** action associated with that objective marker (they do not need to 
    control it). In addition, they can do so while within Engagement Range of an enemy operative.`
  },
  {
    name: 'Vengeance for the Kinband',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly **FARSTALKER KINBAND💀** operative is incapacitated by an enemy
    operative. Until the end of the battle, each time another friendly **FARSTALKER KINBAND💀** operative fights in
    combat or makes a shooting attack against that enemy operative, in the Roll Attack Dice step of that combat or 
    shooting attack, you can re-roll any or all of your attack dice. You cannot use this Tactical Ploy in the battle
    again until that enemy operative is incapacitated.`
  }
]

const tacOps: TacOp[] = [
  {
    id: 1,
    name: 'Butcher',
    description: `Reveal this Tac Op the first time an enemy operative is incapacitated. Each time an enemy operative
    is incapacitated, before it is removed from the killzone, place one of your Meat tokens underneath the operative as
    close as possible to the centre of its base. The **Pick Up** action can be performed upon your Meat tokens by 
    friendly **FARSTALKER KINBAND💀** operatives, even if they are carrying another objective marker or token.
* At the end of the battle, if the total number of your Meat tokens that friendly operatives control is equal to or more
than a quarter of the number of enemy operatives selected for deployment, you score 1 VP.
* At the end of the battle, if the total number of your Meat tokens that friendly operatives control is equal to or more
than half of the number of enemy operatives selected for deployment, you score 1VP.`
  },
  {
    id: 2,
    name: 'Balance The Books',
    description: `You can reveal this Tac op when you score maximum victory points from another Tac Op.
* If you score maximum victory points from a Tac Op, and no more than half of your operatives have been incapacitated
when you do so, you score 1VP.
* If you score maximum victory points from another Tac Op, and no more than half of your operatives have been
incapacitated when you do so, you score 1VP. `
  },
  {
    id: 3,
    name: 'Bounty Hunters',
    description: `Reveal this Tac Op in the Target Reveal step of the first Turning Point. Your opponent selects one of
    their operatives.
* If that enemy operative is incapacitated, you score 1VP and place your Bounty token underneath the operative as close 
as possible to the centre of its base.
* If a friendly operative performs the **Confirm Hit** action, you score 1VP.`,
    action: {
      id: '123',
      name: 'Confirm Hit',
      cost: 1,
      description: `An operative can perform this action while within ■ of your Bounty Token and not within 
      Engagement Range of an enemy operative. Remove your Bounty token.`
    }
  }
]

const data = {
  name: 'Farstalker Kinband' as const,
  strategicPloys,
  tacticalPloys,
  archetypes,
  tacOps
}

export default data
