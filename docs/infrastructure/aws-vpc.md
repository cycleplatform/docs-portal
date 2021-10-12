---
sidebar_label: AWS VPC
sidebar_position: 99
---


# AWS Virtual Private Cloud
Each time a new region is deployed to, Cycle will automatically build a [Virtual Private Cloud](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html):

<details>

<summary>Key Terms</summary>


`Virtual private cloud (VPC)` — A virtual network dedicated to your AWS account.

`Subnet` — A range of IP addresses in your VPC.

`Route table` — A set of rules, called routes, that are used to determine where network traffic is directed.

`Internet gateway` — A gateway that you attach to your VPC to enable communication between resources in your VPC and the internet.

`VPC endpoint` — Enables you to privately connect your VPC to supported AWS services and VPC endpoint services powered by PrivateLink without requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection. Instances in your VPC do not require public IP addresses to communicate with resources in the service. Traffic between your VPC and the other service does not leave the Amazon network. For more information, see AWS PrivateLink and VPC endpoints.

`CIDR block — Classless Inter-Domain Routing` - An internet protocol address allocation and route aggregation methodology. For more information, see Classless Inter-Domain Routing in Wikipedia.


</details>


## What Is Built
Cycle will build the VPC as described in the AWS docs linked above.  The key points to note are:

1. The Cycle portion of the VPC is a dual-stack subnet where the CIDR's are /16 (IPv4) & /64 (IPv6). 
2. The VPC is region specific.  A new VPC is created each time a new region is deployed to.  






### Cycle Subnet

<details>
<summary>Cycle Generated Subnet Fields </summary>


`Name` - `-`

`Subnet ID` - subnet-000333eeeaa000333eeeaa

`State` - Available 

`VPC` -  `vpc-000... | Cycle VPC 

`IPv4 CIDR` - 172.0.0.0\24 

`IPv6 CIDR` - 2600:1fff:c:33:2a00::\64

`Available IPv4 addresses` - 250 

`Availability Zone` - us-west-1b 

`Availability Zone ID` - usw1-az3 

`Route Table` -  rtb-0123....

`Network ACL` - acl-0ba... 


There are a few other IP settings that should be relatively inconsequential, but can be viewed by navigating to the vpc subnets area of the AWS console.  Like most things in cloud, these values and column names are subject to change by AWS.


</details>


The main `routing table` is associated with the local and internet gateway (prefixed igw in the aws backend) routes.  Local routes are used for traffic inside the VPC while the igw routes are used to handle public ingress.

The main reason that Cycle creates and manages this VPC for you is to facilitate the seamless experience through the platform.  Once you've created your keys and connected AWS to Cycle, there will be very few times that you'll need to approach this VPC and make any changes.

However, certain users who wish to run fully managed database services like RDS should visit [this guide](/docs/guides/aurora-db).