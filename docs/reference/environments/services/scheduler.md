---
sidebar_label: Scheduler
sidebar_position: 5
---

# Scheduler Service
The scheduler service orchestrates incoming requests for [function](/reference/containers/functions) containers.  The process that takes place follows three distinct steps on each request:

1. Claim Instance - which reserves an instance of the target function container.
2. Spawn Instance - which causes a claimed instance to run (spawn). 
3. Release Instance - which releases the instance back to the pool of available instances. 


:::success Scheduler API
Along with this service comes a simple API, documented [here](https://scheduler-api.docs.cycle.io).
:::

## Scheduler Management
Like other services, the scheduler has it's own management modal which can be accessed by clicking the `Manage` button next to a scheduler on a given environments dashboard. 

The two settings that are currently available via the scheduler dashboard are: 

1. Auto Update - which automatically applies updates to a scheduler when a new platform update is pushed out. 
2. Public - which allows the binding of a DNS record to a scheduler making it possible to reach the scheduler for API calls over public internet. 


### Config 
The config tab in the management modal will allow users to set up access keys for use with the scheduler API.  These credentials do not need to be set to use function containers through the load balancer, but are required for using the API.  


## Scheduler High Availability 
While other services can be set to be highly available, the scheduler achieves this by allowing a user to manually increase / decrease then number of instances along with their location and then shards each instance.  Those shards represent a range of preallocated function containers. 

