import React from 'react';
import Dropzone from 'react-dropzone'
import type { DropzoneOptions } from 'react-dropzone'
import Intro from './Intro'
import { Row, Col, Alert, Card } from 'react-bootstrap'

type Props = {
  onUpload: DropzoneOptions["onDrop"],
}

function Homepage(props: Props) {
  return <>
    <Intro />
    <Row>
      <Col>
        <Card>
          <Card.Header as="h3">Step 1</Card.Header>
          <Card.Body style={{minHeight: '12em'}}>
            <Card.Text>
              Build your force in{' '}
              <a href='https://battlescribe.net/'>Battlescribe</a>.
            </Card.Text>
            <Card.Text>
              Supported systems:
              <ul>
                <li>Kill Team 2018</li>
                <li>Kill Team 2021</li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Header as="h3">Step 2</Card.Header>
          <Card.Body style={{minHeight: '12em'}}>
            <Dropzone onDrop={props.onUpload} accept='.ros,.rosz'>
              {({ getRootProps, getInputProps }) => (
                <Alert variant='primary' {...getRootProps()} style={{ textAlign: 'center' }}>
                  <input {...getInputProps()} />
                  <p>Drop your roster file here, or click to select one.</p>
                  <p><em>(*.rosz and *.ros accepted)</em></p>
                </Alert>
              )}
            </Dropzone>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card>
          <Card.Header as="h3">Step 3</Card.Header>
          <Card.Body style={{minHeight: '12em'}}>
            <Card.Text>
              Print your datasheets out, and never forget an ability again!
            </Card.Text>
            <Card.Text>
              Prepare to dominate your foes!
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <footer>
      Built with <a href='https://reactjs.org/'>React</a> and <a href='https://getbootstrap.com'>Bootstrap</a>.
      Icons courtesy of <a href='https://killteam.app/'>Companion for Kill Team</a>.
      Released as <a href='https://github.com/floppy/dataslate'>Open Source</a>,
      report problems <a href='https://github.com/floppy/dataslate/issues/new'>on GitHub</a>.
      Version: <em><a {...{href: `https://github.com/floppy/dataslate/tree/${process.env.REACT_APP_GIT_SHA}`}} >{process.env.REACT_APP_GIT_SHA}</a></em>
    </footer>
  </>
}

export default Homepage;
