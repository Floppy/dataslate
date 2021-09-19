import React from 'react';
import { Badge, Card } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import { Model } from '../../types/KillTeam2021';
import { ModelTitle } from '../ModelTitle'
import { WeaponList } from './WeaponList'
import { StatBadge } from '../StatBadge'
import { EquipmentList } from './EquipmentList'
import { ActionList } from './ActionList'
import { WoundTrack } from './WoundTrack'
import AbilityList from './AbilityList';
import _ from 'lodash'

type Props = {
  model: Model
};

export function Datasheet(props: Props) {
  return (
    <Card>
      <ModelTitle {...props.model} />
      <Row className={props.model.selected > 0 ? "included" : "excluded"}>
        <Col>
          {_.range(1,props.model.selected+1).map((i) => (
            <WoundTrack wounds={props.model.stats.wounds} title={props.model.name || `${props.model.type} ${(props.model.selected > 1 ? i : '')}`} />
          ))}
          <WeaponList weapons={props.model.weapons} />
          <Row>
            <Col>
              <EquipmentList equipment={props.model.equipment} />
              <AbilityList abilities={props.model.abilities} />
            </Col>
            <Col>
              <ActionList actions={props.model.actions} />
            </Col>
          </Row>
        </Col>
        <Col sm='auto'>
          <Row>
            <StatBadge name="M" value={`${props.model.stats.movement}●`}/>
            <StatBadge name="W" value={`${props.model.stats.wounds}`}/>
          </Row>
          <Row>
            <StatBadge name="APL" value={`${props.model.stats.actionPointLimit}`}/>
            <StatBadge name="GA" value={`${props.model.stats.groupActivation}`}/>
          </Row>
          <Row>
            <StatBadge name="DF" value={`${props.model.stats.defence}`}/>
            <StatBadge name="Sv" value={`${props.model.stats.save}+`}/>
          </Row>
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
        </Col>
      </Row>
    </Card>
  );
}
