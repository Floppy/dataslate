import React from 'react'
import { Badge, Card } from 'react-bootstrap'

interface Props {
  ruleNames: string[]
}

const standardRules = [
  'APX',
  'BARRAGE',
  'BALANCED',
  'BLAST X',
  'BRUTAL',
  'CEASELESS',
  'FLY',
  'FUSILLADE',
  'HEAVY',
  'HOT',
  'INDIRECT',
  'INV. SAVE X+',
  'LETHAL X+', 'LETHAL X',
  'LIMITED',
  'MWX',
  'NO COVER',
  'PX',
  'REAP X',
  'RELENTLESS',
  'RENDING',
  'RNG X',
  'SILENT',
  'SPLASH X',
  'STUN',
  'TORRENT X',
  'UNWIELDY'
]

export function filterRuleNameList (ruleNames: string[]): string[] {
  return ruleNames.filter((rule: string) => !standardRules.includes(rule.trim().toUpperCase()))
}

export function RuleNameList (props: Props): JSX.Element {
  return props.ruleNames.length === 0
    ? <></>
    : (
      <Card border='secondary' bg='light'>
        <Card.Header style={{ background: 'rgba(0, 0, 0, 0.05)' }} as='h4'>
          Rules
        </Card.Header>
        <Card.Body>
          <p>For full rules, see rules section below</p>
          {filterRuleNameList(props.ruleNames).map((rule: string) => (
            <Badge
              key={`rule-${rule}`}
              pill variant='secondary' className='mb-2' style={{
                textTransform: 'uppercase',
                marginRight: '10px'
              }}
            >
              {rule}
            </Badge>
          ))}
        </Card.Body>
      </Card>
      )
}
