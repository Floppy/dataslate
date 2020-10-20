import React from 'react';
import { SpecialistIcon } from './SpecialistIcon';
import { CategoryIcon } from './CategoryIcon';
import { Col } from 'react-bootstrap'

import { Model } from '../types';

const _ = require('lodash')

type Props = {
  showPoints?: boolean,
  model: Model
};

export function ModelTitle(props: Props) {
  const headingStyle = {
    background: 'lightgrey',
    color: 'black',
    padding: '5px',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  }
  const titleComponents = _.without([
    props.model.name,
    props.model.type,
    (props.model.category === "Specialist" || props.model.category === "Specialist Retainer"
      ? props.model.specialism
      : props.model.category)
  ],null, "");
  return (
    <h2 style={headingStyle}>
      <Col>
        {(props.model.category === "Specialist" || props.model.category === "Specialist Retainer") && <SpecialistIcon specialism={props.model.specialism} />}
        {props.model.category && <CategoryIcon category={props.model.category} />}
        <strong>{titleComponents[0]} </strong>
        {props.model.selected > 1 && (
          <small>x{props.model.selected}</small>
        )}
        <small>{_.join(_.slice(titleComponents,1), ", ")}</small>
      </Col>
      {props.showPoints && (
        <Col style={{flexGrow: 0, textAlign: 'right'}}>
          <small>{props.model.points}pts</small>
        </Col>
      )}
    </h2>
  );
}
