import React from 'react'
import { Table } from 'react-bootstrap'

type Props = {
  movement: number,
  weapon_skill: number,
  ballistic_skill: number,
  strength: number,
  toughness: number,
  wounds: number,
  attacks: number,
  leadership: number,
  save: number,
}

function StatsTable (props: Props) {
  return (
    <Table striped bordered size="sm">
      <thead>
        <tr>
          <th>Movement</th>
          <th>Weapon Skill</th>
          <th>Ballistic Skill</th>
          <th>Strength</th>
          <th>Toughness</th>
          <th>Wounds</th>
          <th>Attacks</th>
          <th>Leadership</th>
          <th>Save</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.movement}&quot;</td>
          <td>{props.weapon_skill}+</td>
          <td>{isNaN(props.ballistic_skill) ? '-' : props.ballistic_skill+"+"}</td>
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
