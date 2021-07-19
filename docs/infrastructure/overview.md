---
sidebar_label: Infrastructure Overview
sidebar_position: 1
---

# Infrastructure Overview

Cycle creates a paradigm shift when it comes to dealing with your infrastructure. The primary focus when using the platform is your containers, while the servers underneath appear as a giant pool of distributed resources. Opening ports, installing software, and scaling are all done from the perspective of the container. This will change how you think about your resources.

### Infrastructure Dashboard
Selecting the infrastructure tab from the main navigation results in being routed to the infrastructure dashboard. 

This dashboard displays information about the currently provisioned servers and their resource utilization. It's possible to group servers by location, cluster, and provider. The image below depicts two servers from two different providers. The server from Equinix Metal has 23 CPU shares available before its CPU resources will be fully committed. The server from Vultr has been set to Allow Overcommit in the server settings, and it's showing that the CPU shares have already been over-committed by 5 shares.

<!-- Todo add image -->