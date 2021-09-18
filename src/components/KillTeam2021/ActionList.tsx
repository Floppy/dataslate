import React from 'react';
import { Action } from '../../types/KillTeam2021';
import { Card } from 'react-bootstrap';
import _ from 'lodash'

type Props = {
  actions: Action[]
};

export function ActionList(props: Props) {
  return <>
    {_.sortBy(props.actions, ['name']).map((x: Action) => (
      <Card border="primary" bg="light">
        <Card.Header style={{ background: "#FF6F2D", color: "white", fontWeight: "bold"}}>
          {x.name}
        </Card.Header>
        <Card.Body>
          {x.description}
        </Card.Body>
      </Card>
    ))}
  </>
}
