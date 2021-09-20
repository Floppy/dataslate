import React from 'react';
import { Table } from 'react-bootstrap'

type Props = {
  wounds: number,
  names: string[],
};

export function WoundTracks(props: Props) {
  return <Table striped bordered size="sm">
    <tbody>
      {props.names.map((name) => (
        <tr>
          <td>{name}</td>
          <td>{"🩸 ".repeat(props.wounds)}</td>
        </tr>
      ))}
    </tbody>
  </Table>
}
