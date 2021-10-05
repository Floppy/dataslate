import React from 'react'
import { Badge } from 'react-bootstrap'
import {Archetype} from "../../types/KillTeam2021";

type Props = {
    archetype: Archetype,
}

export function ArchetypeBadge (props: Props) {

    return (
        <Badge pill variant="secondary" className="mb-2" style={{
            textTransform: "uppercase",
            marginRight: "10px",
        }}>
        {props.archetype}
        </Badge>
    )
}
