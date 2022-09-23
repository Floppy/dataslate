import { Archetype, FireteamArchetypes, Ploy, TacOp } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  fireteams: {
    'Elucidian Starstriders Kill Team': [Archetype.RECON, Archetype.SECURITY]
  }
}

const strategicPloys: Ploy[] = [
  {
    name: 'Lethal Proximity',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly **ELUCIDIAN STARSTRIDER💀** operative
        makes a shooting attack against a target within ⬟ of it, in the Roll Attack Dice step of that shooting attack,
        you can re-roll one of your attack dice.`
  },
  {
    name: 'Stake Claim',
    cost: 1,
    description: `Place one of your Claim tokens anywhere in the killzone. Each time a friendly 
        **ELUCIDIAN STARSTRIDER💀** operative fights in combat or makes a shooting attack against an enemy operative
        within ■ of that token, before rolling your attack dice, you can retain one as a successful normal hit
        without rolling it. At the end of the Turning Point, remove that Claim token.`
  },
  {
    name: 'Undaunted Explorers',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly **ELUCIDIAN STARSTRIDER💀** operative
         that is within ⬤ of an objective marker or within ⬟ of your opponent's drop zone fights in combat or a
         shooting attack is made against it, in the Resolve Successful Hits step of that combat or shooting attack, 
         you can halve the damage inflicted on that friendly operative (rounding up) from one of your opponent's
         successful hits.`
  },
  {
    name: 'New Frontier',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly **ELUCIDIAN STARSTRIDER💀** operative
        (excluding a **CANID** operative) performs a **Normal Move** action, it can move an additional ▲ for that move, 
         but must finish that move closer to your opponent's drop zone.`
  }

]

// **ELUCIDIAN STARSTRIDER💀**  ⬟ ⬤ ■ ▲
const tacticalPloys: Ploy[] = [
  {
    name: 'Combined Arms',
    cost: 1,
    description: `Use this Tactical Ploy after rolling your attack dice for a shooting attack made by a friendly
         **ELUCIDIAN STARSTRIDER💀** operative. If the target of that attack is an enemy operative that was targeted
         by another friendly **ELUCIDIAN STARSTRIDER💀** operative with a shooting attack during that Turning Point,
         you can re-roll any or all of your attack dice for that shooting attack.`
  },
  {
    name: 'Survivalist',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly **ELUCIDIAN STARSTRIDER💀** operative more than ■ from 
        enemy operatives is activated. That friendly operative regains 4 lost wounds. You can only use this Tactical
        Ploy for each friendly operative once.`
  },
  {
    name: 'Daring',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly **ELUCIDIAN STARSTRIDER💀** **NAVIS** operative is 
        activated. Add 1 to its APL.`
  },
  {
    name: 'Well-Drilled',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly **ELUCIDIAN STARSTRIDER💀** **NAVIS** operative is
        activated. Select one other friendly **ELUCIDIAN STARSTRIDER💀** **NAVIS** operative Visible to and within
        ⬟ of that operative that is eligible to be activated. After that first friendly operative has been activated,
        you can immediately activate that other friendly operative.`
  }
]

const tacOps: TacOp[] = [
  {
    id: 1,
    name: 'Reputation to Maintain',
    description: `Reveal this Tac Op the first time a **Fight** or **Shoot** action is declared for a **LEADER**
        operative (friendly or enemy). When this Tac Op is revealed, both players start a Reputation tally (if both
        players reveal this Tac Op simultaneously, only start one Reputation tally each). Add one to your 
        Reputation tally each time a friendly **LEADER** operative inflicts a point of damage on an enemy operative. Note
        that, in the rare instance an enemy operative did not lose a wound as a result of a point of damage, you would 
        still add one to the Reputation tally.
* If your Reputation tally is 12 or more, you score 1VP.
* At the end of the battle, if your Reputation tally is greater than that of your opponent's, you score 1VP.`
  },
  {
    id: 2,
    name: 'Claim For House Vhane',
    description: `Reveal this Tac Op in the Target Reveal step of the first Turning Point. Your opponent selects 
        one objective marker. It cannot be an objective marker that can be permanently removed from the killzone, but
        it can be an objective marker that can be carried.
* At the end of any Turning Point, if friendly operatives are controlling that objective marker, you score 1VP.
* At the end of the battle, if friendly operatives are controlling that objective marker, you score 1VP.`
  },
  {
    id: 3,
    name: 'Investigate Motive Force',
    description: `You can reveal this Tac Op in the Target Reveal step of any Turning Point.
* The second time a friendly **LECTRO-MAESTER** operative performs the **Investigate Motive Force** action (below),
you score 1VP.
* The third time a friendly **LECTRO-MAESTER** operative performs the **Investigate Motive Force** action, you score
1VP.`,
    action: {
      id: '1234',
      name: 'Investigate Motive Force',
      cost: 1,
      intro: 'The friendly **LECTRO-MAESTER** operative can perform the following mission action:',
      description: `An operative can perform this action while it controls an objective marker that is not 
            within your drop zone and has not been investigated for Motive Force during the battle. If it does so,
             that objective marker has been investigated for Motive Force.`
    }
  }
]

