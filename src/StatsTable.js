import React from 'react';

function StatsTable(props) {
  return (
    <table>
    <tr>
      <th>{"M"}</th>
      <th>{"WS"}</th>
      <th>{"BS"}</th>
      <th>{"W"}</th>
    </tr>
    <tr>
      <td>{props.movement}&quot;</td>
      <td>{props.weapon_skill}+</td>
      <td>{props.ballistic_skill}+</td>
      <td>{props.wounds}</td>
    </tr>
  </table>
  );
}

export default StatsTable;
