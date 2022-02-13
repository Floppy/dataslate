import { Popover } from 'react-bootstrap'
import { CompileDescription } from './KillTeam2021/CompileDescription'

export default function helpPopover (title: string, body: string): JSX.Element {
  return (
    <Popover id='rule-popover'>
      <Popover.Title as='h3'>{title}</Popover.Title>
      <Popover.Content>
        <CompileDescription>{body}</CompileDescription>
      </Popover.Content>
    </Popover>
  )
}
