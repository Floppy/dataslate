import { Ability } from '../../types/Ability'
import { Table } from 'react-bootstrap'
import _ from 'lodash'
import { HighlightedText } from './HighlightedText'

interface Props {
  rules: Ability[]
}

export function RuleList (props: Props): JSX.Element {
  return props.rules.length === 0
    ? <></>
    : (
      <Table striped bordered>
        <tbody>
          {_.sortBy(props.rules, ['name']).map((x: Ability) => (
            <tr key={x.id}>
              <td><strong>{x.name}</strong></td>
              <td><HighlightedText>{x.description}</HighlightedText></td>
            </tr>
          ))}
        </tbody>
      </Table>
      )
}
