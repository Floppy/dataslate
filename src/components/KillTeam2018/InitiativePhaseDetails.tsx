import React from 'react'
import AbilityList from './AbilityList'
import { Row, Col } from 'react-bootstrap'
import { ModelTitle } from '../ModelTitle'
import { Model } from '../../types/KillTeam2018'

interface Props {
  model: Model
}

export function InitiativePhaseDetails (props: Props) {
  return (
    <Row>
      <Col>
        <ModelTitle {...props.model} />
        <AbilityList abilities={props.model.abilities} phase='initiative' />
      </Col>
    </Row>
  )
}

export function hasInitiativePhase (model: Model) {
  return ((model.abilities.filter((x) => ((x.phases != null) && x.phases.includes('initiative')))).length > 0)
}
