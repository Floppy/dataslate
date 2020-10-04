import React from 'react';
import { Button } from 'react-bootstrap';

type Props = {
  onClose: any,
};

export function CloseButton(props: Props) {
  return (<Button variant="danger" onClick={props.onClose}>Close</Button>);
}
