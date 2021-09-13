import React from 'react';
import StatsTable from './StatsTable';
import AbilityList from './AbilityList';
import { Badge } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import { ModelTitle } from '../ModelTitle';
import { Model } from '../../types/KillTeam2018';

type Props = {
  model: Model
  onSelectionChanged: (uuid: string, value: number) => void,
};

export function NoPhaseDetails(props: Props) {
  return (
    <Row className={props.model.selected > 0 ? "included" : "excluded"}>
      <Col>
        <ModelTitle {...props.model} showSelector onSelectionChanged={props.onSelectionChanged} />
        {props.model.category === "Commander" && <div>Commander specialism: <strong>{props.model.specialism}</strong></div>}
        <p>{props.model.weapons.map((w) => (w.name)).concat(props.model.wargear.map((w) => (w.name))).join(", ")}</p>
        <StatsTable {...props.model.stats} points={props.model.points} />
        <AbilityList abilities={props.model.abilities} phase=''/>
      </Col>
      <Col sm='auto'>
        <div>
          <Badge pill variant="primary" className="mb-2" style={{
            textTransform: "uppercase",
            marginRight: "10px",
            display: "block",
          }}>
            {props.model.faction}
          </Badge>
          {props.model.keywords.map((keyword: string) => (
            <Badge pill variant="secondary" className="mb-2" style={{
              textTransform: "uppercase",
              marginRight: "10px",
              display: "block",
            }}>
              {keyword}
            </Badge>
          ))}
        </div>
      </Col>
    </Row>
  );
}