const starstriderAbilities = [
  {
    name: 'Warrant of Trade',
    text: `Up to three times per game, you can use a Warrant of Trade ability (below). Each ability specifies when 
    it can be used, you must inform your opponent when you do so, and you cannot use the same ability more than
    once per game.
    
|Ability|When|Effect|
|--|--|--|
|**Coerce**|In the Selected Drop Zone step, after rolling off to decide Attacker and Defender|You can re-roll your dice.|
|**Coordinate**|At the end of the Select a Kill Team step.|Add 1CP to your pool|
|**Adaptable Terms**|At the start of the Select Tac Ops step.|You can select Tac Ops from two of your Archetypes (rather than one)|
|**Consideration**|At the start of the Select Equipment step.|You can select 6 additional points worth of equipment for the battle.|
|**Explore**|At the end of the Scouting step.|Select and resolve an additional scouting option. It must be a different option to your original selection, and initiative is still determined by your original selection. If both players have this or a similar ability, the Defender resolves this ability first.|
|**Seize**|In the Initiative phase, after rolling off to determine initiative.|You can re-roll your dice.|`

  },
  {
    name: 'Privateer Support Assets',
    text: `Once per Firefight phase, when you would activate a ready friendly operative, you can use a Privateer Support
    Asset instead. Each time you do so, select one of the ranged weapons opposite and perform a **Shoot** action with it.
    After you have done so, your opponent activates one of their operatives as normal.
    
You cannot select a ranged weapon you selected in the previous Turning Point, but you can in a Turning Point thereafter. 
For example, if you selected archeotech beam in the first Turning Point, you couldn't select it in the second 
Turning Point, but you could in the third Turning Point. If you did so, you couldn't subsequently select it in 
the fourth Turning Point.

When making shooting attacks with the ranged weapons on this page:
* For the purposes of Line of Sight, draw Visibility and Cover lines from a friendly **NAVIS** (excluding **CANID**) or
**ELUCIA VHANE** operative that is not within Engagement Range of enemy operatives.
* For the purposes of the weapon's special rules, it is treated as if a friendly operative were making the shooting attack.
* Other than Command Re-roll (see the Kill Team Core Book), you cannot use any Strategic or Tactical Ploys for shooting
attacks made by Privateer Support Assets.

|Name|A|BS|D|Special Rules|
|----|-|--|-|-------------|
|Archeotech beam|4|4+|6/7|AP2, Barrage|
|Guided Shell|5|4+|3/5|Barrage, Blast ⬤|
|Cluster Bomb|5|4+|2/3|Barrage, Blast ■|`
  }
]

const data = {
  name: 'Elucidian Starstriders' as const,
  strategicPloys,
  tacticalPloys,
  archetypes,
  tacOps,
  starstriderAbilities
}

export default data
