---
sidebar_label: Discovery

sidebar_position: 1

---

import Mermaid from '@theme/Mermaid';

# Discovery Service

The Discovery service is automatically included in every Cycle environment.

Service discovery is an essential part of containerized deployments. The discovery service is responsible for dynamic
hostname to IP translation and DNS lookups. This allows Cycle to provide geograpically-agnostic private networks for
each environment.

When a container is created & started, Cycle creates a file inside the container, /etc/resolv.conf, that tells the
container to use the Discovery service for all DNS lookups. Therefore, a lookup to another container with the
hostname `frontend` can be made by simply using `frontend` as the domain name. Because of the entry made to the
/etc/resolv.conf file, the initial dns query made by the requesting container will use the discovery service to resolve
the lookup. The discovery service will return all known IP's for the lookup, sorted by proximity to the requesting
instance.

If there is no entry that matches, the nameservers will fall back to Google's DNS (8.8.8.8) for all other queries.

The discovery service caches queries for 5 minutes, giving a performance boost for repeated lookups, since they will be
served over the private network.




<Mermaid chart={`
sequenceDiagram
    participant Cycle
    participant User Container One
    participant User Container Two
    participant Discovery
    Cycle->>User Container One: Installing /etc/resolve.conf
    Cycle->>User Container Two: Installing /etc/resolve.conf
    User Container One->>Discovery: Whats the IP of User Container Two
    Discovery->>User Container One: Here is a list of all IP's I have for that container
    Note left of User Container One: IP List: [10.0.11.100, 10.0.11.101]
    User Container One->>User Container Two: Request files from http://10.0.11.100/static/file
`} />



### Forcing Random IP Order From Discovery

When discovery returns a list of IP's after a DNS lookup the list is sorted by proximity to the requesting instance. If
the user would like that list to be randomized prepend the hostname with an underscore - ex: `_hostname`.