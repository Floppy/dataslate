import React from 'react';
import { Alert } from 'react-bootstrap'

function Intro() {
  return <>
    <h1>
      Scriptorum
    </h1>
    <p className='lead'>
      Readable datasheets for Warhammer 40k Kill Team
    </p>
    <ul>
      <li>Organises abilities and weapons by phase</li>
      <li>Merges identical models</li>
      <li>Prints out as one datasheet per page</li>
      <li>Clear, readable layout</li>
    </ul>
    <Alert variant='danger'>
      Scriptorum is a work in progress! So far we only support .ros files,
      not .rosz, and the output and formatting is unfinished. But it should work,
      so try it out! If you spot any problems, please create an
      issue <a href='https://github.com/Floppy/scriptorum/issues'>on GitHub</a> and
      include your roster file if possible.
    </Alert>
  </>
}

export default Intro;
