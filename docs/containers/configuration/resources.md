---
sidebar_label: Resources
sidebar_position: 4
---

# Container Configuration: Resources

If you're coming from the VM world, you are probably used to resource allocations, where you set aside a chunk of RAM, storage, CPU time, etc that can only be utilized by that VM. In the container world, we set limits.

**Shares** are the units we use to describe compute usage. A full share is 10 and equates to a single virtualized core or thread. To calculate shares available, multiply the amount of virtual cores or the amount of threads you have available on the infrastructure by 10.

By default, Cycle will pre-allocate each instance with a default of 2 shares. That means that when you create an environment Cycle will allocate shares to your service containers as well. If you go over the total shares available on your infrastructure, Cycle will no longer allow you to deploy instances to that infrastructure.

:::note VPN Containers
VPN containers are never counted during pre-allocation.
:::

### CPU
Both the **limit** and **reserve** of the CPU can be set. This setting directly relates to the amount of shares available on the host. Setting a limit of 6 would translate to limiting the instance to 60% of a single core or thread. Setting a reserve of 2 would reserve 1/5th of the total available compute time on a single core for each instance.

In addition to the limit and reserve, Cycle also supports CPU pinning. Setting this option will force your container to run only on the specified cores. This allows you to control which cores your instances have access to.

### RAM
RAM is very straightforward - limits and reserves are set in KB, MB, GB etc. In addition, you can define the swappiness of your container's RAM usage. Swappiness defines how much (and how often) your container will copy RAM contents to swap. This parameter's default value is "60" and it can take anything from "0" to "100". The higher the value of the swappiness parameter, the more aggressively your container will swap.