import React, { FC } from 'react'
import { VeteranGuardsmen } from './VeteranGuardsmen'
import { Pathfinder } from './Pathfinder'
import { Default } from './Default'

interface Props {
  faction: string
  fireteams: string[]
}

export const FactionSpecificData: FC<Props> = (props) => {
  switch (props.faction) {
    case 'Veteran Guardsmen':
      return <VeteranGuardsmen fireteams={props.fireteams} />
    case 'Pathfinder':
      return <Pathfinder fireteams={props.fireteams} />
    default:
      return <Default faction={props.faction} fireteams={props.fireteams} />
  }
}
