import { FC, useState } from 'react';
import getFactionSpecificData from './data'
import { FactionSpecificData } from './FactionSpecificData/FactionSpecificData'

import { data } from './data/index'

const factionNames = data.map(faction => faction.name)

export const DataDevPage: FC = () => {
  const [faction, setFaction] = useState<string | null>(null)

  const Content: FC = () => {
    if (faction === null) {
      return <></>
    }

    const factionArchetypesMap = getFactionSpecificData(faction)?.archetypes

    if (factionArchetypesMap === undefined) {
      return <></>
    }

    const factionFireteams = Object.keys(factionArchetypesMap)

    return <FactionSpecificData faction={faction} fireteams={factionFireteams} />
  }

  return (
    <>
      <h1>
        DEV PAGE
      </h1>
      <div style={{ marginBottom: '10px' }}>
        <select onChange={e => setFaction(e.target.value)}>
          <option />
          {factionNames.map((faction, index) => <option value={faction} key={index}>{faction}</option>)}
        </select>
      </div>
      <div>
        <Content />
      </div>
    </>
  )
}
