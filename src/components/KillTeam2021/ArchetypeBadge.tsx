import React from 'react'
import { Badge } from 'react-bootstrap'

type Props = {
    archetype: string|null,
}

export function ArchetypeBadge (props: Props) {

    return (
        <Badge pill variant="dark" className="w-25 px-5">
            <div className="text-light">{props.archetype}</div>
        </Badge>
    )
}
