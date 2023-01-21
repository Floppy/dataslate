import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { UnitTitle } from './UnitTitle'
import { AbilityList, hasAbilitiesForPhase } from './AbilityList'
import { Unit } from '../../types/WH40k9e'

interface Props {
  unit: Unit
}

export function ChargePhaseDetails (props: Props): JSX.Element {
  return (
    hasAbilitiesForPhase(props.unit.abilities, 'charge')
      ? (
        <>
          <Row>
            <Col sm='12'>
              <UnitTitle name={props.unit.name} uuid={props.unit.id} datasheet={props.unit.datasheet} />
            </Col>
          </Row>
          <AbilityList abilities={props.unit.abilities} phase='charge' />
        </>)
      : <></>
  )
}
