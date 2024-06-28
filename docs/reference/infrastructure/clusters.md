---
sidebar_label: Clusters
sidebar_position: 4
---

# Clusters
On Cycle, an infrastructure cluster is a named group of server resources that represent a logical separation from other groups of servers (other clusters).



## Cluster Dashboard
![cluster dashboard](https://static.cycle.io/portal-docs/infrastructure/cluster-dash.png)

The events graph shows all [events](/reference/hubs/#events) that pertain to the given cluster.  

Below that users will notice the `Cluster Telemetry` section.  In this section both the CPU and RAM usage graph show aggregation of usage across all nodes in the cluster.

The `Providers` section shows all providers where there are currently deployed servers in this cluster and the number of those servers deployed. 

The `Servers` section has links to the servers deployed in the cluster showing more about the health and last check-in. 

#### An Example:
A user deploys 10 servers to the production cluster and 4 servers to a development cluster.  The servers in this example each have 4 CPU's and 10GB of RAM, to keep things simple. The production cluster, would represent 40 CPU's and 100GB of RAM, while the development cluster would represent 16 CPU's and 40GB of RAM.  


When an [environment](/reference/environments/) is created, it is associated with a cluster.  So containers deployed to that environment will be deployed to servers that are a part of the associated cluster and will rely on the resources of those servers to complete their tasks.  

While Cycle makes the experience of using cloud infrastructure seamless by presenting servers as a pool of resources available for containers to be deployed to - it's also very sophisticated in how those pools are built.  If the development cluster resources are fully consumed, the platform will not (and can not) use resources from a different cluster to compensate.  The logical separation between clusters means that the clusters of servers themselves have no concept of each other and can therefore be treated as individual resource pools.

Many teams will use this to constrain different projects that should at no point interact with each other - the simplest example being the production and development clusters for their respective versions of an application.  A more advanced example may be a dev shop keeping infrastructure clustered by project, based on client needs. 




## Adding A Cluster
Cluster create can be found by navigating to the `Clusters` page under `Infrastructure` on the main navigation.  Click the `Add` button to open the cluster create wizard.  On the form the user only needs to supply an identifier, optionally the [access controls](/reference/hubs/access-controls) can also be set. 


## Cluster Settings 
The cluster settings page, available on the horizontal navigation when the cluster is selected from the clusters list, opens modifications to the cluster for the user. 

Users can make changes to cluster [access controls](/reference/hubs/access-controls) on this page. 

To delete the cluster, enter the cluster name into the delete form and submit. 