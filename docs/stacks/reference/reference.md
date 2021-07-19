---
sidebar_label: Introduction
sidebar_position: 0
---

# Stack Reference Introduction
The Cycle stack file is an intuitive take on orchestrating services together in a single configuration file.  The file itself is meant to be standardized, while letting the user maintain granular control over important container and service level settings.


## Top Level

| Field         | Type                                 | Required | Nullable | Description      |
|---------------|--------------------------------------|----------|----------|------------------|
| `version`     | String                               | ✅        | ❌        | some description |
| `about`       | Object — [About Reference]("")       | ❌        | ✅        | some description |
| `services`    | Object — [Services Reference]("")    | ❌        | ✅        | some description |
| `containers`  | Object — [Containers Reference]("")  | ✅        | ✅        | some description |
| `annotations` | Object — [Annotations Reference]("") | ❌        | ✅        | some description |
| `tests`       | Array — [Tests Reference]("")        | ❌        | ✅        | some description |

#### Example
```json
{
  "version": "1.0.0",
  "about": {},
  "services": {},
  "containers": {},
  "annotations": {},
  "tests": []
}
```
