---
sidebar_label: Infrastructure Abstraction Layer
sidebar_position: 20
---

# Infrastructure Abstraction Layer

Cycle’s Infrastructure Abstraction Layer, or IAL for short, was built to allow developers to expand the Cycle platform into infrastructure beyond what Cycle natively supports. This infrastructure can be anything from another cloud provider to the utilization of on-premises infrastructure within a data center or an office building. Theoretically, with enough RAM and disk, you could even manage IoT devices.

By expanding the Cycle platform, organizations gain the infrastructure and devops benefits enabled by Cycle but with more flexibility in terms of deployments.

## Prerequisits

While the aim of Cycle is to be able to utilize any commodity infrastructure that has an internet connection, there are a few requirements that it’s important to be aware of:

### Hardware Requirements (Compute Servers):

1. Minimum of 4GB RAM
2. An x86 processor
   1. CycleOS currently does not support ARM
3. Minimum of 45GB of disk space, though 100GB+ is recommended for general purpose deployments.
4. CycleOS will attempt to allocate 35GB of disk space for its base volume. This base volume is used to store:
   1. CycleOS logs (~150Mb)
   2. CycleOS updates (~100Mb)
   3. Container Images
   4. Storage for any files written outside of persistent volumes.
5. The base volume can be increased after the server is online.
6. While not required, an SSD or NVME disk is highly recommended.

### Network Requirements (Compute Servers):

1. A 20Mbps+ public internet connectionk
2. A minimum of 1 static IPv4 address
   1. The Compute server (host) will utilize one ip address itself
   2. Every load balancer instance will consume its own IP addresses.
      1. If this server was going to host 4 load balancers, for different environments, it would need a total of 5 static ips.
3. IPv6 support is highly recommended, but not required.
   a. Cycle can be configured to use IPv4-only, IPv6-only, or dual stack.

### Software Requirements (Compute Servers):

