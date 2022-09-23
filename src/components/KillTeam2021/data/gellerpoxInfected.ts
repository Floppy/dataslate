import { Archetype, FireteamArchetypes, Ploy, TacOp } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  fireteams: {
    'Gellerpox Infected Kill Team': [Archetype.SECURITY, Archetype.SEEK_AND_DESTROY]
  }
}

// **GELLERPOX INFECTED💀**  ⬟ ⬤ ■

const strategicPloys: Ploy[] = [
  {
    name: 'Blessings of Pox',
    cost: 1,
    description: `Until the end of the Turning Point, each time a shooting attack is made against a 
        friendly **GELLERPOX INFECTED💀** operative, at the end of the Roll Defence Dice step of that 
        shooting attack, if the total results of your discarded failed saves is 7 or more, you can retain
        one failed save as a successful normal save instead.`
  },
  {
    name: 'Blessings of Infection',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly **GELLERPOX INFECTED💀** 
        operative fights in combat, at the end of the Roll Attack Dice step of that combat, if the total 
        results of your discarded failed hits is 3 or more, you can retain one failed hit as a successful
        normal hit instead.`
  },
  {
    name: 'Drawn to the Hum',
    cost: 1,
    description: `Select one objective marker. Each friendly **GELLERPOX INFECTED💀** operative within ⬟
        of it can immediately perform a free **Dash** action, but must finish that move closer to it. This 
        Strategic Ploy cost 1 additional Command point for each previous time you have used it during the battle 
        (e.g. 1CP for the first time you would use it, 2CP the second time etc.).`
  },
  {
    name: 'Rust Emanations',
    cost: 1,
    description: `Until the end of the Turning Point, while an enemy operative is within Engagement Range of
        friendly **GELLERPOX INFECTED💀** operatives (excluding **MUTOID VERMIN** operatives), that enemy operative
        is treated as being injured, regardless of any rules that say they cannot be injured. Only subtract ⬤ from
        their Movement characteristic as a result of being injured if they are activated within Engagement Range of
        that friendly operative.`
  }

]

const tacticalPloys: Ploy[] = [
  {
    name: 'Pollute Stockpile',
    cost: 1,
    description: `Use this Tactical Ploy at the start of the Select Equipment step. Select one item of equipment 
        from your opponent's faction army list, then select one of the follow effects:
* Your opponent must spend one additional equipment point each time they select that item of equipment for the battle.
* Your opponent can only select that item of equipment for the battle a maximum of once.`
  },
  {
    name: 'Barge',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly **NIGHTMARE HULK** operative is activated. Until the end 
        of the activation, that operative can move around, across and over other operatives (and their bases) as if 
        they were not there, and can perform **Charge** and **Normal Move** actions while within Engagement Range
        of enemy operatives, but must finish moves following all requirements specified by that move, and cannot finish
        moves on top of other operatives (or their bases).`
  },
  {
    name: 'Putrescent Demise',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly **GELLERPOX INFECTED💀** operative (excluding a **MUTOID
        VERMIN** operative) is incapacitated. Inflict 1 mortal wound (or D3 mortal wounds if that friendly operative
        is a **NIGHTMARE HULK operative) on each enemy operative Visible to and within ⬤ of that friendly operative.`
  },
  {
    name: 'Frightening Onslaught',
    cost: 1,
    description: `Use this Tactical Ploy after a friendly **NIGHTMARE HULK** operative performs a **Fight** action.
        If that operative is still within Engagement Range of an enemy operative, you can immediately fight in combat
        with it again (this does not cost any action points and you do not have to select the same target).`
  }
]

const tacOps: TacOp[] = [
  {
    id: 1,
    name: 'Rampant Nightmare',
    description: `Reveal this Tac Op in the Target Reveal step of any Turning Point. Start a Rampant Nightmare 
        tally for your kill team, adding 1 to the tally each time an enemy operative loses a wound as a result of 
        one of your **NIGHTMARE HULK** operatives within that enemy operative's Engagement Range.
* If your Rampant Nightmare tally is 30 or more, you score 1 VP.
* If your Rampant Nightmare tally is 50 or more, you score 1 VP.`
  },
  {
    id: 2,
    name: 'Pestilent Hosts',
    description: `Reveal this Tac Op the first time an enemy operative is incapacitated. Each time an enemy 
        operative is incapacitated, before it is removed from the killzone, place one of your Pestilent Host tokens
        underneath the operative as close as possible to the centre of its base. At the end of each Turning Point,
        add each Pestilent Host token that friendly **GELLERPOX INFECTED💀** operatives control to your Pestilent
        Host token pool.
* If the total number of Pestilent Host tokens in your pool is equal to or more than a third of the number
of enemy operatives selected for deployment, you score 1VP.
* If the total number of Pestilent Host tokens in your pool is equal to or more than two thirds of the 
number of enemy operatives selected for deployment, you score 1VP.`
  },
  {
    id: 3,
    name: 'Tech Infection',
    description: `You must Reveal this Tac Op when a friendly operative performs the **Tech Infection** action
        (below).
        * If 3 or more objective markers are tech infected by your kill team, you score 1VP.
        * If 4 or more objective markers are tech infected by your kill team, you score 1VP.`,
    action: {
      id: '123',
      name: 'Tech Infection',
      cost: 1,
      intro: `Friendly **GELLERPOX INFECTED💀** operatives can perform the following mission action:`,
      description: `An operative can perform this action while it controls an objective marker that has not
                been tech infected by your kill team. If it does so, that objective marker has been tech infected 
                by your kill team.`
    }
  }
]

const data = {
  name: 'Gellerpox Infected' as const,
  strategicPloys,
  tacticalPloys,
  archetypes,
  tacOps
}

export default data
