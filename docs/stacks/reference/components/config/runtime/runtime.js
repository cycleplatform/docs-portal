import React from 'react'
import {AutoTable} from "../../autotable";

// ❌  ✅

export const RuntimeFields = [
    ["workdir", "String", "❌", "✅", "Override the working directory defined on the image."],
    ["command", "String", "❌", "✅", "Override the default command used for this image."],
    ["namespaces", "Array", "❌", "✅", "A list of the namespaces accessible - can be `ipc`, `pid`, `uts`, `network`, `mount`, `user`."],
    ["environment_vars", "Record", "❌", "✅", "Additional environment variables that can will be available to the container during runtime."],
    ["privileged", "Boolean", "❌", "✅", "A boolean where true sets this container to privileged mode."],
    ["sysctl", "Record", "❌", "✅", "A record of key value sysctl pairs."],
    ["rlimits", "Record", "❌", "✅", "A record of key value rlimit settings."],
    ["capabilities", "Array", "❌", "✅", "A list of linux kernel capabilities to apply to the container instances."],
]

export const RuntimeTable = () => <AutoTable tablevalues={RuntimeFields} />;


export const RuntimeExample = `{
  "workdir": "/override/working/directory",
  "command": "sh",
  "namespaces": ["uts"],
  "environment_vars": {
    "MY_CUSTOM_VARIABLE": "isthisvalue",
    "MY_CUSTOM_VARIABLE_TWO": "isthisvalue2"
  },
  "privileged": "false",
  "sysctl": {
    "net.ipv6.conf.all.forwarding": “1”
  },
  "rlimits": {
    "RLIMIT_NOFILE": {
      "hard": 1048576,
      "soft": 65000
    }
  },
  "capabilities": [ "CAP_CHOWN", "CAP_FSETID", "CAP_DAC_OVERRIDE"]
}`



