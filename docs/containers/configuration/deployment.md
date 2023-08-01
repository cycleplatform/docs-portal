---
sidebar_label: Deployment
sidebar_position: 3
---

# Container Configuration: Deployment

The way containers are deployed is an important step for making sure you're spreading instances to servers with available resources, getting copies of your container onto several servers in different data centers, or, with manual deployments, telling Cycle exactly where you'd like your deployments to go.

## Initial Instances

Initial instances refers to the number of instances to create during the container create process. That initial number will be seen by Cycle and then according to your deployment strategy, the instances will be created on the servers that best match available resources.

## Deployment Strategy

Get full info on deployment strategies [here](/docs/containers/deployment-strategies)

## Constraints

The constraints form has two way to tag container instances:

**Tags Any** - A list of tags for the instance. If a server matches any tag in the list - that server becomes a viable candidate for the instances.

**Tags All** - A list of tags for the instance. A server must match every tag on the list in order to become a viable candidate for the instances.

## Startup Policy

A delay, in a time string, that Cycle will wait before sending the start signal to this container upon environment start.

:::note Time String

This accepts a string with modifiers. Example for 3 days 15 hours 10 minutes 5 seconds `3d15h10m5s`

:::

These settings are related to how the container updates its image.

**Delay** - A time string for Cycle to wait before starting the update.

## Shutdown Policy

Information on how Cycle should handle a shutdown signal.

**Graceful Timeout** - A time string the platform will wait for a container to stop gracefully. This accepts a string with modifiers. Example for 3 days 15 hours 10 minutes 5 seconds `3d15h10m5s`

## Restart Policy

Information about how Cycle should handle a restart event.

**Restart Condition** - If the container fails under what conditions should Cycle attempt a restart.

**Delay** - A time string for how long to wait between restart attempts. This accepts a string with modifiers. Example for 3 days 15 hours 10 minutes 5 seconds `3d15h10m5s`

**Max Restart** - The maximum number of times to try and restart this container.

## Health Check Policy

Commands and instructions Cycle will run to verify your containers health.

**Command** - The command you want Cycle to run, success will mean that the container is healthy, and error will mean that it is not.

**Retries** - How many times to try the command.

**Interval** - A time string between tries to wait before trying again. This accepts a string with modifiers. Example for 3 days 15 hours 10 minutes 5 seconds `3d15h10m5s`
**Timeout** - A time string that says the amount of time to wait before the assumption the the command has failed. This accepts a string with modifiers. Example for 3 days 15 hours 10 minutes 5 seconds `3d15h10m5s`

## Telemetry

Settings for how you'd like Cycle to collect your telemetry data.

**Retention** - A time string for how long the platform will retain telemetry for a given instance. This accepts a string with modifiers. Example for 3 days 15 hours 10 minutes 5 seconds `3d15h10m5s`

**Interval** - A time string that represents how much time your would like each telemetry report to cover. This accepts a string with modifiers. Example for 3 days 15 hours 10 minutes 5 seconds `3d15h10m5s`

**WebHook** - a url that Cycle will post your telemetry reports to.

**Disable Telemetry** - if checked, this will disable all telemetry reporting for this container.

## Stateful Instances

There are a special class of configuration settings specifically for stateful instances. These settings will only be present when a stateful instance is being configured and will not show at all in stateless instance configuration panels.

### Use Base Hostname

For containers that need to use the "base hostname" or the hostname without the instance number signifier prepended to it (ex `1.hostname`).
