import React from 'react';
import { Weapon } from './types';
import { Table } from 'react-bootstrap';

type Props = {
  weapons: Weapon[],
  phase: string
};

function WeaponList(props: Props) {
  const weapons = props.phase === 'shooting'
    ? props.weapons.filter((x) => !isNaN(x.range))
    : props.weapons.filter((x) => isNaN(x.range))
  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Name</th>
          {props.phase === "shooting" && <th>Range</th>}
          <th>Strength</th>
        </tr>
      </thead>
      <tbody>
        {props.weapons.map((x) => (
          <tr>
            <td>{x.name}</td>
            {props.phase === "shooting" && <td>{x.range}</td>}
            <td>{x.strength}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default WeaponList;
