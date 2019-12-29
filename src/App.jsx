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
      models: []
    }

    this.onUpload = (acceptedFiles) => {
      loadFiles(acceptedFiles).then((models) => {
        this.setState({models});
      })
    }
  }

  render () {
    return (
      <Container>
        {this.state.models.length === 0
          ? <Homepage onUpload={this.onUpload} />
          : <Roster models={this.state.models} />}
      </Container>
    )
  }
}

export default App
