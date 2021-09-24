import React from 'react';
import { PsychicPower } from '../../types/KillTeam2021';
import { Card, Row, Col } from 'react-bootstrap';
import _ from 'lodash'
import { HighlightedText } from './HighlightedText'

type Props = {
  powers: PsychicPower[]
};

export function PowerList(props: Props) {
  return <Row xs={1} sm={2} md={3} className="g-4">
    {_.sortBy(props.powers, ['name']).map((x: PsychicPower) => (
      <Col>
        <Card border="info" bg="light">
          <Card.Header style={{ background: "#17a2b8", color: "white"}} as="h4">
            {x.name}
          </Card.Header>
          <Card.Body>
            <HighlightedText>{x.description}</HighlightedText>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
}
