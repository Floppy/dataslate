import React from 'react'
import Homepage from './components/Homepage'
import Roster from './components/Roster'
import { Container } from 'react-bootstrap'
import { loadFiles } from './FileLoader'

class App extends React.Component {
  constructor (props) {
    super(props)
    const initialState = {
      name: null,
      points: 0,
      forceRules: [],
      models: []
    }
    this.state = initialState

    this.handleUpload = (acceptedFiles) => {
      loadFiles(acceptedFiles).then((result) => {
        this.setState(result)
      })
    }

    this.handleClose = () => {
      this.setState(initialState)
    }
  }

  render () {
    return (
      <Container fluid='lg'>
        {this.state.models.length === 0
          ? <Homepage onUpload={this.handleUpload} />
          : <Roster points={this.state.points} name={this.state.name} models={this.state.models} onClose={this.handleClose} forceRules={this.state.forceRules} />}
      </Container>
    )
  }
}

export default App
