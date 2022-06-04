import React from 'react'
import { Ability } from '../../types/Ability'
import { Card } from 'react-bootstrap'
import _ from 'lodash'
import { CompileDescription } from './CompileDescription'
import { RuleNameList } from '../RuleNameList'

interface Props {
  abilities: Ability[]
}

function AbilityList (props: Props): JSX.Element {
  return props.abilities.length === 0
    ? <></>
    : (
      <Card border='secondary' bg='light'>
        <Card.Header style={{ background: 'rgba(0, 0, 0, 0.05)' }} as='h4'>
          Abilities
        </Card.Header>
        <Card.Body>
          {_.sortBy(props.abilities, ['name']).map((x: Ability) => (
            <p key={x.id}>
              <strong>{x.name}: </strong>
              <CompileDescription>{x.description}</CompileDescription>
            </p>
          ))}
        </Card.Body>
      </Card>
      )
}

export default AbilityList
