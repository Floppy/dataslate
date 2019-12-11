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
    abilities: [{
      name: string,
      description: string,
    }],
    weapons: [{
      name: string,
      range: number,
      strength: number,
    }],
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
      <dl>
        {props.model.abilities.map((x) => (
          <>
            <dt>{x.name}</dt>
            <dd>{x.description}</dd>
          </>
        ))}
      </dl>
      {props.model.keywords.indexOf('Psyker') > 0 && <h2>
        Psychic
      </h2>}
      <h2>
        Fight
      </h2>
      <h2>
        Shoot
      </h2>
      <ul>
        {props.model.weapons.map((x) => (
          <li>{x.name}</li>
        ))}
      </ul>
      <h2>
        Morale
      </h2>
    </div>
  );
}

export default Model;
