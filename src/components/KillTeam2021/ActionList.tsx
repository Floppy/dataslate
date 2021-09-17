import React from 'react';
import { Action } from '../../types/KillTeam2021';
import { Table } from 'react-bootstrap';
import _ from 'lodash'

type Props = {
  actions: Action[]
};

export function ActionList(props: Props) {
  return props.actions.length === 0 ? <></> : (
    <Table striped bordered size="sm">
      <thead>
        <tr>
          <th>Action</th>
          <th>Cost</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {_.sortBy(props.actions, ['name']).map((x: Action) => (
          <tr>
            <td>{x.name}</td>
            <td>{x.cost} AP</td>
            <td>{x.description}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
