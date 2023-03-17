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

export function ShootingPhaseDetails(props: Props): JSX.Element {
  return (
    <Row style={{
      pageBreakInside: 'avoid'
    }}
    >
      <Col sm='10'>
        <UnitTitle name={props.unit.name} uuid={props.unit.id} datasheet={props.unit.datasheet} />
        {
          props.unit.profiles.length > 1
            ? props.unit.profiles.map((profile: Profile) => (
              <ProfileTitle name={profile.name} key={`title-${profile.id}`} />
            ))
            : <></>
        }
        <WeaponList weapons={props.unit.weapons} phase='shooting' />
        <AbilityList abilities={props.unit.abilities} phase='shooting' />
      </Col>
      <Col sm='1' className='px-1'>
        {props.unit.profiles.map((profile: Profile) => (
          <React.Fragment key={`badges-${profile.id}`}>
            <StatBadge name='BS' value={`${profile.profileStats.ballistic_skill}`} secondaryValue='+' key={`badge-bs-${profile.id}`} />
            <StatBadge name='W' value={`${profile.profileStats.wounds}`} />
          </React.Fragment>
        ))}
      </Col>
      <Col sm='1' className='px-1'>
        {props.unit.profiles.map((profile: Profile) => (
          <React.Fragment key={`badges-${profile.id}`}>
            <StatBadge name='T' value={`${profile.profileStats.toughness}`} />
            <StatBadge name='Sv' value={`${profile.profileStats.save}`} secondaryValue='+' />
            {profile.profileStats.invulnerable_save > 0
              ? <StatBadge name='Inv' value={`${profile.profileStats.invulnerable_save}`} secondaryValue='++' key={`badge-inv-${profile.id}`} />
              : <></>}
          </React.Fragment>
        ))}
      </Col>
    </Row>
  )
}
