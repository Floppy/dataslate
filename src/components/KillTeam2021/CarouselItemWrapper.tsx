import React from 'react'
import { CarouselItem } from 'react-bootstrap'

interface Props {
  children: React.ReactNode
  carouselMode: boolean
}

export function CarouselItemWrapper (props: Props): JSX.Element {
  if (props.carouselMode) {
    return <CarouselItem {...props} />
  } else {
    return <>{props.children}</>
  }
}
