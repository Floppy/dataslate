import React from 'react'
import { Form, Modal, Col, Row } from 'react-bootstrap'
import { Settings } from '../types/Settings'

interface Props {
  setShowSettings: (showSettings: boolean) => void
  show: boolean
  settings: Settings
  setSettings: (settings: Settings) => void
}

function SettingsDialog (props: Props) {
  const handleWoundTrackChange = (event: any) => {
    const target = event.target
    const showWoundTrack: boolean = target.checked
    const newSettings = {
      ...props.settings,
      showWoundTrack: showWoundTrack
    }
    props.setSettings(newSettings)
  }

  return (
    <Modal
      show={props.show}
      onHide={() => props.setShowSettings(false)}
      dialogClassname='modal-90w'
    >
      <Modal.Header closeButton>
        <Modal.Title id='settings-dialog-title'>
          Dataslate Settings
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Col>
          <Row>KT 2021 Settings</Row>
          <Row>
            <Form>
              <Form.Check
                type='checkbox'
                id='showWoundTrack'
                label='Show Wound Track'
                onChange={handleWoundTrackChange}
                checked={props.settings.showWoundTrack}
              />
            </Form>
          </Row>
        </Col>
      </Modal.Body>
    </Modal>
  )
}

export default SettingsDialog
