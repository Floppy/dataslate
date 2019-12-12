import React from 'react';
import { Ability } from './types';

type Props = {
  abilities: [Ability],
  phase: string,
};

function AbilityList(props: Props) {
  const abilities = props.abilities.filter((x) => (x.phases.indexOf(props.phase) >= 0))
  return (
    <dl>
      {abilities.map((x) => (
        <>
          <dt>{x.name}</dt>
          <dd>{x.description}</dd>
        </>
      ))}
    </dl>
  );
}

export default AbilityList;
