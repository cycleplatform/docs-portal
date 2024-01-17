---
id: environments
displayed_sidebar: gettingStartedSidebar
sidebar_position: 14
title: Environments
---

# [Environments](/reference/environments/)
Environments on Cycle are very similar to the secure, isolated, virtual private cloud (VPC) that you may be used to from IaaS providers. An environment is required before you can start deploying containers.  

This resource represents a group of containers that share an isolated network that spans all servers in a given [cluster](/getting-started/concepts/clusters). That cluster is designated at the time of environment create. Each environment also gets 3 services:

1. [Load Balancer](/reference/environments/services/loadbalancer)
2. [Discovery](/reference/environments/services/discovery)
3. [VPN](/reference/environments/services/VPN)


One major difference between traditional VPC's and Cycle Environments?  

On Cycle you can have multiple environments sharing the same infrastructure. Traditional IaaS VPC implementations are almost always configured to have servers as part of only one VPC.

:::danger IPv6 vs IPv4
All Cycle environment networks are IPv6 by default. To assign containers an IPv4 IP on the private network you'll want to enable [legacy mode](/reference/environments/).
:::


