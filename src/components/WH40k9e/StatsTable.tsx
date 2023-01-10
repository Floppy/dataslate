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
      </tbody>
    </Table>
  )
}
