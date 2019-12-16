import React from 'react';
import { Ability } from './types';
import { Table } from 'react-bootstrap';

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
      <tbody>
        {abilities.map((x) => (
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
