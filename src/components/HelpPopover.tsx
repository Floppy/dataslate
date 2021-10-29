import {Popover} from "react-bootstrap";
import {CompileDescription} from "./KillTeam2021/CompileDescription";
import React from "react";

const helpPopover = (title: string, body: string) => {
    return (
        <Popover id="rule-popover">
            <Popover.Title as="h3">{title}</Popover.Title>
            <Popover.Content>
                <CompileDescription>{body}</CompileDescription>
            </Popover.Content>
        </Popover>
    )
}

export default helpPopover
