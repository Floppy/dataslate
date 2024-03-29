import React from 'react'
import { Col } from 'react-bootstrap'

interface Props {
  name: string
  note?: string
  children: React.ReactNode
}

function Phase (props: Props): JSX.Element {
  return (
    <div
      className={`phase-${props.name}`} style={{
        pageBreakInside: props.name === '' ? 'auto' : 'avoid'
      }}
    >
      {props.name !== ''
        ? (
          <h2 style={{
            background: '#FF6F2D',
            color: 'white',
            padding: '10px',
            width: '100%',
            display: 'flex'
          }}
          >
            <Col>
              {props.name}
            </Col>
            <Col style={{ flexGrow: 0, textAlign: 'right' }}>
              {props.note !== null && (
                <small>{props.note}</small>
              )}
            </Col>
          </h2>
          )
        : <></>}
      {props.children}
    </div>
  )
}

export default Phase
