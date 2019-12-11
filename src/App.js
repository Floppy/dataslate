import React from 'react';
import Model from './Model';
import Dropzone from 'react-dropzone';
const pluralize = require('pluralize');
const _ = require('lodash');
const hash = require('node-object-hash')([]);
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
    category: category !== "Non-specialist" ? category : null,
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
      const categoryId = category.getAttribute('entryId');
      const categoryName = pluralize.singular(category.getAttribute('name'));
      for (const model of xpath(`//roster:selection[@type='model' and roster:categories/roster:category/@entryId='${categoryId}']`, doc)) {
        models.push(parseModel(model, categoryName));
      }
    }
    this.setState({models: _.uniqBy(models, hash.hash)});
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
        // Display models sorted by category and type
        _.sortBy(this.state.models, (x) => ([x.category == null, x.category, x.type])).map((model) => (
          <Model model={model}>
          </Model>
        ))
      }
    </>);
  }
}

export default App;
