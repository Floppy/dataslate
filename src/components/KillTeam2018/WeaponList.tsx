import { Weapon } from '../../types/KillTeam2018'
import { Table } from 'react-bootstrap'
import _ from 'lodash'

interface Props {
  weapons: Weapon[]
  phase: string
  userStrength: number
}

function WeaponList (props: Props): JSX.Element {
  const weapons = props.phase === 'shooting'
    ? props.weapons.filter((x) => (x.type !== 'Melee'))
    : props.weapons.filter((x) => (x.type === 'Melee'))

  return weapons.length === 0
    ? <></>
    : (
      <Table striped bordered size='sm'>
        <thead>
          <tr>
            <th>Weapon</th>
            {props.phase === 'shooting' && <th>Range</th>}
            {props.phase === 'shooting' && <th>Type</th>}
            {props.phase === 'shooting' && <th>Shots</th>}
            <th>S</th>
            <th>AP</th>
            <th>D</th>
            <th>Abilities</th>
          </tr>
        </thead>
        <tbody>
          {_.sortBy(weapons, ['name']).map((x: Weapon) => (
            <tr key={x.id}>
              <td style={{ whiteSpace: 'nowrap' }}>{x.name}</td>
              {props.phase === 'shooting' && <td>{x.range}&quot;</td>}
              {props.phase === 'shooting' && <td style={{ whiteSpace: 'nowrap' }}>{x.type}</td>}
              {props.phase === 'shooting' && <td style={{ whiteSpace: 'nowrap' }}>{x.shots}</td>}
              <td>{x.strength}</td>
              <td>{x.armourPiercing}</td>
              <td>{x.damage}</td>
              <td>{x.abilities}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      )
}

export default WeaponList
