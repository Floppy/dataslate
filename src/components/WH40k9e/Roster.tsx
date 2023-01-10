import React, { MouseEvent } from 'react'
import { Col } from 'react-bootstrap'
import { CloseButton } from '../CloseButton'
import { Settings } from '../../types/Settings'
import Phase from './Phase'
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
import { Unit } from '../../types/WH40k9e'

interface Props {
  name: string
  faction: string
  units: Unit[]
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
    <>
      <h1 style={headingStyle}>
        <Col>
          {props.name} ({props.faction})
        </Col>
        <Col style={{ flexGrow: 0, textAlign: 'right' }}>
          <CloseButton onClose={props.onClose} />
        </Col>
      </h1>
      <p className='alert alert-info'>
        40k support is under active development, check back soon for improvements! If you spot anything broken,
        please file a report <a href='https://github.com/floppy/dataslate/issues/new'>on GitHub</a> including
        your roster file.
      </p>
      <>
        {props.units.map((unit: Unit) => (
          <NoPhaseDetails key={unit.id} unit={unit} />
        ))}
      </>
      <Phase name='deployment'>
        <>
          {props.units.map((unit: Unit) => (
            <DeploymentPhaseDetails key={unit.id} unit={unit} />
          ))}
        </>
      </Phase>
      <Phase name='start of battle round'>
        <>
          {props.units.map((unit: Unit) => (
            <BattleRoundStartPhaseDetails key={unit.id} unit={unit} />
          ))}
        </>
      </Phase>
      <Phase name='command'>
        <>
          {props.units.map((unit: Unit) => (
            <CommandPhaseDetails key={unit.id} unit={unit} />
          ))}
        </>
      </Phase>
      <Phase name='movement'>
        <>
          {props.units.map((unit: Unit) => (
            <MovementPhaseDetails key={unit.id} unit={unit} />
          ))}
        </>
      </Phase>
      <Phase name='psychic'>
        <>
          {props.units.map((unit: Unit) => (
            <PsychicPhaseDetails key={unit.id} unit={unit} />
          ))}
        </>
      </Phase>
      <Phase name='shooting'>
        <>
          {props.units.map((unit: Unit) => (
            <ShootingPhaseDetails key={unit.id} unit={unit} />
          ))}
        </>
      </Phase>
      <Phase name='charge'>
        <>
          {props.units.map((unit: Unit) => (
            <ChargePhaseDetails key={unit.id} unit={unit} />
          ))}
        </>
      </Phase>
      <Phase name='fight'>
        <>
          {props.units.map((unit: Unit) => (
            <FightPhaseDetails key={unit.id} unit={unit} />
          ))}
        </>
      </Phase>
      <Phase name='morale'>
        <>
          {props.units.map((unit: Unit) => (
            <MoralePhaseDetails key={unit.id} unit={unit} />
          ))}
        </>
      </Phase>
    </>
  )
}
