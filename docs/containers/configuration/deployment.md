---
sidebar_label: Deployment
sidebar_position: 3
---

# Container Configuration: Deployment

The way containers are deployed is an important step for making sure you're spreading instances to servers with available resources, getting copies of your container onto several servers in different data centers, or, with manual deployments, telling Cycle exactly where you'd like your deployments to go.

## Initial Instances
Initial instances refers to the number of instances to create during the container create process. That initial number will be seen by Cycle and then according to your deployment strategy, the instances will be created on the servers that best match available resources.

## Deployment Strategy
The following link navigates to the page in docs with full information on the available deployment strategies that can be selected when deploying container instances through Cycle.

## Constraints
The constraints form has two way to tag container instances:

**Tags Any** - A list of tags for the instance. If a server matches any tag in the list - that server becomes a viable candidate for the instances.

**Tags All** - A list of tags for the instance. A server must match every tag on the list in order to become a viable candidate for the instances.

## Startup Policy
A delay, in seconds, that Cycle will wait before sending the start signal to this container upon environment start.

These settings are related to how the container updates its image.

**Delay** - The number of seconds for Cycle to wait before starting the update.

**Parallelism** - The number of instances of the container that can be updated at a time.

## Shutdown Policy
Information on how Cycle should handle a shutdown signal.

**Graceful Timeout** - The time in seconds the platform will wait for a container to stop gracefully.

## Restart Policy
Information about how Cycle should handle a restart event.

**Restart Condition** - If the container fails under what conditions should Cycle attempt a restart.

**Delay** - If there is a restart condition that is not

**Max Restart** - The maximum number of times to try and restart this container.

## Health Check Policy
Commands and instructions Cycle will run to verify your containers health.

**Command** - The command you want Cycle to run, success will mean that the container is healthy, and error will mean that it is not.

**Retries** - How many times to try the command.

**Interval** - The time between tries to wait before trying again.
**Timeout** - The amount of time to wait before the assumption the the command has failed.

## Telemetry
Settings for how you'd like Cycle to collect your telemetry data.

**Retention** - a number in seconds, which will tell Cycle how long you'd like to keep your data. The default is 21,600 or 6 hours.

**Interval** - a number in seconds that represents how much time your would like each telemetry report to cover.

**WebHook** - a url that Cycle will post your telemetry reports to.

**Disable Telemetry** - if checked, this will disable all telemetry reporting for this container.