1. IPXE / PXE support
   1. CycleOS is a read-only operating system built specifically for running containers. The OS is very lightweight / barebones to limit attack surface and legacy code.
   2. CycleOS is never written to disk, and lives purely in RAM. Every time a server is rebooted, a fresh version of CycleOS is pulled. This process enables the Cycle platform to mitigate security risks while also ensuring the entire software stack stays modernized.
      1. For example, CycleOS ships with a modern mainline kernel that is automatically maintained by the Cycle team.
   3. Cycle has both an [IPXE ISO and an IPXE EFI](https://ipxe-images.platform-cdn.cycle.io/) image to pull CycleOS.
2. Metadata or DHCP support
   1. When a server with CycleOS boots it utilizes a ‘node-setup’ container, maintained by Cycle, to configure basic networking and storage configurations. This node-setup container must be able to learn, from an outside source, how to configure the network for the desired machines. As of now, there is no way to manually configure static IP interfaces within Cycle.

### Software Requirements (Integration):

1. The ability to build and publicly serve a highly-available API.
   1. Cycle’s IAL is built around the idea of extending Cycle’s internal infrastructure provisioning system with custom APIs. Cycle maintains a git repository of the required spec definitions and endpoints needed for IAL support.

The git repository can be found here:
https://github.com/cycleplatform/integrations

## Setup and Integration

Before continuing with setup and integration, it’s critical to first read, understand, and be able to satisfy the requirements above.
Assuming the requirements can be met, we can begin configuring IAL.

### Context around the IAL API

Before diving into the infrastructure setup, we must first build the IAL integration. When complete, Cycle will utilize this API to:

1. Discover which locations / regions it can deploy servers to.
2. Which servers / server models are available in each respective location
3. Configure a location, per hub, on first server provision
4. Provision / decommission a server
5. Check the status of a provisioning server
6. Reboot a server
7. Request / release an IP address

### Building the IAL API

As mentioned above, this API will need to be publicly accessible from the Cycle platform. Additionally, the IAL API follows the same JSON specification as Cycle’s primary API. For more information on Cycle’s API, visit https://docs.cycle.io

As of June 21st, 2022, a full integration requires the following endpoints. It is recommended that you develop your integration in the order of the calls listed below as many endpoints require existing data / resources before they can be utilized.

| Method | Endpoint                                   | Description                                                                                                                                                                                                                                                            |
| ------ | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /v1/auth/verify                            | Enables Cycle to verify that user-specified credentials can properly authorize with the desired IAL implementation.                                                                                                                                                    |
| GET    | /v1/infrastructure/provider/locations      | Cycle will utilize this call to learn which locations it is able to deploy servers to.                                                                                                                                                                                 |
| GET    | /v1/infrastructure/provider/server-models  | This endpoint helps Cycle learn which server types / models it is able to deploy (and which locations those servers can be deployed to)                                                                                                                                |
| POST   | /v1/location/configure                     | This endpoint will be called before every server provision to enable an IAL integration to make location-specific customizations prior to starting servers. For example, with Cycle’s native integration with AWS, we utilize this call to configure subnets and VPCs. |
| POST   | /v1/infrastructure/server/provision        | Cycle will utilize this endpoint to start the provision of a server.                                                                                                                                                                                                   |
| POST   | /v1/infrastructure/server/provision-status | Cycle will use this endpoint to track the status of a provision and, when complete, authorize a server to pull CycleOS via IPXE.                                                                                                                                       |
| POST   | /v1/infrastructure/server/restart          | Cycle will call this endpoint whenever a request has been made, with the platform, to restart a server.                                                                                                                                                                |
| POST   | /v1/infrastructure/server/decommission     | Cycle will begin a decommission once a user initiates a ‘delete’ within the portal / API. This call will only occur after a server no longer has any IPs or instances assigned to it.                                                                                  |
| POST   | /v1/infrastructure/ip/allocate             | This endpoint enables Cycle to allocate IP addresses which, most commonly, are utilized for environment load balancers.                                                                                                                                                |
| POST   | /v1/infrastructure/ip/release              | When an IP is no longer needed, Cycle will release it using this API endpoint.                                                                                                                                                                                         |

### Code Considerations

All requests, from Cycle into an IAL integration, will exist within a ‘RequestWrapper’ which contains two to-level fields: ‘auth’ and ‘request’:

- The Auth object contains a number of optional fields which can be set depending on the requirements of the underlying integration. Cycle will populate all auth credentials specified on the platform’s side.
- The Request object, from a Golang perspective, is a raw JSON message that will need to be decoded on successful authorization.

All responses back to the platform must follow the JSON API spec that is utilized for Cycle’s primary API, which you can learn more about here: https://docs.cycle.io. With this spec, all responses must be wrapped in a ‘Response object’ containing top-level ‘data’ and ‘error’ fields.
You’ll also notice, as you navigate through the IAL type definitions that some fields end in “Id” (capitalized) and others end with “ID” (uppercase). All ‘Id’ suffix fields are unique and user specified, for example a ‘ServerId’ is a unique identifier specified by the IAL integration that denotes a server on the IAL-side (as opposed to Cycle). On the other hand, any field ending with ‘ID’ (uppercase) is a Cycle generated identifier used to refer to a specific object post-creation.
Finally, a number of IAL request objects contain a ‘Cycle’ field. This field should be considered ‘meta information’ and can be used on the IAL client side to associate objects with Cycle generated identifiers if helpful.

### Connecting an IAL Integration

After implementing the above API endpoints, the IAL client API will need to be hosted on a publicly accessible server for Cycle to access. The URL to reach this server must be publicly resolvable and open to all IP traffic (future restriction options to come at a later time).
Login to Cycle’s portal, click Infrastructure, then Providers and finally “Add a Provider”. On the modal that appears, you’ll select “Custom / Abstraction” and insert the base URL where Cycle can access your IAL endpoints.
After clicking “Add”, you’ll see a new tile appear for the new integration. Finally, click “Verify” to begin Cycle’s process of validating the API endpoints and authorization credentials. Upon successful verification, Cycle will call ‘/v1/infrastructure/provider/locations’ followed by

‘/v1/infrastructure/provider/server-models’ to populate the available regions and server models that are deployable by Cycle. Going forward, Cycle will automatically synchronize against the ‘provider/locations’ and ‘provider/server-models’ calls every six hours to remain in sync with availability.

### Provisioning a Server

Once an IAL integration has been verified, and the locations and server models synced, users can begin provisioning infrastructure using Cycle’s standard API calls and portal. Once a request has been initiated for a new server, Cycle will call the /v1/infrastructure/server/provision call with information about which server-model is desired, the hostname for the server, the location for the server, and any other applicable information. After a short delay, Cycle will begin calling /v1/infrastructure/server/provision-check every 5-10 seconds to verify the provisioning status of the server. On successful provision, the /v1/infrastructure/server/provision-check endpoint must return a ProvisionServerStatus response object indicating the success of the provision along with authentication details that Cycle should expect to encounter when the server begins to check in. Without these authentication credentials, the new server will not be able to pull CycleOS during its boot process.

From this point forward, all functionality within Cycle should work normally, assuming all IAL endpoints have been properly developed and return the correct responses on success.

### Booting a Server

After a successful provision, the server will begin using iPXE, via either an ISO or EFI executable, to begin pulling CycleOS. As mentioned above, this request will receive a ‘Permission Denied’ error unless the proper authentication credentials were specified via a successful provision from the ‘provision-check’ endpoint.
Once iPXE pulls CycleOS, the operating system should use DHCP or a metadata service to self configure networking while also using a “best guess” strategy at configuring storage within the server itself. As a reminder, CycleOS is never installed to disk. All storage is utilized for storing container images, container data, and log files.
