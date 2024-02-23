---
id: primitives
displayed_sidebar: gettingStartedSidebar
sidebar_position: 1
title: Cycle Primitives
---

# Cycle Primitives


The Cycle platform exposes several primitives to the user.  This sections hopes to give new users an idea of how these primitives are organized and a pathway to understanding how to user them. 

Beyond this understanding, we'd like users to also know that the goal with Cycle is to be a unified toolset offering full vertical integration in a way that no other container PaaS offers.  So as you learn about these primitives, please keep in mind that a big part of the reason this platform is built the way it is, is to give the user more power without the heavy burden of adding tons more tools, packages, or services to the mix. 

|Primitive| Definition| 
|---------|---------------|
|[Hubs](/reference/hubs) | The hub is the highest level resource. It is directly tied to a tier and it describes the access rights you have for the platform, the number of users, servers, environments, images, etc... All other resources, when created, are a part of a hub.| 
| [Infrastructure](/reference/infrastructure) | Represents the collection of servers, clusters, providers, IPs, and auto scale groups|
| [Providers](/reference/infrastructure/providers) | A provider on Cycle is either a native provider or a custom integration. Example AWS is a native provider a user can easily integrate with | 
| [Clusters](/reference/infrastructure/clusters)| A cluster represents a group of servers from one or more providers that are associated by name. | 
| [Servers](/reference/infrastructure/servers) | Servers are simply compute nodes deployed through the platform, into a cluster. | 
| [IPs](/reference/infrastructure/#ips) | IP's on Cycle are IPv4 or IPv6 addresses that have been provisioned from a provider and are either in use or free to be assigned. | 
| [Auto Scale Groups](/reference/infrastructure/scale) | These groups define how Cycle should treat infrastructure during scaling events. | 
| [Environments](/reference/environments) | This resource represents a group of containers that share an isolated network that spans all servers in a given cluster. |
| [Deployments](/reference/environments/deployments) |Maintain multiple independent versions of their applications within one single environment.|
| [Scoped Variables](/reference/environments/scoped-variables) | Scoped variables allow users to assign variables in the format of environment variables, api returns, or files to one or more containers in an environment. | 
| [Images](/reference/images) | An image on Cycle is an atomic copy of a filesystem. They can be built from multiple different sources.|
| [Image Source](/reference/images/sources)| An image source is location, type, and authentication information to be used in creating images | 
| [Containers](/reference/containers) | A container, on Cycle, represents the combination of an image and a configuration.|
| [Instances](/reference/containers/instances) | An instance is a copy of a container. | 
| [Stacks](/reference/stacks) | Using stacks, users can configure every aspect of application(s) ahead of time, save it to a version controlled repo, and have Cycle automate the deployment. | 
| [Pipelines](/reference/pipelines) | Pipelines give users a way to create automations in a declarative way. | 
| [DNS](/reference/dns) | Cycle offers full featured DNS tooling and users can create both DNS zones and DNS records in those zones. | 
| [Networks](/reference/networks) | A network on Cycle represents a software defined network used to connected between 2 and 8 environments. | 

