import React from 'react'
import { Jumbotron } from 'react-bootstrap'

function Intro (): JSX.Element {
  return (
    <Jumbotron>
      <h1>
        Dataslate
      </h1>
      <p className='lead'>
        Printable datasheets for Warhammer 40,000 and Kill Team
      </p>
      <ul>
        <li>All the info you need, when you need it</li>
        <li>Stats, abilities and stratagems organised by phase (40k and KT 2018)</li>
        <li>No wasted space for identical models</li>
        <li>Designed for print or screen</li>
        <li>Clear, uncluttered layout for easy reference</li>
      </ul>
    </Jumbotron>
  )
}

export default Intro
