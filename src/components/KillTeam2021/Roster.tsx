import React, { MouseEvent } from 'react';
import { Col } from 'react-bootstrap';
import { CloseButton } from '../CloseButton';
import { Model } from '../../types/KillTeam2021';
import { Datasheet } from './Datasheet';
import { RuleList } from './RuleList';
import _ from 'lodash'

type Props = {
  name: string,
  models: Model[],
  onClose: (event: MouseEvent<HTMLButtonElement>) => void,
};

export function Roster(props: Props) {
  const headingStyle = {
    background: '#FF6F2D',
    color: 'black',
    padding: '10px',
    width: '100%',
    display: 'flex',
  };
  return <>
    <h1 style={headingStyle}>
      <Col>
        {props.name}
      </Col>
      <Col style={{flexGrow: 0, textAlign: 'right'}}>
        <CloseButton onClose={props.onClose}/>
      </Col>
    </h1>
    {props.models.map((model: Model) => (
        <Datasheet model={model}/>
    ))}
    <h2 style={{...headingStyle, breakBefore: 'always'}}>Rules</h2>
    <RuleList rules={_.uniqBy(_.flatten(props.models.map((m) => (m.rules))), 'name')}/>
  </>
}
