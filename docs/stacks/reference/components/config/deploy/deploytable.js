import React from 'react'
import TableHeaders from "../../tableheaders";
import {AutoTable} from "../../autotable";


// ❌  ✅

export const DeployObjects = [
    ["instances", "Number", "✅", "❌", "The number of instances that should be created and deployed for this container."],
    ["strategy", "String", "❌", "✅", "The deployment strategy to use for this container."],
    ["stateful", "Object", "❌", "✅", "If the container is marked stateful at the top level, this object can be used to describe granular settings for each instance of the container."],
    ["constraints", "Object", "❌", "✅", "Constraints for when the container can be created and on which servers it can be deployed."],
    ["shutdown", "Object", "❌", "✅", "An optional shutdown policy for the container."],
    ["restart", "Object", "❌", "✅", "An optional restart policy for the container."],
    ["health_check", "Object", "❌", "✅", "An optional health_check policy for the container."],
    ["telemetry", "Object", "❌", "✅", "Optional telemtery reporting configurations."],
    ["shutdown", "Object", "❌", "✅", "An optional shutdown policy for the container."],


]

export const DeployTable = () => <AutoTable tablevalues={DeployObjects} />;