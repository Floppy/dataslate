import React from 'react'
import { StatBadge } from '../StatBadge'
import { Row, Col } from 'react-bootstrap'
import { ModelTitle } from '../ModelTitle'

import { Unit, Profile } from '../../types/WH40k9e'

interface Props {
  unit: Unit
}

export function ShootingPhaseDetails (props: Props): JSX.Element {
  return (
    <>{props.unit.profiles.map((profile: Profile) => (
      <Row>
        <Col sm='10'>
          <ModelTitle name={profile.name} selected={1} count={1} uuid={props.unit.id} type={props.unit.datasheet} />
        </Col>
        <Col sm='1' className='px-1'>
          <StatBadge name='BS' value={`${profile.profileStats.ballistic_skill}`} secondaryValue='+' />
          <StatBadge name='T' value={`${profile.profileStats.toughness}`} />
        </Col>
        <Col sm='1' className='px-1'>
          <StatBadge name='Sv' value={`${profile.profileStats.save}`} secondaryValue='+' />
        </Col>
      </Row>
    ))}</>
  )
}
