import React, { useState, useEffect } from 'react';
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

const parseModel = (model) => ({
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
  faction: "tyranids",
  keywords: ["infantry", "lictor", "kraken"],
});

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
