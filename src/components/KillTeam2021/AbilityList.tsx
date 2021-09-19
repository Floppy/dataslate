import React from 'react';
import { Ability } from '../../types/Ability';
import { Card } from 'react-bootstrap';
import _ from 'lodash'

type Props = {
  abilities: Ability[],
};

function AbilityList(props: Props) {
  return props.abilities.length === 0 ? <></> : (
    <Card border="secondary" bg="light">
      <Card.Header style={{ background: "rgba(0, 0, 0, 0.05)"}} as="h4">
        Abilities
      </Card.Header>
      <Card.Body>
        {_.sortBy(props.abilities, ['name']).map((x: Ability) => (
          <p>
            <strong>{x.name}: </strong>
            {x.description}
          </p>
        ))}
      </Card.Body>
    </Card>
  );
}

export default AbilityList;
