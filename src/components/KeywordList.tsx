import React from 'react'
import { Badge } from 'react-bootstrap'

interface Props {
  faction: string | null
  keywords: string[]
}

export function KeywordList (props: Props) {
  return (
    <div style={{ background: 'rgba(0, 0, 0, 0.125)', padding: '5px 10px 0px 10px' }}>
      {props.faction
        ? <Badge
            pill variant='primary' className='mb-2' style={{
            textTransform: 'uppercase',
            marginRight: '10px'
          }}
          >
          {props.faction}
        </Badge> : <></>}
      {props.keywords.map((keyword: string) => (
        <Badge
          pill variant='secondary' className='mb-2' style={{
            textTransform: 'uppercase',
            marginRight: '10px'
          }}
        >
          {keyword}
        </Badge>
      ))}
    </div>
  )
}
