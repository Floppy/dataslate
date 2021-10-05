import React from 'react'
import { Ability } from '../../types/Ability'
import { Table } from 'react-bootstrap'
import _ from 'lodash'
import { HighlightedText } from './HighlightedText'

interface Props {
  rules: Ability[]
}

export function RuleList (props: Props) {
  return props.rules.length === 0 ? <></> : (
    <Table striped bordered>
      <tbody>
        {_.sortBy(props.rules, ['name']).map((x: Ability) => (
          <tr>
            <td><strong>{x.name}</strong></td>
            <td><HighlightedText>{x.description}</HighlightedText></td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
