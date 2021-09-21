import React, { MouseEvent } from 'react';
import { Col, Card } from 'react-bootstrap';
import { CloseButton } from '../CloseButton';
import { Operative, Datacard } from '../../types/KillTeam2021';
import { Datasheet } from './Datasheet';
import { RuleList } from './RuleList';
import hash from 'node-object-hash'
import _ from 'lodash'

type Props = {
  name: string,
  operatives: Operative[],
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
      <h2 style={{...headingStyle, breakBefore: 'always'}}>Rules</h2>
      <RuleList rules={_.uniqBy(_.flatten(datacards.map((m) => (m.rules))), 'name')}/>
    </Card>
  </>
}
