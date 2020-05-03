import React from 'react';
import StatBadge from './StatBadge';
import AbilityList from './AbilityList';
import { Row, Col } from 'react-bootstrap'

import { Model } from '../types';

type Props = {
  model: Model
};

export function MoralePhaseDetails(props: Props) {
  return (
    <Row>
      <Col sm='1'>
        <StatBadge name="Ld" value={`${props.model.stats.leadership}`}/>
      </Col>
      <Col>
        <AbilityList abilities={props.model.abilities} phase='morale'/>
      </Col>
    </Row>
  );
}