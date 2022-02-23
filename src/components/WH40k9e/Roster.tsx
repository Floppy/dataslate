import React, { MouseEvent } from 'react'
import { Col } from 'react-bootstrap'
import { CloseButton } from '../CloseButton'
import { Settings } from '../../types/Settings'

interface Props {
  name: string
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
          {props.name}
        </Col>
        <Col style={{ flexGrow: 0, textAlign: 'right' }}>
          <CloseButton onClose={props.onClose} />
        </Col>
      </h1>
      <div>
        You've found some secret work in progress! 40k support is under development, check back later!
      </div>
    </>
  )
}
