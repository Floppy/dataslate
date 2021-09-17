import React from 'react';
import { Ability } from '../../types/Ability';
import { Table } from 'react-bootstrap';
import _ from 'lodash'

type Props = {
  rules: Ability[]
};

export function RuleList(props: Props) {
  return props.rules.length === 0 ? <></> : (
    <Table striped bordered size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {_.sortBy(props.rules, ['name']).map((x: Ability) => (
          <tr>
            <td>{x.name}</td>
            <td>{x.description}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
