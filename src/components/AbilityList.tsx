import React from 'react';
import { Ability } from '../types/KillTeam2018';
import { Table } from 'react-bootstrap';
import _ from 'lodash'

type Props = {
  abilities: Ability[],
  phase: string,
  highlight?: boolean,
};

function AbilityList(props: Props) {
  const abilities = props.phase ?
    props.abilities.filter((x) => (x.phases.indexOf(props.phase) >= 0)) :
    props.abilities.filter((x) => (x.phases.length === 0))
  const variant = props.highlight ? "primary" : "";

  return abilities.length === 0 ? <></> : (
    <Table striped bordered size="sm" variant={variant}>
      <thead>
        <tr>
          <th>Ability</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {_.sortBy(abilities, ['name']).map((x: Ability) => (
          <tr>
            <td>{x.name}</td>
            <td>{x.description}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default AbilityList;
