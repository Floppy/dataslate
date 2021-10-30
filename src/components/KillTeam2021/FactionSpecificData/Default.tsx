import React, { FC } from 'react'
import { Card } from 'react-bootstrap'
import { Archetype } from '../../../types/KillTeam2021'
import { PloysColumn } from './components/PloysColumn'
import { TacOpsList } from './components/TacOpsList'
import getFactionSpecificData from './../data'
import { ArchetypePanel } from './components/ArchetypePanel'

interface Props {
  faction: string
  fireteams: string[]
}

export const Default: FC<Props> = (props) => {
  const headingStyle = {
    background: '#FF6F2D',
    color: 'black',
    padding: '10px',
    width: '100%',
    display: 'flex'
  }

  const factionSpecificData = getFactionSpecificData(props.faction)

  if (factionSpecificData === undefined) {
    return <></>
  }

  const archetypes: Archetype[] = props.fireteams
    .flatMap(fireteam => factionSpecificData?.archetypes.fireteams[fireteam] as unknown as Archetype)
    .filter(Boolean)
    .filter((item, index, self) => self.indexOf(item) === index)

  // @ts-expect-error
  const tacOps = factionSpecificData?.tacOps
  const archetypeRules = factionSpecificData?.archetypes.rules ?? null

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
        <Card style={{ width: '100%', marginRight: '5px' }}>
          <Card.Header style={{ ...headingStyle }} as='h2'>Strategic Ploys</Card.Header>
          <Card.Body>
            <PloysColumn ploys={factionSpecificData.strategicPloys} />
          </Card.Body>
        </Card>
        <Card style={{ width: '100%', marginLeft: '5px' }}>
          <Card.Header style={{ ...headingStyle }} as='h2'>Tactical Ploys</Card.Header>
          <Card.Body>
            <PloysColumn ploys={factionSpecificData.tacticalPloys} />
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card>
          <Card.Header style={{ ...headingStyle }} as='h2'>Tac Ops</Card.Header>
          <Card.Body>
            <Card.Title>
              <ArchetypePanel archetypes={archetypes} archetypeRules={archetypeRules} />
            </Card.Title>

            {tacOps !== undefined && <TacOpsList tacOps={tacOps} />}
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
