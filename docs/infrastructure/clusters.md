---
sidebar_label: Infrastructure Clusters
sidebar_position: 4
---

# Infrastructure Clusters
On Cycle, an infrastructure cluster is a named group of server resources that represent a logical separation from other groups of servers (other clusters).


#### An Example:
A user deploys 10 servers to the production cluster and 4 servers to a development cluster.  The servers in this example each have 4 CPU's and 10GB of RAM, to keep things simple. The production cluster, would represent 40 CPU's and 100GB of RAM, while the development cluster would represent 16 CPU's and 40GB of RAM.  


When an [environment](/docs/environments/overview) is created, it is associated with a cluster.  So containers deployed to that environment will be deployed to servers that are a part of the associated cluster and will rely on the resources of those servers to complete their tasks.  

While Cycle makes the experience of using cloud infrastructure seamless by presenting servers as a pool of resources available for containers to be deployed to - it's also very sophisticated in how those pools are built.  If the development cluster resources are fully consumed, the platform will not (and can not) use resources from a different cluster to compensate.  The logical separation between clusters means that the clusters of servers themselves have no concept of each other and can therefore be treated as individual resource pools.

Many teams will use this to constrain different projects that should at no point interact with each other - the simplest example being the production and development clusters for their respective versions of an application.  A more advanced example may be a dev shop keeping infrastructure clustered by project, based on client needs. 




## Adding A Cluster
To add a new cluster, add the name of the cluster to the list of clusters during [server deployment](/docs/infrastructure/add-infrastructure).  Once server(s) have been deployed into that cluster namespace, the cluster will show up as a part of the list of available clusters.  

:::caution Custom Cluster Names
If you add a custom cluster name outside of `production`, `development`, or `staging` and then later delete all servers deployed to that cluster, it will not show up as part of the list of clusters the next time you go to add a server.  To deploy to that custom cluster once again, just add the name during a server deploy and it will once again show in the list.
:::


## Deleting Clusters
To remove a cluster simply delete all associated infrastructure for that cluster.  The clusters `production`, `development`, and `staging` will always exist as options when deploying infrastructure as these are defualt settings.