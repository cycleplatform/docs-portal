---
sidebar_label: Overview
sidebar_position: 1
---

# DNS Overview
DNS (Domain Name System), is a decentralized naming system for computers, services, or other resources connected to the internet or a private network. It is what allows the translation of a URL, such as http://example.com, to an IP address.

Cycle provides full support for all DNS record types, and introduces its own record type, "Linked", to facilitate the association of domains with containers.

### Connecting Your Domain To Cycle
Your domain will need to be configured to use Cycle's name servers before it can be utilized by your containers. How this is done varies depending on who you purchased your domain from (the registrar). Unfortunately, Cycle cannot modify your name servers at third party registrars on your behalf.

If you need help configuring your domains on Cycle, please reach out to our support team using the live chat in the bottom right corner of the screen.
Setting the Name Servers
You will need to point your domain to Cycle's 3 name servers:

* ns1.cycle.io
* ns2.cycle.io
* ns3.cycle.io
* ns4.cycle.io

Once that is done, you can head back to Cycle and set up your domain by [creating a zone](https://docs.cycle.io/docs/dns/zones/managing-dns-zones).