import React from 'react'

interface Props {
  category: string
}

export function CategoryIcon (props: Props) {
  return (props.category && props.category.toLowerCase() !== 'specialist' && props.category.toLowerCase() !== 'specialist retainer'
    ? <img className='category' style={{ height: '1em', marginRight: '10px' }} alt={props.category} src={`/icons/${props.category.toLowerCase()}.svg`} />
    : <></>
  )
}
