---
sidebar_label: Networks Overview
sidebar_position: 1
---



# Cycle Networks Overview
Cycle does all the heavy lifting when it comes to the creation and maintenance of networks.

Each environment provides a private network for container to container communication.  These networks cannot be extended outside the environment itself.  A user cannot add two environment networks together forming a single network, nor can they extend the private network in a way that would create additional exposure to the environment network from outside sources.

Given that constraint, it may seem as though the question of what to put into a single environment is harder to make, however, a user does have the choice to build an entirely new private network that can include up to 5 different environments.  To accomplish this a Cycle Network is needed.  After the network is created all containers deployed to the included environments will be initialized with an additional veth interface for the Cycle Network.  Existing containers will need to be restarted one time to give Cycle the chance for the veth interface installation.    

:::caution Clusters Matter
There is no way to connect two environments within different clusters. 
:::

### Creating Networks
When creating a Cycle Network, the user is defining a name, cluster, and identifier to be used during the construction of a the new private network.  The identifier must be unique among Cycle environments on the hub and is used when making http requests on the private network.  By appending the network identifier to the hostname of a container, the discovery service will understand it should reference that specific network when resolving the query. 

To create a network:
1. Select to the Networks tab from the left side navigation and click Create Network.
2. Fill in a name and select which cluster you would like to make this network available on.
3. Add up to 5 environments to the network.


### Manage Networks
* Add or remove an environment from the Network.
* Change the name of the network
Navigate to the network dashboard by clicking Networks on the left side menu. Then click on the network to be updated. 

Click **Update Network** to save the changes.

To delete the network, type the name of the network into the delete form field and hold the delete button until it completes.

#### Check That You Can Get a Response
Use the two-way console to SSH into an instance on the network and try to ping an instance in a different environment using ping hostname.networkidentifier. The ability to ping the other instances over the network signifies that the network is usable. 

#### Check Network Interfaces
Using a command such as ```ip a``` or ```ifconfig``` check the existing network interfaces on the container and see if the network identifier is included.  

An example would be a network identified as `network` being shown as ```eth-network```.

#### IPv4 vs IPv6
Discovery will return Cycle network DNS queries as IPv6 addresses.  If a container is only listening on IPv4, communication can have unintended results.   

To figure out if the container is listening on "dual stack" or IPv4 and IPv6:

* Use the two way console and run the command ```netstat -aln```
* If the output from this command shows `:::port` the instance is listening on both IPv4 and IPv6.
* If it shows `0.0.0.0:port`, it is only listening on IPv4.
* If nothing is showing, the container is not listening for traffic at all.

<img src="/svgs/duotone/abacus.svg" />