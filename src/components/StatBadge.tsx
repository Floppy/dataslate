import React from 'react'
import { Badge } from 'react-bootstrap'

interface Props {
  name: string
  value: string
  secondaryValue?: string | null
}

export function StatBadge (props: Props) {
  return (
    <Badge pill variant='dark' className='w-100 mb-2 px-0'>
      <div className='text-light'>{props.name}</div>
      <div className='h1'>
        {props.value}
        {props.secondaryValue
          ? <small>{props.secondaryValue}</small>
          : <></>}
      </div>
    </Badge>
  )
}
