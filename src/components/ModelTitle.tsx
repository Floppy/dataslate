import React from 'react';
import { SpecialistIcon } from './SpecialistIcon';
import { CategoryIcon } from './CategoryIcon';
import { Col } from 'react-bootstrap'

import { Model } from '../types';

type Props = {
  model: Model
};

export function ModelTitle(props: Props) {
  const headingStyle = {
    background: 'black',
    color: 'white',
    padding: '10px',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  }
  return (
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
  );
}