import React from 'react'
import AbilityList from './AbilityList'
import { StatBadge } from '../StatBadge'
import { Row, Col } from 'react-bootstrap'
import { ModelTitle } from '../ModelTitle'

import { Model } from '../../types/KillTeam2018'

interface Props {
  model: Model
}

export function MovementPhaseDetails (props: Props): JSX.Element {
  return (
    <Row>
      <Col sm='11'>
        <ModelTitle {...props.model} />
        <AbilityList abilities={props.model.abilities} phase='movement' />
      </Col>
      <Col sm='1' className='px-1'>
        <StatBadge name='M' value={`${props.model.stats.movement}`} />
      </Col>
    </Row>
  )
}
