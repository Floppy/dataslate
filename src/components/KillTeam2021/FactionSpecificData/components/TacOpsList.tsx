import React from 'react'
import { TacOp } from '../../../../types/KillTeam2021'
import { Card, Row, Col } from 'react-bootstrap'
import { CompileDescription } from './../../CompileDescription'

interface Props {
  tacOps: TacOp[]
}

export function TacOpsList (props: Props): JSX.Element {
  return (
    <Row xs={1} sm={2} md={3} className='g-4'>
      {props.tacOps.map((x: TacOp) => (
        <Col key={x.id}>
          <Card border='info' bg='light'>
            <Card.Header style={{ background: '#17a2b8', color: 'white', display: 'flex', justifyContent: 'space-between' }} as='h4'>
              <span>Tac Op {x.id}</span>
              <span>{x.name}</span>
            </Card.Header>
            <Card.Body>
              <CompileDescription>{x.description}</CompileDescription>
              {
                (x.action != null) &&
                  <>
                    <p>
                      Friendly operatives an perform the following mission action:
                    </p>
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
                  </>
              }
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}
