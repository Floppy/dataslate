import React from 'react'
import { Ability } from '../../types/Ability'
import { Table } from 'react-bootstrap'
import _ from 'lodash'

interface Props {
  abilities: Ability[]
  phase: string
  highlight?: boolean
}

export function AbilityList (props: Props): JSX.Element {
  const abilities = props.phase !== ''
    ? props.abilities.filter((x) => (x.phases?.includes(props.phase)))
    : props.abilities.filter((x) => (x.phases?.length === 0))
  const variant = props.highlight === true ? 'primary' : ''

  return abilities.length === 0
    ? <></>
    : (
      <Table striped bordered size='sm' variant={variant}>
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
