import React from 'react';
import StatsTable from './StatsTable';
import StatBadge from './StatBadge';
import AbilityList from './AbilityList';
import WeaponList from './WeaponList';
import Phase from './Phase';
import { PsychicPhaseDetails, hasPsychicPhase } from './PsychicPhaseDetails';
import { SpecialistIcon } from './SpecialistIcon';
import { CategoryIcon } from './CategoryIcon';
import { Badge, Row, Col } from 'react-bootstrap'

import { Model } from '../types';

type Props = {
  model: Model
};

function Datasheet(props: Props) {
  const headingStyle = {
    background: 'black',
    color: 'white',
    padding: '10px',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  }
  return (
    <div className="model" style={{
      pageBreakBefore: "always",
    }}>
      <h1 style={headingStyle}>
        <Col>
          {props.model.category === "Specialist" && <SpecialistIcon specialism={props.model.specialism} />}
          {props.model.category && <CategoryIcon category={props.model.category} />}
          <strong>{props.model.type}</strong>
          {props.model.category &&
            (props.model.category === "Specialist"
              ? ` (${[props.model.specialism, props.model.category].join(' ')})`
              : ` (${props.model.category})`)
          }
        </Col>
        <Col style={{flexGrow: 0, textAlign: 'right'}}>
          <small>{props.model.points}pts</small>
        </Col>
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
      {props.model.name && <div>Name: <strong>{props.model.name}</strong></div>}
      {props.model.category === "Commander" && <div>Commander specialism: <strong>{props.model.specialism}</strong></div>}
      <StatsTable {...props.model.stats}/>
      <AbilityList abilities={props.model.abilities} phase=''/>
      <Phase name="movement">
        <Row>
          <Col sm='1'>
            <StatBadge name="M" value={`${props.model.stats.movement}`}/>
          </Col>
          <Col>
            <AbilityList abilities={props.model.abilities} phase='movement'/>
          </Col>
        </Row>
      </Phase>
      { hasPsychicPhase(props.model) &&
        <Phase name="psychic">
          <PsychicPhaseDetails model={props.model}/>
        </Phase>
      }
      { !isNaN(props.model.stats.ballistic_skill) && (props.model.weapons.filter((x) => (x.type !== "Melee")).length > 0) &&
      <Phase name="shooting">
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
      </Phase>
      }
      <Phase name="fight">
        <Row>
          <Col sm='1'>
            <StatBadge name="A" value={`${props.model.stats.attacks}`} secondaryValue={ props.model.stats.additional_attacks ? `+${props.model.stats.additional_attacks}` : null}/>
            <StatBadge name="T" value={`${props.model.stats.toughness}`}/>
          </Col>
          <Col sm='1'>
            <StatBadge name="WS" value={`${props.model.stats.weapon_skill}`} secondaryValue="+"/>
            <StatBadge name="Sv" value={`${props.model.stats.save}`} secondaryValue="+"/>
            { props.model.stats.invulnerable_save
              ? <StatBadge name="Inv" value={`${props.model.stats.invulnerable_save}`} secondaryValue="+"/>
              : <></>
            }
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
