import React from 'react';
import { Badge } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import { Model } from '../../types/KillTeam2021';
import { StatsTable } from './StatsTable'
import { ModelTitle } from '../ModelTitle'
import { WeaponList } from './WeaponList'
import { EquipmentList } from './EquipmentList'
import { ActionList } from './ActionList'
import { WoundTrack } from './WoundTrack'
import AbilityList from '../AbilityList';
import _ from 'lodash'

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
        <EquipmentList equipment={props.model.equipment} />
        <AbilityList abilities={props.model.abilities} phase="" />
        <ActionList actions={props.model.actions} />
        {_.range(1,props.model.selected+1).map((i) => (
          <WoundTrack wounds={props.model.stats.wounds} title={props.model.name || `${props.model.type} ${(props.model.selected > 1 ? i : '')}`} />
        ))}
      </Col>
      <Col sm='2'>
        <div>
          <Badge pill variant="primary" className="mb-2" style={{
            textTransform: "uppercase",
            marginRight: "10px",
            display: "block",
          }}>
            {props.model.faction} 💀
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
