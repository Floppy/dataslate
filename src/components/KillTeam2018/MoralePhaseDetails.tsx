import { StatBadge } from '../StatBadge'
import AbilityList from './AbilityList'
import { Row, Col } from 'react-bootstrap'
import { ModelTitle } from '../ModelTitle'

import { Model } from '../../types/KillTeam2018'

interface Props {
  model: Model
}

export function MoralePhaseDetails (props: Props): JSX.Element {
  return (
    <Row>
      <Col sm='11'>
        <ModelTitle {...props.model} />
        <AbilityList abilities={props.model.abilities} phase='morale' />
      </Col>
      <Col sm='1' className='px-1'>
        <StatBadge name='Ld' value={`${props.model.stats.leadership}`} />
      </Col>
    </Row>
  )
}
