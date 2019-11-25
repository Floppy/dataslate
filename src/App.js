import React from 'react';

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
          "wounds": 1
        }
      }}>
      </Model>
    </div>
  );
}

export default App;
