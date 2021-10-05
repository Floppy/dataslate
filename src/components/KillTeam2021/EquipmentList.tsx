import React from 'react'
import { Equipment } from '../../types/KillTeam2021'
import { Card } from 'react-bootstrap'
import { HighlightedText } from './HighlightedText'

interface Props {
  equipment: Equipment[]
}

export function EquipmentList (props: Props) {
  return props.equipment.length === 0 ? <></> : (
    <Card border='secondary' bg='light'>
      <Card.Header style={{ background: 'rgba(0, 0, 0, 0.05)' }} as='h4'>
        Equipment
      </Card.Header>
      <Card.Body>
        {props.equipment.map((x: Equipment) => (
          <p>
            <strong>{x.name} ({x.cost} EP)</strong>
            {x.description
              ? <><strong>: </strong><HighlightedText>{x.description}</HighlightedText></>
              : <></>}
          </p>
        ))}
      </Card.Body>
    </Card>
  )
}
