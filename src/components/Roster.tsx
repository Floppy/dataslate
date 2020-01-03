import React from 'react';
import { Model } from '../types';
import Datasheet from './Datasheet'

const _ = require('lodash')

type Props = {
  models: Model[],
};

function Roster(props: Props) {
  // Display models sorted by category and type
  return <>
    {_.sortBy(props.models, (x: Model) => ([x.category == null, x.category, x.type])).map((model: Model) => (
      <Datasheet model={model} key={model.hash} />
    ))}
  </>
}

export default Roster;
