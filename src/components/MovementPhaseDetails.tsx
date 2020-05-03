import React from 'react';
import AbilityList from './AbilityList';
import StatBadge from './StatBadge';
import { Row, Col } from 'react-bootstrap'

import { Model } from '../types';

type Props = {
  model: Model
};

export function MovementPhaseDetails(props: Props) {
  return (
    <Row>
      <Col sm='1'>
        <StatBadge name="M" value={`${props.model.stats.movement}`}/>
      </Col>
      <Col>
        <AbilityList abilities={props.model.abilities} phase='movement'/>
      </Col>
    </Row>
  );
}