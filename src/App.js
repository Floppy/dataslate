import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import Datasheet from './components/Datasheet'
import Dropzone from 'react-dropzone'
import Intro from './components/Intro'
import { Container, Alert } from 'react-bootstrap'

const _ = require('lodash')
const hash = require('node-object-hash')([])
const DOMParser = require('xmldom').DOMParser
const xpath = require('xpath').useNamespaces({ roster: 'http://www.battlescribe.net/schema/rosterSchema' })
const JSZip = require('jszip')

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

const calculatePhases = (description) => {
  const phases = []
  if (/attacks/i.test(description)) { phases.push('fight') }
  if (/charge/i.test(description)) { phases.push('movement') }
  if (/advance/i.test(description)) { phases.push('movement') }
  if (/move/i.test(description)) { phases.push('movement') }
  if (/psychic/i.test(description)) { phases.push('psychic') }
  if (/shoot/i.test(description)) { phases.push('shooting') }
  if (/nerve/i.test(description)) { phases.push('morale') }
  return phases
}

const parseForceRule = (rule) => {
  const description = xpath('roster:description', rule)[0].childNodes[0].nodeValue
  return {
    name: rule.getAttribute('name'),
    description,
    phases: calculatePhases(description)
  }
}

const parseAbility = (ability) => {
  const description = xpath("roster:characteristics/roster:characteristic[@name='Description']", ability)[0].childNodes[0].nodeValue
  return {
    name: ability.getAttribute('name'),
    description,
    phases: calculatePhases(description)
  }
}

const parseWeapon = (weapon) => ({
  name: weapon.getAttribute('name'),
  range: weaponStat('Range', weapon, true),
  type: weaponStat('Type', weapon, false),
  strength: weaponStat('S', weapon, true),
  armourPiercing: weaponStat('AP', weapon, true),
  damage: weaponStat('D', weapon, false),
  abilities: weaponStat('Abilities', weapon, false)
})

const parseModel = (model) => {
  const forceRules = xpath('//roster:force/roster:rules/roster:rule', model).map(parseForceRule)
  const abilities = xpath("roster:profiles/roster:profile[@typeName='Ability']", model).map(parseAbility).concat(forceRules)
  const weapons = xpath("roster:selections/roster:selection/roster:profiles/roster:profile[@typeName='Weapon']", model).map(parseWeapon)
  const specialismSelection = xpath('roster:selections/roster:selection[roster:selections/roster:selection/roster:profiles]', model)
  const specialistAbilities = xpath("roster:selections/roster:selection/roster:selections/roster:selection/roster:profiles/roster:profile[@typeName='Ability']", model).map(parseAbility)
  const category = xpath("roster:categories/roster:category[@primary='true']", model)[0].getAttribute('name')
  const faction = xpath("roster:categories/roster:category[@primary='false' and starts-with(@name,'Faction: ')]", model)
  return {
    name: model.getAttribute('customName'),
    type: model.getAttribute('name'),
    category: category === 'Non-specialist' ? 'zzz-so-it-sorts-last-what-a-massive-hack' : category,
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
    abilities: abilities.concat(specialistAbilities),
    weapons,
    specialism: specialismSelection.length > 0 ? specialismSelection[0].getAttribute('name') : null,
    faction: faction.length > 0 ? faction[0].getAttribute('name').split(': ', 2)[1] : null,
    keywords: xpath("roster:categories/roster:category[@primary='false' and not(starts-with(@name,'Faction: '))]", model).map((x) => x.getAttribute('name'))
  }
}

const unzip = (file) => {
  if (file[0] !== 'P') { return Promise.resolve(file) } else {
    const jszip = new JSZip()
    return jszip.loadAsync(file)
      .then((zip) => (
        zip.file(/[^/]+\.ros/)[0].async('string') // Get roster files that are in the root
      ))
  }
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      models: []
    }

    this.parseFile = (event) => {
      unzip(event.target.result)
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
        })
    }

    this.handleDrop = (acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader()
        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onloadend = this.parseFile
        reader.readAsBinaryString(file)
      })
    }
  }

  render () {
    return (
      <Container>
        {this.state.models.length === 0 &&
          <>
            <Intro />
            <Dropzone onDrop={this.handleDrop} accept='.ros,.rosz'>
              {({ getRootProps, getInputProps }) => (
                <Alert variant='info' {...getRootProps()} style={{ textAlign: 'center' }}>
                  <input {...getInputProps()} />
                  <p>Drop a Battlescribe roster file here, or click to select one.</p>
                  <p><em>(*.rosz and *.ros accepted)</em></p>
                </Alert>
              )}
            </Dropzone>
            <footer>
              Built with React and Bootstrap. Released as Open Source, code <a href='https://github.com/floppy/scriptorum'>on GitHub</a>.
            </footer>
          </>}
        {this.state.models.length > 0 &&
          // Display models sorted by category and type
          <>
            {_.sortBy(this.state.models, (x) => ([x.category == null, x.category, x.type])).map((model) => (
              <Datasheet model={model} key={hash.hash(model)} />
            ))}
          </>}
      </Container>
    )
  }
}

export default App
