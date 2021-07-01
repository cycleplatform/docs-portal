---
sidebar_label: Environment Variables
sidebar_position: 1
---

# Container Environment Variables
Each container you build will have a set of Cycle specific environment variables as well as any base and custom environment variables you've included.

Cycle automatically populates environment variables defined on the container image, but allows you to change the values or add completely new variables. These can be accessed within the container in your code.

Some environment variables are always created by Cycle, regardless of the image. Below is a full list of those values.

NAME | DESCRIPTION
-----|------------
CYCLE_API_TOKEN | A token thats used by instances to authenticate against the compute service.
CYCLE_AUTO_START | If the platform decided that this instance needs to be (re)started and is the cause of the start this value will be yes, otherwise no.
CYCLE_CONTAINER_IDENTIFIER | An identifier used for this container.
CYCLE_CONTAINER_ID | The ID of the container.
CYCLE_COMPUTE_PROXY | The Cycle compute proxy url.
CYCLE_ENVIRONMENT_ID | The ID of the environment this container is deployed in.
CYCLE_FIRST_START | If this is the first time an instance starts this value will be yes, after that it will be no.
CYCLE_INSTANCE_ID | The ID of the instance.
CYCLE_INSTANCE_IPV6_IP | The IPv6 address of this specific instance.
CYCLE_INSTANCE_IPV6_SUBNET | The subnet of the instance itself. If there are 5 instances this will be 1-5 depending on the instance.
CYCLE_INSTANCE_IPV6_CIDR | The IPv6 address range this instance can be assigned to.
CYCLE_LOCATION_ID | The location of the server that this container is deployed to.
CYCLE_PROVIDER_IDENTIFIER | An identifier that indicates the provider of the server.
CYCLE_PROVIDER_LOCATION | The physical location of the server displayed as an abbreviation.
CYCLE_SERVER_ID | The ID of the server this container is deployed to.


Environment variables defined on the image cannot be removed. Cycle interprets these as critical to the way your program works. However, their values can be changed, which may be useful for things such as specific development-only settings. 