import React from 'react';
import StatsTable from './StatsTable';

type Props = {
  model: {
    type: string,
    name: string,
    category: string,
    stats: {
      movement: number,
      weapon_skill: number,
      ballistic_skill: number,
      strength: number,
      toughness: number,
      wounds: number,
      attacks: number,
      leadership: number,
      save: number,
    },
    faction: string,
  },
};

function Model(props: Props ) {
  return (
    <div className="model">
      <h1>
        {props.model.type}: {props.model.name}
      </h1>
      <h2>
        {props.model.category}
      </h2>
      <StatsTable {...props.model.stats}/>
      <div>
        Keywords: {props.model.faction}
      </div>
    </div>
  );
}

export default Model;
