import { Card, CardColumns, Badge } from 'react-bootstrap'
import { Stratagem } from '../../types/WH40k9e'

interface Props {
  phase: string
  stratagems: Stratagem[]
}
const headingStyle = {
  background: 'black',
  color: 'white',
  padding: '5px 20px',
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between'
}

export function StratagemList (props: Props): JSX.Element {
  // Find stratagems for this phase
  const stratagems = props.phase !== ''
    ? props.stratagems.filter((x) => (x.phases?.includes(props.phase)))
    : props.stratagems.filter((x) => (x.phases?.length === 0))
  return stratagems.length > 0
    ? (
      <Card className='stratagems'>
        <Card.Header style={{ ...headingStyle }} as='h3'>Stratagems</Card.Header>
        <Card.Body className='clearfix'>
          <CardColumns>
            {stratagems.map((stratagem) => (
              <Card key={stratagem.id} border='secondary' bg='light'>
                <Card.Header style={{ background: 'rgba(0, 0, 0, 0.05)' }} as='h4'>
                  {stratagem.name}
                  <Badge variant='primary' className='float-right'>{stratagem.cp_cost} CP</Badge>
                </Card.Header>
                <Card.Body>
                  <p><small><em>{stratagem.type}</em></small></p>
                  <p dangerouslySetInnerHTML={{
                    __html: stratagem.description
                  }}
                  />
                </Card.Body>
              </Card>
            ))}
          </CardColumns>
        </Card.Body>
        <Card.Footer className='d-print-none'>Powered by <a href='https://wahapedia.ru'>Wahapedia</a></Card.Footer>
      </Card>)
    : <></>
}
