import React from 'react';
import { StatBadge } from '../StatBadge';
import AbilityList from '../AbilityList';
import WeaponList from './WeaponList';
import { Row, Col } from 'react-bootstrap'
import { ModelTitle } from '../ModelTitle';

import { Model } from '../../types/KillTeam2018';

type Props = {
  model: Model
};

export function FightPhaseDetails(props: Props) {
  return (
    <Row>
      <Col>
        <ModelTitle {...props.model}/>
        <WeaponList weapons={props.model.weapons} phase='fight' userStrength={props.model.stats.strength}/>
        <AbilityList abilities={props.model.abilities} phase='fight'/>
      </Col>
      <Col sm='auto'>
        <StatBadge name="A" value={`${props.model.stats.attacks}`} secondaryValue={ props.model.stats.additional_attacks ? `+${props.model.stats.additional_attacks}` : null}/>
        <StatBadge name="T" value={`${props.model.stats.toughness}`}/>
      </Col>
      <Col sm='auto'>
        <StatBadge name="WS" value={`${props.model.stats.weapon_skill}`} secondaryValue="+"/>
        <StatBadge name="Sv" value={`${props.model.stats.save}`} secondaryValue="+"/>
        { props.model.stats.invulnerable_save
          ? <StatBadge name="Inv" value={`${props.model.stats.invulnerable_save}`} secondaryValue="+"/>
          : <></>
        }
      </Col>
    </Row>
  );
}
