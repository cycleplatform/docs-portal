---
sidebar_label: Spec & Top Level Keys
sidebar_position: 0
---

# Stack Reference Introduction
The Cycle stack file is an intuitive take on orchestrating services together in a single configuration file.  The file itself is meant to be standardized, while letting the user maintain granular control over important container and service level settings.


## Using the Reference
Each `Top Level Key` will be shown as a directory in the menu, and each subsection will offer a single page view to facilitate searching with both `command F` and `algolia`.  

For example, the section of a Cycle stack which has the highest potential size is the `containers config`.  While containers will be presented as a list of pages, the `config` section will be available as a single page.

As a way to explore the functionality of each subsection more in depth, navigate to the corresponding examples directories. This growing list of pages is meant to give users a better idea of real world executions and best practices for smaller subsections of the stack.


## Top Level

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


