---
id: servers
displayed_sidebar: gettingStartedSidebar
title: Servers
sidebar_position: 13
---

# [Servers](/reference/infrastructure/servers/)
On Cycle a server is any compute instance deployed through the platform.  

All servers on Cycle will go through the same provisioning process and all servers on Cycle will belong to a [cluster](/getting-started/concepts/clusters).  

When servers are provisioning, they go through a series of states leading up to a "live" state.  Once they are in a live state, the user can deploy containers to the server that belongs to an [environment](/getting-started/concepts/environments).

## Server Updates
Users will not need to log into the server to install software or make changes.  All software updates and installations are fully managed through the platform.  

Each time a server is restarted it pulls the latest version of CycleOS and runs that operating system as read-only in memory (its never written to disk). 