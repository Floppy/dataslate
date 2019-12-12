import React from 'react';
import StatsTable from './StatsTable';
import AbilityList from './AbilityList';
import { SpecialistIcon } from './SpecialistIcon';
import { CategoryIcon } from './CategoryIcon';

import { Model } from './types';

type Props = {
  model: Model
};

function Datasheet(props: Props ) {
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
      <StatsTable {...props.model.stats}/>
      <AbilityList abilities={props.model.abilities} phase='all'/>
      <h2>
        Movement
      </h2>
      <AbilityList abilities={props.model.abilities} phase='movement'/>
      <h2>
        Psychic
      </h2>
      <AbilityList abilities={props.model.abilities} phase='psychic'/>
      <AbilityList abilities={props.model.abilities} phase='fight'/>
      <h2>
        Shooting
      </h2>
      <ul>
       {props.model.weapons.filter((x) => !isNaN(x.range)).map((x) => (
          <li>{x.name}</li>
        ))}
      </ul>
      <AbilityList abilities={props.model.abilities} phase='shooting'/>
      <h2>
        Fight
      </h2>
      <ul>
        {props.model.weapons.filter((x) => isNaN(x.range)).map((x) => (
          <li>{x.name}</li>
        ))}
      </ul>
      <h2>
        Morale
      </h2>
      <AbilityList abilities={props.model.abilities} phase='morale'/>
    </div>
  );
}

export default Datasheet;
