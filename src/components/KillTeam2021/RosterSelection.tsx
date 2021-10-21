import { Operative, Weapon } from '../../types/KillTeam2021'
import { Form, Row, Table } from 'react-bootstrap'
import React, { FC } from 'react'

interface Props {
  operatives: Operative[]
  selectedOperatives: string[]
  setSelectedOperatives: (opIds: string[]) => void
}

const weaponNames = (weapons: Weapon[]): JSX.Element[] => {
  return weapons.map((weapon, index) => {
    return <Row key={weapon.name}>{weapon.name}</Row>
  })
}

const operativeName = (operative: Operative): JSX.Element => {
  // TODO: Hasn't been tested with a roster with actual names for units, I think this is only supported if you pay for battlescribe
  const name = operative.name.includes(operative.datacard) ? operative.name : `${operative.name} [${operative.datacard}]`
  return <span>{name}</span>
}

const flipSelection = (selectedOperatives: string[], opId: string): string[] => {
  return selectionChanged(selectedOperatives, opId, !selectedOperatives.includes(opId))
}

const selectionChanged = (selectedOperatives: string[], opId: string, selected: boolean): string[] => {
  let selectedOps = []
  if (selected) {
    selectedOps = [
      opId,
      ...selectedOperatives
    ]
  } else {
    const idx = selectedOperatives.indexOf(opId)
    if (idx > -1) {
      selectedOperatives.splice(idx, 1)
    }
    selectedOps = selectedOperatives
  }
  return selectedOps
}

export const RosterSelection: FC<Props> = (props: Props) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Operative</th>
          <th>Weapons</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {props.operatives.map((op) => {
          const selected = props.selectedOperatives.includes(op.id)
          const className = selected ? '' : 'unselected'
          return (
            <tr
              key={op.id} onClick={(event) => { props.setSelectedOperatives(flipSelection(props.selectedOperatives, op.id)) }}
              className={className}
            >
              <td>{operativeName(op)}</td>
              <td>{weaponNames(op.weapons)}</td>
              <td>
                <Form.Check
                  type='checkbox'
                  id='operative'
                  label=''
                  checked={selected}
                />
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}
