---
sidebar_label: Hosted Zones
sidebar_position: 2
---
# Verifying Hosted Zones
Cycle offers a wonderful DNS manager, use this guide to learn how to verify your hosted DNS Zones.

### Pre-Verify a Domain using a TXT record
If you would like to switch your DNS management to Cycle from an existing provider, adding a TXT record before changing the nameservers can minimize downtime.

#### Creating a cycle-verify TXT record.

1. Sign into your Cycle account and go to the Hub thats serving your site.
2. Click the Setting option from the left side navigation.
3. Copy the Hub ID located on the right side of the screen.
4. Open your current DNS management platform.
5. Create a TXT record.
6. Give the record a name of cycle-verify and a value of your hub id.
7. Go back to Cycle and create your new DNS Zone.
8. Click Verify Domain.

After adding a `cycle-verify` TXT record to your domain on your existing provider, Cycle is able to verify domain ownership prior to changing any nameservers / migrating DNS records.

### Delegating Sub-Domains to Cycle from your Domain Management Service
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
If you have never created a DNS Zone on Cycle please reference this guide.

The next step would be to create and verify your new zone. In this case we will create a zone that includes the full domain name.

If your domain was "example.com" and your sub-domain is "docs" enter "docs.example.com" into the origin field when creating your zone.

Select the Hosted Zone option from the dropdown.

After your zone has been created click the Verify button on the top right of the screen.

### Step 4: Add a Linked Record
If you have never added a record to a DNS Zone on Cycle please reference this guide.

Add a Linked record and point it at the container serving the contents of your sub-domain.

