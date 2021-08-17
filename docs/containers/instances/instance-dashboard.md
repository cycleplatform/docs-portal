---
sidebar_label: Instance Dashboard
sidebar_position: 1
---

# Instance Dashboard

The instance dashboard displays additional information about your instance such as the instance console, instance ID, network information, SSH access, SFTP and volume information, and advanced operations.

Navigate to the instance dashboard by following these steps:

:::note Navigating to the Instance Dashboard
1. Click the Environments tab on the navigation menu to the left.
2. Select the environment the container instance you want to access is in.
3. Click the Containers tab under the environment name.
4. Select the container from the list.
5. Click the Instances tab under the container name.
6. Select the specific instance you want to view from the list.
:::

Here you will find information on:

* Instance ID and instance networking.
* SSH credentials for the Two-Way Console.
* Volume and SFTP Information, if the instance has an associated volume.
* Advanced operations, which currently includes instance migrations.
* Instance migration options.


## Advanced

### Instance Telemetry
Observe instance telemetry such as CPU usage and RAM usage for each instance.

**CPU Usage** - Shows how many milliseconds of usage this instance is consuming over 30 second intervals.

**RAM Usage** - Shows both kernel memory (purple) and RAM consumption (blue) for this instance, in megabytes.

The telemetry graphs are fully customizable for the user's needs. There are two options for the type of data to be displayed:

**Stream** - will stream new data points to the container modal showing usage in real time.

**Report** - Will create a report of data and populate the graph based on the time period selected from the dropdown. 


## Instance Migration
To migrate your instance to another server in the same cluster you can use the Advanced modal to uncover the instance migration wizard. This is located under the migration exchange arrows   .  Using this wizard you can select where you would like to send your instance and whether or not you'd like to also migrate the contents of the instances volume.

### Revert Migration
After the instance migration has been completed, there will be a button to revert the migration. This button will exist until the instance in question has been purged (hover over the purge timer to check this value). If at any time you wish to reverse the migration of your instance, you can do so by clicking this Revert Migration button.

During any type of migration event the instance being migrated will move into the stopped state as it migrates and then back to live (running) when ready.
