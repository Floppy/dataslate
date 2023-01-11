import React from 'react'
import { PsychicPower } from '../../types/WH40k9e'
import { Table } from 'react-bootstrap'
import _ from 'lodash'

interface Props {
  powers: PsychicPower[]
}

export function PsychicPowerList (props: Props): JSX.Element {
  return props.powers.length === 0
    ? <></>
    : (
      <Table striped bordered size='sm'>
        <thead>
          <tr>
            <th>Power</th>
            <th>Warp Charge</th>
            <th>Range</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {_.sortBy(props.powers, ['name']).map((x: PsychicPower) => (
            <tr key={x.id}>
              <td>{x.name}</td>
              <td>{x.charge}</td>
              <td>{x.range}</td>
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
