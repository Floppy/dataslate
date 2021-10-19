import React from 'react'
import { PsychicPower } from '../../types/KillTeam2021'
import { Card, Row, Col, Table } from 'react-bootstrap'
import _ from 'lodash'
import { HighlightedText } from './HighlightedText'

interface Props {
  powers: PsychicPower[]
}

export function PowerList (props: Props): JSX.Element {
  return (
    <Row xs={1} sm={2} md={3} className='g-4'>
      {_.sortBy(props.powers, ['name']).map((x: PsychicPower) => (
        <Col key={x.id}>
          <Card border='info' bg='light'>
            <Card.Header style={{ background: '#17a2b8', color: 'white' }} as='h4'>
              {x.name}
            </Card.Header>
            <Card.Body>
              <p>
                <HighlightedText>{x.description}</HighlightedText>
              </p>
              {(x.weapon != null)
                ? (
                  <Table striped bordered size='sm'>
                    <thead>
                      <tr>
                        <th>A</th>
                        <th>WS</th>
                        <th>D</th>
                        <th>SR</th>
                        <th>!</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{x.weapon.attacks}</td>
                        <td>{x.weapon.hit}+</td>
                        <td>{x.weapon.damage}/{x.weapon.criticalDamage}</td>
                        <td><HighlightedText>{x.weapon.specialRules}</HighlightedText></td>
                        <td><HighlightedText>{x.weapon.criticalRules}</HighlightedText></td>
                      </tr>
                    </tbody>
                  </Table>
                ) : <></>}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}
