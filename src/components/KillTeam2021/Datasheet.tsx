import React from 'react';
import { Badge } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import { Model } from '../../types/KillTeam2021';
import { ModelTitle } from '../ModelTitle'
import { WeaponList } from './WeaponList'
import { StatBadge } from '../StatBadge'
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
        <WeaponList weapons={props.model.weapons} />
        <EquipmentList equipment={props.model.equipment} />
        <AbilityList abilities={props.model.abilities} phase="" />
        <ActionList actions={props.model.actions} />
        {_.range(1,props.model.selected+1).map((i) => (
          <WoundTrack wounds={props.model.stats.wounds} title={props.model.name || `${props.model.type} ${(props.model.selected > 1 ? i : '')}`} />
        ))}
      </Col>
      <Col sm='auto'>
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
        <Row>
          <Col sm='auto'>
            <StatBadge name="M" value={`${props.model.stats.movement}●`}/>
          </Col>
          <Col sm='auto'>
            <StatBadge name="W" value={`${props.model.stats.wounds}`}/>
          </Col>
        </Row>
        <Row>
          <Col sm='auto'>
            <StatBadge name="APL" value={`${props.model.stats.actionPointLimit}`}/>
          </Col>
          <Col sm='auto'>
            <StatBadge name="GA" value={`${props.model.stats.groupActivation}`}/>
          </Col>
        </Row>
        <Row>
          <Col sm='auto'>
            <StatBadge name="DF" value={`${props.model.stats.defence}`}/>
          </Col>
          <Col sm='auto'>
            <StatBadge name="Sv" value={`${props.model.stats.save}+`}/>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
