import React from 'react'
import AbilityList from './AbilityList'
import { Row, Col } from 'react-bootstrap'
import { ModelTitle } from '../ModelTitle'
import { Model } from '../../types/KillTeam2018'

interface Props {
  model: Model
}

export function DeploymentPhaseDetails (props: Props): JSX.Element {
  return (
    <Row>
      <Col>
        <ModelTitle {...props.model} />
        <AbilityList abilities={props.model.abilities} phase='deployment' />
      </Col>
    </Row>
  )
}

export function hasDeploymentPhase (model: Model): boolean {
  return ((model.abilities.filter((x) => ((x.phases != null) && x.phases.includes('deployment')))).length > 0)
}
