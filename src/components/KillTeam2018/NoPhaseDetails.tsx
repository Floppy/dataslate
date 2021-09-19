import React from 'react';
import StatsTable from './StatsTable';
import AbilityList from '../AbilityList';
import { Card } from 'react-bootstrap'
import { ModelTitle } from '../ModelTitle';
import { KeywordList } from '../KeywordList';
import { Model } from '../../types/KillTeam2018';

type Props = {
  model: Model
  onSelectionChanged: (uuid: string, value: number) => void,
};

export function NoPhaseDetails(props: Props) {
  return (
    <Card className={props.model.selected > 0 ? "included" : "excluded"}>
      <ModelTitle {...props.model} showSelector onSelectionChanged={props.onSelectionChanged} />
      <Card.Body>
        {props.model.category === "Commander" && <div>Commander specialism: <strong>{props.model.specialism}</strong></div>}
        <p>{props.model.weapons.map((w) => (w.name)).concat(props.model.wargear.map((w) => (w.name))).join(", ")}</p>
        <StatsTable {...props.model.stats} points={props.model.points} />
        <AbilityList abilities={props.model.abilities} phase=''/>
      </Card.Body>
      <KeywordList faction={`${props.model.faction} 💀`} keywords={props.model.keywords} />
    </Card>
  );
}
