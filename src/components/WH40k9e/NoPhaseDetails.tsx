import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { UnitTitle } from './UnitTitle'
import { AbilityList } from './AbilityList'
import { StatsTable } from './StatsTable'
import { Unit } from '../../types/WH40k9e'
import { KeywordList } from '../KeywordList'

interface Props {
  unit: Unit
}

export function NoPhaseDetails (props: Props): JSX.Element {
  return (
    <>
      <Row>
        <Col sm='12'>
          <UnitTitle name={props.unit.name} uuid={props.unit.id} datasheet={props.unit.datasheet} />
          <KeywordList keywords={props.unit.keywords} faction={""}/>
          <StatsTable profiles={props.unit.profiles} />
          <AbilityList abilities={props.unit.abilities} phase='' />
        </Col>
      </Row>
    </>
  )
}
