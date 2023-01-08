import React from 'react'
import { Col } from 'react-bootstrap'
import _ from 'lodash'

interface Props {
  name: string
}

export function ProfileTitle (props: Props): JSX.Element {
  const headingStyle = {
    background: 'white',
    color: 'black',
    padding: '5px',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  }
  const titleComponents = _.without([
    props.name
  ], null, undefined, '')
  return (
    <h4 style={headingStyle}>
      <Col>
        <strong>{titleComponents[0]} </strong>
        <small>{_.join(_.slice(titleComponents, 1), ', ')}</small>
      </Col>
    </h4>
  )
}
