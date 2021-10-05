import React from 'react'
import AbilityList from './AbilityList'
import PsychicPowerList from './PsychicPowerList'
import { Row, Col } from 'react-bootstrap'
import { ModelTitle } from '../ModelTitle'
import { Model } from '../../types/KillTeam2018'

interface Props {
  model: Model
}

export function PsychicPhaseDetails (props: Props) {
  return (
    <Row>
      <Col>
        <ModelTitle {...props.model} />
        <PsychicPowerList powers={props.model.psychicPowers} />
        <AbilityList abilities={props.model.abilities} phase='psychic' />
      </Col>
    </Row>
  )
}

export function hasPsychicPhase (model: Model) {
  return (model.psychicPowers.length > 0 || (model.abilities.filter((x) => ((x.phases != null) && x.phases.includes('psychic')))).length > 0)
}
