---
sidebar_label: Integrations
sidebar_position: 5
---

# Integrations

The integrations settings allow the user to control where TLS certificates are installed for a container. Using this option on a container means that you'll be reserving a specific inbound port as the loadbalancer will have no information other than port to route the traffic if the connection is still encrypted.

To create a TLS certificate, you'll need to set up a [DNS Zone](https://docs.cycle.io/docs/dns/zones/overview). This doesn't mean that the container needs to have public networks enabled.

Choosing the checkbox under enable will install all four options to the default location `/var/run/cycle/tls/*` where `*` represents the specific asset path. If you wish to change which files are copied to your container, and the path they are copied to - simply click the **customize** checkbox next to the files you want and fill in the path you wish to install the certs to or leave the default path in place.