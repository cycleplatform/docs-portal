---
sidebar_label: Instances
sidebar_position: 4
---


# Container Instances
A container is the combination of an image and a configuration.  The copies of a container are called instances.  The instances tab of the container modal will show all container instances that currently exist.   

## Instance Dashboard
![container instance dashboard](https://static.cycle.io/docs/containers/instance-console-markup.png)
1. The two-way console and instance migration icons, when clicked, show the submenu for these tools.
2. Instance console controls allow the user to interact directly with the console service.
3. Volume and telemetry data is available on each instance dashboad by scrolling to the bottom of the modal.


### Two-Way Console
The two way console makes it possible to access your running containers in a secure and isolated way . This can be a powerful way to debug a running container.

The two way console is a separate service run by Cycle, that gives you access to a running container via an interactive shell. This service does not install anything into your container, or expose it in any way. Instead, your SSH program is pointed to a generated endpoint (based on instance ID) at console.cycle.io. The SSH protocol is then translated into a format that the platform understands, giving you a secure, non-invasive way to interact with your containers.



### Instance Migration
To migrate your instance to another server in the same cluster you can use the Advanced modal to uncover the instance migration wizard. This is located under the migration exchange arrows   .  Using this wizard you can select where you would like to send your instance and whether or not you'd like to also migrate the contents of the instances volume.

### Revert Migration
After the instance migration has been completed, there will be a button to revert the migration. This button will exist until the instance in question has been purged (hover over the purge timer to check this value). If at any time you wish to reverse the migration of your instance, you can do so by clicking this Revert Migration button.

During any type of migration event the instance being migrated will move into the stopped state as it migrates and then back to live (running) when ready.

## Instance Telemetry
Observe instance telemetry such as CPU usage and RAM usage for each instance.


**CPU Usage** - Shows how many milliseconds of usage this instance is consuming over 30 second intervals.

**RAM Usage** - Shows both kernel memory (purple) and RAM consumption (blue) for this instance, in megabytes.

The telemetry graphs are fully customizable for the user's needs. There are two options for the type of data to be displayed:

### Stream 
will stream new data points to the container modal showing usage in real time.
![instance telemetry stream](https://static.cycle.io/docs/containers/instance-telemetry-stream.png)

### Report
Will create a report of data and populate the graph based on the time period selected from the dropdown.
![instance telemetry report](https://static.cycle.io/docs/containers/instance-telemetry-report.png)

