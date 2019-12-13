import React from 'react';
import { Ability } from './types';

type Props = {
  abilities: [Ability],
  phase: string,
};

function AbilityList(props: Props) {
  const abilities = props.abilities.filter((x) => (x.phases.indexOf(props.phase) >= 0))
  return (
    <table>
      {abilities.map((x) => (
        <tr>
          <td>{x.name}</td>
          <td>{x.description}</td>
        </tr>
      ))}
    </table>
  );
}

export default AbilityList;
