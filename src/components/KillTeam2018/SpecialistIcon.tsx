import React from 'react'

interface Props {
  specialism: string
}

export function SpecialistIcon (props: Props): JSX.Element {
  return (props.specialism
    ? <img className='specialism' style={{ height: '1em', marginRight: '10px' }} alt={props.specialism} src={`/icons/${props.specialism.toLowerCase()}.svg`} />
    : <></>
  )
}
