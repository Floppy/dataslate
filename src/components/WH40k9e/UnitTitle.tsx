import React from 'react'
import { Col } from 'react-bootstrap'
import _ from 'lodash'

interface Props {
  uuid: string
  name: string
  datasheet: string
}

export function UnitTitle (props: Props): JSX.Element {
  const headingStyle = {
    background: 'black',
    color: 'white',
    padding: '5px',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  }
  const titleComponents = _.without([
    props.name,
    props.datasheet
  ], null, undefined, '')
  return (
    <h3 style={headingStyle}>
      <Col>
        <strong>{titleComponents[0]} </strong>
        <small>{_.join(_.slice(titleComponents, 1), ', ')}</small>
      </Col>
    </h3>
  )
}
