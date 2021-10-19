import React from 'react'
import { Table } from 'react-bootstrap'

interface Props {
  movement: number
  weapon_skill: number
  ballistic_skill: number
  strength: number
  toughness: number
  wounds: number
  attacks: number
  additional_attacks: number
  leadership: number
  save: number
  invulnerable_save: number
  points: number
}

function StatsTable (props: Props): JSX.Element {
  return (
    <Table striped bordered size='sm'>
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
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.movement}&quot;</td>
          <td>{props.weapon_skill}+</td>
          <td>{isNaN(props.ballistic_skill) ? '-' : `${props.ballistic_skill}+`}</td>
          <td>{props.strength}</td>
          <td>{props.toughness}</td>
          <td>{props.wounds}</td>
          <td>{props.attacks}
            {props.additional_attacks > 0 ? <strong>{' +'}{props.additional_attacks}</strong> : null}
          </td>
          <td>{props.leadership}</td>
          <td>{props.save}+
            {props.invulnerable_save > 0 ? <>{' / '}<strong>{props.invulnerable_save}++</strong></> : null}
          </td>
          <td>{props.points}</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default StatsTable
