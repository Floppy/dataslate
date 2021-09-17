import React from 'react';
import { Card } from 'react-bootstrap'

type Props = {
  wounds: number,
  title: string,
};

export function WoundTrack(props: Props) {
  return <Card>
    <Card.Header>
      {props.title}
    </Card.Header>
    <Card.Body>
      {"🩸 ".repeat(props.wounds)}
    </Card.Body>
  </Card>
}
