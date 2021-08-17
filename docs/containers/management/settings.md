---
sidebar_label: Settings
sidebar_position: 2
---

# Container Settings
Each container will have an accessible settings page that can be reached by navigating to an environment, selecting a container and then selecting the settings tab while in the modal.


## Name
Changing the container name is a simple task that can be completed by entering the desired name into the containers name form field and then clicking the **Update** button.  Updating the name of the container will have little to no effect on functionality as the name is not tied to the container identifier or hostname.


## Container Identifier
The container identifier is one of the ways Cycle identifies a given container.  This is most notably used when updating an environment through [stack redeploy](https://docs.cycle.io/docs/stacks/managing-stacks).  Changing the identifier can have consequences such as duplicate services running after your next stack redeploy and can affect customized API calls created to interact with the container, so be sure that you double-check all potential conflicts before updating this value.


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
