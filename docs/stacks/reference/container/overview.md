---
sidebar_label: Overview
sidebar_position: 0
---
# Container Object Overview
The container record(s) define containers identifiers as keys and their corresponding objects hold information about the image source, configuration, annotations, and granular settings used to give production level control to each container in the stack.  


### Containers Record
| Field                  | Type                               | Required | Nullable | Description      |
|------------------------|------------------------------------|:--------:|:--------:|------------------|
| `containers`           | Record                             | ✅        | ❌        | `container_identifier` records holding information about the image source, configuration, annotations, and granular settings. |

### 3 Container Records: Example
```json
"containers": {
  "container_identifier_example": { ...container_details },
  "my-app": { ...container_details },
  "my-app-admin-portal": { ...container_details },
}
```

### `Container Object`

| Field         | Type                                 | Required | Nullable | Description      |
|---------------|--------------------------------------|:--------:|:--------:|------------------|
| `name`        | String                               | ✅        | ❌        | some description |
| `image`       | Object — [Image Reference]("")       | ✅        | ❌        | some description |
| `annotations` | Object — [Annotations Reference]("") | ❌        | ✅        | A key value store of custom data for your container. Not used by the platform internally. |
| `stateful`    | Boolean                              | ✅        | ❌        | If true, this container is set to stateful. |
| `config`      | Object — [Config Reference]("")      | ❌        | ✅        | The configuration options for the container. |
| `volumes`     | Object — [Volumes Reference]("")     | ❌        | ✅        | The volumes, if any, for this container. |
| `deprecate`   | Boolean                              | ❌        | ❌        | If true this container will be marked deprecated. |

### Top Level Container Keys
```json
{
  "name": "My App Front End",
  "image": { ...image_object },
  "annotations": { ...annotations_object },
  "stateful": false,
  "config": { ...config_object },
  "role": { ...role_object },
  "volumes:": {...volumes_object },
  "deprecate": false
}
```
