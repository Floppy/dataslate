import React from 'react';
import { Weapon } from './types';
import { Table } from 'react-bootstrap';

type Props = {
  weapons: Weapon[],
};

export function WeaponList(props: Props) {
  return (
    <>
      <Table striped bordered size="sm">
        <thead>
          <tr>
            <th>Weapon</th>
            <th>A</th>
            <th>Hit</th>
            <th>D</th>
            <th>Special Rules</th>
            <th>Critical D</th>
            <th>Critical Rules</th>
          </tr>
        </thead>
        <tbody>
          {props.weapons.map((x: Weapon) => (
            <tr>
              <td style={{"whiteSpace": "nowrap"}}>{x.name}</td>
              <td>{x.attacks}</td>
              <td>{x.hit}</td>
              <td>{x.damage}</td>
              <td>{x.specialRules}</td>
              <td>{x.criticalDamage}</td>
              <td>{x.criticalRules}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
