import React from 'react'
import { StatBadge } from '../StatBadge'
import { Row, Col } from 'react-bootstrap'
import { UnitTitle } from './UnitTitle'
import { ProfileTitle } from './ProfileTitle'
import { AbilityList, hasAbilitiesForPhase } from './AbilityList'
import { PsychicPowerList } from './PsychicPowerList'
import { Unit, Profile } from '../../types/WH40k9e'

interface Props {
  unit: Unit
}

export function PsychicPhaseDetails (props: Props): JSX.Element {
  return (
    hasAbilitiesForPhase(props.unit.abilities, "psychic") || props.unit.psychicPowers.length > 0
    ? <>
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
              <StatBadge name='Ld' value={`${profile.profileStats.leadership}`} />
            </Col>
          </Row>
        ))}
        <PsychicPowerList powers={props.unit.psychicPowers} />
        <AbilityList abilities={props.unit.abilities} phase='psychic' />
      </>
    : <></>
  )
}
