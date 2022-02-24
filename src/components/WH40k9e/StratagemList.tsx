import { useState } from 'react'
import { Card, CardColumns, Badge } from "react-bootstrap";
import { usePapaParse } from 'react-papaparse';

interface Props {
}

const headingStyle = {
  background: '#FF6F2D',
  color: 'black',
  padding: '10px',
  width: '100%',
  display: 'flex'
}

const getData=(setStratagems: any)=>{
  // eslint-disable-next-line
  const { readRemoteFile } = usePapaParse();
  const url = '/waha/wh40k9ed/Stratagems.csv'

  readRemoteFile(url, {
    header: true,
    download: true,
    fastMode: true,
    complete: (results) => {
      setStratagems(results.data)
    },
  })
}

export function StratagemList (props: Props): JSX.Element {
  let [stratagems, setStratagems] = useState([])

  getData(setStratagems)
  return <Card>
    <Card.Header style={{ ...headingStyle }} as='h2'>Stratagems</Card.Header>
    <Card.Body>
      <CardColumns>
        { stratagems.filter((stratagem) => (stratagem.faction_id === 'TYR')).map((stratagem) => (
          <Card border='secondary' bg='light'>
            <Card.Header style={{ background: 'rgba(0, 0, 0, 0.05)' }} as='h4'>
              {stratagem.name} <Badge variant="primary" className="float-right">{stratagem.cp_cost} CP</Badge>
            </Card.Header>
            <Card.Body>
              <p><strong>{stratagem.type}</strong></p>
              <p dangerouslySetInnerHTML={{
                __html: stratagem.description
              }}></p>
            </Card.Body>
          </Card>
        ))}
      </CardColumns>
    </Card.Body>
    <Card.Footer>Powered by Wahapedia</Card.Footer>
  </Card>
}
