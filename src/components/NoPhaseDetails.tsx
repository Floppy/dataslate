import React from 'react';
import StatsTable from './StatsTable';
import AbilityList from './AbilityList';
import { Badge } from 'react-bootstrap'

import { Model } from '../types';

type Props = {
  model: Model
};

export function NoPhaseDetails(props: Props) {
  return (
    <>
      <div>
        <Badge pill variant="danger" style={{
          textTransform: "uppercase",
          marginRight: "10px",
        }}>
          {props.model.faction}
        </Badge>
        {props.model.keywords.map((keyword: string) => (
          <Badge pill variant="primary" style={{
            textTransform: "uppercase",
            marginRight: "10px",
          }}>
            {keyword}
          </Badge>
        ))}
      </div>
      {props.model.name && <div>Name: <strong>{props.model.name}</strong></div>}
      {props.model.category === "Commander" && <div>Commander specialism: <strong>{props.model.specialism}</strong></div>}
      <StatsTable {...props.model.stats}/>
      <AbilityList abilities={props.model.abilities} phase=''/>
    </>
  );
}