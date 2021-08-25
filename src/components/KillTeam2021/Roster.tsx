import React, { MouseEvent } from 'react';
import { Col } from 'react-bootstrap';
import { CloseButton } from '../CloseButton';
import { Model } from './types';
import { Datasheet } from './Datasheet';

type Props = {
  name: string,
  models: Model[],
  onClose: (event: MouseEvent<HTMLButtonElement>) => void,
};

export function Roster(props: Props) {
  return <>
    <h1 style={{
      background: 'black',
      color: 'white',
      padding: '10px',
      width: '100%',
      textTransform: 'capitalize',
      display: 'flex',
    }}>
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
  </>
}
