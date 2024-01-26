---
sidebar_label: Stages And Steps
sidebar_position: 2
---

# Stages and Steps

Stages and steps are the collections of actions that make up pipelines on the Cycle platform.

:::info Use Reference
Every step has the option to be added as a **Reference**. A reference is something that can be "referred" to in later steps for this or other stages. A reference cannot be referred to until it is created.
:::

:::success More Guides Coming Soon
There will be more pipeline guides coming very soon.
:::

## Steps Action List

The following is a full list of supported pipeline steps.

- **Sleep** - an amount of time for the pipeline to wait in seconds before moving to the next step.
- **Post To Webhook** - Run a POST request to an endpoint with step or custom body info. Can be customized for retry and fail scenarios.
- **Get Webhook** - Run a GET request against an endpoint, can be customized for retry and fail scenarios.
- **Container Create** - create a container resource.
- **Container Restart** - restart a container resource.
- **Container Start** - start a container resource.
- **Container Stop** - stop a container resource.
- **Container Delete** - delete a container resource.
- **Image Source Create** - create an image source that can be used to create and import images.
- **Image Create** - create the shell of an image that will be populated with data when the image is imported.
- **Image Import** - import the resources that will make up the image from the connected image source.
- **Create and Import Image** - takes the image create and image import step and combines them into one. 
- **Images Prune** - prune all or a list of images by source.
- **Environment Create** - create an environment resource.
- **Environment Start** - start an environment resource.
- **Environment Start** - start an environment resource.
- **Environment Stop** - stop an environment resource.
- **Environment Delete** - delete an environment resource.
- **Stack Build Create** - build the shell of a stack that will be used to generate the stack build.
- **Stack Build Generate** - generate a full build of the stack.
- **Stack Build Deploy** - deploy a given stack to an environment.
- **Update Deployment Tag Version** - updates a deployment tag from one tag to another.  
- **Prune Environment Deployments** - prunes all deployments (including their containers) in an environment that **do not** have tags associated with them. 

Each of these steps can be added to a stage one or more times through the editor. All steps can be referenced by an optional identifier and the results of that step can be reused in other steps.
