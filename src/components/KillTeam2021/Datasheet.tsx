import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { Datacard } from '../../types/KillTeam2021'
import { ModelTitle } from '../ModelTitle'
import { WeaponList } from './WeaponList'
import { StatBadge } from '../StatBadge'
import { EquipmentList } from './EquipmentList'
import { ActionList } from './ActionList'
import { KeywordList } from '../KeywordList'
import { WoundTracks } from './WoundTracks'
import AbilityList from './AbilityList'
import { v4 as uuidv4 } from 'uuid'
import { RuleNameList } from '../RuleNameList'

interface Props {
  datacard: Datacard
  showWoundTrack: boolean
}

export function Datasheet (props: Props): JSX.Element {
  console.log(props.datacard.name)
  console.log(props.datacard.rules)

  return (
    <Card className={props.datacard.operativeNames.length > 0 ? 'included' : 'excluded'}>
      <ModelTitle
        name=''
        type={props.datacard.name}
        selected={props.datacard.operativeNames.length}
        count={props.datacard.operativeNames.length}
        uuid={uuidv4()}
        category={props.datacard.leader ? 'Specialist' : ''}
        specialism={props.datacard.leader ? 'Leader' : ''}
      />
      <Card.Body>
        <Row>
          <Col sm='10'>
            {props.showWoundTrack && <WoundTracks wounds={props.datacard.stats.wounds} names={props.datacard.operativeNames} />}
            <WeaponList weapons={props.datacard.weapons} />
            <Row>
              <Col>
                <AbilityList abilities={props.datacard.abilities} />
                {props.datacard.actions.length === 0
                  ? <></>
                  : <EquipmentList equipment={props.datacard.equipment} />}
              </Col>
              <Col>
                {props.datacard.actions.length === 0
                  ? <EquipmentList equipment={props.datacard.equipment} />
                  : <ActionList actions={props.datacard.actions} />}
              </Col>
            </Row>
          </Col>
          <Col sm='1' className='px-1'>
            <StatBadge name='M' value={`${props.datacard.stats.movement}●`} />
            <StatBadge name='GA' value={`${props.datacard.stats.groupActivation}`} />
            <StatBadge name='DF' value={`${props.datacard.stats.defence}`} />
          </Col>
          <Col sm='1' className='px-1'>
            <StatBadge name='W' value={`${props.datacard.stats.wounds}`} />
            <StatBadge name='APL' value={`${props.datacard.stats.actionPointLimit}`} />
            <StatBadge name='Sv' value={`${props.datacard.stats.save}+`} />
          </Col>
        </Row>
      </Card.Body>
      <KeywordList faction={props.datacard.faction !== null ? `${props.datacard.faction} 💀` : null} keywords={props.datacard.keywords} />
      <RuleNameList rules={props.datacard.rules.map(ability => ability.name)} />
    </Card>
  )
}
