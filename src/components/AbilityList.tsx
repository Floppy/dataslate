import React from 'react';
import { Ability } from '../types';
import { Table } from 'react-bootstrap';

const _ = require('lodash')

type Props = {
  abilities: Ability[],
  phase: string,
};

function AbilityList(props: Props) {
  const abilities = props.phase ?
    props.abilities.filter((x) => (x.phases.indexOf(props.phase) >= 0)) :
    props.abilities.filter((x) => (x.phases.length === 0))

  return abilities.length === 0 ? <></> : (
    <Table striped bordered>
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
