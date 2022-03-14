import { Archetype, FireteamArchetypes, Ploy, TacOp } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
    fireteams: {
        'Void-Dancer Troupe Kill Team': [Archetype.INFILTRATION, Archetype.RECON, Archetype.SEEK_AND_DESTROY]
    }
}

const strategicPloys: Ploy[] = [
    {
        name: 'Between Colours',
        cost: 1,
        description: `Until the end of the Turning Point, friendly **VOID-DANCER TROUP💀** operatives can perform **Shoot** actions
            during **Normal Move** actions (any remaining increments of movement can be used after performing the **Shoot** action).
            You cannot select a shrieker cannon for those shooting attacks.`
    },
    {
        name: 'Domino Field',
        cost: 1,
        description: `Until the end of the Turning Point or until it makes a shooting attack, each friendly **VOID-DANCER TROUPE💀** 
        operative has a domino field. For the purposes of determining Line of Sight, while a friendly operative with a domino field
        is within ▲ of a terrain feature and more than ⬟ from the active operative, the active operative always treats that friendly
        operative as having a Conceal order, regardless of any other rules (e.g. Vantage Point).`
    },
    {
        name: 'Prismatic Blur',
        cost: 1,
        description: `Until the end of the Turning Point, each time a friendly **VOID-DANCER TROUPE💀** operative performs an action in 
        which it moves, it is a prismatic blur until the end of the Turning Point. Each time a shooting attack is made against a friendly
        operative that is a prismatic blur, in the Roll Defence Dice step of that shooting attack, you can re-roll one of your defence
        dice.`
    },
    {
        name: 'Cegorach\'s Jest',
        cost: 1,
        description: `Until the end of the Turning Point, each time a friendly **VOID-DANCER TROUPE💀** operative fights in combat, once 
        in the Resolve Successful Hits step of that combat, when your opponent strikes with a hit, you can roll one D6. If the result is
        equal to or less than the Weapon Skill characteristic of the enemy operative's selected melee weapon, treat that strike as a parry
        instead (the Brutal special rule has no effect for that parry).`
    }
]

const tacticalPloys: Ploy[] = [
    {
        name: 'Murderous Entrance',
        cost: 1,
        description: `Use this Tactical Ploy in the Resolve Successful Hits step of a combat, after a friendly **VOID-DANCER TROUP💀** operative
            that performed a **Charge** action during this activation strikes with a critical hit. You can immediately select one of your
            remaining attack dice and strike with it.`
    },
    {
        name: 'The Curtain Falls',
        cost: 1,
        description: `Use this Tactical Ploy in the Resolve Successful Hits step of a combat, after an active friendly **VOID-DANCER TROUP💀** operative
        strikes. Immediately end that combat and that friendly operative can perform a **Fall Back** action for 1AP, even if it has performed an action during 
        that activation that prevents it from performing a **Fall Back** action (e.g. a **Charge** action).`
    },
    {
        name: 'Ruthless Derision',
        cost: 1,
        description: `Use this Tactical Ploy after rolling your attack dice for a shooting attack made by a friendly **VOID-DANCER TROUP💀** operative 
        in an activation in which it performed a **Fall Back** action. You can re-roll any or all of your attack dice for that shooting attack.`
    },
    {
        name: 'Capricious Role',
        cost: 1,
        description: `Use this Tactical Ploy when a friendly **VOID-DANCER TROUP💀** operative is activated. Until the end of its
        activation, that operative can perform **Dash** and **Charge** actions while within Engagement Range of enemy operatives.`
    }
]

const tacOps: TacOp[] = [
    {
        id: 1,
        name: 'Mythic Play',
        description: `If you are using the Saedath ability, reveal this Tac Op in the Target Reveal step of the first Turning Point.
* If your Performance tally is four or more, you score 1VP.
* If our Performance tally is six or more, you score 1VP.`
    },
    {
        id: 2,
        name: 'Hero\'s Path',
        description: `You can reveal this Tac Op when a friendly **VOID-DANCER TROUPE💀** operative incapacitates an enemy operative. At the end of the battle:
* If that friendly operative has incapacitated more enemy operatives than each other friendly **VOID-DANCER TROUPE💀** operative has during the battle, you score 1VP.
* If that friendly operative is wholly within your opponent's drop zone, you score 1VP.`
    },
    {
        id: 3,
        name: 'Grand Act',
        description: `You can reveal this Tac Op in the Target Reveal step of any Turning Point. When this Tac Op is revealed, start a Grand Act tally, adding one to the 
        tally the first time each different Performance is completed by any friendly **VOID-DANCER TROUPE💀** operative. Note that it does not have to be the active
        Allegory's Performance.
* If your Grand Act tally is five, you score 1VP.
* If you achieve the first condition before the fourth Turning Point, you score 1VP.`
    }
]

const data = {
    name: 'Void-Dancer Troupe' as const,
    strategicPloys,
    tacticalPloys,
    archetypes,
    tacOps
}

export default data
