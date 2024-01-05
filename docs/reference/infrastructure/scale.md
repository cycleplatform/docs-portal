---
sidebar_label: Auto-Scaling Groups
sidebar_position: 100
---

# Auto-Scaling Groups

Auto-Scaling groups allow users to define how Cycle should respond in a situation where:

1. A scaling event for a container has happened.
2. The current infrastructure does not have enough space to complete the scaling event.

:::info Container Auto-Scaling
For information about setting up container auto-scaling go [here](/docs/containers/configuration/autoscaling).
:::

![Autoscaling Dashboard](https://static.cycle.io/portal-docs/infrastructure/autoscaling-dashboard.png)

In the image above the `Demo` auto-scaling group is selected. You can see that each group is segmented by cluster and has settings for `Deployable Infrastructure` and `Settings`. There's also a button for creating a new group.

## Create Auto-Scaling Group

Click the `Add` button to open the Create Auto-Scaling Group modal. From here a user can add the settings most appropriate for their group.

![Auto-Scaling Create Form](https://static.cycle.io/portal-docs/infrastructure/create-autoscale-form.png)

- **Name** - The name for the auto scaling group.
- **Identifier** - A resource identifier for the auto-scale group. (Will become significant when using forthcoming CLI)
- **Cluster** - The [infrastructure cluster](/docs/infrastructure/clusters) to associate this auto-scaling group with.
- **Scale Up** - Settings for increasing number of servers.
- **Scale Down** - Settings for reducing the number of servers and TTL's.

:::success Questions About Auto-Scaling?
Have questions about configuring auto-scaling? Connect with our team on [Cycle's Public Slack](https://slack.cycle.io), where we'd be happy to chat about this and anything Cycle!
:::

## Deployable Infrastructure

Users can add server models to the deployable infrastructure page and give each model a priority. This list of deployable infrastructure is what Cycle uses when a scaling event comes in that requires infrastructure to be added.

The `Add Model` button will open a wizard, from which users can add their choices. Also, entries on this page can be edited after created.

## Settings

Name and Identifier can be changed in the basic settings, but cluster cannot. For users who have not configured the `Scale Up` or `Scale Down` settings during create, those can be toggled and configured here as well.

The `Scale Up` settings for an auto-scaling group set the upper limit of how many servers can be created to support scaling demands for containers in the group.

The `Scale Down` settings expose a few more options.

- **Min TTL** - is the minimum amount of time a server can be online before it can be removed.
- **Inactivity Period ** - is the amount of time a server should sit idle before being removed.
- **Scale Down Method ** - is the way servers should be treated when scaling down. LIFO, FIFO, and Default.

:::caution Update Button
If you make changes on the settings page, make sure to submit those changes to save.
:::
