import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Homepage from './components/Homepage'
import Roster from './components/Roster'
import { Container } from 'react-bootstrap'
import { loadFiles } from './FileLoader'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: null,
      models: []
    }

    this.handleUpload = (acceptedFiles) => {
      loadFiles(acceptedFiles).then((result) => {
        this.setState(result)
      })
    }
  }

  render () {
    return (
      <Container>
        {this.state.models.length === 0
          ? <Homepage onUpload={this.handleUpload} />
          : <Roster name={this.state.name} models={this.state.models} />}
      </Container>
    )
  }
}

export default App
