import React from 'react'
import { StatBadge } from '../StatBadge'
import { Row, Col } from 'react-bootstrap'
import { UnitTitle } from './UnitTitle'
import { AbilityList } from './AbilityList'
import { Unit, Profile } from '../../types/WH40k9e'
import { ProfileTitle } from './ProfileTitle'

interface Props {
  unit: Unit
}

export function MovementPhaseDetails (props: Props): JSX.Element {
  return (
    <>
      <Row>
        <Col sm='12'>
          <UnitTitle name={props.unit.name} uuid={props.unit.id} datasheet={props.unit.datasheet} />
        </Col>
      </Row>
      {props.unit.profiles.map((profile: Profile) => (
        <Row key={profile.id}>
          <Col sm='11'>
            <ProfileTitle name={profile.name} />
          </Col>
          <Col sm='1' className='px-1'>
            <StatBadge name='M' value={profile.profileStats.movement.toString()} />
          </Col>
        </Row>
      ))}
      <AbilityList abilities={props.unit.abilities} phase='movement' />
    </>
  )
}
