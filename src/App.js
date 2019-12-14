import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Datasheet from './Datasheet'
import Dropzone from 'react-dropzone'
import { Container, Alert } from 'react-bootstrap'

const _ = require('lodash')
const hash = require('node-object-hash')([])
const DOMParser = require('xmldom').DOMParser
const xpath = require('xpath').useNamespaces({ roster: 'http://www.battlescribe.net/schema/rosterSchema' })

const stat = (name, model) => {
  const nodes = xpath(`roster:profiles/roster:profile[@typeName='Model']//roster:characteristic[@name='${name}']`, model)
  if (nodes.length > 0) {
    return parseInt(nodes[0].childNodes[0].nodeValue)
  } else { return '' }
}

const weaponStat = (name, weapon, numeric) => {
  const nodes = xpath(`roster:characteristics/roster:characteristic[@name='${name}']`, weapon)
  if (nodes.length > 0) {
    return numeric ? parseInt(nodes[0].childNodes[0].nodeValue) : nodes[0].childNodes[0].nodeValue
  } else { return '' }
}

const parseAbility = (ability) => {
  const description = xpath("roster:characteristics/roster:characteristic[@name='Description']", ability)[0].childNodes[0].nodeValue
  const phases = []
  if (/charge/i.test(description))
    phases.push('movement')
  if (/advance/i.test(description))
    phases.push('movement')
  if (/move/i.test(description))
    phases.push('movement')
  if (/psychic/i.test(description))
    phases.push('psychic')
  if (/shoot/i.test(description))
    phases.push('shooting')
  if (/nerve/i.test(description))
    phases.push('morale')
  return {
    name: ability.getAttribute('name'),
    description,
    phases
  }
}

const parseWeapon = (weapon) => ({
  name: weapon.getAttribute('name'),
  range: weaponStat('Range', weapon, true),
  type: weaponStat('Type', weapon, false),
  strength: weaponStat('S', weapon, true),
  armourPiercing: weaponStat('AP', weapon , true),
  damage: weaponStat('D', weapon, false),
  abilities: weaponStat('Abilities', weapon, false)
})

const parseModel = (model) => {
  const abilities = xpath("roster:profiles/roster:profile[@typeName='Ability']", model).map(parseAbility)
  const weapons = xpath("roster:selections/roster:selection/roster:profiles/roster:profile[@typeName='Weapon']", model).map(parseWeapon)
  return {
    name: model.getAttribute('customName'),
    type: model.getAttribute('name'),
    category: xpath("roster:categories/roster:category[@primary='true']", model)[0].getAttribute('name'),
    stats: {
      movement: stat('M', model),
      weapon_skill: stat('WS', model),
      ballistic_skill: stat('BS', model),
      strength: stat('S', model),
      toughness: stat('T', model),
      wounds: stat('W', model),
      attacks: stat('A', model),
      leadership: stat('Ld', model),
      save: stat('Sv', model)
    },
    abilities,
    weapons,
    faction: xpath("roster:categories/roster:category[@primary='false' and starts-with(@name,'Faction: ')]", model)[0].getAttribute('name').split(": ",2)[1],
    keywords: xpath("roster:categories/roster:category[@primary='false' and not(starts-with(@name,'Faction: '))]", model).map((x) => x.getAttribute('name'))
  }
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      models: []
    }
  }

  unzip = (file) => {
    if (file[0] !== 'P')
      return Promise.resolve(file);
    else
      return Promise.reject();
  }

  parseFile = (event) => {
    this.unzip(event.target.result)
      .then((xml) => {
    var models = []
        var doc = new DOMParser().parseFromString(xml)
    for (const category of xpath('//roster:force/roster:categories/roster:category', doc)) {
      const categoryId = category.getAttribute('entryId')
      for (const model of xpath(`//roster:selection[@type='model' and roster:categories/roster:category/@entryId='${categoryId}']`, doc)) {
        models.push(parseModel(model))
      }
    }
    this.setState({ models: _.uniqBy(models, hash.hash) })
      });
  };

  handleDrop = (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onloadend = this.parseFile
      reader.readAsBinaryString(file)
    })
  };

  render () {
    return (
      <Container>
        { this.state.models.length === 0 &&
          <Dropzone onDrop={this.handleDrop} accept='.ros'>
            {({ getRootProps, getInputProps }) => (
              <Alert variant="info" {...getRootProps()} style={{textAlign: "center"}}>
                <input {...getInputProps()} />
                <p>Drop a Battlescribe roster file here, or click to select one.</p>
                <p><em>(Only *.ros files will be accepted, not .rosz yet)</em></p>
              </Alert>
            )}
          </Dropzone>
        }
        { this.state.models.length > 0 &&
          // Display models sorted by category and type
          _.sortBy(this.state.models, (x) => ([x.category == null, x.category, x.type])).map((model) => (
            <Datasheet model={model} key={hash.hash(model)} />
          ))
        }
      </Container>
    )
  }
}

export default App
