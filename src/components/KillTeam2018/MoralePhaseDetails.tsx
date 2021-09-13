import React from 'react';
import StatBadge from './StatBadge';
import AbilityList from './AbilityList';
import { Row, Col } from 'react-bootstrap'
import { ModelTitle } from '../ModelTitle';

import { Model } from '../../types/KillTeam2018';

type Props = {
  model: Model
};

export function MoralePhaseDetails(props: Props) {
  return (
    <Row>
      <Col>
        <ModelTitle {...props.model}/>
        <AbilityList abilities={props.model.abilities} phase='morale'/>
      </Col>
      <Col sm='auto'>
        <StatBadge name="Ld" value={`${props.model.stats.leadership}`}/>
      </Col>
    </Row>
  );
}
