import React from 'react'
import { Weapon } from '../../types/KillTeam2021'
import { Table } from 'react-bootstrap'
import { HighlightedText } from './HighlightedText'

interface Props {
  weapons: Weapon[]
}

export function WeaponList (props: Props): JSX.Element {
  return (
    <>
      <Table striped bordered size='sm'>
        <thead>
          <tr>
            <th>Weapon</th>
            <th>Attacks</th>
            <th>Hit</th>
            <th>Damage</th>
            <th>Rules</th>
            <th>Critical</th>
          </tr>
        </thead>
        <tbody>
          {props.weapons.map((x: Weapon) => (
            <tr key={x.id}>
              <td>{x.name}</td>
              <td>{x.attacks}</td>
              <td>{x.hit}+</td>
              <td>{x.damage} / {x.criticalDamage}</td>
              <td><HighlightedText>{x.specialRules}</HighlightedText></td>
              <td><HighlightedText>{x.criticalRules}</HighlightedText></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
