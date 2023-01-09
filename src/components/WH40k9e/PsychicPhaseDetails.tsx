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
    hasAbilitiesForPhase(props.unit.abilities, "psychic") || props.unit.psychic.powers.length > 0
    ? <>
        <Row>
          <Col sm='11'>
            <UnitTitle name={props.unit.name} uuid={props.unit.id} datasheet={props.unit.datasheet} />
            <PsychicPowerList powers={props.unit.psychic.powers} />
            <AbilityList abilities={props.unit.abilities} phase='psychic' />
          </Col>
          <Col sm='1' className='px-1'>
            {props.unit.psychic.cast ? <StatBadge name='Cast' value={props.unit.psychic.cast.toString()} /> : <></>}
            {props.unit.psychic.deny ? <StatBadge name='Deny' value={props.unit.psychic.deny.toString()} /> : <></>}
          </Col>
        </Row>
      </>
    : <></>
  )
}
