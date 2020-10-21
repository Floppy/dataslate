import React from 'react';
import { SpecialistIcon } from './SpecialistIcon';
import { CategoryIcon } from './CategoryIcon';
import { Col } from 'react-bootstrap'
import ReactBootstrapSlider from 'react-bootstrap-slider';
import { Model } from '../types';

const _ = require('lodash')

type Props = {
  showSelector?: boolean,
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
        {props.model.selected > 1 && (
          <small>{props.model.selected} x </small>
        )}
        <strong>{titleComponents[0]} </strong>
        <small>{_.join(_.slice(titleComponents,1), ", ")}</small>
      </Col>
      {props.showSelector && (
        <Col style={{flexGrow: 0, textAlign: 'right'}}>
          <ReactBootstrapSlider
            value={props.model.selected}
            slideStop={() => (null)}
            step={1}
            max={props.model.count}
            min={0} />
        </Col>
      )}
    </h2>
  );
}
