import React from 'react';
import StatsTable from './StatsTable';
import { SpecialistIcon } from './SpecialistIcon';
import { CategoryIcon } from './CategoryIcon';

type Props = {
  model: {
    type: string,
    name: string,
    category: string,
    specialism: string,
    stats: {
      movement: number,
      weapon_skill: number,
      ballistic_skill: number,
      strength: number,
      toughness: number,
      wounds: number,
      attacks: number,
      leadership: number,
      save: number,
    },
    faction: string,
    keywords: [string],
  },
};

function Model(props: Props ) {
  return (
    <div className="model">
      <h1>
        {props.model.category && <CategoryIcon category={props.model.category} />}
        {' '}
        {props.model.specialism && <SpecialistIcon specialism={props.model.specialism} />}
        {' '}
        {props.model.name &&
          <em>{props.model.name} - </em>
        }
        {props.model.type}
      </h1>
      <StatsTable {...props.model.stats}/>
      <div>
        {props.model.faction}
      </div>
      <div>
        Keywords: {props.model.keywords.map((keyword: string) => (
          <span className='keyword'>
            {keyword}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Model;
