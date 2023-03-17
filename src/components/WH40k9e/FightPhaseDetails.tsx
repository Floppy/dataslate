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

export function FightPhaseDetails(props: Props): JSX.Element {
  return (
    <>
      <Row style={{
        pageBreakInside: 'avoid'
      }}
      >
        <Col sm='10'>
          <UnitTitle name={props.unit.name} uuid={props.unit.id} datasheet={props.unit.datasheet} />
          {
            props.unit.profiles.length > 1
              ? props.unit.profiles.map((profile: Profile) => (
                <ProfileTitle name={profile.name} key={profile.id} />
              ))
              : <></>
          }
          <WeaponList weapons={props.unit.weapons} phase='fight' />
          <AbilityList abilities={props.unit.abilities} phase='fight' />
        </Col>
        <Col sm='1' className='px-1'>
          {props.unit.profiles.map((profile: Profile) => (
            <React.Fragment key={`badges-${profile.id}`}>
              <StatBadge name='A' value={`${profile.profileStats.attacks}`} />
              <StatBadge name='WS' value={`${profile.profileStats.weapon_skill}`} secondaryValue='+' />
              <StatBadge name='S' value={`${profile.profileStats.strength}`} />
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
                ? <StatBadge name='Inv' value={`${profile.profileStats.invulnerable_save}`} secondaryValue='++' />
                : <></>}
            </React.Fragment>
          ))}
        </Col>
      </Row>
    </>
  )
}
