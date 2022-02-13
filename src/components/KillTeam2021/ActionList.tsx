import { Action } from '../../types/KillTeam2021'
import { Card } from 'react-bootstrap'
import _ from 'lodash'
import { CompileDescription } from './CompileDescription'

interface Props {
  actions: Action[]
}

export function ActionList (props: Props): JSX.Element {
  return (
    <>
      {_.sortBy(props.actions, ['name']).map((x: Action) => (
        <Card key={x.id} border='primary' bg='light'>
          <Card.Header style={{ background: '#FF6F2D', color: 'white' }} as='h4'>
            {x.name}
          </Card.Header>
          <Card.Body>
            <CompileDescription>{x.description}</CompileDescription>
          </Card.Body>
        </Card>
      ))}
    </>
  )
}
