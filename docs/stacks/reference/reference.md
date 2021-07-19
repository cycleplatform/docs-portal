---
sidebar_label: Overview
sidebar_position: 0
---

# Stacks Reference

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
  "about": { ... },
  "services": { ... },
  "containers": { ... },
  "annotations": { ... },
  "tests": [ ... ],
}
```
