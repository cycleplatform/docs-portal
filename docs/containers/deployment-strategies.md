---
sidebar_label: Deployment Strategies
sidebar_position: 40
---

# Container Deployment Stratgies

The following is a list and description of the currently supported deployment strategies.

### Resource Density

Cycle will distribute instnaces across servers to maintain balanced resource usage.

### High Availability

Cycle will deploy instances over servers with an emphasis on geographic and physical separation.

:::note
Requires at least 2 servers in different data centers and 2 instances minimum.
:::

### First Available

Cycle will deploy instances to whichever server acknowledges the request first.

### Manual

Cycle will not make any decisions on where instances are deployed. User has full control using portal or API.

:::caution
If you use the scale functionality or deploy initial instances using this deployment strategy, the instnaces will go to random servers.
:::

### Node

Cycle will deploy one instance to every node that matches the specified criteria for the container.

:::note
If you deploy a new server that matches the criteria, it will automatically get a new instance.
:::

### Edge

Cycle will prioritize the geographic distribution of instances.

:::note
Edge does not require an minimum number of instances or eligible servers to be viable.
:::
