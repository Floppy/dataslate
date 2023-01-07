import React from 'react'
import { StatBadge } from '../StatBadge'
import { Row, Col } from 'react-bootstrap'
import { ModelTitle } from '../ModelTitle'

import { Unit } from '../../types/WH40k9e'

interface Props {
  unit: Unit
}

export function MovementPhaseDetails (props: Props): JSX.Element {
  return (
    <Row>
      <Col sm='11'>
        <ModelTitle name={props.unit.name} selected={1} count={1} uuid={props.unit.id} type={props.unit.datasheet} />
      </Col>
      <Col sm='1' className='px-1'>

      </Col>
    </Row>
  )
}
