---
sidebar_label: Instances
sidebar_position: 1
---

# Container Instances

A container is the combination of an image and a configuration. The copies of a container are called instances. The instances tab of the container modal will show all container instances that currently exist.

## Instance Dashboard

![container instance dashboard](https://static.cycle.io/portal-docs/instances/dashboard.png)

1. The two-way console and instance migration icons, when clicked, show the submenu for these tools.
2. Instance console controls allow the user to interact directly with the console service.
3. Volume and telemetry data is available on each instance dashboad by scrolling to the bottom of the modal.

### Two-Way Console

The two way console makes it possible to access your running containers in a secure and isolated way . This can be a powerful way to debug a running container.

The two way console is a separate service run by Cycle, that gives you access to a running container via an interactive shell. This service does not install anything into your container, or expose it in any way. Instead, your SSH program is pointed to a generated endpoint (based on instance ID) at console.cycle.io. The SSH protocol is then translated into a format that the platform understands, giving you a secure, non-invasive way to interact with your containers.

### Instance Migration

To migrate your instance to another server in the same cluster you can use the Advanced modal to uncover the instance migration wizard. This is located under the migration exchange arrows . Using this wizard you can select where you would like to send your instance and whether or not you'd like to also migrate the contents of the instances volume.

### Revert Migration

After the instance migration has been completed, there will be a button to revert the migration. This button will exist until the instance in question has been purged (hover over the purge timer to check this value). If at any time you wish to reverse the migration of your instance, you can do so by clicking this Revert Migration button.

During any type of migration event the instance being migrated will move into the stopped state as it migrates and then back to live (running) when ready.

## Instance Telemetry

![instance telemetry report](https://static.cycle.io/portal-docs/instances/telemetry.png)

Each instance currently reports 4 different graphs in the portal:

1. CPU Usage
2. RAM Usage
3. Network Traffic (Public)
4. Network Traffic (Private)

**CPU Usage** - Shows how many milliseconds of usage this instance is consuming over 30 second intervals.

**RAM Usage** - Shows both kernel memory (purple) and RAM consumption (blue) for this instance, in megabytes.

**Network Traffic (Public)** - Shows the transmitted and received bytes (tx, rx) for the instance over the `eth-pub` interface.

**Network Traffic (Private)** - Shows the transmitted and received bytes (tx, rx) for the instance over the `eth-priv` interface.

### Stream Or Report

Selecting the gear will open a submenu, allowing the user to select `Stream` or `Report`. The report type uses collected data to populate the graph.

:::caution Stored Telemetry Data
The graph will only show the data that it has. To check the telemetry data retention settings for any given container, go to the container configuration under "Deployment" and scroll down to telemetry.
:::

**Stream** - will stream new data points to the container modal showing usage in real time.

**Report** - will create a report of data and populate the graph based on the time period selected from the dropdown.
