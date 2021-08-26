import React from 'react';
import { Badge } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import { Model, Weapon } from './types';
import { StatsTable } from './StatsTable'
import { ModelTitle } from './ModelTitle'

type Props = {
  model: Model
};

export function Datasheet(props: Props) {
  return (
    <Row className={props.model.selected > 0 ? "included" : "excluded"}>
      <Col>
        <ModelTitle model={props.model} />
        <StatsTable {...props.model.stats} />
        {props.model.weapons.map((weapon: Weapon) => (
          <p>{weapon.name}, {weapon.attacks}, {weapon.hit}+, {weapon.damage}, {weapon.criticalDamage}, {weapon.specialRules}, {weapon.criticalRules}</p>
        ))}
      </Col>
      <Col sm='auto'>
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
      </Col>
    </Row>
  );
}
