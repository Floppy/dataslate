import React from 'react';
import Model from './Model';
import Dropzone from 'react-dropzone';
const dom = require('xmldom').DOMParser;
const xpath = require('xpath').useNamespaces({"roster": "http://www.battlescribe.net/schema/rosterSchema"});

const stat = (name, model) => {
  const nodes = xpath(`roster:profiles/roster:profile[@typeName='Model']//roster:characteristic[@name='${name}']`, model);
  if (nodes.length > 0) {
    return parseInt(nodes[0].childNodes[0].nodeValue);
  }
  else
    return "";
};

const weaponStat = (name, weapon) => {
  const nodes = xpath(`roster:characteristics/roster:characteristic[@name='${name}']`, weapon);
  if (nodes.length > 0) {
    return parseInt(nodes[0].childNodes[0].nodeValue);
  }
  else
    return "";
};

const parseAbility = (ability) => ({
  name: ability.getAttribute('name'),
  description: xpath("roster:characteristics/roster:characteristic[@name='Description']", ability)[0].childNodes[0].nodeValue,
});

const parseWeapon = (weapon) => ({
  name: weapon.getAttribute('name'),
  range: weaponStat("Range", weapon),
  strength: weaponStat("S", weapon),
});

const parseModel = (model) => {
  const abilities = xpath("roster:profiles/roster:profile[@typeName='Ability']", model).map(parseAbility);
  const weapons = xpath("roster:selections/roster:selection/roster:profiles/roster:profile[@typeName='Weapon']", model).map(parseWeapon);
  return {
    name: model.getAttribute('customName'),
    type: model.getAttribute('name'),
    stats: {
      movement: stat("M", model),
      weapon_skill: stat("WS", model),
      ballistic_skill: stat("BS", model),
      strength: stat("S", model),
      toughness: stat("T", model),
      wounds: stat("W", model),
      attacks: stat("A", model),
      leadership: stat("Ld", model),
      save: stat("Sv", model),
    },
    abilities,
    weapons,
    faction: "tyranids",
  };
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      models: []
    };
  }

  parseFile = (event) => {
    var models = [];
    var doc = new dom().parseFromString(event.target.result);
    for (const category of xpath("//roster:force/roster:categories/roster:category", doc)) {
      const category_id = category.getAttribute('entryId')
      for (const model of xpath(`//roster:selection[roster:categories/roster:category/@entryId='${category_id}']`, doc)) {
        models.push(parseModel(model));
      }
    }
    this.setState({models});
  };

  fileHandler = (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onloadend = this.parseFile;
      reader.readAsText(file)
    })
  };

  render() {
    console.log(this.state);
    return (<>
      <Dropzone onDrop={this.fileHandler}>
        {({getRootProps, getInputProps}) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drop a .ros file here, or click to select one</p>
            </div>
          </section>
        )}
      </Dropzone>
      {
        this.state.models.map((model) => (
          <Model model={model}>
          </Model>
        ))
      }
    </>);
  }
}

export default App;
