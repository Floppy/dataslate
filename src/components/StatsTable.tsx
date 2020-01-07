import React from 'react'
import { Table } from 'react-bootstrap'

type Props = {
  movement?: number,
  weapon_skill?: number,
  ballistic_skill?: number,
  strength?: number,
  toughness?: number,
  wounds?: number,
  attacks?: number,
  leadership?: number,
  save?: number,
}

function StatsTable (props: Props) {
  return (
    <Table striped bordered>
      <thead>
        <tr>
          {props.movement ? <th>Movement</th> : null}
          {props.weapon_skill ? <th>Weapon Skill</th> : null}
          {props.ballistic_skill ? <th>Ballistic Skill</th> : null}
          {props.strength ? <th>Strength</th> : null}
          {props.toughness ? <th>Toughness</th> : null}
          {props.wounds ? <th>Wounds</th> : null}
          {props.attacks ? <th>Attacks</th> : null}
          {props.leadership ? <th>Leadership</th> : null}
          {props.save ? <th>Save</th> : null}
        </tr>
      </thead>
      <tbody>
        <tr>
          {props.movement ? <td>{props.movement}&quot;</td> : null}
          {props.weapon_skill ? <td>{props.weapon_skill}+</td> : null}
          {props.ballistic_skill ? <td>{isNaN(props.ballistic_skill) ? '-' : props.ballistic_skill+"+"}</td> : null}
          {props.strength ? <td>{props.strength}</td> : null}
          {props.toughness ? <td>{props.toughness}</td> : null}
          {props.wounds ? <td>{props.wounds}</td> : null}
          {props.attacks ? <td>{props.attacks}</td> : null}
          {props.leadership ? <td>{props.leadership}</td> : null}
          {props.save ? <td>{props.save}+</td> : null}
        </tr>
      </tbody>
    </Table>
  )
}

export default StatsTable
