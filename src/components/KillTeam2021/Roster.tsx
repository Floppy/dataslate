import React, { MouseEvent } from 'react'
import { Col, Card } from 'react-bootstrap'
import { CloseButton } from '../CloseButton'
import { Operative, Datacard, PsychicPower } from '../../types/KillTeam2021'
import { Datasheet } from './Datasheet'
import { RuleList } from './RuleList'
import { PowerList } from './PowerList'
import hash from 'node-object-hash'
import _ from 'lodash'
import { FactionSpecificData } from './FactionSpecificData/FactionSpecificData'
import { Settings } from '../../types/Settings'
import { CarouselWrapper } from './CarouselWrapper'
import { CarouselItemWrapper } from './CarouselItemWrapper'

interface Props {
  name: string
  faction: string
  operatives: Operative[]
  psychicPowers: PsychicPower[]
  fireteams: string[]
  onClose: (event: MouseEvent<HTMLButtonElement>) => void
  settings: Settings
}

const groupByDatacard = (operatives: Operative[]): Datacard[] => {
  const groupedOperatives = _.groupBy(operatives, (o) => (hash().hash({ datacard: o.datacard, weapons: o.weapons, equipment: o.equipment })))
  return _.map(groupedOperatives, (ops, hash) => ({
    ...ops[0],
    name: ops[0].datacard,
    operativeNames: ops.map((c) => (c.name)).sort((a, b) => a.localeCompare(b))
  }))
}

export function Roster (props: Props): JSX.Element {
  const headingStyle = {
    background: '#FF6F2D',
    color: 'black',
    padding: '10px',
    width: '100%',
    display: 'flex'
  }
  const datacards = groupByDatacard(props.operatives)

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
      <CarouselWrapper carouselMode={props.settings.touchscreenMode}>
        {_.orderBy(datacards, ['leader', 'name'], ['desc', 'asc']).map((datacard: Datacard) => (
          <CarouselItemWrapper key={datacard.operativeNames.toString()} carouselMode={props.settings.touchscreenMode}>
            <Datasheet key={datacard.operativeNames.toString()} datacard={datacard} showWoundTrack={props.showWoundTrack} />
          </CarouselItemWrapper>
        ))}
        {props.psychicPowers.length > 0 &&
          <CarouselItemWrapper carouselMode={props.settings.touchscreenMode}>
            <Card>
              <Card.Header style={{ ...headingStyle }} as='h2'>Psychic Powers</Card.Header>
              <Card.Body>
                <PowerList powers={props.psychicPowers} />
              </Card.Body>
            </Card>
          </CarouselItemWrapper>}
        <CarouselItemWrapper carouselMode={props.settings.touchscreenMode}>
          <FactionSpecificData faction={props.faction} fireteams={props.fireteams} />
        </CarouselItemWrapper>
        <CarouselItemWrapper carouselMode={props.settings.touchscreenMode}>
          <Card>
            <Card.Header style={{ ...headingStyle, breakBefore: 'always' }} as='h2'>Rules</Card.Header>
            <Card.Body>
              <RuleList rules={_.uniqBy(_.flatten(datacards.map((m) => (m.rules))), 'name')} />
            </Card.Body>
          </Card>
        </CarouselItemWrapper>
      </CarouselWrapper>

    </>
  )
}
