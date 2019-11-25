import React from 'react';
import Model from './Model';
import Dropzone from 'react-dropzone';
var xpath = require('xpath')
  , dom = require('xmldom').DOMParser

const models = [
  {
    "name": "Deathleaper",
    "type": "Lictor",
    "stats": {
      "movement": 9,
      "weapon_skill": 2,
      "ballistic_skill": 4,
      "strength": 6,
      "toughness": 4,
      "wounds": 4,
      "attacks": 3,
      "leadership": 9,
      "save": 5
    },
    "faction": "tyranids",
    "keywords": ["infantry", "lictor", "kraken"]
  },
  {
    "name": "Bob",
    "type": "Hormagaunt",
    "stats": {
      "movement": 8,
      "weapon_skill": 4,
      "ballistic_skill": 4,
      "strength": 3,
      "toughness": 3,
      "wounds": 1,
      "attacks": 2,
      "leadership": 5,
      "save": 6
    },
    "faction": "tyranids",
    "keywords": ["infantry", "hormagaunt", "kraken"]
  }
];

function App() {
  return (
    <>
      <Dropzone onDrop={acceptedFiles => {
        acceptedFiles.forEach((file) => {
          const reader = new FileReader()
          reader.onabort = () => console.log('file reading was aborted')
          reader.onerror = () => console.log('file reading has failed')
          reader.onload = () => {
            console.log(reader.result);
            var doc = new dom().parseFromString(reader.result);
            var nodes = xpath.select("//force", doc);
            console.log(nodes);
          }
          reader.readAsText(file)
        })}
      }>
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
        models.map((model) => (
          <Model model={model}>
          </Model>
        ))
      }
    </>
  );
}

export default App;
