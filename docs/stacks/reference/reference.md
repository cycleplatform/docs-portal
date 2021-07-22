---
sidebar_label: Introduction
sidebar_position: 0
---

# Stack Reference Introduction
The Cycle stack file is an intuitive take on orchestrating services together in a single configuration file.  The file itself is meant to be standardized, while letting the user maintain granular control over important container and service level settings.


## Top Level

| Field         | Type                                 | Required | Nullable | Description      |
|---------------|--------------------------------------|:------- :|:--------:|------------------|
| `version`     | String                               | ✅        | ❌      | This is the version of the Cycle Stack Spec (currently 1.0). |
| `about`       | Object — [About Reference]("")       | ❌        | ✅      | Extra information about this stack. Not used by the platform. |
| `services`    | Object — [Services Reference]("")    | ❌        | ✅      | Describes service container policies for this stack. |
| `containers`  | Object — [Containers Reference]("")  | ✅        | ✅      | An object where the key is a container identifier and the value is a container object. |
| `annotations` | Object — [Annotations Reference]("") | ❌        | ✅      | A key value store of custom data for your stack. Not used by the platform internally. |



#### Example
```json
{
  "version": "1.0.0",
  "about": {},
  "services": {},
  "containers": {},
  "annotations": {}
}
```
