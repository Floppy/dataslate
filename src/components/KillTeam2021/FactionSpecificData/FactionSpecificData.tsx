import React, { FC } from 'react'
import { VeteranGuardsmen } from './VeteranGuardsmen'
import { Pathfinder } from './Pathfinder'
import { Default } from './Default'
import { Novitiate } from './Novitiate'
import { VoidDancerTroupe } from './VoidDancerTroupe'

interface Props {
  faction: string
  fireteams: string[]
}

export const FactionSpecificData: FC<Props> = (props) => {
  console.log(props.faction)
  switch (props.faction) {
    case 'Veteran Guardsmen':
      return <VeteranGuardsmen fireteams={props.fireteams} />
    case 'Novitiate':
      return <Novitiate fireteams={props.fireteams} />
    case 'Pathfinder':
      console.log('PATHFINDER SWITCH')
      return <Pathfinder fireteams={props.fireteams} />
    case 'Void-Dancer Troupe':
      return <VoidDancerTroupe fireteams={props.fireteams} />
    default:
      return <Default faction={props.faction} fireteams={props.fireteams} />
  }
}
