import React from 'react';
import StatsTable from './StatsTable';
import AbilityList from './AbilityList';
import WeaponList from './WeaponList';
import Phase from './Phase';
import { SpecialistIcon } from './SpecialistIcon';
import { CategoryIcon } from './CategoryIcon';
import { Badge } from 'react-bootstrap'

import { Model } from '../types';

type Props = {
  model: Model
};

function Datasheet(props: Props) {
  return (
    <div className="model" style={{
      pageBreakAfter: "always",
    }}>
      <h1>
        {(props.model.category === 'Commander' || props.model.category === 'Leader') ?
          (
            <Badge variant="warning">
              <CategoryIcon category={props.model.category} />
              {' '}
              {props.model.category}
            </Badge>
          )
          : (
              props.model.specialism &&
                <Badge variant="warning">
                  <SpecialistIcon specialism={props.model.specialism} />
                  {' '}
                  {props.model.specialism}
                </Badge>
          )
        }
        {' '}
        {props.model.type}
        {props.model.name && <>: <em>{props.model.name}</em></>
        }
      </h1>
      <div>
        <Badge pill variant="danger" style={{
          textTransform: "uppercase",
          marginRight: "10px",
        }}>
          {props.model.faction}
        </Badge>
        {props.model.keywords.map((keyword: string) => (
          <Badge pill variant="primary" style={{
            textTransform: "uppercase",
            marginRight: "10px",
          }}>
            {keyword}
          </Badge>
        ))}
      </div>
      <StatsTable {...props.model.stats}/>
      <AbilityList abilities={props.model.abilities} phase=''/>
      <Phase name="movement">
        <p className="lead">Movement: {props.model.stats.movement}&quot;</p>
        <AbilityList abilities={props.model.abilities} phase='movement'/>
      </Phase>
      <Phase name="psychic">
        <AbilityList abilities={props.model.abilities} phase='psychic'/>
      </Phase>
      <Phase name="shooting">
        <p className="lead">Ballistic Skill: {props.model.stats.ballistic_skill}+</p>
        <WeaponList weapons={props.model.weapons} phase='shooting' userStrength={props.model.stats.strength}/>
        <AbilityList abilities={props.model.abilities} phase='shooting'/>
      </Phase>
      <Phase name="fight">
        <p className="lead">Attacks: {props.model.stats.attacks}, Weapon Skill: {props.model.stats.weapon_skill}+</p>
        <WeaponList weapons={props.model.weapons} phase='fight' userStrength={props.model.stats.strength}/>
        <AbilityList abilities={props.model.abilities} phase='fight'/>
      </Phase>
      <Phase name="morale">
        <p className="lead">Leadership: {props.model.stats.leadership}</p>
        <AbilityList abilities={props.model.abilities} phase='morale'/>
      </Phase>
    </div>
  );
}

export default Datasheet;
