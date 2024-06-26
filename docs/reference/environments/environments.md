

# Environments

Think of environments as global VPC's that span the nodes in a given cluster.  These networks between nodes can exists next to each other but act independently and are fully isolated from each other.  Environments each have their own set of [services](#environment-services), which support functionality and help further isolate (by not being shared). 

Containers deployed in environments are automatically configured to use environment private networks. For default
environments this is an IPv6 network, while `legacy` environments also configure an IPv4 network as well.

`IPv4 - 10.[environment].[container].[instance].`

`IPv6 - fd00::[environment]:[container]:[instance]:[unallocated].`

:::info Legacy Networks

A legacy environment will outfit each container with a subnet of IPv4 and IPv6 address space for
its instances. Legacy does not mean **instead of** it is **also**.
:::

Every container deployed into the same environment has a private network built between them, regardless of their
geographic location. Instances in Tokyo can communicate with your database in California, using nothing other than the
hostname. Containers obtain both a private IPv4 and IPv6 address, where the format is:

## Environment Dashboard

![environment dashboard](https://static.cycle.io/portal-docs/environments/env-dash.png)

Breaking down this image, a user can see several very important pieces of information on the environment dashboard.

* The horizontal navigation allows for quickly switching between configuration and menus within the environment, such
   as VPN or Load balancer configuration tabs and containers dashboard.
*  The global start & stop button which acts on all containers in an environment
* Service container modal access, which allows the user access to container specific information about the current environments service containers.
* Events summary shows all environment level events.


## Environment Services

An environment service is a container Cycle starts within the environment to provide extra functionality. These services
are created and managed automatically, but may have some configuration options available. At this time, three services are
started in each environment:

- [Discovery Service](/reference/environments/services/discovery)
- [VPN Service](/reference/environments/services/vpn)
- [Load Balancer Service.](/reference/environments/services/loadbalancer)

### High Availability Services

High availability can be an important milestone in creating a resilient production environment for your applications. On
Cycle, setting environment services to be highly available is as simple as checking the boxes under the column
marked **HA** and then submitting that change using the "update" button.

After this setting is enabled the environment configuration will know that it should maintain at least two instances of
whatever container is marked as "HA" or highly available.

:::caution Required Resources

In order to use HA mode for services, there must be at least 2 servers deployed and those servers must be in different
data centers.

:::

Swapping out of **HA** mode will scale your instances back down to a single instance. Cycle follows FILO and will
eliminate the instances, starting with the last instance created and moving toward the original instance.

## The Environment Dashboard

From the environment dashboard, you are able to get a bird's eye view of containers and services for the environment, as
well as information on the public load balancer and its associated IP's.

:::note Navigating to the Environment Dashboard

1. Select the Environments tab on the left in the navigation menu.
2. Click the name of environment you wish to see from the list.

- Alternatively, from within an environment, click the "Dashboard" tab at any time.

:::

Take the next step by learning how to [manage environments](/reference/environments/managing-environments).

## Security Events & Graph

Users will notice a security graph on each environments dashboard.

![security events graph](https://static.cycle.io/portal-docs/environments/security-graph.png)

This graph will report any security events, scoped to the given environment, that have taken place along the time-span shown (currently 24 hours).

### Incident Types
Incidents are broken down into 4 major fields:

1. Risk - the risk level of the security incident (`info`, `low`, `medium`, `high`, `critical`).
2. Surface - the vector of attack (`network`, `service`, `fs`, `api`).
3. Event - how the platform handled the event (`suggestion`, `notice`, `prevention`, `detection`, `reaction`).
4. Attack - the type of attack detected (`none`, `auth-failure`, `brute-force`, `exploit-vulnerability`, `social-engineer`, `service -interruption`, `access-elevation`).





