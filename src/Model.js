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
    </div>
  );
}

export default Model;
