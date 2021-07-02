---
sidebar_label: Discovery
sidebar_position: 1
---

# Discovery Service
The Discovery service is automatically included in every Cycle environment.

### Service Discovery For Distributed Applications
There are three "Service Containers" included with each environment. The Discovery service container is responsible for dynamic hostname to IP translation and DNS lookups. This allows for Cycle to provide geography-agnostic private networks within the environment and using Cycle SDN networks.
 
### How It Works
Cycle creates a file inside the container, /etc/resolv.conf, that tells the container to use the Discovery service for all DNS lookups. It will fall back to Google's DNS (8.8.8.8) for all other queries.

The service caches queries for 5 minutes, giving a performance boost for repeated lookups, since they will be served over the private network.

### Private Network Routing with Discovery
When discovery returns a list of IP's after a DNS lookup the list is sorted by proximity to the requesting instance.  If the user would like that list to be randomized prepend the hostname with an underscore - ex: `_hostname`.