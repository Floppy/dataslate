import React from 'react';
import Dropzone from 'react-dropzone'
import Intro from './Intro'
import { Alert } from 'react-bootstrap'

type Props = {
  onUpload: any,
}

function Homepage(props: Props) {
  return <>
    <Intro />
    <Dropzone onDrop={props.onUpload} accept='.ros,.rosz'>
      {({ getRootProps, getInputProps }) => (
        <Alert variant='info' {...getRootProps()} style={{ textAlign: 'center' }}>
          <input {...getInputProps()} />
          <p>Drop a Battlescribe roster file here, or click to select one.</p>
          <p><em>(*.rosz and *.ros accepted)</em></p>
        </Alert>
      )}
    </Dropzone>
    <footer>
      Built with React and Bootstrap. Released as Open Source, code <a href='https://github.com/floppy/scriptorum'>on GitHub</a>.
    </footer>
  </>
}

export default Homepage;
