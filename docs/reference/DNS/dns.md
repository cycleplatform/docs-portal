

# DNS 
DNS (Domain Name System), is a decentralized naming system for computers, services, or other resources connected to the internet or a private network. It is what allows the translation of a URL, such as http://example.com, to an IP address.

Cycle provides full support for most DNS record types, and introduces its own record type, "Linked", to facilitate the association of domains with containers.

## DNS Zones Dashboard

Users can find this dashboard by clicking `DNS` from the main navigation and then selecting `Zones`.

2. If the DNS Zone is hosted, it must be verified before a user can generate TLS certificates.
3. The list of currently created DNS Zones.

## Connecting Your Domain To Cycle

Your domain will need to be configured to use Cycle's name servers before it can be utilized by your containers. How this is done varies depending on who you purchased your domain from (the registrar). Unfortunately, Cycle cannot modify your name servers at third party registrars on your behalf.

If you need help configuring your domains on Cycle, please reach out to our support team using the live chat in the bottom right corner of the screen.
Setting the Name Servers
You will need to point your domain to Cycle's 3 name servers:

- ns1.cycle.io
- ns2.cycle.io
- ns3.cycle.io
- ns4.cycle.io

Once that is done, you can head back to Cycle and set up your domain by [creating a zone](/reference/dns/zones/#create-the-zone).

### HTTP-HTTPS Redirection

Automatic redirection to HTTPS is only available for DNS being managed by a Cycle Hosted Zone that is using the built in TLS functionality.

If you are planning to use automatic HTTP/HTTPS redirection, you will still need to expose your container to public internet by listening on port 80, not just port 443.

When the incoming HTTP traffic hits an available environment load balancer, the load balancer will perform a check to see if there is a certificate available for this container. If there is the connection will be upgraded to HTTPS. The connection will be encrypted between the client and the load balancer, but the load balancer will still terminate the TLS connection and forward to the appropriate container over port 80. For this reason you will still need to set your port mappings to 443:80 and 80:80 as described in the SSL Termination section directly above this.

## TLS

The navigation option below `Zones` is `TLS`. This zone shows all attempts in this hub to generate or renew TLS certificates.
