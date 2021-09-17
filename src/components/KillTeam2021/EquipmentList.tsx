import React from 'react';
import { Equipment } from '../../types/KillTeam2021';
import { Table } from 'react-bootstrap';

type Props = {
  equipment: Equipment[],
};

export function EquipmentList(props: Props) {
  return (
    <>
      <Table striped bordered size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.equipment.map((x: Equipment) => (
            <tr>
              <td style={{"whiteSpace": "nowrap"}}>{x.name}</td>
              <td>{x.cost} EP</td>
              <td>{x.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
