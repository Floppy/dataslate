import React, { MouseEvent } from 'react';
import { Button } from 'react-bootstrap';

type Props = {
  onClose: (event: MouseEvent<HTMLButtonElement>) => void,
};

export function CloseButton(props: Props) {
  return (<Button variant="primary" className='d-print-none' onClick={props.onClose}>Close</Button>);
}
