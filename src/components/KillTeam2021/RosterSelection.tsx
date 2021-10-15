import { Operative, Weapon } from '../../types/KillTeam2021'
import { Col, Row } from 'react-bootstrap'
import ReactBootstrapSlider from 'react-bootstrap-slider'
import React from 'react'

interface Props {
  operatives: Operative[]
  selectedOperatives: string[]
  setSelectedOperatives: (opIds: string[]) => void
}

const weaponNames = (weapons: Weapon[]) => {
  return weapons.map((weapon, index) => {
    return <span>{weapon.name}</span>
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
  console.log(selectedOps)
  return selectedOps
}

export function RosterSelection (props: Props) {
  console.log(props.selectedOperatives)
  return (
    <>
      <Row>
        <Col xs={3}>Operative</Col>
        <Col xs={6}>Weapons</Col>
        <Col xs={2}>Include in Kill Team</Col>
      </Row>
      {props.operatives.map((op, index) => {
        return (
          <Row key={index}>
            <Col xs={3}>{operativeName(op)}</Col>
            <Col xs={6}>{weaponNames(op.weapons)}</Col>
            <Col xs={2}>
              <ReactBootstrapSlider
                value={props.selectedOperatives.includes(op.id)}
                slideStop={(x: any) => props.setSelectedOperatives(selectionChanged(props.selectedOperatives, op.id, x.target.value))}
                step={0.5}
                max={1}
                min={0}
              />
            </Col>
          </Row>
        )
      })}
    </>
  )
}
