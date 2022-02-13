import AbilityList from './AbilityList'
import { Row, Col } from 'react-bootstrap'
import { ModelTitle } from '../ModelTitle'
import { Model } from '../../types/KillTeam2018'

interface Props {
  model: Model
}

export function ScoutingPhaseDetails (props: Props): JSX.Element {
  return (
    <Row>
      <Col>
        <ModelTitle {...props.model} />
        <AbilityList abilities={props.model.abilities} phase='scouting' />
      </Col>
    </Row>
  )
}

export function hasScoutingPhase (model: Model): boolean {
  return ((model.abilities.filter((x) => (x.phases?.includes('scouting')))).length > 0)
}
