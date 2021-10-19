import React from 'react'
import { Table } from 'react-bootstrap'

interface Props {
  wounds: number
  names: string[]
}

export function WoundTracks (props: Props): JSX.Element {
  return (
    <Table striped bordered size='sm'>
      <thead>
        <tr>
          <th>Operative</th>
          <th>Wound Track</th>
        </tr>
      </thead>
      <tbody>
        {props.names.map((name) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{'□ '.repeat(props.wounds)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
