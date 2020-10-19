import React from 'react';
import { Col } from 'react-bootstrap';
import { Model } from '../types';
import Phase from './Phase';
import { NoPhaseDetails } from './NoPhaseDetails';
import { MovementPhaseDetails } from './MovementPhaseDetails';
import { ScoutingPhaseDetails, hasScoutingPhase } from './ScoutingPhaseDetails';
import { DeploymentPhaseDetails, hasDeploymentPhase } from './DeploymentPhaseDetails';
import { InitiativePhaseDetails, hasInitiativePhase } from './InitiativePhaseDetails';
import { PsychicPhaseDetails, hasPsychicPhase } from './PsychicPhaseDetails';
import { ShootingPhaseDetails, hasShootingPhase } from './ShootingPhaseDetails';
import { FightPhaseDetails } from './FightPhaseDetails';
import { MoralePhaseDetails } from './MoralePhaseDetails';
import { CloseButton } from './CloseButton';

const _ = require('lodash')

type Props = {
  name: string,
  points: number,
  models: Model[],
  onClose: any,
};

function Roster(props: Props) {
  // Display models sorted by category and type
  const sortedModels = _.sortBy(props.models, (x: Model) => ([x.category == null, x.category, x.type]))
  return <>
    <h1 style={{
      background: 'black',
      color: 'white',
      padding: '10px',
      width: '100%',
      textTransform: 'capitalize',
      display: 'flex',
    }}>
      <Col>
        {props.name}
      </Col>
      <Col style={{flexGrow: 0, textAlign: 'right'}}>
        <small>{props.points}pts</small>
      </Col>
      <Col style={{flexGrow: 0, textAlign: 'right'}}>
        <CloseButton onClose={props.onClose}/>
      </Col>
    </h1>
    <>
      {sortedModels.map((model: Model) => (
        <NoPhaseDetails model={model}/>
      ))}
    </>
    {_.some(sortedModels, hasScoutingPhase) &&
      <Phase name="scouting">
        {sortedModels.map((model: Model) => (
          hasScoutingPhase(model) &&
          <ScoutingPhaseDetails model={model}/>
        ))}
      </Phase>
    }
    {_.some(sortedModels, hasDeploymentPhase) &&
      <Phase name="deployment">
        {sortedModels.map((model: Model) => (
          hasDeploymentPhase(model) &&
          <DeploymentPhaseDetails model={model}/>
        ))}
      </Phase>
    }
    {_.some(sortedModels, hasInitiativePhase) &&
      <Phase name="initiative">
        {sortedModels.map((model: Model) => (
          hasInitiativePhase(model) &&
          <InitiativePhaseDetails model={model}/>
        ))}
      </Phase>
    }
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
