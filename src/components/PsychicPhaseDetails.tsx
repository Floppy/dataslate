import React from 'react';
import AbilityList from './AbilityList';
import PsychicPowerList from './PsychicPowerList';
import { Row, Col } from 'react-bootstrap'

import { Model } from '../types';

type Props = {
  model: Model
};

export function PsychicPhaseDetails(props: Props) {
  return (
    <Row>
      <Col>
        <PsychicPowerList powers={props.model.psychicPowers}/>
        <AbilityList abilities={props.model.abilities} phase='psychic'/>
      </Col>
    </Row>
  );
}

export function hasPsychicPhase(model: Model) {
  return (model.psychicPowers.length > 0 || (model.abilities.filter((x) => (x.phases.indexOf("psychic") >= 0))).length > 0)
}
