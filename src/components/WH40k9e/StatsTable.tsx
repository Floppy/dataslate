import React from 'react'
import { Table } from 'react-bootstrap'
import { Profile } from '../../types/WH40k9e'

interface Props {
  profiles: Profile[]
}

export function StatsTable (props: Props): JSX.Element {
  return (
    <Table striped bordered size='sm'>
      <thead>
        <tr>
          <th>Profile</th>
          <th>M</th>
          <th>WS</th>
          <th>BS</th>
          <th>S</th>
          <th>T</th>
          <th>W</th>
          <th>A</th>
          <th>Ld</th>
          <th>Sv</th>
        </tr>
      </thead>
      <tbody>
        {props.profiles.map((profile: Profile) => (
          <tr key={`statline-${profile.id}`}>
            <td>{profile.name}</td>
            <td>{profile.profileStats.movement}&quot;</td>
            <td>{profile.profileStats.weapon_skill}+</td>
            <td>{isNaN(profile.profileStats.ballistic_skill) ? '-' : `${profile.profileStats.ballistic_skill}+`}</td>
            <td>{profile.profileStats.strength}</td>
            <td>{profile.profileStats.toughness}</td>
            <td>{isNaN(profile.profileStats.wounds) ? '-' : profile.profileStats.wounds}</td>
            <td>{profile.profileStats.attacks}</td>
            <td>{profile.profileStats.leadership}</td>
            <td>{profile.profileStats.save}+
              {profile.profileStats.invulnerable_save > 0 ? <>{' / '}<strong>{profile.profileStats.invulnerable_save}++</strong></> : null}
            </td>
          </tr>
        ))}
        {props.profiles[0]?.degradedProfiles.map((profile) => (
          <tr key={`statline-degraded-${profile.name}`}>
            <td>... {profile.name}</td>
            <td>{isNaN(profile.profileStats.movement) ? '-' : `${profile.profileStats.movement}"`}</td>
            <td>{isNaN(profile.profileStats.weapon_skill) ? '-' : `${profile.profileStats.weapon_skill}+`}</td>
            <td>{isNaN(profile.profileStats.ballistic_skill) ? '-' : `${profile.profileStats.ballistic_skill}+`}</td>
            <td>{isNaN(profile.profileStats.strength) ? '-' : `${profile.profileStats.strength}`}</td>
            <td>{isNaN(profile.profileStats.toughness) ? '-' : `${profile.profileStats.toughness}`}</td>
            <td>{isNaN(profile.profileStats.wounds) ? '-' : profile.profileStats.wounds}</td>
            <td>{profile.profileStats.attacks}</td>
            <td>{isNaN(profile.profileStats.leadership) ? '-' : `${profile.profileStats.leadership}`}</td>
            <td>{isNaN(profile.profileStats.save) ? '-' : `${profile.profileStats.save}+`}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}
