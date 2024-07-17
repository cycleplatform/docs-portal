---
sidebar_label: Environment Variables
sidebar_position: 1
---

import Mermaid from '@theme/Mermaid';



# Container Environment Variables
Each container you build will have a set of Cycle specific environment variables as well as any base and custom environment variables you've included.

Cycle automatically populates environment variables defined on the container image, but allows you to change the values or add completely new variables. These can be accessed within the container in your code.

Some environment variables are always created by Cycle, regardless of the image. Below is a full list of those values.

NAME | DESCRIPTION
-----|------------
CYCLE_API_TOKEN | A token that's used by instances to authenticate against the compute service.
CYCLE_AUTO_START | If the platform decided that this instance needs to be (re)started and is the cause of the start this value will be yes, otherwise no.
CYCLE_CONTAINER_IDENTIFIER | An identifier used for this container.
CYCLE_CONTAINER_ID | The ID of the container.
CYCLE_COMPUTE_PROXY | The Cycle compute proxy url.
CYCLE_ENVIRONMENT_ID | The ID of the environment this container is deployed in.
CYCLE_INSTANCE_ID | The ID of the instance.
CYCLE_INSTANCE_IPV6_IP | The IPv6 address of this specific instance.
CYCLE_INSTANCE_IPV6_SUBNET | The subnet of the instance itself. If there are 5 instances this will be 1-5 depending on the instance.
CYCLE_INSTANCE_IPV6_CIDR | The IPv6 address range this instance can be assigned to.
CYCLE_LOCATION_ID | The location of the server that this container is deployed to.
CYCLE_PROVIDER_IDENTIFIER | An identifier that indicates the provider of the server.
CYCLE_PROVIDER_LOCATION | The physical location of the server displayed as an abbreviation.
CYCLE_SERVER_ID | The ID of the server this container is deployed to.
CYCLE_DEPLOYMENT_VERSION | If the container instance is part of a deployment, this is the version of that deployment.
CYCLE_PROVIDER_VENDOR | The provider that the container instance is currently running on. 
CYCLE_CPU_PERIOD | A value in microseconds. 100,000 is equal to 100 milliseconds or 100% of a period. 
CYCLE_CPU_QUOTA | A value in microseconds. 100,000 is equal to 100 milliseconds or 100% of one core.
CYCLE_CPU_LIMITED | A value that reads yes if the container instance has limits on how much of the underlying CPU it can use or no if it is unlimited. 

:::caution 
Environment variables defined on the image cannot be removed. Cycle interprets these as critical to the way your program works. However, their values can be changed, which may be useful for things such as specific development-only settings. 
:::



## Possible Sources of Environment Variables
While Cycle will provide a special set of environment variables, there are also several other sources of runtime environment variables for container instances.

* Cycle Environment Variables
* Image Defined Environment Variables
* User Defined Environment Variables (Container Config)
* User Defined Scoped Variables

:::success Functions
Function containers have a special environment variable that can be injected on each claim / release sequence. 
:::

<Mermaid chart={`
classDiagram
    Instance <-- Image_Environment_Variables
    Instance <-- User_Scoped_Variables
    Instance <-- User_Environment_Variables 
    Instance <-- Cycle_Environment_Variables
    Instance: +Cycle Environment Variables
    Instance: +Image Environment Variables
    Instance: +User Environment Variables
    Instance: +User Scoped Variables
    class Cycle_Environment_Variables{
      +CYCLE_SERVER_ID
      +CYCLE_API_KEY
      +...
    }
    class Image_Environment_Variables{
      +NODE_VERSION
      +REACT_VERSION
      +...
    }
    class User_Environment_Variables{
      +DB_URL
      +DB_PROTOCOL
      +...
    }
    class User_Scoped_Variables{
      +GLOBAL_VARIABLE
      +...
    }
`}/>



## Order of Evaluation
While Cycle & image defined environment variables cannot be removed from an image they could be overwritten.

In most cases, a user would not want to do this - however it is possible to do so. If a user were to supply an environment variable using a key that is evaluated in a step before the supplied variable, that key and value would be overwritten.  

<Mermaid chart={`
stateDiagram
  direction LR
  state "Empty" as EMPTY
  state "Image Defined Variables" as IDV
  state "Scoped Environment Variables" as SEV
  state "Container Environment Variables (config)" as CEV
  state "Function Runtime Variables" as FRV
  state "Cycle Global Environment Variables" as CGEV
  
  EMPTY --> IDV
  IDV --> SEV
  SEV --> CEV
  CEV --> FRV
  FRV --> CGEV


`}/>
