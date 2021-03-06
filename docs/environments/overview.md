---

sidebar_label: Overview

sidebar_position: 1

---

# Environments Overview

Environments are logical groupings of containers. All containers deployed inside an environment automatically have a
private network built between them, enabling seamless communication.

Containers deployed in environments are automatically configured to use environment private networks. For default
environments this is an IPv6 network, while `legacy` environments also configure an IPv4 network as well.

`IPv4 - 10.[environment].[container].[instance].`

`IPv6 - fd00::[environment]:[container]:[instance]:[unallocated].`

:::info Legacy Networks A legacy environment will outfit each container with a subnet of IPv4 and IPv6 address space for
its instances. Legacy does not mean **instaed of** it is **also**.
:::

Every container deployed into the same environment has a private network built between them, regardless of their
geographic location. Instances in Tokyo can communicate with your database in California, using nothing other than the
hostname. Containers obtain both a private IPv4 and IPv6 address, where the format is:

## Environment Dashboard

![environment dashboard](https://static.cycle.io/docs/environments/env-dash-markup.png)

Breaking down this image, a user can see several very important pieces of information on the environment dashboard.

1. The Environment name is shown, letting the user know which environment they are currently working in.
2. The horizontal navigation allows for quickly switching between configuration and menus within the environment, such
   as VPN or Load balancer configuration tabs and containers dashboard.
3. The global start & stop button which acts on all containers in an environment
4. Service container modal access, which allows the user access to container specific information about the current
   environments service containers.

## Environment Services

An environment service is a container Cycle starts within the environment to provide extra functionality. These services
are created and managed automatically, but may have some configuration options available. At this time, two services are
started in each environment:

* [Discovery Service](https://docs.cycle.io/docs/environments/services/discovery)
* [VPN Service](https://docs.cycle.io/docs/environments/services/vpn)
* [Load Balancer Service.](https://docs.cycle.io/docs/environments/services/loadbalancer)

### High Availability Services

High availability can be an important milestone in creating a reslient production environment for your applications. On
Cycle, setting environment services to be highly availabile is as simple as checking the boxes under the column
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
well as information on the public load balancer and .

:::note Navigating to the Environment Dashboard

1. Select the Environments tab on the left in the navigation menu.
2. Click the name of environment you wish to see from the list.

* Alternatively, from within an environment, click the "Dashboard" tab at any time.
  :::

Take the next step by learning how to [manage environments](/docs/environments/managing-environments).
