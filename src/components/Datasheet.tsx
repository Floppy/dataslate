import React from 'react';
import Phase from './Phase';
import { NoPhaseDetails } from './NoPhaseDetails';
import { MovementPhaseDetails } from './MovementPhaseDetails';
import { PsychicPhaseDetails, hasPsychicPhase } from './PsychicPhaseDetails';
import { ShootingPhaseDetails, hasShootingPhase } from './ShootingPhaseDetails';
import { FightPhaseDetails } from './FightPhaseDetails';
import { MoralePhaseDetails } from './MoralePhaseDetails';
import { SpecialistIcon } from './SpecialistIcon';
import { CategoryIcon } from './CategoryIcon';
import { Col } from 'react-bootstrap'

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
      <NoPhaseDetails model={props.model}/>
      <Phase name="movement">
        <MovementPhaseDetails model={props.model}/>
      </Phase>
      { hasPsychicPhase(props.model) &&
        <Phase name="psychic">
          <PsychicPhaseDetails model={props.model}/>
        </Phase>
      }
      { hasShootingPhase(props.model) &&
        <Phase name="shooting">
          <ShootingPhaseDetails model={props.model}/>
        </Phase>
      }
      <Phase name="fight">
        <FightPhaseDetails model={props.model}/>
      </Phase>
      <Phase name="morale">
        <MoralePhaseDetails model={props.model}/>
      </Phase>
    </div>
  );
}

export default Datasheet;
