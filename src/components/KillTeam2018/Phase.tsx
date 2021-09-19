import React from 'react';
import { Col } from 'react-bootstrap'

type Props = {
  name: string,
  note?: string,
  children: React.ReactNode,
};

function Phase(props: Props) {
  return <div style={{
    pageBreakAfter: 'always',
  }}>
    <h1 style={{
      background: '#FF6F2D',
      color: 'white',
      padding: '10px',
      width: '100%',
      display: 'flex',
    }}>
      <Col>
        {props.name} Phase
      </Col>
      <Col style={{flexGrow: 0, textAlign: 'right'}}>
        {props.note && (
          <small>{props.note}</small>
        )}
      </Col>
    </h1>
    {props.children}
  </div>
}

export default Phase;
