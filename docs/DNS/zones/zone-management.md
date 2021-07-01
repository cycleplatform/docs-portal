---
sidebar_label: Zone Management
sidebar_position: 1
---

# DNS Zone Management
Manage your domain by creating a zone on Cycle.

By creating a zone on Cycle, you are able to manage the records for that domain. There are two options available for DNS zones on Cycle:

**Hosted Zone** - Domains that will be fully managed by Cycle. These domains must have their authoritative nameservers configured to ns1, ns2, ns3, and ns4.cycle.io. Additionally, these domains must be verified to ensure proper ownership.

**Non-Hosted Zone** - These domains do not require verification and maintain their authoritative nameservers, but must add CNAME records to resolve the proper load balancer.

### Create the Zone
To create a DNS zone on Cycle:

1. Click DNS in the nav menu on the left-hand side.
2. Click Create Zone in the top right corner.
3. Enter your domain in the Origin field.
4. Select Hosted or Non-Hosted for your zone type.

### Verifying a Zone


Verifying a hosted zone is as easy as clicking the Verify Zone button at the top of your DNS zone, but if you create a TXT record through your domain registrar it's much faster. You can create the TXT record at the domain registrar where you purchased your domain name. This TXT record will have a name of cycle-verify and a value of your Hub's ID.

:::note Non-Hosted Zones
If you create a Non-Hosted zone you will not have the option to "Verify" your zone.
:::

:::info
For steps on how to delegate a subdomain to Cycle go here.
:::

### Updating and Deleting Zones
To update your DNS zone from Hosted to Non-Hosted or vice versa, do the following:

1. Click DNS in the nav menu on the left hand side.
2. Select the zone you want to modify from the list.
3. Click the Settings tab underneath the zone name at the top.
4. Use the Zone Type drop down to select your updated zone type.
5. Save your choice by clicking Update Zone.

To delete a DNS Zone, locate the delete form on the right-hand side. Enter the root domain of the zone into the box, and click "Delete Zone".

:::danger Deleting Zones
Deleting a zone will unassign all linked records from their containers, and delete any records associated with the zone. This action cannot be undone.
:::