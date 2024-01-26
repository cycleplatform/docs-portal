---
sidebar_label: Tags
sidebar_position: 2
---


# Deployment Tags
Think of deployment tags as an addition to deployments that gives the user more information about the current stage or state of the deployment.  

Users can add any number of tags to a given deployment (although we don't really recommend tons).  To do this simply click on the `+` icon next to the deployment and enter the value then click the `+` button to submit. 

| Create Tag              | New Tag Showing on Dashboard                           |
| ----------------------------------- | ----------------------------------- |
| ![add a tag](https://static.cycle.io/portal-docs/deployments/demo-tag.png) |  ![tag created](https://static.cycle.io/portal-docs/deployments/tag-created.png) |

For users looking to take advantage of zero downtime deployments, tags are used in conjunction with [linked records](/reference/DNS/records/linked-record-tags) to move traffic from one deployment to another instantly. 

## Moving Tags
Tags can be moved from one deployment to another in a few different ways: 

1. Manually - by clicking on the tag on the deployments dashboard for an environment and then selecting the deployment to move it to. 
2. As part of the [Update Deployment Tag Version](/) step in pipelines.


:::success Updating Linked Records
When you have a tag [associated with a linked record](/reference/DNS/records/linked-record-tags) updating the tag will automatically and instantly move the traffic from the old association to the new association.
:::

