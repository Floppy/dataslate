import React from 'react';
import { Jumbotron } from 'react-bootstrap'

function Intro() {
  return <Jumbotron>
    <h1>
      Dataslate
    </h1>
    <p className='lead'>
      Printable datasheets for Warhammer 40,000: Kill Team
    </p>
    <ul>
      <li>All the info you need, when you need it</li>
      <li>No wasted space for identical models</li>
      <li>Designed for print or screen</li>
      <li>Clear, uncluttered layout for easy reference</li>
      <li>Stats and abilities organised by phase (KT 2018)</li>
    </ul>
  </Jumbotron>
}

export default Intro;
