import React, { useState } from 'react'
import Homepage from './components/Homepage'
import { Roster as RosterView2018 } from './components/KillTeam2018/Roster'
import { Roster as RosterView2021 } from './components/KillTeam2021/Roster'
import { Container } from 'react-bootstrap'
import { loadFiles } from './FileLoader'
import { Roster as Roster2018 } from './types/KillTeam2018'
import { Roster as Roster2021 } from './types/KillTeam2021'

export function App() {

  const [roster, setRoster] = useState<Roster2018|Roster2021|null>(null)

  const handleUpload = async (acceptedFiles: File[]) => {
    const r = await loadFiles(acceptedFiles);
    setRoster(r)
  }

  const handleClose = () => {
    setRoster(null)
  }

  const handleSelectionChanged = (uuid: string, selectedCount: number) => {
    if (roster && isRosterKT18(roster)) {
      setRoster(Object.assign({models: roster.models.map((model) => (
        model.uuid !== uuid
          ? model
          : Object.assign(
              model,
              { selected: selectedCount }
            )
      ))}, roster))
    }
  }

  const isRosterKT18 = (roster: any): roster is Roster2018 => (roster.system === "KillTeam2018")
  const isRosterKT21 = (roster: any): roster is Roster2021 => (roster.system === "KillTeam2021")

  return (
    <Container fluid='lg'>
      {roster === null ? <Homepage onUpload={handleUpload} /> : <></>}
      {roster && isRosterKT18(roster) ? <RosterView2018 name={roster.name} models={roster.models} onClose={handleClose} forceRules={roster.forceRules} onSelectionChanged={handleSelectionChanged} /> : <></>}
      {roster && isRosterKT21(roster) ? <RosterView2021 name={roster.name} operatives={roster.operatives} psychicPowers={roster.psychicPowers} onClose={handleClose} /> : <></>}
    </Container>
  )
}
