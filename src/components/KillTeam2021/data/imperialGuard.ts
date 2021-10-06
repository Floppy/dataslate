import { Archetype, FireteamArchetypes, Ploy } from '../../../types/KillTeam2021'

const archetypes: FireteamArchetypes = {
  'Guardsman Fire Team': [Archetype.SECURITY],
  'Tempestus Scion Fire Team': [Archetype.SECURITY, Archetype.SEEK_AND_DESTROY, Archetype.INFILTRATION, Archetype.RECON]
}

const strategicPloys: Ploy[] = [
  {
    name: 'Take Aim!',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly operative that was issued this Guardsman Order makes a shooting attack, in the Roll Attack Dice step of that
                  shooting attack, you can re-roll any or all of your attack dice results of 1.`
  }, {
    name: 'Take Cover!',
    cost: 1,
    description: `Until the end of the Turning Point, each time a shooting attack is made against a friendly operative that was issued this Guardsman Order, in the Roll Defence Dice
                  step of that shooting attack, if it is in Cover, you can re-roll any or all of your defence dice results of 1.`
  }, {
    name: 'Fix Bayonets!',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly operative that was issued this Guardsman Order fights in combat, in the Roll Attack Dice step of that combat,
                  you can re-roll any or all of your attack dice results of 1.`
  }, {
    name: 'Move! Move! Move!',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly operative that was issued this Guardsman Order is activated, until the end of that activation, add ▲ to its
                  Movement characteristic.`
  }, {
    name: 'Special Forces',
    cost: 1,
    description: `Select the Pick Up action or one mission action friendly TEMPESTUS SCION operatives can perform. Until the end of the Turning Point, each time a friendly TEMPESTUS SCION
                  operative is activated, it can perform that action for one less AP (to a minimum of 0AP).`
  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Bring It Down!',
    cost: 1,
    description: `Use this Tactical Ploy after a friendly IMPERIAL GUARD💀 operative makes a shooting attack. Until the end of the Turning Point, each time another friendly IMPERIAL GUARD💀
                  operative makes a shooting attack against the target of that shooting attack, in the Roll Attack Dice step of that subsequent shooting attack, you can re-roll any or all
                  of your attack dice.`
  }

]

const data = {
  name: 'Imperial Guard' as const,
  strategicPloys,
  tacticalPloys,
  archetypes
}

export default data
