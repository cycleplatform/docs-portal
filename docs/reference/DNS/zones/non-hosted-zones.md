---
sidebar_label: Non-Hosted Zones
sidebar_position: 3
---

# Non-Hosted Zones Workflow
How to use a non-hosted zone on Cycle.

The main difference between hosted and non-hosted zones is your nameservers will not be pointed to Cycle. You'll need to set up two things to make sure your DNS is properly routed.

1. Create a Linked record pointing to the container you'd like to route traffic to. (You may need to create a new zone for this if you don't already have one.)
2. On your domain provider, point an A/AAAA record to the load balancer of the environment you're routing to. 

To find out which load balancer(s) to add A/AAAA records for, navigate to Cycle and find the environment your container is in and copy the IP's from that environments dashboard. 

After all the pieces are in place, when a request is made your domain managers nameservers will resolve the A/AAAA record(s).  Because the non-hosted zone has a linked record pointing to the container with the same domain, the load balancer will "know how" to route that traffic to the correct container. 


:::caution DNS Caching 
If you've followed the above and you're getting DNS resolution errors, the issue is likely a local DNS cache.  You can either wait for the cache to drop or run some type of flush (depending on your OS).  
:::

