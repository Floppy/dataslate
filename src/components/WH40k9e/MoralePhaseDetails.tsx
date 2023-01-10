import React from 'react'
import { StatBadge } from '../StatBadge'
import { Row, Col } from 'react-bootstrap'
import { UnitTitle } from './UnitTitle'
import { ProfileTitle } from './ProfileTitle'
import { AbilityList } from './AbilityList'
import { Unit, Profile } from '../../types/WH40k9e'

interface Props {
  unit: Unit
}

export function MoralePhaseDetails (props: Props): JSX.Element {
  return (
    <>
      <Row>
        <Col sm='11'>
          <UnitTitle name={props.unit.name} uuid={props.unit.id} datasheet={props.unit.datasheet} />
          {
            props.unit.profiles.length > 1
              ? props.unit.profiles.map((profile: Profile) => (
                <ProfileTitle name={profile.name} />
              ))
              : <></>
          }
          <AbilityList abilities={props.unit.abilities} phase='morale' />
        </Col>
        <Col sm='1' className='px-1'>
          {props.unit.profiles.map((profile: Profile) => (
            <StatBadge name='Ld' value={profile.profileStats.leadership.toString()} />
          ))}
        </Col>
      </Row>
    </>
  )
}
