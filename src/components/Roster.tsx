import React from 'react';
import Phase from './Phase';
import { ModelTitle } from './ModelTitle';
import { NoPhaseDetails } from './NoPhaseDetails';
import { MovementPhaseDetails } from './MovementPhaseDetails';
import { PsychicPhaseDetails, hasPsychicPhase } from './PsychicPhaseDetails';
import { ShootingPhaseDetails, hasShootingPhase } from './ShootingPhaseDetails';
import { FightPhaseDetails } from './FightPhaseDetails';
import { MoralePhaseDetails } from './MoralePhaseDetails';

import { Model } from '../types';

const _ = require('lodash')

type Props = {
  models: Model[],
};

function Roster(props: Props) {
  // Display models sorted by category and type
  const sortedModels = _.sortBy(props.models, (x: Model) => ([x.category == null, x.category, x.type]));
  return <>
    {sortedModels.map((model: Model) => (
      <div className="model" style={{
        pageBreakBefore: "always",
      }}>
        <ModelTitle model={model}/>
        <NoPhaseDetails model={model}/>
        <Phase name="movement">
          <MovementPhaseDetails model={model}/>
        </Phase>
        { hasPsychicPhase(model) &&
          <Phase name="psychic">
            <PsychicPhaseDetails model={model}/>
          </Phase>
        }
        { hasShootingPhase(model) &&
          <Phase name="shooting">
            <ShootingPhaseDetails model={model}/>
          </Phase>
        }
        <Phase name="fight">
          <FightPhaseDetails model={model}/>
        </Phase>
        <Phase name="morale">
          <MoralePhaseDetails model={model}/>
        </Phase>
      </div>
    ))}
  </>
}

export default Roster;
