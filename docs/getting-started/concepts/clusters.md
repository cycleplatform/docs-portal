---
id: clusters
displayed_sidebar: gettingStartedSidebar
title: Clusters
sidebar_position: 12
---

# [Clusters](/reference/infrastructure/clusters)
A cluster represents a group of servers from one or more providers that are associated.  

There are three clusters already created for each hub: 

* Production 
* Staging 
* Development

New server clusters can be created and there, technically, is not a maximum on number of clusters. 

The way we associate servers into a cluster on Cycle is during provisioning.  During a server create event, a user either selects an existing cluster or creates a new cluster.  

Servers can be added and removed from clusters as the user pleases.  A great mental model for clusters is to think of them as a pool of resources.