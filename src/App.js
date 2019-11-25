import React from 'react';
import Model from './Model';

function App() {
  return (
    <div>
      <Model model={{
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
        }
      }}>
      </Model>
    </div>
  );
}

export default App;
