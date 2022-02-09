---
sidebar_label: Infrastructure Overview
sidebar_position: 1
---

# Infrastructure Overview

Cycle creates a paradigm shift when it comes to dealing with your infrastructure. The primary focus when using the platform is your containers, while the servers underneath appear as a giant pool of distributed resources. 

## Infrastructure Dashboard
Selecting the infrastructure tab from the main navigation results in being routed to the infrastructure dashboard.


![infrastructure dashboard](https://static.cycle.io/docs/infrastructure/infrastructure-dash-markup.png)

1. The infrastructure dashboards sub-navigation includes the dashboard, servers, and ips tabs.
2. Cluster specific resource usage is displayed here as well which covers RAM usage & allocations as well as CPU shares.
3. Clicking on the hostname of an individual server will take you into that servers' dashboard view. 


Users may also notice that the "Add Servers" button at the top right of the screen stays in place as navigation throughout the infrastructure section of the portal takes place.


## Servers Dashboard
Unlike individual server dashboards, the infrastructure tab "Servers" will reveal a high level look at all servers currently deployed in the given hub.


![servers dash](https://static.cycle.io/docs/infrastructure/servers-dash-markup.png)

1. The servers tab showing which tab this refers to.
2. Server state will show when a server is provisioning, offline, online, or for a brief moment the state of deleted.



## IP's
The IP's tab shows information about current public IP pools associated with your Cycle account.

![ips tab](https://static.cycle.io/docs/infrastructure/ips-dash-markup.png)

1. The IP's tab available when the user is scoped to infrastructure.
2. The currently available subnets for the hub.
3. The current amount of IP's in use / available for a given subnet.


### IP Settings 
There is a subpage of IP's, available by clicking on a CIDR entry. This page will show the addresses of a CIDR that are assigned, or if they have been assigned previously but are no longer assigned.. an entry for that state.  

Most users will utilize this page to delete IPv4 /31 CIDR's, as these are addresses that are generally billed monthly by providers.

:::info Assignment ID
Not all providers return this type of ID, so if the value seems as though its stuck loading... it's likely not provided by the provider.
:::





