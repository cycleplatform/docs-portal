---
sidebar_label: Adding Records
sidebar_position: 1
---

# Adding DNS Records
Cycle has full DNS management, and support for all DNS record types including our custom LINKED record.

DNS Zones are comprised of records. Cycle supports all standard DNS records, as well as adding it's own LINKED type.

:::note Navigating to the Records Wizard
1. Click **DNS** in the nav menu on the left hand side.
2. Select the zone you want to add records to from the list.
3. Click **Add Record** in the top right of the screen.
:::


## Adding Records
After navigating to the record create wizard, a user can create a wide range of supported record types.

:::note Root and Wildcard
To refer to the root domain, use @ in the name field.
To create a wildcard domain use an asterisk * in the name field.
:::

### Wildcard Records
Creating a wildcard record with TLS certificate will cause all children of that record which are set to use TLS to use this wildcard certificate.

:::caution Wildcard Cannot Be Deleted
When the wildcard record is created with a TLS certificate it cannot be deleted if other records depend on it and trying to delete this record will show an error.
:::


### Using the Record Create Wizard
Use the following information to complete each form required for the record.



Fill in all fields (detailed below), then click Add Record.

### Type: LINKED
Linked records are a special type of record provided by the Cycle platform. These records get tied directly to a container, and alleviate the need to track and manage specific IP addresses. In addition, you can use LINKED records to generate and renew TLS/SSL certificates automatically (via Let'sEncrypt). These certificates are terminated at the load balancer automatically, passing the traffic through to the container via port 80.
* **Name** - Enter the subdomain you want for the record. For example, if you wanted the container to be assigned to subdomain.example.com, you'd enter subdomain in the box. To set it to the root domain, use the @ symbol.
* **Assignment** - Use this dropdown to select the how you would like to associate this domain to the continer.
* **Environment** - Use this dropdown to select which environment the container you will be associating with, live in.
* **Container** - Use this dropdown to select which container you would like to point the domain to.
* **Enable TLS** - By checking this box, Cycle will automatically generate and renew TLS certificates for this domain using Let'sEncrypt. These certificates are special - they are automatically installed to the container's load balancer. When encrypted traffic comes in for that container over port 443 Cycle will automatically terminate the SSL/TLS connection at the load balancer and route the traffic over port 80 to your container. This process helps speed up communication between the load balancer and the container by offloading the cryptographic processing at the load balancer.


### Type: A
The A record specifies IP address (IPv4) for given host. A records are used for conversion of domain names to corresponding IP addresses.
* **Name** - Enter the subdomain you want for the record, or @ to use the root domain.
* **IP** - The IPv4 you want to map this record to.


### Type: AAAA 
The quad A record specifies IPv6 address for given host. It works the same way as the A record, the only difference being type of IP address.

* **Name** - Enter the subdomain you want for the record, or @ to use the root domain.
* **IP** - The IPv6 you want to map this record to. 

### Type: CNAME
The CNAME record is used to create aliases of domain names.

* **Name** - Enter the subdomain you want for the record, or @ to use the root domain.
* **Domain** - The domain you want to alias this record to.

### Type: MX
The MX record specifies a mail exchange server for a domain name. The information is used by Simple Mail Transfer Protocol (SMTP) to route emails to proper hosts.
* **Name** - Enter the subdomain you want for the record, or @ to use the root domain.
* **Priority** - If you have multiple MX records, prioritize them by setting a number here.
* **Domain** - The domain of the mail server.


### Type: TXT 
The TXT record can hold an arbitrary non-formatted text string.

* **Name** - Enter the subdomain you want for the record, or @ to use the root domain.
* **TEXT** - Any text you want.
* **NS** - The NS record specifies an authoritative name server for given host.
* **Name** - Enter the subdomain you want for the record, or @ to use the root domain.
* **Domain** - The domain of the nameserver.

### Type: ALIAS
An ALIAS record is a virtual record type we created to provide CNAME-like behavior on apex domains. An apex domains is a domain without a sub-domain such as example.com.


### Type: SRV
A service record (SRV) is a record that defines the location, hostname, and port of servers for specified services.
* **Name** - The naming system is an underscore followed by the name of the service.
* **Priority** - Information about the priority associated with this record, used to encourage use of certain servers over others.
* **Weight** - If two or more services have the same priority, the weight number is used to determine which should come first.
* **Port** - The port that is used to connect to for accessing the service.

