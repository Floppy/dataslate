import React from 'react';
import { Card } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import { Model } from '../../types/KillTeam2021';
import { ModelTitle } from '../ModelTitle'
import { WeaponList } from './WeaponList'
import { StatBadge } from '../StatBadge'
import { EquipmentList } from './EquipmentList'
import { ActionList } from './ActionList'
import { KeywordList } from '../KeywordList'
import { WoundTrack } from './WoundTrack'
import AbilityList from './AbilityList';
import _ from 'lodash'

type Props = {
  model: Model
};

export function Datasheet(props: Props) {
  return (
    <Card className={props.model.selected > 0 ? "included" : "excluded"}>
      <ModelTitle {...props.model} />
      <Card.Body>
        <Row>
          <Col sm="10">
            {_.range(1,props.model.selected+1).map((i) => (
              <WoundTrack wounds={props.model.stats.wounds} title={props.model.name} />
            ))}
            <WeaponList weapons={props.model.weapons} />
            <Row>
              <Col>
                <AbilityList abilities={props.model.abilities} />
                <EquipmentList equipment={props.model.equipment} />
              </Col>
              <Col>
                <ActionList actions={props.model.actions} />
              </Col>
            </Row>
          </Col>
          <Col sm="1">
            <StatBadge name="M" value={`${props.model.stats.movement}●`}/>
            <StatBadge name="GA" value={`${props.model.stats.groupActivation}`}/>
            <StatBadge name="DF" value={`${props.model.stats.defence}`}/>
          </Col>
          <Col sm="1">
            <StatBadge name="W" value={`${props.model.stats.wounds}`}/>
            <StatBadge name="APL" value={`${props.model.stats.actionPointLimit}`}/>
            <StatBadge name="Sv" value={`${props.model.stats.save}+`}/>
          </Col>
        </Row>
      </Card.Body>
      <KeywordList faction={props.model.faction ? `${props.model.faction} 💀` : null} keywords={props.model.keywords} />
    </Card>
  );
}
