---
sidebar_label: Networking
sidebar_position: 2
---

# Container Configuration: Networking
Networking configuration is comprised of three sections:
1. Hostname
2. Public Network
3. Ports

### Hostname
The container hostname can be used when requesting DNS lookups from the [environment discovery service](https://docs.cycle.io/docs/environments/services/discovery).

### Public Network
There are three types of network privilege a container can have:

**Disabled** - Public internet access is completely disabled for this container. It may only communicate with other containers within the same environment. This is ideal for sensitive things, such as databases.

**Egress Only** - The container may initiate connections over the internet, but all incoming connections will be blocked. This is ideal for things that require fetching data from the web, but do not need to respond to inbound requests, such as web scrapers.

**Enabled** - The container is able to both start and accept connections over the internet. This is a must for websites, APIs, and other services where clients may not be known ahead of time.


### Ports
Port mappings are always formatted as `[host]:[container]`. This is the standard way that all containers have traditionally been run, and allows for the external routing to be directed to any port inside the container.

**Example**:

If your container expects to receive traffic on `port 8000`, a port mapping of `80:8000` would result in the loadbalancer listening for incoming traffic on port 80 (_http default_) and then forwarding that traffic to the container on `8000`.