import React, { MouseEvent } from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import { CloseButton } from '../CloseButton'
import {Operative, Datacard, PsychicPower, Stats, Weapon, Equipment, Action} from '../../types/KillTeam2021'
import { Datasheet } from './Datasheet'
import { RuleList } from './RuleList'
import { PowerList } from './PowerList'
import hash from 'node-object-hash'
import _ from 'lodash'
import { FactionSpecificData } from './FactionSpecificData'
import {Ability} from "../../types/Ability";

interface Props {
  name: string
  faction: string
  operatives: Operative[]
  psychicPowers: PsychicPower[]
  fireteams: string[]
  onClose: (event: MouseEvent<HTMLButtonElement>) => void
  isRoster?: boolean
  showWoundTrack: boolean
}

const groupByDatacard = (operatives: Operative[]): Datacard[] => {
  const groupedOperatives = _.groupBy(operatives, (o) => (hash().hash({ datacard: o.datacard, weapons: o.weapons, equipment: o.equipment })))
  return _.map(groupedOperatives, (ops, hash) => ({
    ...ops[0],
    name: ops[0].datacard,
    operativeNames: ops.map((c) => (c.name)).sort()
  }))
}

export function Roster (props: Props) {
  const headingStyle = {
    background: '#FF6F2D',
    color: 'black',
    padding: '10px',
    width: '100%',
    display: 'flex'
  }
  const datacards = groupByDatacard(props.operatives)
  const fullOperatives = props.operatives.sort((a: Operative, b: Operative) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))

  return (
    <>
      <h1 style={headingStyle}>
        <Col>
          {props.name}
        </Col>
        <Col style={{ flexGrow: 0, textAlign: 'right' }}>
          <CloseButton onClose={props.onClose} />
        </Col>
      </h1>
      { props.isRoster && (
          <Card>
            <Card.Header style={{ ...headingStyle, breakBefore: 'always' }} as='h2'>Roster</Card.Header>
            <Card.Body>
              Roster Size:{ fullOperatives.length }
              { fullOperatives.map( (op, index) => {
                return (
                    <Row key={index}>
                      <Col>{op.name.toString()}</Col>
                      <Col>{JSON.stringify(op.datacard)}</Col>
                      <Col>{JSON.stringify(op.weapons)}</Col>
                    </Row>
                )
              })}
            </Card.Body>
          </Card>
      )}
      {_.orderBy(datacards, ['leader', 'name'], ['desc', 'asc']).map((datacard: Datacard) => (
        <Datasheet datacard={datacard} showWoundTrack={props.showWoundTrack} />
      ))}
      <Card>
        <Card.Header style={{ ...headingStyle, breakBefore: 'always' }} as='h2'>Rules</Card.Header>
        <Card.Body>
          <RuleList rules={_.uniqBy(_.flatten(datacards.map((m) => (m.rules))), 'name')} />
        </Card.Body>
      </Card>
      {props.psychicPowers.length > 0 && <Card>
        <Card.Header style={{ ...headingStyle }} as='h2'>Psychic Powers</Card.Header>
        <Card.Body>
          <PowerList powers={props.psychicPowers} />
        </Card.Body>
      </Card>}

      <FactionSpecificData faction={props.faction} fireteams={props.fireteams} />
    </>
  )
}
