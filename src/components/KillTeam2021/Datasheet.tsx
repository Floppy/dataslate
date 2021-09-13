import React from 'react';
import { Badge } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Model } from '../../types/KillTeam2021';
import { StatsTable } from './StatsTable'
import { ModelTitle } from '../ModelTitle'
import { WeaponList } from './WeaponList'
import AbilityList from '../AbilityList';

type Props = {
  model: Model
};

export function Datasheet(props: Props) {
  return (
    <Row className={props.model.selected > 0 ? "included" : "excluded"}>
      <Col>
        <ModelTitle {...props.model} />
        <StatsTable {...props.model.stats} />
        <WeaponList weapons={props.model.weapons} />
        <AbilityList abilities={props.model.abilities} phase="" />
        <AbilityList abilities={props.model.rules} phase="" />
      </Col>
      <Col sm='2'>
        <div>
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
        <Card>
          <Card.Header>
            Wound Track
          </Card.Header>
          <Card.Body>
            {"🩸 ".repeat(props.model.stats.wounds)}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
