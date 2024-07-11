---
sidebar_label: Servers
sidebar_position: 1
---

# Servers

The Infrastructure > Servers page shows all provisioned servers split by cluster. Selecting any given server will show the `Server Dashboard` 

This page includes graphs for:

- Events Log
- Load Average
- CPU Usage
- RAM Usage
- Storage Usage


There is also a lot of valuable information in the `Server Details` column.

Note the `Base Volume`, this is the volume where images are stored on the server and where application data (outside of defined volumes) also accumulates.

The `External IPs` entry is important for allowlisting IP's for remote databases as egress calls from containers on Cycle will come from the IP address of the server itself.

`Neighbor Latency` is now shown on the bottom of the far right column. 


:::note Change Timeframe & Show Suggested Load
The gear above the telemetry graphs opens a small modal allowing the user to change the timeframe represented in the graphs and allowing the user to toggle the suggested load for the top CPU telemetry graph.
:::

## Instances

Clicking the `Instances` tab from the horizontal navigation will show all instances currently deployed to this server and their state.


## Add Server

Deploying a new server on Cycle is simple.

- First, click **Infrastructure** from the main navigation.
- From there, select **Add Servers**.

## Server Deploy Modal

The server deploy modal will pop up after clicking on the add servers button. If the provider desired for this deployment is not selectable, that means that credentials have not yet been added to the [providers](/reference/hubs/integrations/providers/) page.

After selecting a provider select a location to provision from and click **Next**.

## Deploy Form

The deploy form is the last step before deploying new server(s) on Cycle.

![deploy form](https://static.cycle.io/portal-docs/server/create.png)

1. At the bottom of the order summary, users are presented with the sum of new costs to be expected from their provider & Cycle after deploying this server.
2. The hub usage summary shows the current state of your infrastructure for a given hub and then changes to accommodate the servers a user adds to the order summary. A node represents a server.
3. Server selection is done by using the `^` carrat button to increase or `v` carrat to decrease the number of servers of any given type. The orders summary shows the total selection in real time.

:::note Type Sorting
For some locations, providers will have a wide range of server types with resources optimized for compute, storage, or other specs like GPU support. Users that wish to see a locations available servers of a given type can use the given options to narrow servers to an individual type.
:::

Not included in the above image is an arrow to the "Cluster", as they are covered on the [clusters page](/reference/infrastructure/clusters).

:::caution Availability Zones
When deploying servers from GCP, users can select the availability zone they'd like to deploy to by clicking on the edit icon under the order summary for a given server.

In the future this will be supported for AWS as well as other providers that offer the "Region/Availability Zone" model.
:::

