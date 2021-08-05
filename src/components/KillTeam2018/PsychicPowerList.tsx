import React from 'react';
import { PsychicPower } from './types';
import { Table } from 'react-bootstrap';
import _ from 'lodash'

type Props = {
  powers: PsychicPower[],
};

function PsychicPowerList(props: Props) {
  return props.powers.length === 0 ? <></> : (
    <Table striped bordered size="sm">
      <thead>
        <tr>
          <th>Power</th>
          <th>Warp Charge</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {_.sortBy(props.powers, ['name']).map((x: PsychicPower) => (
          <tr>
            <td>{x.name}</td>
            <td>{x.charge}</td>
            <td>{x.description}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default PsychicPowerList;
