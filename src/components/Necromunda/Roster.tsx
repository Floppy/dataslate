import React, { MouseEvent } from 'react'
import { Col } from 'react-bootstrap'
import { CloseButton } from '../CloseButton'
import { Gang } from '../../types/Necromunda'

interface Props {
  gang: Gang
  onClose: (event: MouseEvent<HTMLButtonElement>) => void
}

export function Roster(props: Props): JSX.Element {
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
          {props.gang.name}
        </Col>
        <Col style={{ flexGrow: 0, textAlign: 'right' }}>
          <CloseButton onClose={props.onClose} />
        </Col>
      </h1>
    </>
  )
}
