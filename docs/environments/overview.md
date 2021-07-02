---
sidebar_label: Overview
sidebar_position: 1
---

# Environments Overview
Environments are logical groupings of containers. All containers deployed inside an environment automatically have a private network built between them, enabling seamless communication.

Only deploy containers into the same environment if they are related. For example, if you're building an app, you may have a database container, a frontend container, and an API container all deployed to an environment sharing the application name.

### Private Networks
One of the most difficult aspects of using containers is networking them together. Though this has gotten a bit easier over the years, nothing comes close to the simple, yet powerful approach of Cycle environments.

Every container deployed into the same environment has a private, encrypted network built between them, regardless of their geographic location. Instances in Tokyo can communicate with your database in California, using nothing other than the hostname. Containers obtain both a private IPv4 and IPv6 address, where the format is:

IPv4 - 10.[environment].[container].[instance].
IPv6 - fd00::[environment]:[container]:[instance]:[unallocated].


### Environment Services
An environment service is a container Cycle starts within the environment to provide extra functionality. These services are created and managed automatically, but may have some configuration options available. At this time, two services are started in each environment:

* [Discovery Service](https://docs.cycle.io/docs/environments/services/discovery)
* [VPN Service](https://docs.cycle.io/docs/environments/services/vpn)
* [Load Balancer Service.](https://docs.cycle.io/docs/environments/services/loadbalancer)

### High Availability Services
All environments will have the choice of setting services to high availability or HA. Marking a service as being HA will be done through a checkbox on the environment dashboard under Environment Summary.

When you mark a service **HA** Cycle will take steps to make sure that the service is deployed in a way that has a high failure tolerance. The service will spawn two - three more instances. If an instance fails, the platform will takes steps to bring that instance back online.

Swapping out of **HA** mode will scale your instances back down to a single instance. Cycle follows FILO and will eliminate the instances, starting with the last instance created and moving toward the original instance.

### The Environment Dashboard
From the environment dashboard, you are able to get a bird's eye view of containers and services for the environment, as well as information on the public load balancer and .

:::note Navigating to the Environment Dashboard
1. Select the Environments tab on the left in the navigation menu.
2. Click the name of environment you wish to see from the list.

* Alternatively, from within an environment, click the "Dashboard" tab at any time.
:::