import React from 'react';
import { Equipment } from '../../types/KillTeam2021';
import { Card } from 'react-bootstrap';

type Props = {
  equipment: Equipment[],
};

export function EquipmentList(props: Props) {
  return props.equipment.length === 0 ? <></> : (
    <Card border="secondary" bg="light">
      <Card.Header style={{ background: "rgba(0, 0, 0, 0.05)", fontWeight: "bold"}}>
        Equipment
      </Card.Header>
      <Card.Body>
        {props.equipment.map((x: Equipment) => (
          <p>
            <strong>{x.name} ({x.cost} EP): </strong>
            {x.description}
          </p>
        ))}
      </Card.Body>
    </Card>
  );
}
