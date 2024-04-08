---
sidebar_label: Examples
sidebar_position: 1
---


# Pipeline Variable Examples

Pipeline variables are incredibly flexible, let's take a look at some common use cases.


## Image Overrides 
Overriding the target for an image is a great way to use pipeline variables. 

![Image Override](https://static.cycle.io/portal-docs/pipelines/img-override-variable.png)


Here you're overriding the `target` which is the full image name and tag combined.  For example: `cycleplatform/getting-started:latest`. 

After saving the step and the pipeline, you'll need to use the trigger dropdown located next to the `Trigger` button in the top right of the screen and add the appropriate value.  

![full target override](https://static.cycle.io/portal-docs/pipelines/full-target-image-override.png)

The other popular pattern here is to use the variable only for the image tag. 

![Image Override Tag](https://static.cycle.io/portal-docs/pipelines/image-override-tag.png)

In this case, the value in the trigger modal would only be the tag value.  For example: the `latest` tag. 

:::success Power User Pattern: Trigger Keys
A lot of Cycle power users, create a [trigger key](/reference/pipelines/#trigger-keys) and then trigger their pipelines via these keys.  Some use the keys locally, while others put the keys into the end of their CI pipelines to kick off a deploy. 
:::

## Deployment Version
Another common use case for pipeline variables is defining a deployment version. 

![Deployment Version Stack](https://static.cycle.io/portal-docs/pipelines/deploy-stack-version-variable.png)

This variable declaration can then be used throughout the rest of the pipeline steps to make sure the deployment version is identical on several different steps such as:

* Start Environment Deployment
* Wait For Environment Deployment Health Check 
* Update Deployment Tag Version 

