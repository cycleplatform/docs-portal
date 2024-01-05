
# Infrastructure

Cycle creates a paradigm shift when it comes to dealing with your infrastructure. The primary focus when using the platform is your containers, while the servers underneath appear as a giant pool of distributed resources.

## Infrastructure Dashboard

Selecting the infrastructure tab from the main navigation results in being routed to the infrastructure dashboard.

![infrastructure dashboard](https://static.cycle.io/portal-docs/infrastructure/dashboard.png)

1. Cluster specific resource usage is displayed here as well which covers RAM usage & allocations as well as CPU shares.
2. Clicking on the hostname of an individual server will take you into that servers' dashboard view.

Users may also notice that the "Add Servers" button at the top right of the screen stays in place as navigation throughout the infrastructure section of the portal takes place.

## IP's

The IP's tab shows information about current public IP pools associated with your Cycle account.

![ips tab](https://static.cycle.io/portal-docs/infrastructure/ip-dash.png)

1. The currently selected CIDR.
2. The current amount of IP's in use / available for a given CIDR.

Clicking on a CIDR entry will show the addresses of a CIDR that are assigned, or if they have been assigned previously but are no longer assigned.. an entry for that state.

Most users will utilize this to delete IPv4 /31 CIDR's, as these are addresses that are generally billed monthly by providers.

:::info Assignment ID
Not all providers return this type of ID, so if the value seems as though its stuck loading... it's likely not provided by the provider.
:::
