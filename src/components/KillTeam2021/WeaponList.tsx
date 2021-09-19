import React from 'react';
import { Weapon } from '../../types/KillTeam2021';
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
            <th>Attacks</th>
            <th>Hit</th>
            <th>Damage</th>
            <th>Critical</th>
            <th>Rules</th>
            <th>Critical</th>
          </tr>
        </thead>
        <tbody>
          {props.weapons.map((x: Weapon) => (
            <tr>
              <td>{x.name}</td>
              <td>{x.attacks}</td>
              <td>{x.hit}+</td>
              <td>{x.damage}</td>
              <td>{x.criticalDamage}</td>
              <td>{x.specialRules}</td>
              <td>{x.criticalRules}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
