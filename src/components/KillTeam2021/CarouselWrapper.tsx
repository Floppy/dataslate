import React from 'react'
import { Carousel } from 'react-bootstrap'

interface Props {
  children: React.ReactNode
  carouselMode: boolean
}

export function CarouselWrapper (props: Props): JSX.Element {
  if (props.carouselMode) {
    return <Carousel interval={null} touch controls indicators={false}>{props.children}</Carousel>
  } else {
    return <>{props.children}</>
  }
}
