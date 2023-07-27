---
sidebar_label: Load Balancer
sidebar_position: 2
---

# Load Balancer

Cycle provides powerful, automatic load balancing to every environment.

![load balancer image](https://static.cycle.io/portal-docs/environments/loadbalancer.png)

1. The Load Balancer tab, available once a user has selected an environment to manage, brings up the Load Balancer Dashboard, as shown in the image.
2. Instance State info about the current state of the enabled load balancers for this environment (Includes Public IP Information).
3. Live configuration for the IPv4 and IPv6 settings of this environments load balancers, the load balancer type, and high availability settings.

:::success Update Load Balancer
To apply changes made in the configuration section of the load balancer dashboard, submit the changes via the "Update Load Balancer" button.
:::

:::caution IPv6 Only
Setting a the load balancer(s) to IPv6 only, means that the user is confident that all public requests to environment applications will support IPv6 networks. For more information on this topic, reach out to us via [Slack](https://slack.cycle.io).  
:::

## How It Works

The load balancer container is an instance (or instances) of HAProxy that Cycle will automatically configure and run. Every environment gets its own load balancer container, and will start when a container with a network mode set to "enable" is started. The load balancer receives the public IP assigned to the environment, and all containers are run behind it using private IPs.

## Port Forwarding

By configuring and exposing ports on your containers, the load balancer will automatically update to reflect your changes. For example, if a container has a port configuration of 8888, the load balancer will accept traffic for the container on it's public IP over port 8888, and route it over the private network to the container on the same port. If you set up port mapping, such as 8888:3000, the load balancer will accept traffic over port 8888 publicly, and route it over the private network to your container on port 3000.

## Binding To An IP

In order to receive data, your container will need to bind to an IP address. By default, Cycle will only use IPv6 to send data behind the load balancer. If your application requires IPv4 bind capabilities, you must enable Legacy Mode.

Each provider gives a different amount of IPv6 addresses for your load balancer. While both Equinix Metal and Vultr give a /121 (128 IPs), AWS provides a single address /128.

## Special Headers

Cycle load balancers are configured to pass along the following special headers.

| HEADER             | POSSIBLE RETURN VALUES | DESCRIPTION                                                  |
| ------------------ | ---------------------- | ------------------------------------------------------------ |
| X-Forwarded-Proto  | HTTP/1.0, HTTP/2.0     | Information about the protocol of the incoming traffic.      |
| X-Forwarded-For    | IP address             | The IP of the requesting client or user (origin of traffic). |
| X-Forwarded-Scheme | HTTP, HTTPS            | The scheme of the incoming traffic.                          |

## Public Routing

Containers exposing port 80 are automatically configured on the load balancer to run in "HTTP" mode, allowing a single environment to expose multiple public sites behind the same IP. To take advantage of this, you'll need to have a LINKEDrecord configured via Cycle DNS to point to the container. Everything else is handled automatically. Cycle will route traffic to the load balancer in front of the specified container, and the load balancer will route traffic to the appropriate container. Any time you update or change your LINKED record, the load balancer will be updated to reflect your changes automatically.

## SSL Termination

The load balancer will do automatic SSL termination for any container that has a LINKED record pointed at it with SSL certificate generation turned on. This means your containers never worry about SSL certificates or encrypted web traffic if they are serving over port 80, and provides benefits such as faster load times and increased volume of simultaneous connections.

Your containers expecting connections from the load balancer using TLS termination need only expose port 80 on the container side. An example would be to expose 80:80 and 443:80. This is how you would express that your container is listening for HTTP and HTTPS traffic but the traffic being forwarded from the load balancer is expecting to be received on 80.

## Automatic HTTP-HTTPS Redirection

Automatic redirection to HTTPS is only available for DNS being managed by a Cycle Hosted Zone that is using the built in TLS functionality.

If you are planning to use automatic HTTP/HTTPS redirection, you will still need to expose your container to public internet by listening on port 80, not just port 443.

When the incoming HTTP traffic hits an available environment load balancer, the load balancer will perform a check to see if there is a certificate available for this container. If there is the connection will be upgraded to HTTPS. The connection will be encrypted between the client and the load balancer, but the load balancer will still terminate the TLS connection and forward to the appropriate container over port 80. For this reason you will still need to set your port mappings to 443:80 and 80:80 as described in the SSL Termination section directly above this.

## Sticky Sessions

The Cycle load balancer allows for Sticky Sessions, or the ability for the load balancer to create a persistent connection to an instance. Sticky Sessions ensure that a connection that is in process is not lost as a result of additional requests being routed to a different instance.

## Instance Health

Cycle checks the health of instances. If an instance is unhealthy it will be removed from the pool of available instances that incoming traffic can be routed to. This ensures that all incoming traffic finds its way to healthy instances.

## Configuring The Load Balancer - Ingress

The load balancer is configurable directly from the interface. You are able to adjust modes, create specific port configurations, and override timeout settings with ease.

1. Click the Environments link in the navigation menu to the left.
2. Select the environment who's load balancer you wish to configure from the list.
3. Click the "Load Balancer" tab at the top of the page.
4. Enable "Custom Config" by toggling the switch in the upper right hand corner of the form. This will allow you to override the Cycle defaults with custom settings. Disabling custom config after updating the load balancer will cause it to revert back to Cycle's default config.

### Default Config

The load balancer comes with a "default config", which is how it treats all ports (that aren't 80 or customized otherwise). These settings will be applied to all ports that aren't explicitly defined in this configuration. The mode cannot be changed for the default config.

### Frontend Options

Frontend configuration options are related to how inbound traffic is treated.

- Mode
  - TCP - Traffic is forwarded without any parsing or additional manipulation
  - HTTP - Traffic is treated as web traffic. If a LINKED record is configured for a container exposing this port, the domain will be parsed and it will be forwarded to the proper container. This allows multiple services to run on port 80 in the same environment.
- Max Connections - The number of simultaneous connections that can be processed at a time.
- Client Timeout - The number of seconds the load balancer will wait for a response from a client before disconnecting.
  +\_ Client Finish Timeout - The number of milliseconds the load balancer will wait for a client to send it data when one direction is already closed. This is particularly useful to avoid keeping connections in a waiting state for too long when clients do not disconnect cleanly.
- HTTP Keep Alive [HTTP mode only] - The number of milliseconds the load balancer will wait for a new HTTP request to start coming after a response was set. See the HAProxy Docs for more information.
- HTTP Request Timeout [HTTP mode only] - The number of milliseconds the load balancer will wait for a complete HTTP request. See the HAProxy Docs for more information.

### Backend Options

Backend configuration options are related to how the load balancer handles and routes connections

- Balance - How connections are balanced across your container instances
  - Round Robin - Each container instance is used in turns.
  - Static Round Robin - Each container instance is used in turns, but is faster than Round Robin at the expense of being less dynamic.
  - Least Connection - Routes traffic to the instance with the least number of active connections.
  - First - Routes traffic to the first available instance.
  - Source - The same client IP always reaches the same container instance as long as no instance goes down or up.
- Server Request Timeout - The number of seconds the load balancer will wait for a response from the container instance. See the HAProxy Docs for more information.
- Server Finish Timeout - The number of milliseconds the load balancer will wait for the server to send data when one direction is already closed. See the HAProxy Docs for more information.
- Connection Timeout - The number of milliseconds the load balancer will wait for a successful connection to a container instance. See the HAProxy Docs for more information.
- Queue Timeout - The number of milliseconds the load balancer will hold connections in a queue when the maximum number of connections has been reached. See the HAProxy Docs for more information.
- Tunnel Timeout - The number of milliseconds the load balancer will allow for inactivity on a bidirectional tunnel. See the HAProxy Docs for more information.

## Load Balancer State

Load balancers carry two types of state, `state` and `ready_state`.

`state` can be `new`, `startig`, `running`, or `deleting/deleted`.  
`ready_state` can be `configuring`, `active`, or `purge`.

The main difference here is that `ready_state` is used more to define when the load balancer is ready to be used or when it is waiting to be deleted.

An example: if a load balancer is awaiting an IP assingment it will be in the `configuring` ready_state, once it has that IP assignment it will move to `active`. If a user tries to `start` a `configuring` load balancer, that request will fail. Requests to `start` an `active` load balancer will succeed.

## Ingress And Egress

In regards to traffic and the services that facilitate ingress and egress.

When traffic comes in from public internet it will always hit the load balancer. These load balancers have a dedicated IP per load balancer and that information is available on the envrionment dashboard.

When traffic leaves a container (egress), that traffic is routed "out" through the servers host IP. You can find a given servers host IP by going to the server dashboard.
