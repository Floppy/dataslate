import { Ploy } from '../../../types/KillTeam2021';

const strategicPloys: Ploy[] = [
  {
    name: `Malicious Volleys`,
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly BUBONIC ASTARTES operative is activated, if it does not perform a Fight action during that activation, it
                  can perform two Shoot actions during that activation if a bolt weapon is selected for each of those shooting attacks. A bolt weapon is a ranged weapon that includes
                  'bolt' in its name, e.g. boltgun, bolt pistol etc.`
  }, {
    name: 'Hateful Assault',
    cost: 1,
    description: `Until the end of the Turning Point, each time a friendly BUBONIC ASTARTES operative is activated, if it does not perform a Shoot action during that activation, it can
                  perform two Fight actions during that activation.`
  }, {
    name: 'Contagion',
    cost: 1,
    description: `Until the end of the Turning Point, while an enemy operative is Visible to and within ⬤ of a friendly DEATH GUARD💀 operative, that enemy operative is treated as being
                injured (only subtract ⬤ from its Movement characteristic as a result of being injured if it is activated within ⬤ of a friendly DEATH GUARD💀 operative).`,

  }
]

const tacticalPloys: Ploy[] = [
  {
    name: 'Effluent Demise',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly BUBONIC ASTARTES operative is incapacitated. Inflict D3 mortal wounds on each enemy operative Visible to and within ⬤ of
                  that operative.`
  },{
    name: 'Revolting Durability',
    cost: 1,
    description: `Use this Tactical Ploy in either the Resolve Successful Hits or Resolve Successful Saves step of a combat or shooting attack made against a friendly BUBONIC ASTARTES
                  operative. You can change one of your opponent's critical hits into a normal hit.`
  },{
    name: 'Dig In',
    cost: 1,
    description: `Use this Tactical Ploy when a friendly BUBONIC ASTARTES operative is activated. Until the end of that operative's activation, it can perform the following action:`,
    action: {
      name: 'Dig In',
      cost: 1,
      description: `Until the end of the Turning Point, add 1 to this operative's Defence characteristic.`
    }
  }
]

const data = { strategicPloys, tacticalPloys, tacOps: null }

export default data
