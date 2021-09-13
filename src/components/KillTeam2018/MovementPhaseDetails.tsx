import React from 'react';
import AbilityList from '../AbilityList';
import StatBadge from './StatBadge';
import { Row, Col } from 'react-bootstrap'
import { ModelTitle } from '../ModelTitle';

import { Model } from '../../types/KillTeam2018';

type Props = {
  model: Model
};

export function MovementPhaseDetails(props: Props) {
  return (
    <Row>
      <Col>
        <ModelTitle {...props.model}/>
        <AbilityList abilities={props.model.abilities} phase='movement'/>
      </Col>
      <Col sm='auto'>
        <StatBadge name="M" value={`${props.model.stats.movement}`}/>
      </Col>
    </Row>
  );
}
