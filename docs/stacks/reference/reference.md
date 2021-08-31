---
sidebar_label: Spec & Top Level Keys
sidebar_position: 0
---

# Stack Reference Introduction
The Cycle stack file is an intuitive take on orchestrating services together in a single configuration file.  The file itself is meant to be standardized, while letting the user maintain granular control over important container and service level settings.





## Top Level Fields

| Field         | Type                                 | Required | Nullable | Description      |
|---------------|--------------------------------------|:------- :|:--------:|------------------|
| `version`     | String                               | ✅        | ❌      | This is the version of the Cycle Stack Spec (currently 1.0). |
| `about`       | Object  | ❌        | ✅      | Extra information about this stack. Not used by the platform. |
| `containers`  | Object  | ✅        | ✅      | An object where the key is a container identifier and the value is a container object. |
| `annotations` | Object  | ❌        | ✅      | A key value store of custom data for your stack. Not used by the platform internally. |



## Version
This is the version of the Cycle Stack Spec (currently 1.0). Invalid entries 

## About and Annotations
The About object is an optional object that holds information the developer would like to save, including the version of the stack file and a description.

## Annotations
The top level annotations object is a key value store that's meant for the developer.  If a developer wishes to store additional information in this area, they can do so without impacting any other configuration throughout the stack.

#### Version About & Annotations Example
```json
{
  "version": "1.0.0",
  "about": {
    "version": "0.0.83",
    "description": "last version before 0.1.0"
  },
  "containers": {},
  "annotations": {
    "somekey": "somevalue"
  }
}
```


