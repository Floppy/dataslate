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
  'RENDING',
  'RNG X',
  'SILENT',
  'SPLASH X',
  'STUN',
  'TORRENT X',
  'UNWIELDY'
]

export function RuleNameList (props: Props): JSX.Element {
  return (
    <div>
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
