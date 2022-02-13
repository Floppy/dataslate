import { Button, OverlayTrigger } from 'react-bootstrap'
import { Archetype } from '../../../../types/KillTeam2021'
import HelpPopover from '../../../HelpPopover'
import { ArchetypeBadge } from './ArchetypeBadge'

interface Props {
  archetypes: Archetype[]
  archetypeRules: string|null
}

export function ArchetypePanel (props: Props): JSX.Element {
  return (
    <>
      ARCHETYPES - {props.archetypes.map((archetype, index) => { return <ArchetypeBadge key={index} archetype={archetype} /> })}
      {(props.archetypeRules !== null) && <OverlayTrigger trigger='click' placement='right' overlay={HelpPopover('Archetype Rules', props.archetypeRules)}><Button variant='outline-secondary'>Selection Rules</Button></OverlayTrigger>}
    </>
  )
}
