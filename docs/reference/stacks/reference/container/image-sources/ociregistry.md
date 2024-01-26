---
sidebar_label: OCI Registry
sidebar_position: 4
---

# OCI Registry Origin Details

| Field  | Type   | Required | Description                                                     |
| ------ | ------ | :------: | --------------------------------------------------------------- |
| target | String |    ✅    | The image name on the registry.                                 |
| url    | String |    ✅    | The url of the remote registry.                                 |
| auth   | Object |    ❌    | Authentication details for a third party image registry/source. |


## Image Origin Details (Existing)

Any image origin type can use the existing object to define the use of an existing Cycle image source resource. Alongside the `existing` field, the user can also fill in any other fields in the details object based on the type of the `existing` resource. Any fields defined in the stack will override the fields set in the existing resource.

| Field    | Type   | Required | Description                                                                        |
| -------- | ------ | :------: | ---------------------------------------------------------------------------------- |
| existing | object |    ❌    | An object holding a source ID for an image source already defined on the platform. |

| Field     | Type   | Required | Description                                             |
| --------- | ------ | :------: | ------------------------------------------------------- |
| source_id | string |    ✅    | The source ID for the existing image source to be used. |

## Auth

Three types:

- `user`
- `provider`
- `webhook`

| Field   | Type   | Required | Description                                                                   |
| ------- | ------ | :------: | ----------------------------------------------------------------------------- |
| type    | String |    ✅    | The type of authentication being used. Can be `user`, `provider`, `webhook` . |
| details | Object |    ✅    | An object with the details for the given type                                 |

### Auth Details

#### User Details

| Field    | Type   | Required | Description                             |
| -------- | ------ | :------: | --------------------------------------- |
| username | String |    ✅    | A username for authenticating.          |
| token    | String |    ✅    | A token to authenticate the given user. |

#### Provider Details

| Field       | Type   | Required | Description                                                                                         |
| ----------- | ------ | :------: | --------------------------------------------------------------------------------------------------- |
| flavor      | String |    ✅    | Currently accepts `ecr`, for Elastic Container Registry (AWS), will be more flexible in the future. |
| credentials | Object |    ✅    | An object with authentication credentials for the given flavor                                      |

`credentials`

| Field           | Type   | Required | Description                                                                                                                |
| --------------- | ------ | :------: | -------------------------------------------------------------------------------------------------------------------------- |
| region          | String |    ❌    | A region field, if the flavor requires it.                                                                                 |
| namespace       | String |    ❌    | A namespace field if the flavor requires it.                                                                               |
| api_key         | String |    ❌    | A api key field if the flavor requires it.                                                                                 |
| secret          | String |    ❌    | A secret field if the flavor requires it.                                                                                  |
| subscription_id | String |    ❌    | A subscription field if the flavor requires it.                                                                            |
| client_id       | String |    ❌    | A client field if the flavor requires it.                                                                                  |
| config          | String |    ❌    | A config field if the flavor requires it. This field is meant to be a base64'd string of additional configuration options. |

#### Webhook Details

| Field | Type   | Required | Description                                                                                                                                        |
| ----- | ------ | :------: | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| url   | String |    ✅    | The webhook wil do a GET request to the specified URL, and expects back a base-64 encoded string that when decoded is in the format username:token |
