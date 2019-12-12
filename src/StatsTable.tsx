import React from 'react'
import { ModelStats } from './types'

function StatsTable (props: ModelStats) {
  return (
    <table>
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
    </table>
  )
}

export default StatsTable
