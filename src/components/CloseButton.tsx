import React from 'react';
import { Button } from 'react-bootstrap';

type Props = {
  onClose: any,
};

export function CloseButton(props: Props) {
  return (<Button variant="primary" className='d-print-none' onClick={props.onClose}>Close</Button>);
}
