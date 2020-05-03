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

type Props = {
  model: Model
};

function Datasheet(props: Props) {
  return (
    <div className="model" style={{
      pageBreakBefore: "always",
    }}>
      <ModelTitle model={props.model}/>
      <NoPhaseDetails model={props.model}/>
      <Phase name="movement">
        <MovementPhaseDetails model={props.model}/>
      </Phase>
      { hasPsychicPhase(props.model) &&
        <Phase name="psychic">
          <PsychicPhaseDetails model={props.model}/>
        </Phase>
      }
      { hasShootingPhase(props.model) &&
        <Phase name="shooting">
          <ShootingPhaseDetails model={props.model}/>
        </Phase>
      }
      <Phase name="fight">
        <FightPhaseDetails model={props.model}/>
      </Phase>
      <Phase name="morale">
        <MoralePhaseDetails model={props.model}/>
      </Phase>
    </div>
  );
}

export default Datasheet;
