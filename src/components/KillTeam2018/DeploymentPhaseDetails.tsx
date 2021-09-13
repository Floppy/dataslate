import React from 'react';
import AbilityList from '../AbilityList';
import { Row, Col } from 'react-bootstrap'
import { ModelTitle } from '../ModelTitle';
import { Model } from '../../types/KillTeam2018';

type Props = {
  model: Model
};

export function DeploymentPhaseDetails(props: Props) {
  return (
    <Row>
      <Col>
        <ModelTitle {...props.model}/>
        <AbilityList abilities={props.model.abilities} phase='deployment'/>
      </Col>
    </Row>
  );
}

export function hasDeploymentPhase(model: Model) {
  return ((model.abilities.filter((x) => (x.phases.indexOf("deployment") >= 0))).length > 0)
}
