import React, { MouseEvent } from 'react';
import {Col, Card} from 'react-bootstrap';
import { CloseButton } from '../CloseButton';
import {Operative, Datacard, PsychicPower, Archetype} from '../../types/KillTeam2021';
import { Datasheet } from './Datasheet';
import { RuleList } from './RuleList';
import { PowerList } from './PowerList';
import { PloysColumn } from './PloysColumn';
import { TacOpsList } from './TacOpsList';
import hash from 'node-object-hash'
import _ from 'lodash'
import getFactionSpecificData from './data'
import {ArchetypeBadge} from "./ArchetypeBadge";

type Props = {
  name: string,
  faction: string,
  operatives: Operative[],
  psychicPowers: PsychicPower[],
  fireteams: string[],
  onClose: (event: MouseEvent<HTMLButtonElement>) => void,
};

const groupByDatacard = (operatives: Operative[]): Datacard[] => {
  const groupedOperatives = _.groupBy(operatives, (o) => (hash().hash({datacard: o.datacard, weapons: o.weapons, equipment: o.equipment})))
  return _.map(groupedOperatives, (ops, hash) => ({
    ...ops[0],
    name: ops[0].datacard,
    operativeNames: ops.map((c) => (c.name)).sort(),
  }))
}

export function Roster(props: Props) {
  const headingStyle = {
    background: '#FF6F2D',
    color: 'black',
    padding: '10px',
    width: '100%',
    display: 'flex',
  };
  const datacards = groupByDatacard(props.operatives)
  const factionSpecificData = getFactionSpecificData(props.faction)

  let archetypes : Archetype[] = props.fireteams.flatMap( (fireteam) => {
    return factionSpecificData?.archetypes[fireteam] as Archetype[] ?? null
  }).filter( item => (item !== null) )

  // Now remove duplicates
  archetypes = (archetypes.filter( (item,index) => archetypes.indexOf(item) === index))
  console.log(archetypes)

  return <>
    <h1 style={headingStyle}>
      <Col>
        {props.name}
      </Col>
      <Col style={{flexGrow: 0, textAlign: 'right'}}>
        <CloseButton onClose={props.onClose}/>
      </Col>
    </h1>
    {_.orderBy(datacards, ['leader', 'name'], ['desc', 'asc']).map((datacard: Datacard) => (
        <Datasheet datacard={datacard}/>
    ))}
    <Card>
      <Card.Header style={{...headingStyle, breakBefore: 'always'}} as="h2">Rules</Card.Header>
      <Card.Body>
        <RuleList rules={_.uniqBy(_.flatten(datacards.map((m) => (m.rules))), 'name')}/>
      </Card.Body>
    </Card>
    {props.psychicPowers.length > 0 && <Card>
      <Card.Header style={{...headingStyle}} as="h2">Psychic Powers</Card.Header>
      <Card.Body>
        <PowerList powers={props.psychicPowers}/>
      </Card.Body>
    </Card>}

    {factionSpecificData &&
      <div>
        <div style={{display: "flex", justifyContent: "space-between", flexDirection: "row"}}>
          <Card style={{width: "100%", marginRight: "5px"}}>
            <Card.Header style={{...headingStyle}} as="h2">Strategic Ploys</Card.Header>
            <Card.Body>
              <PloysColumn ploys={factionSpecificData.strategicPloys} />
            </Card.Body>
          </Card>
          <Card style={{width: "100%", marginLeft: "5px"}}>
            <Card.Header style={{...headingStyle}} as="h2">Tactical Ploys</Card.Header>
            <Card.Body>
              <PloysColumn ploys={factionSpecificData.tacticalPloys} />
            </Card.Body>
          </Card>
        </div>

      </div>
    }
    { ((factionSpecificData && factionSpecificData.tacOps) || (archetypes.length > 0)) &&
      <Card>
        <Card.Header style={{...headingStyle}} as="h2">Tac Ops</Card.Header>
        <Card.Body>
          { archetypes.length > 0 &&
            <Card.Title>ARCHETYPES - {archetypes.map(archetype => { return <ArchetypeBadge archetype={archetype}/> } )}</Card.Title>}

          { factionSpecificData && factionSpecificData.tacOps && <TacOpsList tacOps={factionSpecificData.tacOps} /> }
        </Card.Body>
      </Card>
    }
  </>
}
