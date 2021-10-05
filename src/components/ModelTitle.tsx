import React from 'react'
import { SpecialistIcon } from './KillTeam2018/SpecialistIcon'
import { CategoryIcon } from './KillTeam2018/CategoryIcon'
import { Col } from 'react-bootstrap'
import ReactBootstrapSlider from 'react-bootstrap-slider'
import _ from 'lodash'

interface Props {
  showSelector?: boolean
  onSelectionChanged?: (uuid: string, value: number) => void,
  selected: number
  count: number
  uuid: string
  name: string
  type: string
  category?: string
  specialism?: string
}

export function ModelTitle (props: Props): JSX.Element {
  const headingStyle = {
    background: 'black',
    color: 'white',
    padding: '5px',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  }
  const titleComponents = _.without([
    props.type,
    (props.category === 'Specialist' || props.category === 'Specialist Retainer'
      ? props.specialism
      : props.category)
  ], null, undefined, '')
  return (
    <h3 style={headingStyle}>
      <Col>
        {props.category && props.specialism && (props.category === 'Specialist' || props.category === 'Specialist Retainer') && <SpecialistIcon specialism={props.specialism} />}
        {props.category && <CategoryIcon category={props.category} />}
        {props.selected > 1 && (
          <small>{props.selected} × </small>
        )}
        <strong>{titleComponents[0]} </strong>
        <small>{_.join(_.slice(titleComponents, 1), ', ')}</small>
      </Col>
      {props.showSelector && (
        <Col style={{ flexGrow: 0 }}>
          <ReactBootstrapSlider
            value={props.selected}
            slideStop={(x: any) => (props.onSelectionChanged != null) && props.onSelectionChanged(props.uuid, x.target.value)}
            step={1}
            max={props.count}
            min={0}
          />
        </Col>
      )}
    </h3>
  )
}
