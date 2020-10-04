import React from 'react';
import Dropzone from 'react-dropzone'
import Intro from './Intro'
import { Row, Col, Alert, Card } from 'react-bootstrap'

type Props = {
  onUpload: any,
}

function Homepage(props: Props) {
  return <>
    <Intro />
    <Row>
      <Col>
        <Card>
          <Card.Title>Step 1</Card.Title>
          <Card.Text>
            Build your force in{' '}
            <a href='https://battlescribe.net/'>Battlescribe</a>
          </Card.Text>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Title>Step 2</Card.Title>
          <Card.Text><Dropzone onDrop={props.onUpload} accept='.ros,.rosz'>
            {({ getRootProps, getInputProps }) => (
              <Alert variant='primary' {...getRootProps()} style={{ textAlign: 'center' }}>
                <input {...getInputProps()} />
                <p>Drop your roster file here, or click to select one.</p>
                <p><em>(*.rosz and *.ros accepted)</em></p>
              </Alert>
            )}
          </Dropzone></Card.Text>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Title>Step 3</Card.Title>
          <Card.Text>Print out, and dominate your foes!</Card.Text>
        </Card>
      </Col>
    </Row>
    <footer>
      Built with <a href='https://reactjs.org/'>React</a> and <a href='https://getbootstrap.com'>Bootstrap</a>.
      Icons courtesy of <a href='https://killteam.app/'>Companion for Kill Team</a>.
      Released as <a href='https://github.com/floppy/scriptorum'>Open Source</a>,
      report problems <a href='https://github.com/floppy/scriptorum/issues/new'>on GitHub</a>.
    </footer>
  </>
}

export default Homepage;
