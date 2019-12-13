import React from 'react'
import { ModelStats } from './types'
import { Table } from 'react-bootstrap'

function StatsTable (props: ModelStats) {
  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>M</th>
          <th>WS</th>
          <th>BS</th>
          <th>S</th>
          <th>T</th>
          <th>W</th>
          <th>A</th>
          <th>Ld</th>
          <th>Sv</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.movement}&quot;</td>
          <td>{props.weapon_skill}+</td>
          <td>{props.ballistic_skill}+</td>
          <td>{props.strength}</td>
          <td>{props.toughness}</td>
          <td>{props.wounds}</td>
          <td>{props.attacks}</td>
          <td>{props.leadership}</td>
          <td>{props.save}+</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default StatsTable
