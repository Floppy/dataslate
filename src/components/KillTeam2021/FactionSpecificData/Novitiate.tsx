import React, { FC } from 'react'
import { Archetype } from '../../../types/KillTeam2021'
import { PloysColumn } from './components/PloysColumn'
import { TacOpsList } from './components/TacOpsList'
import getFactionSpecificData from './../data'
import { Card, Col } from 'react-bootstrap'
import { CompileDescription } from '../CompileDescription'
import { ArchetypePanel } from './components/ArchetypePanel'

interface Props {
  fireteams: string[]
}

export const Novitiate: FC<Props> = (props) => {
  const headingStyle = {
    background: '#FF6F2D',
    color: 'black',
    padding: '10px',
    width: '100%',
    display: 'flex'
  }
  const factionSpecificData = getFactionSpecificData('Novitiate')

  if (factionSpecificData === undefined || factionSpecificData.name !== 'Novitiate') {
    return <></>
  }

  const archetypes: Archetype[] = props.fireteams
    .flatMap(fireteam => factionSpecificData.archetypes.fireteams[fireteam] as unknown as Archetype)
    .filter(Boolean)
    .filter((item, index, self) => self.indexOf(item) === index)

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
            <TacOpsList tacOps={factionSpecificData?.tacOps} />
          </Card.Body>
        </Card>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row' }}>
        <Card style={{ width: '100%', marginRight: '5px' }}>
          <Card.Header style={{ ...headingStyle }} as='h2'>{factionSpecificData.actsOfFaith.name}</Card.Header>
          <Card.Body>
            <a href={factionSpecificData.actsOfFaith.wahapediaUrl} target='_blank' rel='noreferrer'>Full Rules</a>
            <Col>
              {factionSpecificData.actsOfFaith.acts.map(x => (
                <Card key={x.name} border='info' bg='light'>
                  <Card.Header style={{ background: '#17a2b8', color: 'white', display: 'flex', justifyContent: 'space-between' }} as='h4'>
                    <span>{x.name} - {x.cost}</span>
                  </Card.Header>
                  <Card.Body>
                    <CompileDescription>{x.description}</CompileDescription>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
