import React from 'react';

type Props = {
  abilities: [{
    name: string,
    description: string,
    phases: [string],
  }],
  phase: string,
};

function AbilityList(props: Props ) {
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
