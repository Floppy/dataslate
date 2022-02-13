import { MouseEvent } from 'react'
import { Button } from 'react-bootstrap'

interface Props {
  onClose: (event: MouseEvent<HTMLButtonElement>) => void
}

export function CloseButton (props: Props): JSX.Element {
  return (<Button variant='dark' className='d-print-none' onClick={props.onClose}>Close</Button>)
}
