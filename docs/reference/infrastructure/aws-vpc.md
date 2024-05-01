---
sidebar_label: AWS VPC
sidebar_position: 99
---


# AWS Virtual Private Cloud
Each time a new region is deployed to, Cycle will automatically build a [Virtual Private Cloud](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html):


## What Is Built
Cycle will build the VPC as described in the AWS docs linked above.  The key points to note are:

1. The Cycle portion of the VPC is a dual-stack subnet where the CIDR's are /16 (IPv4) & /64 (IPv6). 
2. The VPC is region specific.  A new VPC is created each time a new region is deployed to.  


The main `routing table` is associated with the local and internet gateway (prefixed igw in the aws backend) routes.  Local routes are used for traffic inside the VPC while the igw routes are used to handle public ingress.

The main reason that Cycle creates and manages this VPC for you is to facilitate the seamless experience through the platform.  Once you've created your keys and connected AWS to Cycle, there will be very few times that you'll need to approach this VPC and make any changes.

However, certain users who wish to run fully managed database services like RDS should visit [this guide](/guides/video/aws-peering).