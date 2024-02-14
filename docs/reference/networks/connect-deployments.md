---
sidebar_label: Connecting Deployments
sidebar_position: 2
---

# Connecting Deployments Between Environments
This page is specifically talking about communication between containers in different [deployments](/reference/environments/deployments/) that are also in different [environments](/reference/environments).


Generally, deployments in the same environment do not "talk" to each other.  This gives the user a type of network isolation between deployments.  

BUT

If you have a set of microservices that make up many different deployments and you'd like those microservices to be able to talk to each other over private networks on Cycle, you'll want to use an environment per microservice with a Cycle network connecting those environments.  

Once this is set up, a user can connect to an container thats in another deployment by using the following pattern:

`container-hostname.deployment-tag.sdn-identifier`



## Ports
Something worth noting here are port mappings.  When talking directly to an instance, users need to make their call using the `hostname` + the internal port.  The external port is only used when making public calls "into" the container through the load balancer.  For some services, there will be a public URL that uses TLS termination and has port mappings that might look like `80:3000 443:3000`.  

When viewing that container from a linked record, the user doesn't have to define the port in the URL because the mapping is to 443 or 80 externally, and this can be interpreted via the protocol.  

However, if the user is connecting to that same container over the private network, because the `internal` port is set to 3000 (and thus this is where the server expects traffic to come in), the correct way to communicate with that service via hostname is `hostname:3000`.  

When adding this all together, if you were using the SDN to talk between environment deployments the structure would look like this: 

`container-hostname.deployment-tag.sdn-identifier:port`