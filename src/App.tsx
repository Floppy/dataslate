import React, { useState } from 'react'
import Homepage from './components/Homepage'
import { Roster } from './components/Roster'
import { Container } from 'react-bootstrap'
import { loadFiles } from './FileLoader'
import { Model, Ability } from './types'

export function App() {

  const [name, setName] = useState<string>("")
  const [models, setModels] = useState<Model[]>([])
  const [forceRules, setForceRules] = useState<Ability[]>([])

  const handleUpload = async (acceptedFiles: File[]) => {
    const roster = await loadFiles(acceptedFiles);
    setName(roster.name)
    setForceRules(roster.forceRules)
    setModels(roster.models)
  }

  const handleClose = () => {
    setForceRules([])
    setModels([])
    setName("")
  }

  const handleSelectionChanged = (uuid: string, selectedCount: number) => (
    setModels(models.map((model: Model) => (
      model.uuid !== uuid
        ? model
        : {
            ...model,
            selected: selectedCount
          }
    )))
  )

  return (
    <Container fluid='lg'>
      {models.length === 0
        ? <Homepage onUpload={handleUpload} />
        : <Roster name={name} models={models} onClose={handleClose} forceRules={forceRules} onSelectionChanged={handleSelectionChanged} />}
    </Container>
  )
}
