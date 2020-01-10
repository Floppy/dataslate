import React from 'react';
import StatsTable from './StatsTable';
import StatBadge from './StatBadge';
import AbilityList from './AbilityList';
import PsychicPowerList from './PsychicPowerList';
import WeaponList from './WeaponList';
import Phase from './Phase';
import { SpecialistIcon } from './SpecialistIcon';
import { CategoryIcon } from './CategoryIcon';
import { Badge, Row, Col } from 'react-bootstrap'

import { Model } from '../types';

type Props = {
  model: Model
};

function Datasheet(props: Props) {
  return (
    <div className="model" style={{
      pageBreakAfter: "always",
    }}>
      <h1>
        {(props.model.category === 'Commander' || props.model.category === 'Leader') ?
          (
            <Badge variant="warning">
              <CategoryIcon category={props.model.category} />
              {' '}
              {props.model.category}
            </Badge>
          )
          : (
              props.model.specialism &&
                <Badge variant="warning">
                  <SpecialistIcon specialism={props.model.specialism} />
                  {' '}
                  {props.model.specialism}
                </Badge>
          )
        }
        {' '}
        {props.model.type}
        {props.model.name && <>: <em>{props.model.name}</em></>
        }
      </h1>
      <div>
        <Badge pill variant="danger" style={{
          textTransform: "uppercase",
          marginRight: "10px",
        }}>
          {props.model.faction}
        </Badge>
        {props.model.keywords.map((keyword: string) => (
          <Badge pill variant="primary" style={{
            textTransform: "uppercase",
            marginRight: "10px",
          }}>
            {keyword}
          </Badge>
        ))}
      </div>
      <div>
        Points: {props.model.points}
      </div>
      <StatsTable {...props.model.stats}/>
      <AbilityList abilities={props.model.abilities} phase=''/>
      <Phase name="movement">
        <Row>
          <Col sm='1'>
            <StatBadge name="M" value={`${props.model.stats.movement}"`}/>
          </Col>
          <Col>
            <AbilityList abilities={props.model.abilities} phase='movement'/>
          </Col>
        </Row>
      </Phase>
      <Phase name="psychic">
        <PsychicPowerList powers={props.model.psychicPowers}/>
        <AbilityList abilities={props.model.abilities} phase='psychic'/>
      </Phase>
      { !isNaN(props.model.stats.ballistic_skill) &&
      <Phase name="shooting">
        <Row>
          <Col sm='1'>
            <StatBadge name="BS" value={`${props.model.stats.ballistic_skill}+`}/>
          </Col>
          <Col>
            <WeaponList weapons={props.model.weapons} phase='shooting' userStrength={props.model.stats.strength}/>
            <AbilityList abilities={props.model.abilities} phase='shooting'/>
          </Col>
        </Row>
      </Phase>
      }
      <Phase name="fight">
        <Row>
          <Col sm='1'>
            <StatBadge name="A" value={`${props.model.stats.attacks}`}/>
            <StatBadge name="WS" value={`${props.model.stats.weapon_skill}+`}/>
          </Col>
          <Col>
            <WeaponList weapons={props.model.weapons} phase='fight' userStrength={props.model.stats.strength}/>
            <AbilityList abilities={props.model.abilities} phase='fight'/>
          </Col>
        </Row>
      </Phase>
      <Phase name="morale">
        <Row>
          <Col sm='1'>
            <StatBadge name="Ld" value={`${props.model.stats.leadership}`}/>
          </Col>
          <Col>
        <AbilityList abilities={props.model.abilities} phase='morale'/>
           </Col>
        </Row>
      </Phase>
    </div>
  );
}

export default Datasheet;
