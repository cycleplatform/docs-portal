---
sidebar_label: Hosted Zones
sidebar_position: 2
---
# Hosted Zones
A hosted zone is a dns zone that is using Cycles nameservers(ns1-ns4) and which has been verified for ownership.  

:::info Delegation
Zones which represent a delegation of a root domain must include a TXT record to verify ownership as described in the following section.
:::

## Creating A DNS Zone from the Root Domain
### Step 1: Create the NS Record
The first thing you want to do is tell DNS Servers where to look for your Domain information.

Add 4 NS records that point to Cycle's nameservers.

ns1.cycle.io
ns2.cycle.io
ns3.cycle.io
ns4.cycle.io


### Step 2: Create and Verify the Zone
The next step would be to create and verify your new zone. In this case we will create a zone that includes the full domain name.

If your domain was "example.com" enter "example.com" into the origin field when creating your zone.

Select the Hosted Zone option from the dropdown.

After your zone has been created click the Verify button on the top right of the screen.

:::info DNS Propagation
Root nameserver changes can take a while to propagate through DNS nameservers.  While these changes can sometimes take place rather quickly, its not unheard of for a NS switch on a root domain to take 3-6 hours for propagation.  If you're having trouble with configuration, don't hesitate to reach out to the Cycle team on [Slack](https://slack.cycle.io).
:::





## Delegating Sub-Domains to Cycle from your Domain Management Service
If you would like to manage your DNS records on your own registrar but still want to point certain sub-domains to Cycle, that can be accomplished in a few steps.

1. Create an NS record on your provider so the internet will look for your sub-domain through Cycle's Name Servers.
2. Create a Text Record that allows you to verify the domain as hosted on Cycle.
3. Create a zone on Cycle and then verify that zone.
4. Add a Linked Record that points to the container you want.


### Step 1: Create the NS Record
The first thing you want to do is tell DNS Servers where to look for your Domain information.

To do this we will create a NS type record on your provider that says, when you encounter this sub-domain please look at Cycle's name servers for more information.

The NS record will include the sub-domain and a reference to Cycle's name servers.

Its important to do this three times one for each of the Cycle name servers which are.
ns1.cycle.io
ns2.cycle.io
ns3.cycle.io
ns4.cycle.io


### Step 2: Create a Text Record
In order for Cycle to verify the DNS Zone you are pointing your sub-domain to, you must include a text (txt) record.

To create this record you will need something from Cycle, the hub ID where you are going to create your DNS Zone.

To retrieve your hub ID simply click Settings on the left hand nav of your hub. After that you should see your hub ID on the right side of the screen.

You can now create your txt record. Go to your providers record creator and select a txt record. Name the record "cycle-verify" and paste the hub ID into the text value section of the form.

### Step 3: Create and Verify the Zone
The next step would be to create and verify your new zone. In this case we will create a zone that includes the full domain name.

If your domain was "example.com" and your sub-domain is "docs" enter "docs.example.com" into the origin field when creating your zone.

Select the Hosted Zone option from the dropdown.

After your zone has been created click the Verify button on the top right of the screen.

### Step 4: Add a Linked Record
Add a Linked record and point it at the container serving the contents of your sub-domain.

