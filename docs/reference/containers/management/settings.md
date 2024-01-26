---
sidebar_label: Settings
sidebar_position: 2
---

# Container Settings

Each container will have an accessible settings page that can be reached by navigating to an environment, selecting a container and then selecting the settings tab while in the modal.

## Basic Settings

### Name

Changing the container name is a simple task that can be completed by entering the desired name into the containers name form field and then clicking the **Update** button. Updating the name of the container will have little to no effect on functionality as the name is not tied to the container identifier or hostname.

### Container Identifier

The container identifier is one of the ways Cycle identifies a given container. This is most notably used when updating an environment through [stack redeploy](/reference/stacks/stacks-workflow#deploy-a-stack). Changing the identifier can have consequences such as duplicate services running after your next stack redeploy and can affect customized API calls created to interact with the container, so be sure that you double-check all potential conflicts before updating this value.

### Deprecate

Containers with the deprecate box checked will not be eligible to be started. If this box is checked and a user issues a start to the container the following error will be returned:

`container has been marked as deprecated, not attempting a start`

### Lock Container

This option is meant to tell the platform, do not allow this container to be deleted under any circumstance. The platform will go so far as to fail a force delete of a server where a container is marked `locked`.

## Scaling

Scaling container instances on Cycle is as easy as moving the slider up or down and then clicking **Update Instances**. Cycle follows first in last out and will always scale back down based on prioritizing the first created instance as the last to be removed.

:::caution Stateful Containers
Stateful container instances cannot be scaled using this form.
:::

## Container Delete

On the right hand side of the settings page you'll find the delete form. You must enter the name of the container into the box before the delete button will become active. The container will remain in the "deleting" state until all instances have been shut down and removed. It will still appear in the portal until this is complete.

:::warning
Deleting a container will immediately stop and remove all instances. This cannot be reversed.
:::
