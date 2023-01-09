import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { UnitTitle } from './UnitTitle'
import { ProfileTitle } from './ProfileTitle'
import { AbilityList, hasAbilitiesForPhase } from './AbilityList'
import { Unit, Profile } from '../../types/WH40k9e'

interface Props {
  unit: Unit
}

export function DeploymentPhaseDetails (props: Props): JSX.Element {
  return (
    hasAbilitiesForPhase(props.unit.abilities, "deployment")
    ? <>
        <Row>
          <Col sm='12'>
            <UnitTitle name={props.unit.name} uuid={props.unit.id} datasheet={props.unit.datasheet} />
            <AbilityList abilities={props.unit.abilities} phase='deployment' />
          </Col>
        </Row>
      </>
    : <></>
  )
}
