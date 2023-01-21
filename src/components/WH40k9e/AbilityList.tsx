import React from 'react'
import { Ability } from '../../types/Ability'
import { Table } from 'react-bootstrap'
import _ from 'lodash'

interface Props {
  abilities: Ability[]
  phase?: string
}

export function AbilityList (props: Props): JSX.Element {
  let abilities = props.abilities
  if (typeof (props.phase) === 'string') {
    abilities = props.phase !== ''
      ? props.abilities.filter((x) => (x.phases?.includes(props.phase as string)))
      : props.abilities.filter((x) => (x.phases?.length === 0))
  }

  return abilities.length === 0
    ? <></>
    : (
      <Table striped bordered size='sm'>
        <thead>
          <tr>
            <th>Ability</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {_.sortBy(abilities, ['name']).map((x: Ability) => (
            <tr key={x.id}>
              <td>{x.name}</td>
              <td dangerouslySetInnerHTML={{
                __html: x.description
              }}
              />
            </tr>
          ))}
        </tbody>
      </Table>
      )
}

export const hasAbilitiesForPhase = (abilities: Ability[], phase: string): boolean => (
  (abilities.filter((x) => (x.phases?.includes(phase)))).length > 0
)
