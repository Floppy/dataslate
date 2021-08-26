import React from 'react'
import { Table } from 'react-bootstrap'
import { ModelStats } from './types'

export function StatsTable(props: ModelStats) {
  return (
    <Table striped bordered size="sm">
      <thead>
        <tr>
          <th>M</th>
          <th>APL</th>
          <th>GA</th>
          <th>D</th>
          <th>S</th>
          <th>W</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.movement}</td>
          <td>{props.actionPointLimit}</td>
          <td>{props.groupActivation}</td>
          <td>{props.defence}</td>
          <td>{props.save}+
          { props.invulnerable_save ? <>{' / '}<strong>{props.invulnerable_save}++</strong></> : null}</td>
          <td>{props.wounds}</td>
        </tr>
      </tbody>
    </Table>
  )
}
