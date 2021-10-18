import { Operative, Weapon } from '../../types/KillTeam2021'
import { Row, Table } from 'react-bootstrap'
import ReactBootstrapSlider from 'react-bootstrap-slider'
import React from 'react'

interface Props {
  operatives: Operative[]
  selectedOperatives: string[]
  setSelectedOperatives: (opIds: string[]) => void
}

const weaponNames = (weapons: Weapon[]) => {
  return weapons.map((weapon, index) => {
    return <Row>{weapon.name}</Row>
  })
}

const operativeName = (operative: Operative) => {
  // TODO: Hasn't been tested with a roster with actual names for units, I think this is only supported if you pay for battlescribe
  const name = operative.name.includes(operative.datacard) ? operative.name : `${operative.name} [${operative.datacard}]`
  return <span>{name}</span>
}

const selectionChanged = (selectedOperatives: string[], opId: string, selected: boolean) => {
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

export function RosterSelection (props: Props) {
  console.log(props.selectedOperatives)
  return (
    <Table>
      <thead>
        <tr>
          <th>Operative</th>
          <th>Weapons</th>
          <th>Include in Kill Team</th>
        </tr>
      </thead>
      <tbody>
        {props.operatives.map((op, index) => {
          return (
            <tr key={index}>
              <td>{operativeName(op)}</td>
              <td>{weaponNames(op.weapons)}</td>
              <td>
                <ReactBootstrapSlider
                  value={props.selectedOperatives.includes(op.id)}
                  slideStop={(x: any) => props.setSelectedOperatives(selectionChanged(props.selectedOperatives, op.id, x.target.value))}
                  step={0.5}
                  max={1}
                  min={0}
                />
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}
