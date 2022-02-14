---
sidebar_label: Runtime
sidebar_position: 2
---

# Container Configuration: Runtime
The runtime configuration specifies how a container starts, information it has access to, and permissions it has on the host. It needs to be enabled for the settings underneath to have an effect.

## Environment Variables
This section shows the currently configured environment variables for the container and also allows for a user to add/remove additional environment variables to the container after it's been created.

To add additional environment variables to a container:

* Add a environment variable to the environment variable fields.
* Use the Add Variable button.
* Repeat the last two steps until you've added all the environment variables for this container.
* Press the **Save Config** button on the bottom right of the screen.

There are Cycle specific environment variables injected into each container. You can find the full list [here](https://docs.cycle.io/docs/containers/integrations/environment-varibales). Some of these will be instance specific, such as `CYCLE_INSTANCE_IPV6_SUBNET`.

:::note Environment Variable Management
Environment variables defined on the image cannot be removed. Cycle interprets these as critical to the way your program works. However, their values can be changed, which may be useful for things such as specific development-only settings. 
:::

:::success Enable Seccomp
Currently, [seccomp](https://man7.org/linux/man-pages/man2/seccomp.2.html) is only enabled on containers that implement an `ENABLE_SECCOMP` environment variable (the value can be blank only the key is scanned by Cycle).  In the future seccomp will be enabled by default.
:::

## Command
The command section of the runtime configuration settings has options for overriding the startup command used to start your container and the containers configured working directory.

### Startup Command
**Path** - Set an override to the default command run when the container starts. May be useful if you have a custom debug command you wish to run.

**Args** - Any args for the override command.

### Working Directory
**Workdir** - define the full path to be used when setting the containers working directory.  

## SYSCTL & RLIMITS
Settings for sysctl fields and rlimits can be set as described in their associated man pages.

[rlimits man page](https://man7.org/linux/man-pages/man2/getrlimit.2.html)

[sysctl man page](https://man7.org/linux/man-pages/man8/sysctl.8.html)



## Privileges
These settings define exactly what privileges the container has on the host.

:::danger  Be Careful With Privileges
Changing these settings can open you up to security vulnerabilities. Do so at your own risk.
:::

**Namespaces** - Namespaces define what is isolated in the container, and what is used on the host. The fewer namespaces a container has, the less secure it becomes. By default, a container has all namespaces enabled. At the least, they must have the MOUNT namespace. See here for detailed descriptions of the available namespaces.


**Privileged Capabilities** - Take granular control of specific kernel-level capabilities to a container for extra functionality. These can lead to interesting use cases, for example adding the CAP_NET_RAW capability, and building a containerized network monitoring dashboard. See here for detailed descriptions of the available kernel capabilities.

**Fully Privileged** - This is by far the most dangerous option available to you. This gives the container full permissions on the host, treating it as a root process.There is almost no reason to do this, and you will most likely break something. If you feel there is a reason to do this, reach out to our support team. We'll help you find a better way.


