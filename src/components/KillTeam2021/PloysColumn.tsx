import React from 'react'
import { Ploy } from '../../types/KillTeam2021'
import { Card, Col } from 'react-bootstrap'
import { CompileDescription } from './CompileDescription'

interface Props {
  ploys: Ploy[]
}

export function PloysColumn (props: Props): JSX.Element {
  return (
    <Col>
      {props.ploys.map((x: Ploy) => (
        <Card key={x.name} border='info' bg='light'>
          <Card.Header style={{ background: '#17a2b8', color: 'white', display: 'flex', justifyContent: 'space-between' }} as='h4'>
            <span>{x.name}</span>
            <span>{x.cost}CP</span>
          </Card.Header>
          <Card.Body>
            <CompileDescription>{x.description}</CompileDescription>
            {
              (x.action != null) &&
                <p>
                  <Card border='primary' bg='light'>
                    <Card.Header style={{ background: '#FF6F2D', color: 'white', display: 'flex', justifyContent: 'space-between' }} as='h4'>
                      <span>{x.action.name}</span>
                      <span>{x.action.cost}AP</span>
                    </Card.Header>
                    <Card.Body>
                      <CompileDescription>{x.action.description}</CompileDescription>
                    </Card.Body>
                  </Card>
                </p>
            }
          </Card.Body>
        </Card>
      ))}
    </Col>
  )
}
