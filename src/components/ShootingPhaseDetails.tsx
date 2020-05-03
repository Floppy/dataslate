import React from 'react';
import StatBadge from './StatBadge';
import AbilityList from './AbilityList';
import WeaponList from './WeaponList';
import { Row, Col } from 'react-bootstrap'

import { Model } from '../types';

type Props = {
  model: Model
};

export function ShootingPhaseDetails(props: Props) {
  return (
    <Row>
      <Col sm='1'>
        <StatBadge name="BS" value={`${props.model.stats.ballistic_skill}`} secondaryValue="+"/>
        <StatBadge name="T" value={`${props.model.stats.toughness}`}/>
      </Col>
      <Col sm='1'>
        <StatBadge name="Sv" value={`${props.model.stats.save}`} secondaryValue="+"/>
        { props.model.stats.invulnerable_save
          ? <StatBadge name="Inv" value={`${props.model.stats.invulnerable_save}`} secondaryValue="+"/>
          : <></>
        }
      </Col>
    <Col>
        <WeaponList weapons={props.model.weapons} phase='shooting' userStrength={props.model.stats.strength}/>
        <AbilityList abilities={props.model.abilities} phase='shooting'/>
      </Col>
    </Row>
  );
}

export function hasShootingPhase(model: Model) {
  return !isNaN(model.stats.ballistic_skill) && (model.weapons.filter((x) => (x.type !== "Melee")).length > 0)
}
