import React from 'react';
import { Weapon } from './types';
import { Table } from 'react-bootstrap';

type Props = {
  weapons: Weapon[],
  phase: string,
  userStrength: number,
};

function WeaponList(props: Props) {
  const weapons = props.phase === 'shooting'
    ? props.weapons.filter((x) => !isNaN(x.range))
    : props.weapons.filter((x) => isNaN(x.range))

  return weapons.length === 0 ? <></> : (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Weapon</th>
          {props.phase === "shooting" && <th>Range</th>}
          {props.phase === "shooting" && <th>Type</th>}
          <th>S</th>
          <th>D</th>
          <th>AP</th>
          <th>Abilities</th>
        </tr>
      </thead>
      <tbody>
        {weapons.map((x) => (
          <tr>
            <td>{x.name}</td>
            {props.phase === "shooting" && <td>{x.range}</td>}
            {props.phase === "shooting" && <td>{x.type}</td>}
            <td>{isNaN(x.strength) ? props.userStrength : x.strength}</td>
            <td>{x.damage}</td>
            <td>{x.armourPiercing}</td>
            <td>{x.abilities}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default WeaponList;
