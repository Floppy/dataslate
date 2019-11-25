import React from 'react';
import StatsTable from './StatsTable';

function Model(props) {
  return (
    <div className="model">
      <h1>
        {props.model.name}
      </h1>
      <h2>
        {props.model.type}
      </h2>
      <StatsTable {...props.model.stats}/>
    </div>
  );
}

export default Model;
