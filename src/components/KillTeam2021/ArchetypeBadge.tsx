import React from 'react'
import { Badge } from 'react-bootstrap'

type Props = {
    archetype: string|null,
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
