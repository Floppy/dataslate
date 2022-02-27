import React, { MouseEvent } from 'react'
import { Col } from 'react-bootstrap'
import { CloseButton } from '../CloseButton'
import { Settings } from '../../types/Settings'

interface Props {
  name: string
  faction: string
  datasheets: any
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
        {props.datasheets.map((d: string) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      <p>
        40k support is under development, check back later for more features!
      </p>
    </>
  )
}
