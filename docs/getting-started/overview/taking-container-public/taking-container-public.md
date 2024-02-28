# Taking A Container Public 

## Prerequisites

* [Configuring Hub](/getting-started/overview/configuring-your-hub)
* [Deploying Your First Container](/getting-started/overview/deploy-first-container/)


So far we've covered providers, servers, images, environments, and containers.  However, most workloads(especially API's and websites) want access to public networking.  In the following section we'll:

1. [Configure DNS](/getting-started/overview/taking-container-public/config-dns) - A DNS Zone is required for a public container to have an address. 
2. [Create A Linked Record](/getting-started/overview/taking-container-public/linked-record) - Using Cycle's special Linked record type to associate a domain with a container. 
3. [Start A Load Balancer](/getting-started/overview/taking-container-public/load-balancer) - Make sure our load balancer is online so there is an ingres point for the environment 
4. [Configure Ports and Routes](/getting-started/overview/taking-container-public/config-routes) - Making sure that the setting on the container config are in line with what you're container is expecting.  


