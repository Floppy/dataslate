import React from 'react'
import { Form, Modal, Col, Row, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Settings } from '../types/Settings'
import { CompileDescription } from './KillTeam2021/CompileDescription'

interface Props {
  setShowSettings: (showSettings: boolean) => void
  show: boolean
  settings: Settings
  setSettings: (settings: Settings) => void
}

function settingTooltip (title: string, body: string): JSX.Element {
  return (
    <Tooltip id='settings-tooltip'>
      <CompileDescription>{body}</CompileDescription>
    </Tooltip>
  )
}

function SettingsDialog (props: Props): JSX.Element {
  const handleWoundTrackChange = (event: any): void => {
    const target = event.target
    const showWoundTrack: boolean = target.checked
    const newSettings = {
      ...props.settings,
      showWoundTrack: showWoundTrack
    }
    props.setSettings(newSettings)
  }

  const handleTouchscreenModeChange = (event: any): void => {
    const target = event.target
    const touchScreenMode: boolean = target.checked
    const newSettings = {
      ...props.settings,
      touchscreenMode: touchScreenMode
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
          <Form>
            <Row>
              <Form.Check
                type='checkbox'
                id='showWoundTrack'
                label='Show Wound Track'
                onChange={handleWoundTrackChange}
                checked={props.settings.showWoundTrack}
              />
            </Row>
            <Row>
              <Form.Check
                type='checkbox'
                id='touchScreenMode'
                label='Touch Screen Mode (WIP)'
                onChange={handleTouchscreenModeChange}
                checked={props.settings.touchscreenMode}
              />&nbsp;
              <OverlayTrigger trigger='click' placement='right' overlay={settingTooltip('Touchscreen Mode', 'Swipe or click on the left or right of a page, instead of having a single page and scrolling')}><a href='#'>?</a></OverlayTrigger>
            </Row>
          </Form>
        </Col>
      </Modal.Body>
    </Modal>
  )
}

export default SettingsDialog
