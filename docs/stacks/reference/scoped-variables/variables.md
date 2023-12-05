---
sidebar_label: Variables
sidebar_position: 1
---

# Variables

Each entry in the scoped variables array will start with a variable. They are structured as follows.❌ ✅

| Field        | Type   | Required | Description                                                                                                                                                                      |
| ------------ | ------ | :------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `identifier` | String |    ✅    | The variable identifier, sometimes referred to as the key.                                                                                                                       |
| `scope`      | Object |    ✅    | An object holding information about the container associations for the given variable.                                                                                           |
| `access`     | Object |    ✅    | Information about how the scoped variable will be able to be accessed.                                                                                                           |
| `source`     | Object |    ❌    | An object with the type of value, `raw` or `url` that pertains to how the environment variable value will be set or retrieved at runtime, and the details of the implementation. |

## Scope

The scope defines what containers will have the given scoped variable assigned to it.

| Field        | Type   | Required | Description                                                                   |
| ------------ | ------ | :------: | ----------------------------------------------------------------------------- |
| `containers` | Object |    ✅    | An object defining which containers have access to the given scoped variable. |

### Containers

A few fields that designate the actual container information associated with the containers field.

| Field         | Type    | Required | Description                                                                                                        |
| ------------- | ------- | :------: | ------------------------------------------------------------------------------------------------------------------ |
| `global`      | Boolean |    ✅    | A boolean where true represents the scoped variable being globally available to all containers in the environment. |
| `ids`         | Array   |    ❌    | An array of container IDs this scoped variable will be available to.                                               |
| `identifiers` | Array   |    ❌    | An array of container identifiers.                                                                                 |

## Access

The access object defines in it the way the scoped variable can be accessed in a given container.

| Field          | Type    | Required | Description                                                                                                          |
| -------------- | ------- | :------: | -------------------------------------------------------------------------------------------------------------------- |
| `env_variable` | Boolean |    ✅    | A boolean where true represents this scoped variable being available through the environment variable format.        |
| `internal_api` | Object  |    ❌    | An object with an optional duration. Settings for use with [(see)internal api](/docs/environments/scoped-variables). |
| `file`         | Object  |    ❌    | Configuration options for the [(see) file](/docs/enviroments/scoped-variables) type.                                 |

### Internal API

| Field      | Type   | Required | Description                                                                                                                                                                                |
| ---------- | ------ | :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `duration` | Object |    ❌    | A value in a time string. How long the variable will be accessible for via internal API after "start" of container instance. Example for 3 days 15 hours 10 minutes 5 seconds `3d15h10m5s` |

### File

| Field    | Type    | Required | Description                                                                                                  |
| -------- | ------- | :------: | ------------------------------------------------------------------------------------------------------------ |
| `path`   | String  |    ❌    | The path where this file should be mounted. Default is `/var/run/cycle/variables/<myVariable>`               |
| `decode` | Boolean |    ❌    | A boolean where true represents this file has a base64 encoded text that should be decoded during retrieval. |

## Source

Information about the source, also referred to as the value in `key`, `value`. Broken down into type and details.

| Field     | Type   | Required | Description                                                                                                                                                                                                                                  |
| --------- | ------ | :------: | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`    | String |    ✅    | The type of scoped variable source, either `raw` or `url`.                                                                                                                                                                                   |
| `details` | Any    |    ✅    | Details can hold various types of information depending on the Source Type. For a Source Type of "raw", Details might be a string containing raw data. For a Source Type of "url", Details might be a struct with fields "URL" and "Method". |
