# DNS Zones
Manage your domain by creating a zone on Cycle.

By creating a zone on Cycle, you are able to manage the records for that domain. There are two options available for DNS zones on Cycle:

**Hosted Zone** - Domains that will be fully managed by Cycle. These domains must have their authoritative nameservers configured to ns1, ns2, ns3, and ns4.cycle.io. Additionally, these domains must be verified to ensure proper ownership.

**Non-Hosted Zone** - These domains do not require verification and maintain their authoritative nameservers, but must add CNAME records to resolve the proper load balancer.

### Create the Zone
To create a DNS zone on Cycle:

1. Click DNS in the nav menu on the left-hand side.
2. Click Create Zone in the top right corner.
3. Enter your domain in the Origintype field.
4. Select Hosted or Non-Hosted for your zone type.
5. Optionally set the [access controls](/reference/hubs/access-controls) for the zone. 

### Verifying a Zone

To verify a DNS zone simply click the `Verify Zone` button after creating the zone.  

The fastest way to verify a DNS zone that is a delegation of your root domain is by adding a `cycle-verify` txt record.  

To do this create a record of type `TXT` at your domain provider.  give it the name `cycle-verify` and the value is your Hub ID.  

For verifying the root domain, which has had its main nameserver records pointed to Cycle nameservers and for which you no longer can create records at the domain provider, you do not need to create the `TXT` record.  Verifying the zone using the same button, if it fails immediately after changing the nameserver records, be sure to check if the new NS records have propagated and try again.  For root domains this can sometimes take quite a bit longer than delegating a subdomain. 

:::note Non-Hosted Zones
If you create a Non-Hosted zone you will not have the option to "Verify" your zone.
:::



### DNS Zone Settings
Navigate to the DNS zone setting page:

1. Click DNS in the nav menu on the left hand side.
2. Select the zone you want to modify from the list.
3. Click the Settings tab underneath the zone name at the top.

In the general settings area, the origin of the DNS zone cannot be changed after the zone has been created, thus this field is permanently disabled. The `Zone Type` can be updated using the dropdown here as well.  Either setting changed required the user submit the change via `Update Zone` button. 

In access controls, the user can set this DNZ zones [access controls](/reference/hubs/access-controls).



To delete a DNS Zone, locate the delete form on the right-hand side. Enter the root domain of the zone into the box, and click "Delete Zone".

:::danger Deleting Zones
Deleting a zone will unassign all linked records from their containers, and delete any records associated with the zone. This action cannot be undone.
:::