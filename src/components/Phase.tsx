import React from 'react';
import { Col } from 'react-bootstrap'

type Props = {
  name: string,
  note?: string,
  children: React.ReactNode,
};

function Phase(props: Props) {
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
        {props.note && (
          <small>{props.note}</small>
        )}
      </Col>
    </h1>
    {props.children}
  </>
}

export default Phase;
