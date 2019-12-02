import React from 'react';
import StatsTable from './StatsTable';

function Model(props) {
  return (
    <div className="model">
      <h1>
      {props.model.type}: {props.model.name}
      </h1>
      <StatsTable {...props.model.stats}/>
      <div>
        Keywords: {props.model.faction}
      </div>
      <h3>Abilities</h3>
      <dl>
        {props.model.abilities.map((x) => (
          <>
            <dt>{x.name}</dt>
            <dd>{x.description}</dd>
          </>
        ))}
      </dl>
      <h3>Weapons</h3>
      <dl>
        {props.model.weapons.map((x) => (
          <>
            <dt>{x.name}</dt>
            <dd>{x.range}" {x.strength}</dd>
          </>
        ))}
      </dl>
    </div>
  );
}

export default Model;
