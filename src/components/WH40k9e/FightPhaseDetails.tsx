import React from 'react'
import { StatBadge } from '../StatBadge'
import { Row, Col } from 'react-bootstrap'
import { UnitTitle } from './UnitTitle'
import { ProfileTitle } from './ProfileTitle'
import { AbilityList } from './AbilityList'
import { WeaponList } from './WeaponList'
import { Unit, Profile } from '../../types/WH40k9e'

interface Props {
  unit: Unit
}

export function FightPhaseDetails (props: Props): JSX.Element {
  return (
    <>
      <Row>
        <Col sm='12'>
          <UnitTitle name={props.unit.name} uuid={props.unit.id} datasheet={props.unit.datasheet} />
        </Col>
      </Row>
      {props.unit.profiles.map((profile: Profile) => (
        <Row key={profile.id}>
          <Col sm='10'>
            <ProfileTitle name={profile.name} />
          </Col>
          <Col sm='1' className='px-1'>
            <StatBadge name='A' value={`${profile.profileStats.attacks}`} />
            <StatBadge name='T' value={`${profile.profileStats.toughness}`} />
            <StatBadge name='S' value={`${profile.profileStats.strength}`} />
          </Col>
          <Col sm='1' className='px-1'>
            <StatBadge name='WS' value={`${profile.profileStats.weapon_skill}`} secondaryValue='+' />
            <StatBadge name='Sv' value={`${profile.profileStats.save}`} secondaryValue='+' />
            {profile.profileStats.invulnerable_save > 0
              ? <StatBadge name='Inv' value={`${profile.profileStats.invulnerable_save}`} secondaryValue='++' />
              : <></>}
          </Col>
        </Row>
      ))}
      <WeaponList weapons={props.unit.weapons} phase='fight' />
      <AbilityList abilities={props.unit.abilities} phase='fight' />
    </>
  )
}
