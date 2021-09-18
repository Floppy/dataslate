import React from 'react';
import { Table } from 'react-bootstrap'

type Props = {
  wounds: number,
  title: string,
};

export function WoundTrack(props: Props) {
  return <Table striped bordered size="sm">
    <tr>
      <td>{props.title}</td>
      <td>{"🩸 ".repeat(props.wounds)}</td>
    </tr>
  </Table>
}
