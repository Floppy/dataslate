import React from 'react';
import { Col } from 'react-bootstrap'
import { Model } from './types';
import _ from 'lodash';

type Props = {
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
  ],null, "");
  return (
    <h2 style={headingStyle}>
      <Col>
        {props.model.selected > 1 && (
          <small>{props.model.selected} x </small>
        )}
        <strong>{titleComponents[0]} </strong>
        <small>{_.join(_.slice(titleComponents,1), ", ")}</small>
      </Col>
    </h2>
  );
}
