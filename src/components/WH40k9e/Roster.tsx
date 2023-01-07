import React, { MouseEvent } from 'react'
import { Col } from 'react-bootstrap'
import { CloseButton } from '../CloseButton'
import { Settings } from '../../types/Settings'
import Phase from './Phase'
import { MovementPhaseDetails } from './MovementPhaseDetails'
import { Unit } from '../../types/WH40k9e'


interface Props {
  name: string
  faction: string
  units: Unit[]
  onClose: (event: MouseEvent<HTMLButtonElement>) => void
  settings: Settings
}

export function Roster (props: Props): JSX.Element {
  const headingStyle = {
    background: '#FF6F2D',
    color: 'black',
    padding: '10px',
    width: '100%',
    display: 'flex'
  }
  return (
    <>
      <h1 style={headingStyle}>
        <Col>
          {props.name} ({props.faction})
        </Col>
        <Col style={{ flexGrow: 0, textAlign: 'right' }}>
          <CloseButton onClose={props.onClose} />
        </Col>
      </h1>
      <ul>
        {props.units.map((unit: Unit) => (
          <li key={unit.id}>{unit.datasheet}</li>
        ))}
      </ul>
      <p>
        40k support is under development, check back later for more features!
      </p>
      <Phase name='command'>
        <>
        </>
      </Phase>
      <Phase name='movement'>
        <>
        {props.units.map((unit: Unit) => (
          <MovementPhaseDetails key={unit.id} unit={unit} />
        ))}
        </>
      </Phase>
      <Phase name='psychic'>
        <>
        </>
      </Phase>
      <Phase name='shooting'>
        <>
        </>
      </Phase>
      <Phase name='charge'>
        <>
        </>
      </Phase>
      <Phase name='fight'>
        <>
        </>
      </Phase>
      <Phase name='morale'>
        <>
        </>
      </Phase>
    </>
  )
}
