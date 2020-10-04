import React from 'react';
import { Jumbotron } from 'react-bootstrap'

function Intro() {
  return <Jumbotron>
    <h1>
      Scriptorum
    </h1>
    <p className='lead'>
      Easy-to-use datasheets for Warhammer 40,000: Kill Team
    </p>
    <ul>
      <li>All the info you need, when you need it</li>
      <li>Stats and abilities organised by phase</li>
      <li>No wasted space for identical mdels</li>
      <li>Designed for print or screen</li>
      <li>Clear, uncluttered layout for easy reference</li>
    </ul>
  </Jumbotron>
}

export default Intro;
