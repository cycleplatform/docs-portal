---
sidebar_label: Overview
sidebar_position: 0
---
# Container Object Overview

```json
{
  "containers": {
    "platform-api": {
      "name": "API",
      "image": {
      },
      "annotations": {
        "access": "Talk with Bob to be given access to necessary API keys"
      },
      "stateful": false,
      "config": {},
      "volumes": [],
      "deprecated": false
    },
    "platform-db": {
      "name": "DB",
      "image": {
      },
      "annotations": {
        "access": "No public internet. Use environment VPN to connect to db for development"
      },
      "stateful": true,
      "config": {},
      "volumes": [],
      "deprecated": false
    }
  }
}
```

### Base Object
| Field                  | Type                               | Required | Nullable | Description      |
|------------------------|------------------------------------|:--------:|:--------:|------------------|
| `container_identifier` | Object — [Container Reference]("") | ✅        | ❌        | some description |

#### Example
```json
{
  "platform-api": { ...container_details },
  "my-app": { ...container_details },
  "my-app-admin-portal": { ...container_details },
}
```

### `container`

| Field         | Type                                 | Required | Nullable | Description      |
|---------------|--------------------------------------|:--------:|:--------:|------------------|
| `name`        | String                               | ✅        | ❌        | some description |
| `image`       | Object — [Image Reference]("")       | ✅        | ❌        | some description |
| `annotations` | Object — [Annotations Reference]("") | ❌        | ✅        | some description |
| `stateful`    | Boolean                              | ✅        | ❌        | some description |
| `config`      | Object — [Config Reference]("")      | ❌        | ✅        | some description |
| `volumes`     | Object — [Volumes Reference]("")     | ❌        | ✅        | some description |
| `deprecate`   | Boolean                              | ❌        | ❌        | some description |

#### Example
```json
{
  "name": "My App Front End",
  "image": { ...image_object },
  "annotations": { ...annotations_object },
  "stateful": false,
  "config": { ...config_object },
  "role": { ...role_object },
  "volumes:": {...volumes_object },
  "deprecated": false
}
```
