import React from 'react'
import TableHeaders from "../../tableheaders";
import {Details} from "../../images/origins/origin-details";


// ❌  ✅

export const DeployObjects = [
    ["instances", "Number", "✅", "❌", "The number of instances that should be created and deployed for this container."],
    ["strategy", "String", "❌", "✅", "The deployment strategy to use for this container."],
    ["stateful", "Object", "❌", "✅", "If the container is marked stateful at the top level, this object can be used to describe each of the container."],
    ["constraints", "Object", "❌", "✅", "Constraints for when the container can be created and on which servers it can be deployed."],
    ["shutdown", "Object", "❌", "✅", "An optional shutdown policy for the container."],
    ["restart", "Object", "❌", "✅", "An optional restart policy for the container."],
    ["health_check", "Object", "❌", "✅", "An optional health_check policy for the container."],
    ["telemetry", "Object", "❌", "✅", "Optional telemtery reporting configurations."],
    ["shutdown", "Object", "❌", "✅", "An optional shutdown policy for the container."],


]




export function DeployTable(){
    return(
        <table>
            <TableHeaders />
            {DeployObjects.map(item => (
                <tr>
                    {item.map(entry => (
                        <td>{entry}</td>
                    ))}
                </tr>
            ))}
        </table>
    )
}