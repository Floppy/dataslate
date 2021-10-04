import React from 'react';
import { Ploy } from '../../types/KillTeam2021';
import { Card, Col, Table } from 'react-bootstrap';
import { HighlightedText } from './HighlightedText'

type Props = {
  ploys: Ploy[]
};

export function PloysColumn(props: Props) {
  return <Col>
    {props.ploys.map((x: Ploy) => (
        <Card border="info" bg="light">
          <Card.Header style={{ background: "#17a2b8", color: "white", display: "flex", justifyContent: "space-between" }} as="h4">
            <span>{x.name}</span>
            <span>{x.cost}CP</span>
          </Card.Header>
          <Card.Body>
            <p>
              <HighlightedText>{x.description}</HighlightedText>
            </p>
            {x.weapon
              ? <Table striped bordered size="sm">
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
              : <></>
            }
            {
              x.options &&
                <ul>
                  {x.options.map(line => <li><HighlightedText>{line}</HighlightedText></li>)}
                </ul>
            }
            {
              x.postOptionText &&
                  <p>
                    <HighlightedText>{x.postOptionText}</HighlightedText>
                  </p>
            }
            {
              x.action &&
              <p>
                <Card border="primary" bg="light">
                  <Card.Header style={{ background: "#FF6F2D", color: "white", display: "flex", justifyContent: "space-between"}} as="h4">
                    <span>{x.action.name}</span>
                    <span>{x.action.cost}AP</span>
                  </Card.Header>
                  <Card.Body>
                    <HighlightedText>{x.action.description}</HighlightedText>
                  </Card.Body>
                </Card>
              </p>
            }
          </Card.Body>
        </Card>
    ))}
  </Col>
}
