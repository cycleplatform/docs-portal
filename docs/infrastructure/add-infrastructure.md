---
sidebar_label: Add Infrastructure
sidebar_position: 2
---

# Add Infrastructure

Deploying a new server on Cycle is simple.

- First, click **Infrastructure** from the main navigation.
- From there, select **Add Servers**.

## Infrastructure Deploy Modal

The infrastructure deploy modal will pop up after clicking on the add servers button. If the provider desired for this deployment is not selectable, that means that credentials have not yet been added to the [providers](/docs/infrastructure/providers/adding-providers) page.

After selecting a provider select a location to provision from and click **Next**.

## Deploy Form

The deploy form is the last step before deploying new infrastructure on Cycle.

![deploy form](https://static.cycle.io/docs/infrastructure/server-deploy-markup.png)

1. For some locations, providers will have a wide range of server types with resources optimized for compute, storage, or other specs like GPU support. Users that wish to see a locations available servers of a given type can use the given options to narrow servers to an individual type.
2. The hub usage summary shows the current state of your infrastructure for a given hub and then changes to accomodate the servers a user adds to the order summary. A node represents a server, while RAM pool represents the current sum of all ram.
3. Server selection is done by using the `^` carrat button to increase or `v` carrat to decrease the number of servers of any given type. The orders summary shows the total selection in real time.
4. At the bottom of the order summary, users are presented with the sum of new costs to be expected from their provider after deploying this infrastructure & if they are over the soft limit on RAM pool cap, any additional charges to their Cycle bill will be shown.

Not included in the above image is an arrow to the "Cluster", as they are covered on the [clusters page](/docs/infrastructure/clusters).

:::caution Availability Zones
When deploying infrastructure from GCP, users can select the availability zone they'd like to deploy to by clicking on the edit icon under the order summary for a given server.

In the future this will be supported for AWS as well as other providers that offer the "Region/Availability Zone" model.
:::
