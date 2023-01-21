import React, { MouseEvent } from 'react'
import { Col, CardColumns } from 'react-bootstrap'
import { CloseButton } from '../CloseButton'
import { StratagemList } from './StratagemList'
import { Settings } from '../../types/Settings'
import Phase from './Phase'
import { AbilityList } from './AbilityList'
import { NoPhaseDetails } from './NoPhaseDetails'
import { DeploymentPhaseDetails } from './DeploymentPhaseDetails'
import { BattleRoundStartPhaseDetails } from './BattleRoundStartPhaseDetails'
import { CommandPhaseDetails } from './CommandPhaseDetails'
import { MovementPhaseDetails } from './MovementPhaseDetails'
import { PsychicPhaseDetails } from './PsychicPhaseDetails'
import { ShootingPhaseDetails } from './ShootingPhaseDetails'
import { ChargePhaseDetails } from './ChargePhaseDetails'
import { FightPhaseDetails } from './FightPhaseDetails'
import { MoralePhaseDetails } from './MoralePhaseDetails'
import { Unit, Stratagem } from '../../types/WH40k9e'
import { Ability } from '../../types/Ability'

interface Props {
  name: string
  faction: string
  subfaction: string
  units: Unit[]
  abilities: Ability[]
  stratagems: Stratagem[]
  onClose: (event: MouseEvent<HTMLButtonElement>) => void
  settings: Settings
}

export function Roster (props: Props): JSX.Element {
  const headingStyle = {
    background: '#FF6F2D',
    color: 'black',
    padding: '10px',
    width: '100%',
    display: 'flex'
  }
  return (
    <div className='WH40k9e'>
      <h1 style={headingStyle}>
        <Col>
          {props.name} <small>({[props.faction, props.subfaction].join(', ')})</small>
        </Col>
        <Col style={{ flexGrow: 0, textAlign: 'right' }}>
          <CloseButton onClose={props.onClose} />
        </Col>
      </h1>
      <p className='alert alert-info d-print-none'>
        40k support is under active development, check back soon for improvements! If you spot anything broken,
        please file a report <a href='https://github.com/floppy/dataslate/issues/new'>on GitHub</a> including
        your roster file.
      </p>
      <Phase name=''>
        {props.units.map((unit: Unit) => (
          <NoPhaseDetails key={unit.id} unit={unit} />
        ))}
        <StratagemList phase='' stratagems={props.stratagems} />
      </Phase>
      <Phase name='deployment'>
        <AbilityList abilities={props.abilities} phase='deployment' />
        <>
          {props.units.map((unit: Unit) => (
            <DeploymentPhaseDetails key={unit.id} unit={unit} />
          ))}
          <StratagemList phase='deployment' stratagems={props.stratagems} />
        </>
      </Phase>
      <Phase name='start of battle round'>
        <AbilityList abilities={props.abilities} phase='battle_round_start' />
        <>
          {props.units.map((unit: Unit) => (
            <BattleRoundStartPhaseDetails key={unit.id} unit={unit} />
          ))}
          <StratagemList phase='battle_round_start' stratagems={props.stratagems} />
        </>
      </Phase>
      <Phase name='command'>
        <AbilityList abilities={props.abilities} phase='command' />
        <>
          {props.units.map((unit: Unit) => (
            <CommandPhaseDetails key={unit.id} unit={unit} />
          ))}
        </>
        <StratagemList phase='command' stratagems={props.stratagems} />
      </Phase>
      <Phase name='movement'>
        <AbilityList abilities={props.abilities} phase='movement' />
        <CardColumns>
          {props.units.map((unit: Unit) => (
            <MovementPhaseDetails key={unit.id} unit={unit} />
          ))}
        </CardColumns>
        <StratagemList phase='movement' stratagems={props.stratagems} />
      </Phase>
      <Phase name='psychic'>
        <>
          <AbilityList abilities={props.abilities} phase='psychic' />
          {props.units.map((unit: Unit) => (
            <PsychicPhaseDetails key={unit.id} unit={unit} />
          ))}
        </>
        <StratagemList phase='psychic' stratagems={props.stratagems} />
      </Phase>
      <Phase name='shooting'>
        <AbilityList abilities={props.abilities} phase='shooting' />
        <>
          {props.units.map((unit: Unit) => (
            <ShootingPhaseDetails key={unit.id} unit={unit} />
          ))}
        </>
        <StratagemList phase='shooting' stratagems={props.stratagems} />
      </Phase>
      <Phase name='charge'>
        <AbilityList abilities={props.abilities} phase='charge' />
        <CardColumns>
          {props.units.map((unit: Unit) => (
            <ChargePhaseDetails key={unit.id} unit={unit} />
          ))}
        </CardColumns>
        <StratagemList phase='charge' stratagems={props.stratagems} />
      </Phase>
      <Phase name='fight'>
        <AbilityList abilities={props.abilities} phase='fight' />
        <>
          {props.units.map((unit: Unit) => (
            <FightPhaseDetails key={unit.id} unit={unit} />
          ))}
        </>
        <StratagemList phase='fight' stratagems={props.stratagems} />
      </Phase>
      <Phase name='morale'>
        <AbilityList abilities={props.abilities} phase='morale' />
        <CardColumns>
          {props.units.map((unit: Unit) => (
            <MoralePhaseDetails key={unit.id} unit={unit} />
          ))}
        </CardColumns>
        <StratagemList phase='morale' stratagems={props.stratagems} />
      </Phase>
      {props.stratagems.filter((x) => (x.phases?.includes('end_of_turn'))).length > 0
        ? (
          <Phase name='At the end of your turn'>
            <StratagemList phase='end_of_turn' stratagems={props.stratagems} />
          </Phase>
          )
        : <></>}
    </div>
  )
}
