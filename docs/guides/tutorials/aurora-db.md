---
sidebar_label: AWS RDS
sidebar_position: 20
---


# AWS RDS

:::info 
While this guide covers using Aurora, the same pattern can be used for consuming traditional RDS as well. 
:::

[AWS Aurora DB](https://aws.amazon.com/rds/aurora) is a popular relational cloud database tool. 

If this is a service you'd like to evaluate or something that you're already using, this guide will bring you up to speed on how to create a subnet for your db within the [Cycle generated VPC](/docs/infrastructure/aws-vpc) for a given region and what settings will be needed on the containers side.


:::note New Subnets & Implicit Routing
 [AWS Docs](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html):


```If you create a new subnet in this VPC, it's automatically implicitly associated with the main route table, which routes traffic to the virtual private gateway```

:::


## Setting Up The DB
This guide will go through creating a serverless Aurora DB.  

* Head over to your AWS console and search RDS.
* Click on the Create Database button.
* DB Creation method - Standard Create
* Engine options - Amazon Aurora
* Edition - shouldn't matter
* Capacity type - serverless
* MySQL version - 5.7
* Name and credentials - user dependent
* Capacity settings - user dependent
* VPC **IMPORTANT** - this MUST be **Cycle VPC**
* Security group - create new
* Additional configuration - user dependent 

User dependent is just something to signfy that these settings should be up to the user and their use case. 

:::note Subnets
If you are prompted to create more subnets in different availability zones to satisfy the minimum requirement for this AWS RDS deployment you can do so easily by following [this guide](https://docs.aws.amazon.com/vpc/latest/userguide/working-with-vpcs.html).

Remember these subnets must be within the Cycle VPC, and must not be in conflict with the already configure Cycle Subnets.  There is no need to configure IPv6, and we recommend you do not at this time.
:::

:::caution Provision Times
At times, AWS will take a few minutes to create your DB.  Please be aware and wait for the DB to complete provisioning.
:::


## Security Group Editing
The main thing that needs to happen in order to facilitate remote connections originating from instances within the already configured Cycle VPC - ie containers running on AWS in the region... is adding the VPC CIDR to the security group.

To do this, simply search for VPC in the consoles main search bar and then click on `Security Groups` from the main left hand navigation.  Select the group you just created and add an inbound rule:

type | source | value
-----|--------|------
MySQL/Aurora | Custom | Your Cycle VPC IPv4 \16 CIDR

Make sure to save these rules.


## Connecting To The DB
Now you can deploy a container to your existing Cycle hub (*container needs to be on an AWS instance within the VPC*), then use the two-way console to connect to the container instance and run a mysql connection attempt to see if your configuration changes were correct. 

example command: `mysql -u user -h url.for.db -p` 

When prompted for the password, enter the password you used when creating the database.

:::danger Password and Master Username
It's easy to forget what you set as the master username and password.  To see what the master username is for a given db - click into the db and then on the `Configuration` tab from the horizontal navigation, mid way down the page.  From there the third column should say "Availability" and under that the username.  To reset the password, use the "Modify" option at the top of the page.
:::


This should get you to the point of connecting to the db and showing that you can connect without leaving the AWS VPC which can be a big advantage!  All other calls, requests, and optimizations would be up to the user but if you have a great idea on something you'd like covered in a future guide make sure to let us know in our [Slack Channel](https://slack.cycle.io).









