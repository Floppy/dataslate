import React from 'react';
import { Model } from '../types';
import Phase from './Phase';
import { NoPhaseDetails } from './NoPhaseDetails';
import { MovementPhaseDetails } from './MovementPhaseDetails';
import { PsychicPhaseDetails, hasPsychicPhase } from './PsychicPhaseDetails';
import { ShootingPhaseDetails, hasShootingPhase } from './ShootingPhaseDetails';
import { FightPhaseDetails } from './FightPhaseDetails';
import { MoralePhaseDetails } from './MoralePhaseDetails';

const _ = require('lodash')

type Props = {
  models: Model[],
};

function Roster(props: Props) {
  // Display models sorted by category and type
  const sortedModels = _.sortBy(props.models, (x: Model) => ([x.category == null, x.category, x.type]))
  return <>
    <Phase name="Overview">
      {sortedModels.map((model: Model) => (
        <>
          <NoPhaseDetails model={model}/>
        </>
      ))}
    </Phase>
    <Phase name="movement">
      {sortedModels.map((model: Model) => (
        <MovementPhaseDetails model={model}/>
      ))}
    </Phase>
    {_.some(sortedModels, hasPsychicPhase) &&
      <Phase name="psychic">
        {sortedModels.map((model: Model) => (
          hasPsychicPhase(model) &&
          <PsychicPhaseDetails model={model}/>
        ))}
      </Phase>
    }
    <Phase name="shooting">
      {sortedModels.map((model: Model) => (
        hasShootingPhase(model) &&
          <ShootingPhaseDetails model={model}/>
      ))}
    </Phase>
    <Phase name="fight">
      {sortedModels.map((model: Model) => (
        <FightPhaseDetails model={model}/>
      ))}
    </Phase>
    <Phase name="morale">
      {sortedModels.map((model: Model) => (
        <MoralePhaseDetails model={model}/>
      ))}
    </Phase>
  </>
}

export default Roster;
