---
sidebar_label: Cycle Source
sidebar_position: 4
---

# Cycle Source Origin Details
The Cycle source is a way to define an image source in the stack file that points to an existing images source resource on Cycle.  While this may sound very similar to the `existing` field, available in the other image source types, it is different in the fact that it does not allow for overwriting other fields in the entry.

For example, a Dockerfile image source type, using the `existing` field, may have details that use the override functionality for Dockerfile type images. If this same source were used with the Cycle source type, it would not allow for these extra modifications. 



The only field in the `cycle-source` is the source id of the image.


| Field  | Type   | Required | Description                                                     |
| ------ | ------ | :------: | --------------------------------------------------------------- |
| source_id | String |    ✅    | The source Id of the image.                                 |


:::caution Existing
This image source type is not used with the `existing` field.  The Cycle source type is meant to be exactly what is defined at the source, and not ever a modified version.
:::
