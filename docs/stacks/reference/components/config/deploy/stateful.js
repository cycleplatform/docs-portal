import React from 'react'
import {AutoTable} from "../../autotable";


// ❌  ✅



export const InstancesFields = [
    ["match", "Object", "✅", "❌", "Match holds a hostname or a regex pattern that will be used to match a set of configurations to a stateful instance."],
    ["default_start", "Object","❌", "✅", "A command that will be run when the instance is started, unless first_start or auto_start supersede."],
    ["first_start", "Object","❌", "✅", "A command that will be run only after the first time the instance is started."],
    ["auto_start", "Object","❌", "✅", "A command that will be run only if the platform decided the container needs to start but wasn't told to start."],
]


export const MatchFields = [
    ["hostname", "String", "✅", "❌", "The regex pattern used to match instances based on their hostname, and apply the stateful settings. "]
]

export const StartFields = [
    ["command", "String", "❌", "✅", "An optional command. "],
    ["environment_vars", "String", "❌", "✅", "Key value object "],
    ["delay", "Number", "❌", "✅", "An optional delay in seconds to wait before Cycle sends the corresponding start signals. "],
]

export const StatefulExample = `{
    "instances": [
        {
            "match": {
                "hostname": "1.db",
            },
            "default_start": {
                /* omitting command here relying on the default image CMD */
                "environment_vars": {
                    "MYSQL_ROOT_PASSWORD": "lskdfj0923jf0293jf09jf",
                },
                "delay": 0
            },
            "first_start": {
                "command": "/mysql_first_start_script",
                "environment_vars": {
                    "MYSQL_ROOT_PASSWORD": "lskdfj0923jf0293jf09jf",
                },
                "delay": 3
            },
            "auto_start": {
                "command": "mysql -d",
                "environment_vars": {
                    "MYSQL_ROOT_PASSWORD": "lskdfj0923jf0293jf09jf",
                },
                "delay": 5
            },
        }    
    ]
}`



export const InstancesTable = () => <AutoTable tablevalues={InstancesFields} />;
export const MatchTable = () => <AutoTable tablevalues={MatchFields} />;
export const StartsTable = () => <AutoTable tablevalues={StartFields} />;