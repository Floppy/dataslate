import { Archetype, FireteamArchetypes, Ploy, TacOp } from '../../../types/KillTeam2021'

const factionLabel = '**EXACTION SQUAD💀**'
const pentagon = '⬟'
const circle = '⬤'
const square = '■'
const triangle = ''

const archetypes: FireteamArchetypes = {
  fireteams: {
    'Exaction Squad Kill Team': [Archetype.RECON, Archetype.SECURITY, Archetype.SEEK_AND_DESTROY],
    // Battlescribe data currently has 'Kill Team' as catalogue name, not Hand of the Archon
    'Kill Team': [Archetype.RECON, Archetype.SECURITY, Archetype.SEEK_AND_DESTROY]
  }
}

const strategicPloys: Ploy[] = [
  {
    name: 'Guilt Reveals Itself',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly enemy operatives must be more 
    than 2${circle} (instead of ${circle}) from it to be in Cover.`
  },
  {
    name: 'Inviolate Jurisdiction',
    cost: 1,
    description: `Until the end of the Turning Point, each time a shooting attack is made against a friendly
    ${factionLabel} operative that's within ${circle} of an objective marker or enemy operative, in the Roll 
    Defence Dice step of that shooting attack, you can re-roll one of your defence dice.`
  },
  {
    name: 'Dispense Justice',
    cost: 1,
    description: `Each time a friendly ${factionLabel} operative fights in combat in an activation (including 
    an enemy activation) in which it has not moved more than its Movement characteristic, in the Roll Attack 
    Dice step of that combat, you can re-roll one of your attack dice.`
  },
  {
    name: 'Terminal Decree',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly ${factionLabel} operative makes a 
    shooting attack against an enemy operative within within 2${circle} of it, in the Attack Dice step of that 
    shooting attack, you can re-roll one of your attack dice.`
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: "Long Arm of the Emperor's Law",
    cost: 1,
    description: `Use this Tactical Ploy in the Scouting step, when your opponent reveals their selection. They cannot 
    resolve that selection. Initiative is still determined as normal, and this Tactical Ploy has no effect on additional
    or different scouting options your opponent could perform (e.g. Pursuers, **HUNTER CLADE💀**).`
  },
  {
    name: 'Exact Punishment',
    cost: 1,
    description: `Use this Tactical Ploy after an enemy operative fights in combat or makes a shooting attack against 
    a friendly ${factionLabel} operative within ${square} of it, and that friendly operative is not incapacitated as 
    a result. That friendly operative can immediately perform a free **Fight** or **Overwatch** action, but can only
    target that enemy operative and only if it's a valid target.`
  },
  {
    name: 'Brutal Backup',
    cost: 1,
    description: `Use this Tactical Ploy after a friendly ${factionLabel} operative performs a **Fight** action with
    combat support. One of the friendly ${factionLabel} operatives that provided combat support can immediately 
    perform a free **Fight** action, but can only target the enemy operative from that previous **Fight** action, and
    only if it's a valid target.`
  },
  {
    name: 'Execution Order',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly **PROCTOR-EXACTANT** operative is activated. Select one 
    enemy operative in its Line of Sight. Until the end of the battle, each time a friendly ${factionLabel} operative
    fights in combat or makes a shooting attack against that enemy operative, in the Roll Attack Dice step of that 
    combat or shooting attack, you can re-roll any or all of your attack dice. You can only use this Tactical Ploy once.`
  }
]

const tacOps: TacOp[] = [
  {
    id: 1,
    name: 'Seize or Incapacitate',
    description: `Reveal this Tac Op in the Target Reveal step of the first Turning Point. Select one enemy operative 
    to be the criminal. If that operative is incapacitated, before it is removed from the killzone, place one of your 
    Criminal tokens underneath the operative as close as possible to the centre of its base. Friendly ${factionLabel}
    operatives (excluding **R-VR CYBER-MASTIFF** operatives) can perform the **Pick Up** action on that token while 
    not within Engagement Range of an enemy operative. Subtract ${circle} from their Movement characteristic while they are 
    carrying it.
* If that enemy operative is incapacitated, you
Score 1VP.
* At the end of the battle, if friendly operatives
control your Criminal token, you score 1VP.`
  },
  {
    id: 2,
    name: 'Contain Threat',
    description: `Reveal this Tac Op in the Target Reveal step of any Turning Point.
* At the end of any Turning Point, if every enemy operative in the killzone is within ${pentagon} of your opponent's 
drop zone and/or within ${circle} of one of your operatives, you score 1VP
* If you achieve the first condition at the end of any subsequent Turning Points, you score 1VP.`
  },
  {
    id: 3,
    name: 'Gather Evidence',
    description: `You can reveal this Tac Op the first time a friendly operative performs the **Gather Evidence**
    action (below). At the end of the battle:
* If one or more friendly operatives that have performed the **Gather Evidence** action have not been incapacitated 
during the battle, you score 1VP.
* If two or more friendly operatives that have performed the Gather Evidence action have not been incapacitated 
during the battle, you score 1VP.`,
    action: {
      id: '123',
      name: 'Gather Evidence',
      cost: 1,
      intro: 'Friendly **MALOCATOR**, **REVELATUM** and **R-VR CYBER-MASTIFF** operatives can perform the following mission action:',
      description: `An operative can perform this action while it controls an objective marker that has 
      not been examined by your kill team. If it does so, until the end of the battle, that objective 
      marker has been examined by your kill team. An operative cannot perform this action while within 
      Engagement Range of an enemy operative.`
    }
  }
]

const data = {
  name: 'Exaction Squad' as const,
  strategicPloys,
  tacticalPloys,
  archetypes,
  tacOps
}

export default data
