---
sidebar_label: Servers
sidebar_position: 1
---

# Servers

The Infrastructure > Servers page shows all provisioned servers split by cluster. Selecting any given server will show the `Server Dashboard` which includes graphs for:

- Load Average
- CPU Usage
- RAM Usage
- Storage Usage

There is also a lot of valuable information in the `Server Details` column.

Note the `Base Volume`, this is the volume where images are stored on the server and where application data (outside of defined volumes) also accumulates.

The `External IPs` entry is important for allowlisting IP's for remote databases as egress calls from containers on Cycle will come from the IP address of the server itself.

:::note Change Timeframe & Show Suggested Load
The gear above the telemetry graphs opens a small modal allowing the user to change the timeframe represented in the graphs and allowing the user to toggle the suggested load for the top CPU telemetry graph.
:::

## Instances

Clicking the `Instances` tab from the horizontal navigation will show all instances currently deployed to this server and their state.
