import React from 'react';
import StatsTable from './StatsTable';
import AbilityList from './AbilityList';
import WeaponList from './WeaponList';
import Phase from './Phase';
import { SpecialistIcon } from './SpecialistIcon';
import { CategoryIcon } from './CategoryIcon';
import { Badge } from 'react-bootstrap'

import { Model } from './types';

type Props = {
  model: Model
};

function Datasheet(props: Props ) {
  return (
    <div className="model" style={{
      pageBreakAfter: "always",
    }}>
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
      <AbilityList abilities={props.model.abilities} phase='all'/>
      <Phase name="movement">
        <AbilityList abilities={props.model.abilities} phase='movement'/>
      </Phase>
      <Phase name="psychic">
        <AbilityList abilities={props.model.abilities} phase='psychic'/>
      </Phase>
      <Phase name="shooting">
        <WeaponList weapons={props.model.weapons} phase='shooting' userStrength={props.model.stats.strength}/>
        <AbilityList abilities={props.model.abilities} phase='shooting'/>
      </Phase>
      <Phase name="fight">
        <WeaponList weapons={props.model.weapons} phase='fight' userStrength={props.model.stats.strength}/>
        <AbilityList abilities={props.model.abilities} phase='fight'/>
      </Phase>
      <Phase name="morale">
        <AbilityList abilities={props.model.abilities} phase='morale'/>
      </Phase>
    </div>
  );
}

export default Datasheet;
