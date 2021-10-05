import React from 'react'
import { Action } from '../../types/KillTeam2021'
import { Card } from 'react-bootstrap'
import _ from 'lodash'
import { HighlightedText } from './HighlightedText'

interface Props {
  actions: Action[]
}

export function ActionList (props: Props) {
  return (
    <>
      {_.sortBy(props.actions, ['name']).map((x: Action) => (
        <Card border='primary' bg='light'>
          <Card.Header style={{ background: '#FF6F2D', color: 'white' }} as='h4'>
            {x.name}
          </Card.Header>
          <Card.Body>
            <HighlightedText>{x.description}</HighlightedText>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}
