---
sidebar_label: Function Containers
sidebar_position: 39
---

# Function Containers 
Using the [deployment strategy](/reference/containers/deployment-strategies), `function`, a user can tell Cycle they'd like to create a function type container.  

The container instances exist on the servers they're deployed to. However, a user might think of this type of container as being more similar to a serverless function. 

## Invoking A Function Container
There are two main ways to invoke a function container: 

1. Connect a domain to the container and make an call to the domain. 
2. Use the [scheduler API](https://scheduler-api.docs.cycle.io). 


Using the domain connected to a container will automatically make all the calls to the scheduler from the load balancer. 

## Function Configuration
Function containers have their own [configuration options](/reference/containers/configuration/deployment#function) in the container configuration section. 