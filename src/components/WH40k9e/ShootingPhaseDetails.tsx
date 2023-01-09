import React from 'react'
import { StatBadge } from '../StatBadge'
import { Row, Col } from 'react-bootstrap'
import { UnitTitle } from './UnitTitle'
import { ProfileTitle } from './ProfileTitle'
import { Unit, Profile } from '../../types/WH40k9e'
import { AbilityList } from './AbilityList'
import { WeaponList } from './WeaponList'

interface Props {
  unit: Unit
}

export function ShootingPhaseDetails (props: Props): JSX.Element {
  return (
    <Row>
      <Col sm='10'>
        <UnitTitle name={props.unit.name} uuid={props.unit.id} datasheet={props.unit.datasheet} />
        {
          props.unit.profiles.length > 1
          ? props.unit.profiles.map((profile: Profile) => (
            <ProfileTitle name={profile.name} />
          ))
          : <></>
        }
        <WeaponList weapons={props.unit.weapons} phase='shooting' />
        <AbilityList abilities={props.unit.abilities} phase='shooting' />
      </Col>
      <Col sm='1' className='px-1'>
        {props.unit.profiles.map((profile: Profile) => (
          <>
            <StatBadge name='BS' value={`${profile.profileStats.ballistic_skill}`} secondaryValue='+' />
            <StatBadge name='T' value={`${profile.profileStats.toughness}`} />
          </>
        ))}
      </Col>
      <Col sm='1' className='px-1'>
        {props.unit.profiles.map((profile: Profile) => (
          <>
            <StatBadge name='Sv' value={`${profile.profileStats.save}`} secondaryValue='+' />
            {profile.profileStats.invulnerable_save > 0
              ? <StatBadge name='Inv' value={`${profile.profileStats.invulnerable_save}`} secondaryValue='++' />
              : <></>}
          </>
        ))}
      </Col>
    </Row>
  )
}
