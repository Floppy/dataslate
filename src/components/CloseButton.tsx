import React from 'react';
import { Button } from 'react-bootstrap';

type Props = {
  handleClose: any,
};

export function CloseButton(props: Props) {
  return (<Button variant="primary" className='d-print-none' onClick={props.handleClose}>Close</Button>);
}
