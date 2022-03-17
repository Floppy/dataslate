import React from 'react'
import { Badge } from 'react-bootstrap'

interface Props {
  rules: string[]
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
  'RENDING', 'RENDING',
  'RNG X',
  'SILENT',
  'SPLASH X',
  'STUN',
  'TORRENT X',
  'UNWIELDY'
]

export function RuleNameList (props: Props): JSX.Element {
  return (
    <div style={{ background: 'rgba(0, 0, 0, 0.125)', padding: '5px 10px 0px 10px' }}>
      {props.rules.filter((rule: string) => !standardRules.includes(rule.trim().toUpperCase())).map((rule: string) => (
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
    </div>
  )
}
